---
title: Usability
reviewed: 2026-10-06
reviewIn: 12
---

A component can be well structured and still be hard to use. It's hard to use when real data breaks it, when a prop accepts values nobody meant to allow, or when a designer needs fifteen clicks to make a common edit. Engineers and designers both route around a component like that, and every workaround drops out of the system. This page covers what makes a component usable beyond its structure and API, and owns the review questions for checking it.

:::tip[Key takeaways]
- **Design every state against real data.** Components built for the mockup's content break in production, and engineers build their own instead.
- **Type every option a prop accepts.** A free-form string lets wrong values through without an error.
- **Put common edits on the top layer.** When a routine change takes deep-clicking, designers detach the instance.
:::

## The problem

> "When these components hit production, they'd break unpredictably, forcing developers to implement their own solutions that sidestepped the design system entirely." — [Murphy T.](https://blog.murphytrueman.com/p/api-driven-design-systems)

Most hard-to-use components aren't broken in one big way. They fail in several small ways, and each failure was a reasonable decision when it was made. This Card puts together failures that Curtis, Supernova, and Braid each describe on [API Design](/ds101/api-design/) and [Code Composition](/ds101/code-composition/):

```tsx title="Hard to use"
<Card
  title="Paris"
  image={cover}
  showImage
  footer={<Button>Book</Button>}
  showFooter
  type="outlined"
  isPromo
  titleColor="#1a73e8"
  style={{ marginBottom: 24 }}
/>
```

Notice that each line is a different problem. `showImage` and `showFooter` are boolean props (show/hide toggles) for parts the consumer could just leave out. `type="outlined"` uses different words from Button's `variant="outline"`. `isPromo` exists for one product team. `titleColor` is a raw value that dark mode won't change. `style` cancels a margin the Card brought with it. None of these shows up in a review of the default state with the mockup's copy. They show up when an engineer passes in real data, or a designer tries a combination nobody tested.

The Figma version fails the same way. It's a variant set like `Image × Footer × Promo × Style`, 16 variants with layers named "Frame 47" in some and "Text" in others. A designer who switches variants loses their edits, and the first request that doesn't fit gets detached.

## Practices

### Design every state against real data

Trueman's fix for components that break in production is to design each one under five conditions, not one: **loading** (waiting for a response), **empty** (no results), **error** (the request failed), **partial** (some fields missing), and **overflow** (more data than the layout expected). She suggests a documentation template that "requires designers to address each of these five states before a component can be considered 'complete.'"

Her second tool is a **data contract** for each component, which lists the fields it needs and what happens when they're missing: required fields ("component won't render without these"), optional fields ("component gracefully adapts if these are missing"), the expected format of each, and the fallback when data is missing or malformed. It doesn't need tooling to start: "Even a basic spreadsheet that lists required vs. optional fields can dramatically improve implementation consistency." When a state does fail, she recommends containing the error "to the specific component or data section that failed, rather than displaying full-page error states." The [design-to-code contract](/ds101/design-to-code-contract/#design-contract) checks that these states exist before build starts.

### Decide how long content behaves

Overflow is the state most often left to chance, because the mockup's copy always fits. [Carbon's overflow guidance](https://carbondesignsystem.com/patterns/overflow-content/) sets rules a component can carry with it. Truncation "should not be used on page headers, titles, labels, error messages, validation messages, or notifications," because those are the strings a user can't afford to lose. When text is truncated, the ellipsis should stand for "three or more truncated characters." When a lot of content overflows, a "Show more" button replaces "scrolling, gradients, or fades," because it's "more prominent and actionable."

The same decision has to be made in Figma. [Alice Packard](https://www.alicepackarddesign.com/blog/12-ways-to-make-your-figma-components-more-delightful-to-use) warns that "a text layer set to 'hug' horizontally will only work with very short copy." A component that hugs its title looks right in the library and breaks the first time a designer pastes in a real product name.

### Type every option a prop accepts

[Trueman](https://blog.murphytrueman.com/every-component-in-your-design-system-is-a-promise/) describes a Button whose docs say to use the `destructive` variant only when an action deletes data, but whose `variant` prop "accepts a free-form string." A developer who reads the docs gets it right. Anyone working only from the code sees a string "with no validation," and copies whatever the existing examples do. Shortened from her example:

```tsx title="Untyped"
interface ButtonProps {
  variant: string;
}
```

```tsx title="Typed"
type Variant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'destructive';

interface ButtonProps {
  /** Only for irreversible actions. */
  variant: Variant;
}
```

In the typed version, the editor lists the four options as the engineer types, a misspelled value fails the build, and the usage rule sits next to the prop instead of in a separate docs page. Which combinations of valid values to block is covered in [API Design](/ds101/api-design/#support-only-the-prop-combinations-you-document).

### Behave like the element underneath

An engineer who wraps a native element expects the wrapper to accept what the element accepts. [MUI's API guide](https://mui.com/material-ui/guides/api/) sets two rules for this. Props "which are not explicitly documented are spread to the root element," so a `className`, a test ID, or an extra `aria-` attribute reaches the DOM without the component naming each one. And "the `ref` is forwarded to the root element," so a team can focus or measure the component the same way it would a plain `<button>`. A component that drops either one forces the team to wrap it in another element or copy it.

MUI also keeps state props predictable. A component is controlled "when it's managed by its parent using props," and "most controlled components are controlled by the `value` and the `onChange` props," with `open`, `onClose`, and `onOpen` for anything that shows and hides. Using the same pair everywhere means an engineer who has controlled one Dialog can control a Popover without looking it up.

### Put common edits on the top layer

Packard's first test for a Figma component is that "the most common modifications are accessible from the component's top layer." Her bad example is a star rating where changing the score takes fifteen steps, with repeated "double click into the instance" and trips back to the design panel. Rebuilt with an instance swap property on each star, it takes nine steps, and the designer picks each star from a dropdown instead of clicking into the instance. [Curtis's Figma component review](https://nathanacurtis.substack.com/p/the-figma-component-review-f42114450b4d) adds that those properties should be "consistent with the component code API," so the panel a designer uses is the props list an engineer reads. [Figma Composition](/ds101/figma-composition/#expose-only-the-properties-each-level-needs) covers which nested properties to expose.

Packard also asks that "overrides not lost on common swaps," because each lost edit "erodes designers' trust in that component." [Property Naming](/ds101/property-naming/#name-layers-identically-in-every-variant) covers the layer naming that keeps them. Her extra step is in the text layers: put the "3" and the "days ago" in separate layers, so a designer can change the number without retyping the label.

### Build the limits into the layout

A component should hold its intended shape without the designer remembering the rules. Packard's example: "If a button component is meant to maintain a 40px height at all times, the auto layout settings should be configured" to keep it there. The component should also be "free of rogue artifacts," including "draft ideas lurking around in hidden auto-layout layers," which show up in the layers panel and confuse anyone looking for the part they're supposed to edit.

In code, the same idea is letting the parent own the spacing. A Card with its own margin forces the `style={{ marginBottom: 24 }}` fix from the example above. [Code Composition](/ds101/code-composition/#let-the-parent-own-the-space-between-parts) shows the alternative.

### Ship examples, not just props

A composable component has a usability cost of its own. [Curtis](https://nathanacurtis.substack.com/p/component-examples-as-data) describes the empty Card: "Drop it on a canvas and it stares back: unopinionated, empty, waiting for instruction." Composition removes the boolean props from the hard-to-use Card, but it leaves the consumer to work out what a good arrangement looks like. His answer is ready-made examples of common compositions, because "props aren't enough." Examples aren't variants. They show a component with real content and real arrangements, so "designers see range and start fast, system engineers get pre-validated, on-foundation starting points."

### Criteria for a usable component

Asked in this order during a component review, following the order of [Curtis's Figma review](https://nathanacurtis.substack.com/p/the-figma-component-review-f42114450b4d) where it overlaps:

1. Is it precisely named and described, so someone can find it and tell when to use it?
2. Are layers named after the agreed parts, the same in every variant?
3. Are colors and type applied through tokens and styles, with no raw values?
4. Do its props use the same names, options, and defaults in Figma and code, with every option typed?
5. Can a designer make the common edits from the top layer, and keep them through a variant switch?
6. Does it hold up with the longest, shortest, and missing real content?
7. Are the loading, empty, error, partial, and overflow states designed and built?
8. Does the parent own the spacing, so it fits into a layout without fixes?
9. Does it pass undocumented props and its `ref` through to the root element?
10. Is there a ready-made example for each common composition?

[Accessibility](/ds101/accessibility/) has its own checks, which run alongside these.

Run the Card from [The problem](#the-problem) through the list and it comes out like this:

```tsx title="Usable"
<Card variant="outline">
  <Card.Media src={cover} alt="" />
  <Stack gap="sm">
    <Text weight="bold">Paris</Text>
    <Text>3 nights</Text>
  </Stack>
  <Card.Actions>
    <Button>Book</Button>
  </Card.Actions>
</Card>
```

The boolean props are gone, because leaving a part out means not writing it. `variant` matches Button. The color comes from the variant's tokens, the parent's `Stack` sets the spacing, and the promo treatment becomes a composition example instead of a prop.

## Common mistakes

- **Reading detachment as a discipline problem.** A spike in detached instances usually points at the component, not the designers. [System Performance](/ds101/system-performance/#slice-detachment-spikes-by-page) covers telling a component flaw from a context mismatch.
- **Fixing a usability gap with one more prop.** Each prop added to unblock one team makes the component harder for everyone else to read. That's how the Card above got `isPromo` ([Curtis](https://nathanacurtis.substack.com/p/configuration-collapse)).
- **Truncating labels and error messages to make them fit.** Carbon rules it out for exactly those strings, because they're the ones a user needs in full.
- **Applying palette styles where semantic ones belong.** Curtis's review flags a generic style like "Palette > Blue > 50" where a semantic one like "Text > Link > On Dark" belongs, because only the second says what the color is for.
