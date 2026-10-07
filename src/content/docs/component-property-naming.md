---
title: Component Property Naming
reviewed: 2026-09-25
reviewIn: 12
---

A property name is the word designers pick in Figma's properties panel and developers type in code. If both say the same thing, a spec moves from one tool to the other without translation. If they don't, every handoff turns into a lookup. Settle names, options, and defaults once, before anyone builds, and keep them identical in both tools.

:::tip[Key takeaways]
- **Agree on the API before anyone builds.** A designer and a developer working alone rarely end up with the same names or structure.
- **Use the same names in Figma and code.** Otherwise nobody can read a Figma instance and know which props to write.
- **Name layers identically in every variant.** A renamed layer quietly drops an instance's edits when someone switches variants.
:::

## The problem

A designer and a developer who start the same component on their own rarely end up with the same words. [Nathan Curtis's "Crafting Component API, Together"](https://medium.com/eightshapes-llc/crafting-ui-component-api-together-81946d140371) shows two early drafts of one Card that disagree on almost every name: `metadata` in code and Subtitle in Figma, `CardDescription` and Body, `CardMedia` and CardImage. They also disagree on structure. In one draft the actions sit inside the content, and in the other they sit next to it.

Each mismatch looks small. Together they mean nobody can read a Figma instance and know which props to write, and Curtis notes his team handed one design spec to five different people building five outputs. The drift also costs designers work. Figma keeps an instance's edits when someone switches variants only if the layer names match, so a layer renamed in one variant quietly drops those edits.

## Practices

### Agree on the API before anyone builds

Curtis's fix is a short, shared step before production. Draft the component's **anatomy** (its named parts and how they nest) and its props, then critique the draft together as designers and developers. He budgets 15 minutes to an hour per component, and warns that a team needs a few sessions before it gets the hang of it.

How formal that step is depends on who builds. On a small team, he assigns a developer to draft the proposal, the whole team critiques it, and the designer speaks to what it means for Figma and the docs. When two or more people build from the same spec, it becomes its own task, done when everyone has "agreed on a provisional API direction across outputs." Anyone who starts early accepts they may have to refactor.

His 2021 post drafted in Google Docs or Asana templates. In his 2026 ["Component Contracts and Schemas"](https://nathanacurtis.substack.com/p/component-contracts-and-schemas), the component is written as data instead, and designers mark it `READY_FOR_DEV` rather than holding a handoff meeting. The tool changed, but the agreement still happens before the build. See [Component specs](/ds101/component-specs/) and [The design-to-code contract](/ds101/design-to-code-contract/).

### Use the same names, options, and defaults in both tools

Curtis's rule: "Both developer and design tools should evoke consistent property names, option names, and defaults." That covers the parts too, as [Component composition in code](/ds101/component-composition-in-code/#match-part-names-across-figma-and-code) explains.

```text title="Figma draft"
Card
  CardImage
  Subtitle
  Body
```

```tsx title="Code draft"
<Card metadata="…">
  <CardMedia />
  <CardDescription />
</Card>
```

Three pieces, six names. Pick one of each pair and use it in both places. Each tool's casing doesn't count as a difference: Curtis's 2026 ["Code Only" Props in Figma](https://nathanacurtis.substack.com/p/code-only-props-in-figma) binds a Figma layer called "Accessibility label" to the prop `accessibilityLabel`.

A tool's own convention can still force a different word. [Supernova's example](https://www.supernova.io/blog/building-durable-component-apis-for-design-systems) is `src` on the web and `image` in Figma. Treat those as exceptions and write the mapping down, not as a license for each tool to name things its own way.

### Sort every prop into Figma, code, or both

Not every prop belongs in both tools. Curtis sorts a Dropdown's props into three lists. Both tools get `required`, `inlineLabel`, and `helperTextPlacement`, with the same options and defaults. Code alone gets `id` and `ariaLabel`, which change nothing on screen.

States are the tricky case. Code sets `disabled`, `error`, and `readOnly` through props, but hover and focus happen only through interaction. In Figma, Curtis gathers all of them into one State menu, as long as its option labels match the code's.

The 2021 lists are shorter today. They predate Figma's boolean, text, and instance-swap properties, which [Figma's team](https://www.figma.com/blog/taking-cues-from-code/) describes as "essentially React properties for Figma components." Helper text, which Curtis listed as code only, can now be a boolean plus a text property in both tools. His 2026 "Code Only" Props post goes further and brings code-only props into Figma as text and variant properties on nested instances, kept in a layer named "Code only props", so the spec carries them too.

### Name one concept one way across components

Don't mix `type`, `mode`, `variant`, and `style` for the same idea across components. When the names vary, the whole API gets harder to predict. Source: [Supernova](https://www.supernova.io/blog/building-durable-component-apis-for-design-systems).

```tsx title="Mixed names"
<Button variant="outline" />
<Tag type="outline" />
<Card mode="outlined" />
```

```tsx title="One name"
<Button variant="outline" />
<Tag variant="outline" />
<Card variant="outline" />
```

In the first version, someone who knows Button still has to look up Tag and Card. Values drift the same way, so `outlined` shows up next to `outline`. In the second version, knowing one component means you can guess the others.

### Name booleans for states that default to false

[MUI's API design guide](https://mui.com/material-ui/guides/api/) sets two rules. First, "the default value of a boolean prop should be `false`," so turning something on is just the prop name. Second, a one-word boolean "should be an adjective or a noun rather than a verb," because "props describe *states* and not *actions*."

```tsx title="Verb, or true by default"
<Input disable={disabled} />
<Input enabled={false} />
```

```tsx title="State, false by default"
<Input disabled />
```

The same name then works as a Figma boolean property. A toggle labeled `disabled` that starts off reads the same way in the properties panel as the prop does in code.

### Switch from a boolean to an enum past two values

MUI's rule: use a boolean when exactly two values are needed, and an enum "when > 2 possible values are required, or if there is the possibility that additional possible values may be required in the future." Its example replaces two booleans with one enum:

```tsx title="Two booleans"
<Button contained fab />
```

```tsx title="One enum"
<Button variant="fab" />
```

With booleans, nothing stops a consumer from turning both on. The enum makes the options mutually exclusive, so there's no conflicting pair to [prohibit](/ds101/component-api-design/#support-only-the-prop-combinations-you-document). The same logic applies to lookalike components. [Murphy Trueman](https://blog.murphytrueman.com/what-your-components-look-like-as-data/) argues for one `appearance: success | warning | critical | info` property over four separate components, because four components drift apart on their own.

### Name layers identically in every variant

In Figma, the layer name is how an instance's edits find their way into a new variant. [Figma's docs](https://help.figma.com/hc/en-us/articles/360039150733-Apply-changes-to-instances) say changes carry over when you switch variants, or swap one instance for another, only if the layer names match. [Swapping by dragging a component from the Assets panel](https://help.figma.com/hc/en-us/articles/360039150413-Swap-components-and-instances) is stricter: Figma keeps only text overrides and drops every other edit. Text is more forgiving, and keeps its edits when the text layer's name and nesting are similar. Structure can't be edited on an instance at all: layer order, position, and constraints stay locked to the main component.

So the anatomy agreed in the first practice has to be the layer names in every variant. If the label layer is `Label` in the default variant and `Text` in the error variant, a designer who switches to the error variant loses their edits with no warning. Slots follow the same idea: give every variant one shared slot property rather than a separate one each, which [Figma supports](https://help.figma.com/hc/en-us/articles/38231200344599-Use-slots-to-build-flexible-components-in-Figma) by applying a slot property across a component set. Descriptive names matter beyond Figma too. Trueman contrasts `dismissButton` with "Frame 47": only the first tells a developer or an AI agent what the part is, and lets a condition like `dismissible == true` be written against it.

Names also have to survive the trip into code. A spec tool turns each layer name into a key like `iconLeading`, and that conversion loses information. [Curtis's decision record on key formatting](https://github.com/DirectedEdges/specs/blob/main/adr/066-lossless-key-formatting.md) lists what goes missing. Separators go, so `Icon leading`, `Icon-leading`, and `Icon_leading` all become `iconLeading`. Casing goes, so `URL field` and `Url field` collide. Punctuation goes too: `Cut & paste` becomes `cutPaste`, and nothing records that a `&` was there. The loss shows up on the way back. When a spec is rendered into Figma again, a key that no longer rebuilds the layer name "causes the render direction to create duplicates or fail to bind."

His tool's safe set is letters, digits, and single spaces, written in one casing style across the library. A name inside that set converts to every code format without losing anything. A name outside it still works, but the spec has to carry the original Figma name alongside the key, which adds clutter to every spec.

Structure that means nothing to code is dropped the same way. A heading built as an unstyled frame around a single text layer is, in the [decision record on wrappers](https://github.com/DirectedEdges/specs/blob/main/adr/058-wrapper-collapse.md), "a Figma-side convenience with no design-system meaning," so the spec keeps only the text. A frame stays in the anatomy when it carries something real: padding, a fill, a border, or a slot. Each part that's left has a type, such as text, an icon (a "glyph"), a container, or an instance of another component.

## Common mistakes

- **Leaving Figma's default layer names.** "Frame 47" and "Text" carry no meaning to a developer or an agent reading the file, and a rename later breaks override matching across every variant at once. Name layers after the agreed parts from the start ([Trueman](https://blog.murphytrueman.com/what-your-components-look-like-as-data/)).
- **Giving Figma's State menu its own vocabulary.** Gathering prop-driven and interaction-driven states into one menu is fine. Labeling one `Invalid` when the prop is `error` isn't, because the menu stops mapping to code ([Curtis](https://medium.com/eightshapes-llc/crafting-ui-component-api-together-81946d140371)).
- **Building before the draft is agreed, without saying so.** Curtis doesn't forbid starting early, but whoever does has to accept the refactor when the agreed API differs. Starting quietly turns that refactor into an argument about whose names win.
