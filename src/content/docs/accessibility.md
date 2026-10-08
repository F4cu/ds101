---
title: Accessibility
reviewed: 2026-09-25
reviewIn: 12
---

An accessible component library doesn't make an accessible product, but it's still the cheapest place to fix most accessibility problems, because every fix in a component reaches every product that uses it. Accessible components still need an accessible layout around them, which [Layout accessibility](/ds101/layout-accessibility/) covers. This page covers what to check on each component, how to prove it works, and what the system can't do for the teams using it. When those checks happen is owned by [Design-to-Code Contract](/ds101/design-to-code-contract/), and who owns them by [Decision governance](/ds101/decision-governance/).

:::tip[Key takeaways]
- **Automate the scan, then test by hand.** A clean automated scan still leaves most issues unchecked.
- **Document how components combine accessibly.** Accessible parts can still add up to an inaccessible screen.
- **Keep design-stage and build-stage findings apart.** A spec check reported as tested lets teams ship behavior nobody tried.
:::

## The problem

> "Using the GOV.UK Design System in a service does not immediately make that service accessible. Additional research, design, development and testing work is needed." — [GOV.UK](https://design-system.service.gov.uk/accessibility/accessibility-strategy/)

It's tempting to read "we use the design system" as "we're accessible." [Nathan Curtis](https://medium.com/eightshapes-llc/accessible-design-systems-dont-guarantee-accessible-products-3478e3a462ba) has watched leadership make that leap: when accessibility came up in one system pitch, an executive's reaction was "Oh, our teams will make accessible products if they use the system? Sold!" Curtis's point is that every adopting team still has three jobs. It configures each component it uses, composes many components into a screen, and builds its own components where the system has none. "Composition reveals how preposterous it is to think a design system's parts guarantee accessibility." [System Performance](/ds101/system-performance/) covers catching the failures that only show up where a component is used.

The opposite failure is a system team that overstates what it has checked. The toolkit's audit rules are written against two versions of this: a component audit that stops at contrast, or that reads the source code and reports what it *should* do as if someone had tested it, produces a report that looks complete. Teams then ship on the strength of it.

## The model

A component-level audit covers five dimensions, following the accessibility skill in Murphy Trueman's [design-system-ops toolkit](https://github.com/murphytrueman/design-system-ops/blob/main/skills/accessibility-per-component/SKILL.md). The baseline is WCAG 2.2 AA ([Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG22/), the W3C's accessibility standard), and a component's overall status is its worst result. GOV.UK aims one version behind: AA of whichever WCAG version has been out for at least a year.

