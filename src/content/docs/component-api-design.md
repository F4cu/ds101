---
title: Component API Design
reviewed: 2026-09-16
reviewIn: 12
---

Every prop you ship is a promise you keep forever, or a breaking change you'll have to schedule later. Whether a component stays durable under product pressure, or slowly turns into a pile of boolean props (show/hide toggles), comes down to a few recurring decisions. The biggest one is when to configure with a prop and when to compose with smaller pieces.

:::tip[Key takeaways]
- **Make the common configurable, the uncommon composable.** Otherwise props pile up one request at a time until the component collapses.
- **Support only the combinations you document.** Any combination the system allows ends up in the product somewhere.
- **Prefer composition over style overrides.** An override is a hidden dependency that can break on the next release.
:::

## The problem

Left unchecked, components pile up props one product request at a time, and each addition feels reasonable on its own. [Nathan Curtis](https://nathanacurtis.substack.com/p/configuration-collapse) calls the end state "configuration collapse": a component full of layout props, boolean props, and deeply nested subcomponent trees that exist only to control what's shown and where. The fix isn't a rule against adding props. It's a standing discipline about *which* props earn a permanent place in the API. A clean API is only part of the job, though. A component can still break on real data or be slow to edit in Figma, which [Component usability](/ds101/component-usability/) covers.

## Choosing configuration or composition

Curtis's rule of thumb, from ["Configuration Collapse"](https://nathanacurtis.substack.com/p/configuration-collapse): "Make the common configurable. Make the uncommon composable."

Two signals that something belongs in composition: it's used in only one context, or it needs several props that only matter in combination. A footer that needs `footer`, `footerClassName`, `showFooter`, and `footerAlignment` is four props for one feature. A single composed `Dialog.Footer` child replaces all four.

```tsx title="Configuration"
<Dialog
  footer={<Button>Save</Button>}
  footerClassName="sticky"
  footerAlignment="end"
  showFooter
>
  …
</Dialog>
```

```tsx title="Composition"
<Dialog>
  …
  <Dialog.Footer>
    <Button>Save</Button>
  </Dialog.Footer>
</Dialog>
```

`showFooter` disappears, because leaving the footer out just means not writing it. Alignment and styling, if still needed, move onto `Dialog.Footer`, the one part they affect, instead of growing Dialog's top-level API. [Component composition in code](/ds101/component-composition-in-code/#compound-components) shows how parts like `Dialog.Footer` are built.

### Configure with props

For behavior and foundational state, like `state`, `appearance`, and `size`. These stay on the top-level API. The cost: every prop is permanent surface area that someone maintains and every consumer learns.

### Compose with subcomponents

For structural and content variation. Curtis documents real before-and-after cases:

- A Pill component dropped its boolean props and type variants in favor of children slotted into a container.
- An Alert's three-level subcomponent hierarchy for title, description, and actions became one slotted body with ready-made layout examples.
- A Card was hollowed out into a plain container, so specialized teams build purpose-driven extensions instead of the core system adding more configuration.

The cost: consumers assemble more themselves, so they need good examples. [Component composition in code](/ds101/component-composition-in-code/) names the pieces involved.

## Practices

### Extend before adding a lookalike

A new visual expression of something that already exists, like a new button color next to solid and outline, is usually a new variant value or a new property, not a new component. [Supernova](https://www.supernova.io/blog/building-durable-component-apis-for-design-systems) puts it this way: if the need is general and reusable, it belongs inside the existing component's contract, not in a lookalike next to it. The full [criteria for adding a component](/ds101/component-lifecycle/#criteria-for-adding-a-component) live on Component lifecycle.

### Support only the prop combinations you document

Supernova's warning: "if your system permits a certain usage, it will likely be used that way somewhere in the product." Undocumented combinations don't stay theoretical for long, so decide which ones you support and block the rest.

[Murphy Trueman's design-system-ops toolkit](https://github.com/murphytrueman/design-system-ops/blob/main/skills/metadata-schema-generator/SKILL.md) writes the blocked ones down in each component's metadata file as **prohibited combinations**: prop pairs that are "technically valid but semantically wrong." From her illustrative Button:

```json title="Button.metadata.json (excerpt)"
"prohibited_combinations": [
  {
    "combination": { "variant": "ghost", "size": "lg" },
    "reason": "Ghost buttons at large size create false visual hierarchy — they appear as primary actions despite being tertiary",
    "severity": "warning"
  },
  {
    "combination": { "disabled": true, "loading": true },
    "reason": "Redundant states — loading already prevents interaction. Use loading alone.",
    "severity": "error"
  }
]
```

The severity tells tools what to do. With `error`, they should refuse to generate the combination. With `warning`, they flag it for review. Each rule also carries its reason, so a reviewer or an agent that hits it knows why, not just that it's blocked.

### Prefer composition over style overrides

An override is a hidden dependency that can break silently on the next release. Composition stays part of the documented, versioned API. [Supernova](https://www.supernova.io/blog/building-durable-component-apis-for-design-systems) makes this case, and [MUI's API design guide](https://mui.com/material-ui/guides/api/) reaches the same split on its own from a component-engineering angle: props for styling, composition for structure.

```css title="Override: promo.css"
/* Reaches into Card's internals */
.promo .card__title {
  font-size: 2rem;
}
```

```tsx title="Composition"
<Card>
  <PromoHeading>…</PromoHeading>
</Card>
```

`.card__title` is an internal class name, not part of Card's API. If the system team renames it in a refactor, the promo loses its styling, and nothing in the release notes warned anyone, because no prop changed. The composed version puts the product team's own heading inside Card. The only thing it depends on is that Card accepts children, which is documented and versioned.

When teams do need to restyle, give them a documented way in so they don't reach into internals. [MUI](https://mui.com/material-ui/guides/api/) passes undocumented props such as `className` to the root element, and every component accepts a `classes` prop keyed by documented names, with the root always called `root`. Because the names are documented, renaming one is a visible API change rather than a silent break like `.card__title`. To decide what stays locked, [Murphy Trueman](https://murphytrueman.substack.com/p/slots-and-the-control-paradox) asks what "must stay consistent for brand identity, accessibility, or technical reasons?" and treats everything else as a candidate for flexibility. [Component property naming](/ds101/component-property-naming/) covers how to name the props themselves.

### Let the pattern decide who owns selection

Before naming a toggle's boolean, decide whether it's one toggle or one choice among siblings. The two need different APIs. The ARIA Authoring Practices Guide gives each its own state. A [toggle button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) carries `aria-pressed`, and each one is independent of the others. [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) and listbox options carry `aria-selected`, which means chosen from the items in their container. Checkboxes and [radio buttons](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) carry `aria-checked`. Each radio carries its own, but only one in the group can be checked at a time.

Libraries split their APIs along the same line. In [Radix](https://www.radix-ui.com/primitives/docs/components/toggle), a lone toggle owns its state:

```tsx title="One toggle"
<Toggle.Root
  pressed={bold}
  onPressedChange={setBold}
/>
```

A [Toggle Group](https://www.radix-ui.com/primitives/docs/components/toggle-group) owns the selection, and its items take no pressed prop at all:

```tsx title="A set of toggles"
<ToggleGroup.Root
  type="single"
  value={align}
  onValueChange={setAlign}
>
  <ToggleGroup.Item value="left" />
  <ToggleGroup.Item value="center" />
</ToggleGroup.Root>
```

Notice where the state lives. Because the group holds the value, no item can disagree with it, and two items can't both claim to be selected in a single-choice set. [React Aria](https://react-spectrum.adobe.com/react-aria/ToggleButton.html) draws the same line: a `ToggleButton` takes an `isSelected` boolean, while a [`TagGroup`](https://react-spectrum.adobe.com/react-aria/TagGroup.html) takes `selectedKeys` for the whole set.

What libraries don't agree on is the lone toggle's prop name. Radix calls it `pressed`, React Aria `isSelected`, and [MUI](https://mui.com/material-ui/api/toggle-button/) `selected`. A naming convention can't settle that, but the structure question comes first and has a right answer. Pick one name and use it everywhere, as [Component property naming](/ds101/component-property-naming/#name-one-concept-one-way-across-components) covers.

Getting the pattern wrong shows up in generated code too. [Curtis](https://github.com/DirectedEdges/specs/blob/main/adr/067-anatomy-element-roles.md) found his spec tool turning a checkbox's selected state into `aria-selected`, "a listbox-option attribute, incorrect for a checkbox," until each part's role was recorded in the spec. [Component accessibility](/ds101/component-accessibility/#record-each-parts-role-in-the-spec) covers that.

### Share decisions across platforms, not implementations

The same component often needs to work on web, iOS, and Android without looking identical on all three. [Wealthfront's engineering team](https://eng.wealthfront.com/2022/05/10/building-wealthfronts-multi-platform-design-system/) calls this "design once, build anywhere": share tokens (padding, radius, color, typography) and intent, and let the implementation follow each platform's conventions. Their example: a Dialog floats centered on desktop web, while its mobile counterpart is a BottomSheet attached to the bottom edge. It's a different component and interaction model, built on the same decisions.

That only works if the intent is recorded somewhere neutral. [Multi-platform component specs](/ds101/multi-platform-component-specs/) covers how. [Platform divergence](/ds101/platform-divergence/) explains why a structural split like Dialog vs. BottomSheet needs a component contract rather than a token.

### Separate what a component guarantees from what it guides

A component can guarantee color contrast in its token pairings, focus visibility, keyboard operability, correct ARIA roles, and touch target size. It can't guarantee heading hierarchy on the page, reading order, or whether the surrounding content makes sense. Those are decisions the consumer makes. Making a component more flexible should never loosen the guarantees it can actually make.

## Common mistakes

- **Adding a prop as a just-in-case escape hatch.** Every speculative prop is a permanent maintenance cost, paid whether or not it's ever used, and it usually can't be removed once someone depends on it. Ship the narrow version. When a real second need shows up, solve it with composition or a feature request rather than expanding the prop surface in advance.
