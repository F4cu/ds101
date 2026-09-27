---
title: Token Naming
reviewed: 2026-09-27
reviewIn: 12
---

A token's name is how people and agents find the decision behind it. Design systems don't share a naming grammar, so the job isn't to find the right one. Pick a structure, use only the levels each token needs, and back every semantic name with a description that says what it's for.

:::tip[Key takeaways]
- **Use one naming structure everywhere.** With mixed conventions, nobody can tell when two tokens mean the same thing.
- **Describe every semantic token.** Without a description, an agent guesses from the name and can pick the wrong color.
- **Check new names in CI.** A convention that's only written down drifts as more people add tokens.
:::

## The problem

> "Every inconsistent pattern erodes trust. Friction scales linearly; mistrust scales exponentially."
>
> — [Murphy Trueman, "Why design system naming feels impossible"](https://blog.murphytrueman.com/p/why-design-system-naming-feels-impossible)

Inconsistency starts inside one system. When [Curtis](https://nathanacurtis.substack.com/p/reimagining-a-token-taxonomy-462d35b2b033) audited a client's tokens, Badge used `$esds-color-palette-neutral-90` for its neutral background while Alert used `$esds-color-background-light` for the same purpose. Nobody could tell from the names that the two meant the same thing.

Across systems, names for the same role diverge further. [Romina Kavcic](https://learn.thedesignsystem.guide/p/50-design-token-files-one-problem) compared 50 token files and found eight different names for the same background role, from `surface.default` to `colorNeutralForeground1` to `accent-background-color-default`. "An agent that learned one of these conventions knows nothing about the next." When an AI coding agent has to invent a token name, she found it blends them, producing names that look plausible but match nobody's convention, "including yours."

## Choosing a naming structure

Each segment of a token name fills one **level**: a kind of information, like category or state. Choose how many levels to use by counting what your names have to tell apart. A single-brand product needs fewer levels than a system serving several brands, business units, and color modes. Either way, the choice matters less than applying it everywhere. Even the practitioners here disagree on order: Romina's [token generator](https://learn.thedesignsystem.guide/p/name-and-get-your-tokens-in-5-seconds) defaults to `component-category-property-state-role`, a different order from Murphy's below.

### Curtis's full taxonomy

[Curtis](https://nathanacurtis.substack.com/p/naming-tokens-in-design-systems-9e86c7444676) sorts every possible segment into four groups. **Namespace** levels (system, theme, domain) keep one system's tokens from colliding with another's. **Object** levels (component, element, component group) scope a token to part of the UI. **Base** levels (category, concept, property) are the backbone, like `color` + `feedback` + `background`. **Modifier** levels (variant, state, scale, mode) come last. It fits enterprise systems with several themes or business domains, where a name without a namespace would be ambiguous. The cost is length: the more levels you have, the more you have to decide for every new token.

Curtis's post is from 2020. It predates Figma variables and the resolver files in DTCG (the Design Tokens Community Group's shared token format) that now switch light and dark outside the name (see [Token architecture](/ds101/token-architecture/#store-tokens-in-the-shared-dtcg-format)). He treats mode as a naming level. Whether mode still belongs in names now that tools switch it for you is an open question none of the sources here settles.

### A short intent path

Murphy's [design-system-ops notes](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/token-architecture.md) use a four-part path, `category.role.variant.state`, as in `color.action.primary`. It's a subset of Curtis's levels, with no namespace and no separate property. It fits a single-brand system that wants short names people can say out loud in a meeting. The cost is that one token like `color.action.primary` may serve text, fills, and borders at once. Curtis notes that broad tokens trade precision for flexibility. In his own audit, that trade showed up as an overbroad token the team had to split (see Common mistakes).

## Practices

### Order segments from broad to specific

Put namespaces first and modifiers last, with the base levels in the middle. [Curtis](https://nathanacurtis.substack.com/p/naming-tokens-in-design-systems-9e86c7444676) and the [design-system-ops notes](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/token-architecture.md) agree here, even though their segments differ: a name should read as a path, narrowing at each step. Murphy's [own example](https://blog.murphytrueman.com/p/why-design-system-naming-feels-impossible) of Curtis's levels in order is `ds-button-primary-large`: namespace, object, variant, scale. DTCG files nest groups in the same order.

### Use only the levels a token needs

"Avoid dogmatically including all levels possible or duplicating token-tuples redundantly," [Curtis](https://nathanacurtis.substack.com/p/naming-tokens-in-design-systems-9e86c7444676) warns. No single token uses every level. A default state often doesn't need `default` spelled out. Curtis asks teams to decide once whether defaults are explicit or left out, then apply that choice everywhere.

### Promote tokens from components to shared

Name a token inside one component first, and move it to a shared name only when other components need the same decision. [Curtis](https://nathanacurtis.substack.com/p/naming-tokens-in-design-systems-9e86c7444676) calls promoting from local to global "a healthy way to add tokens gradually." Component groups sit in between: a `forms` token shared by inputs, selects, and checkboxes before it's shared by everything.

### Alias when one decision has two homes

Some decisions fit two places in the taxonomy. An error text color belongs to form controls and to feedback colors. Rather than picking one home or duplicating the value, [Curtis](https://nathanacurtis.substack.com/p/naming-tokens-in-design-systems-9e86c7444676) aliases one to the other: `$ui-controls-color-text-error` points at `$color-feedback-error`. The value lives in one place. Both names still work for the people looking in each place.

### Describe every semantic token

A name alone doesn't carry enough meaning. In [Romina's](https://learn.thedesignsystem.guide/p/50-design-token-files-one-problem) test, a file had a brand crimson and a danger red. Without descriptions, an agent put the brand crimson on a delete button in two of three runs. With a `$description` field on each token, both runs gave identical, correct answers, and the agent quoted the descriptions back as its reasoning. [Documentation for agents](/ds101/documentation-for-agents/) covers what to put in token metadata beyond the description.

### Check names against the convention automatically

A written convention drifts unless something checks it. Murphy's [token-audit skill](https://github.com/murphytrueman/design-system-ops/blob/main/skills/token-audit/SKILL.md) finds the dominant casing, separator, and segment order within each tier, then flags tokens that break the pattern, like `color.blue-500` next to `color.blue.500`. It also flags platform names in token names and tokens nothing references. The same checks can run in CI (continuous integration, the automated checks on every pull request), so a bad name is caught before it ships.

### Record why each name was chosen

Naming debates come back unless the reasoning is written down. [Murphy](https://blog.murphytrueman.com/p/why-design-system-naming-feels-impossible) keeps a decision log ("When you decide on `PrimaryButton` instead of `ButtonPrimary`, explain the reasoning") and a glossary of the conventions. For contested choices, [Curtis's](https://nathanacurtis.substack.com/p/reimagining-a-token-taxonomy-462d35b2b033) team workshopped alternatives in FigJam with silent dot voting before agreeing as a group. [Decision governance](/ds101/decision-governance/) covers where those records live.

## Common mistakes

- **Using vague words as a whole role.** The [token-audit skill](https://github.com/murphytrueman/design-system-ops/blob/main/skills/token-audit/SKILL.md) flags `alt`, `misc`, `other`, `normal`, and `default` or `base` used as the entire role (`color.default`). As a state segment (`color.action.default`) they're fine.
- **Abbreviating for the team that wrote the name.** [Murphy's](https://blog.murphytrueman.com/p/why-design-system-naming-feels-impossible) example is `nav-prim-dk-mob`, which makes sense only to its authors. A short system namespace is the exception. [Curtis](https://nathanacurtis.substack.com/p/naming-tokens-in-design-systems-9e86c7444676) finds names of five characters or fewer work well there.
- **Picking a word that means several things.** [Curtis](https://nathanacurtis.substack.com/p/naming-tokens-in-design-systems-9e86c7444676) warns that even top-level categories trip on this: `type` is a homonym that readers take to mean many different things.
- **Stretching one token over many purposes.** In [Curtis's audit](https://nathanacurtis.substack.com/p/reimagining-a-token-taxonomy-462d35b2b033), `$esds-color-interactive-primary` covered selection, completion, focus, and clickability, and had to be split into separate tokens.
- **Comparing systems by raw token count.** [Romina](https://learn.thedesignsystem.guide/p/50-design-token-files-one-problem) argues the semantic count, "how many UI decisions the system has pre-made and named," is the number to compare, not the size of the primitive palette.
