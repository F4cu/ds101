---
title: Token Architecture
reviewed: 2026-07-02
reviewIn: 12
---

Tokens work in three layers: raw values, the intent those values serve, and optionally the components that use them. References only ever point one layer down. That's what makes a rebrand or a dark theme a one-line change instead of a search through the whole codebase.

:::tip[Key takeaways]
- Reference strictly downward: component → semantic → primitive
- Name semantic tokens for intent, never appearance
- Store tokens in the shared DTCG format
- Keep platforms out of token names; let tooling translate
- Treat every token name as a contract with its consumers
:::

## The problem

If a button's background is hardcoded, or points straight at `color.blue.500`, then a rebrand or a dark theme means hunting down every place that value was used. If it points at `color.action.primary` instead, you change one semantic mapping and everything downstream follows. [Brand alignment](/ds101/brand-alignment/) shows how this structure is where a real brand refresh meets the product system.

## The model

The three tiers come from the token notes in Murphy Trueman's design-system-ops toolkit ([`knowledge-notes/token-architecture.md`](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/token-architecture.md)).

Each tier only points at the tier directly inside it, and only the innermost one holds a real value.

<div class="mermaid-wrap">

```mermaid
---
config:
  flowchart:
    padding: 6
    nodeSpacing: 20
---
flowchart TD
  subgraph C["Component (optional)"]
    CT["button.<br/>background.<br/>default"]
    subgraph S["Semantic"]
      ST["color.action.<br/>primary"]
      subgraph P["Primitive"]
        PT["color.blue.500"]
        V(["Raw value<br/>#2563EB"])
      end
    end
  end
  CT --> ST --> PT --> V
  style C fill:transparent,stroke-dasharray:5 4
```

</div>

### Primitives

Raw values, named for what they are: `color.blue.500`. Nothing in a product should point at a primitive directly, except a semantic token.

### Semantic tokens

Intent: what a value is *for*, like `color.action.primary` or `color.feedback.error`. A semantic token gets its value by pointing at a primitive. This is the layer a theme or rebrand changes.

### Component tokens

An optional third tier that scopes semantic intent to one component, like `button.background.default`. It points at a semantic token, never at a primitive.

Here's the same chain as token definitions, simplified to one line per token:

```json title="Simplified: one line per token"
"color.blue.500": "#2563EB"
"color.action.primary":
  "{color.blue.500}"
"button.background.default":
  "{color.action.primary}"
```

The curly braces mark an **alias**: a value that points at another token by name instead of holding a value of its own. Only the primitive holds a real value. Every other tier is a chain of aliases, and that chain is what the practices below protect. The real file format nests these names differently. See [Store tokens in the shared DTCG format](#store-tokens-in-the-shared-dtcg-format).

## Practices

### Reference strictly downward

References flow component → semantic → primitive, never sideways and never skipping a tier. The design-system-ops notes call a skipped tier "the most architecturally damaging token violation." `button.background.default: {color.blue.500}` *appears* to work, because the right colour shows up. But "a rebrand or theme change that correctly updates the semantic tier will not reach this component." It breaks silently, and you only find out mid-rebrand.

```json title="Skips a tier"
"button.background.default":
  "{color.blue.500}"
```

```json title="Steps down one tier"
"button.background.default":
  "{color.action.primary}"
```

Say the rebrand repoints `color.action.primary` to `{color.purple.500}`. The second button turns purple with the rest of the product. The first stays blue, because it never pointed at `color.action.primary` in the first place.

### Name semantic tokens for intent, never appearance

The same notes: "A semantic token that describes visual appearance has failed its purpose. `color.semantic.blue` is a primitive with extra steps." The moment the brand shifts to purple, `color.semantic.blue` is either a lie or a mass rename:

```json title="After a purple rebrand"
"color.semantic.blue":
  "{color.purple.500}"
"color.action.primary":
  "{color.purple.500}"
```

Both tokens now hold the same purple. Only one name still tells the truth. [Token naming](/ds101/token-naming/) covers how to structure the rest of the name.

### Store tokens in the shared DTCG format

The Design Tokens Community Group (DTCG) format is now a shared standard. Its first stable spec, DTCG 2025.10 (October 2025), defines 13 token types (color, dimension, fontFamily, and so on) and composite tokens like typography and shadow. In a composite token, each sub-value must itself reference tokens correctly, not just the top-level value. The spec also defines resolver files, which combine token sets into modes like light/dark or brand variants.

In a DTCG file, the dotted name becomes nested groups, and each token is an object with its value in `$value` and its type in `$type`:

```json title="tokens/semantic.json"
{
  "color": {
    "action": {
      "primary": {
        "$type": "color",
        "$value": "{color.blue.500}"
      }
    }
  }
}
```

The path through the groups (`color` → `action` → `primary`) is the token's name, and the alias syntax is the same as in the simplified version above. [Platform divergence](/ds101/platform-divergence/#value-differences-resolved-in-tokens) shows a composite typography token whose sub-values are all aliases.

### Keep platforms out of token names

Per the design-system-ops notes, platform differences (web pixels vs. iOS points, different typefaces) are handled by transformation tooling, never encoded in the name. Transformation tooling is software like Style Dictionary that converts one token file into each platform's native format. So it's `spacing.4`, not `spacing.web.4`. [Platform divergence](/ds101/platform-divergence/) walks through that transformation step end to end. [Multi-platform component specs](/ds101/multi-platform-component-specs/) applies the same platform-neutral idea to whole components.

### Treat token names as contracts

[Murphy Trueman](https://blog.murphytrueman.com/your-next-design-system-user/) argues that "your design system is already an API; the question is whether it's a good one." A token name isn't a label. It's a contract with every consumer, human or machine. Renaming one is a breaking change ([Release management](/ds101/release-management/)). [Documentation for agents](/ds101/documentation-for-agents/) covers the machine consumers.

## Common mistakes

- **Running a primitives-only system.** Without a semantic layer, theming is impossible. Every value change means hunting down every primitive reference instead of repointing one alias.
- **Letting token count grow faster than the product.** That growth usually means one-off tokens are being created instead of existing intent being reused.
- **Creating component tokens for every component up front.** [Curtis](https://nathanacurtis.substack.com/p/naming-tokens-in-design-systems-9e86c7444676) adds tokens gradually, naming them inside a component and promoting them to shared tokens only when other components need the same decision.
- **Keeping tokens nothing uses.** Murphy's [token-audit skill](https://github.com/murphytrueman/design-system-ops/blob/main/skills/token-audit/SKILL.md) flags tokens that no other token or component references. They clutter autocomplete and confuse the people choosing between them.