The legal baseline can lag too. In the EU, the [European Accessibility Act](https://eur-lex.europa.eu/eli/dir/2019/882/oj) has required many consumer-facing products and services to be accessible since 28 June 2025, and its technical standard, [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf), still points to WCAG 2.1 AA.

- **Keyboard navigation:** everything works with a keyboard alone, and composite widgets follow the ARIA Authoring Practices Guide (APG) pattern for their type.
- **Screen reader experience:** the component announces its role, state, and a name that makes sense out of context.
- **Color and contrast:** text, borders, and focus indicators meet WCAG contrast in every state, and color never carries meaning alone. It's the one dimension you can check from token values before anything is built.
- **Focus management:** focus moves into a layer when it opens, stays inside a modal, and returns to the trigger when it closes.
- **ARIA implementation:** roles match what the component does and carry their required attributes, and no ARIA is used where a native HTML element already has the right meaning. A component that fills a large region of the page, such as a navigation or a main content area, sits inside the right landmark.

The toolkit's example of a screen reader failure is an icon button with no accessible name, which "announces only as 'button'":

```tsx title="Before: announces only as 'button'"
<button onClick={close}>
  <CloseIcon />
</button>
```

```tsx title="After: has an accessible name"
<button
  onClick={close}
  aria-label="Close"
>
  <CloseIcon />
</button>
```

Notice that nothing visible changed. This kind of failure doesn't show up in a visual review, only when someone listens to the component.

## Practices

### Automate the floor, then test by hand

Some accessibility failures are mechanical, and those belong in CI (continuous integration, the automated pipeline that checks every code change before it merges). The toolkit's [CI skill](https://github.com/murphytrueman/design-system-ops/blob/main/skills/cicd-integration/SKILL.md) runs axe-core, an automated accessibility checker, on each rendered component, through tools like `jest-axe`, Playwright, or the Storybook test runner. Its reasoning is that some problems "should never have reached a human reviewer because they are mechanically detectable," and automating them lets audits "focus on the problems only humans can evaluate." It's also clear about the limit: axe-core "catches the machine-detectable subset of WCAG issues; keyboard and screen reader checks stay manual." [Agent CI Pipelines](/ds101/agent-ci-pipelines/) covers how a check like this blocks a merge.

That subset is smaller than it looks. GOV.UK doesn't rely on automated tools alone, because "a 2017 study from GDS concluded that only about 30% of issues are found by automated testing tools." The team combines automated tests with manual testing on screen readers, screen magnifiers, high-contrast modes, and speech recognition, and records which browser and assistive technology combinations it tested. Its research rule goes further: "user research must include disabled people and should also include people with a variety of access needs and impairment types."

The toolkit turns the same idea into a reporting rule: "PASS requires evidence from the running component or a computed ratio. Code-only inference is ⚠️ WARN (unverified)." If nobody has run the component with a keyboard and a screen reader, the report says so instead of passing it.

### Record each part's role in the spec

A Figma file can't say what a part does. In [Curtis's decision record on anatomy roles](https://github.com/DirectedEdges/specs/blob/main/adr/067-anatomy-element-roles.md), "a checkbox control and a decorative square are the same node type." His test library has three components with the same anatomy (a container, a leading icon, and a label) that need three different behaviors: a plain pill, a selectable pill that acts as a checkbox, and a toggle button. No layer structure or naming pattern told them apart, so code generated from their specs rendered every one as a `div` with ARIA attributes added on top, with no native button or checkbox underneath. His conclusion: "The role is an authored fact that must be carried in the spec."

His `specs` tool reads that fact from a Figma Dev Mode annotation on the part, such as `role:checkbox`, and writes it into that part's entry in the anatomy. The [design-to-code contract](/ds101/design-to-code-contract/) already asks for a role before build. This puts it on the specific part, where a code generator or an agent can find it. The role words name how the control behaves, not HTML tags, so each platform maps `checkbox` to its own native control. The [form-control roles](https://github.com/DirectedEdges/specs/blob/main/adr/068-form-control-roles.md) also name the parts around a control, like `label`, `description`, and `errormessage`, so a label is matched to the control it names instead of being linked by hand. When a nested component provides two of those parts, like a field label that also carries a description, the parent can list both roles on that one instance so both get linked.

Keep what a part *is* separate from what activating it *does*. In [a later decision record](https://github.com/DirectedEdges/specs/blob/main/adr/087-behavior-actions.md), an alert's close button is still a button: it announces as one and uses the same native element. What sets it apart is that activating it closes the alert. Curtis records that as an action rather than a new `dismissbutton` role, because a role for every behavior and control pair would stop matching any platform's real controls. His test for telling them apart: does it change how the control is announced? A toggle button announces whether it's pressed, so that's a role. The close button doesn't, so that's an action. In the shape of the schema's [`Anatomy` type](https://github.com/DirectedEdges/specs/blob/main/packages/schema/types/Anatomy.ts):

```yaml title="Alert anatomy excerpt"
dismiss:
  type: instance
  instanceOf: IconButton
  actions:
    - type: dismiss
```

Notice that the alert doesn't give its child a role. The icon button keeps its own `button` role, and the alert only adds that activating this particular child closes it. The annotations only reach code if you generate code from specs, as Curtis's tool does, and the list of roles is still growing with each release.

### Throw errors for missing accessibility props

Configuring a single component is still the adopting team's job, like setting a notification's role or a checkbox label's `for` attribute. Curtis wants that work to "feel like a checklist," and the system can make it one. It can itemize the blanks to fill (such as aria labels for popovers, lists, and buttons), build required HTML elements and properties into its output, and go as far as "requiring and throwing errors for missing properties." His example is a checkbox laid over an object with no visible label, which still needs a hidden one.

### Document how components combine accessibly

Adopting teams, Curtis writes, "must also compose interfaces made of many system parts — inputs, labels, groups, images, and more — in an accessible manner." That means the right HTML tags, a sensible field order, and content that reads clearly through a screen reader. A system can help by demoing composition in page samples, such as a data-entry form. It can also document how elements used together fit: a checkbox and its label linked by IDs, field groups, and the microcopy and error text around them. Values that change with state need describing too, like a loader's `aria-busy`.

To show a team why this is hard, Curtis quotes Adam Rowe of the Morningstar Design System: "Challenge them to experience their work through a screenreader. As it flows from one element to the next, they'll quickly get how hard this is to do well and how much can go wrong."

Some of this goes beyond any single component: the order a page is read in, its heading outline, and its landmarks. [Layout accessibility](/ds101/layout-accessibility/) covers how a system can build those into its page templates.

### Publish known issues where adopting teams will see them

Some problems can't be fixed right away, and some sit in the assistive technology rather than the component. GOV.UK lists them in its [accessibility statement](https://design-system.service.gov.uk/accessibility-statement). For example, "the details component does not work well with Dragon and older versions of VoiceOver." It also tracks them publicly on GitHub under labels like "accessibility concern." A team choosing a component can see the limits before shipping it, rather than finding them in their own audit.

### Give complex components a deeper audit

Buttons, badges, and basic inputs "tend to pass most checks," according to the toolkit. The failures that are subtle and compound live in comboboxes, date pickers, data tables, modals, and tabs, which get extra checks. A date picker, for example, should read each day as a spoken date like "Tuesday 9 March 2026," not a string of digits, and let the user type a date instead of using the calendar. The same toolkit's [Challenge Rating](/ds101/risk-management/) scores date pickers and data tables high enough to require an accessibility audit before release.

### Keep design-stage and build-stage findings apart

A component that exists only in Figma can be checked against its spec, but not against how it behaves. The toolkit labels keyboard and screen-reader findings from a design file as assessed against the specification, and marks code-level checks as pending. That split maps onto [the design and build contracts](/ds101/design-to-code-contract/): a spec-level finding goes back to design, and an implementation finding goes to the build.

## Common mistakes

- **Promising leadership that the system makes products accessible.** Curtis warns that "touting system accessibility can grossly distort expectations." Half a decade into one organization's system, its leaders asked: "So, we aren't accessible? I hear we can't say that, even though everyone adopted the system. How's this possible?" Say what the system covers, and what each team still owns.
- **Treating a clean automated scan as a pass.** Going by GOV.UK's 30% figure, a scan with no errors still leaves most issues unchecked.
- **Reporting contrast as a bare pass or fail.** The toolkit asks for "actual contrast ratio figures, not just pass/fail," so a reader can see how close a borderline color came and which token to change.
- **Checking focus only in the default state.** Focus has to hold up in every interactive state, including error and selected.
