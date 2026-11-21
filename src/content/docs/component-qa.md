---
title: Component QA
reviewed: 2026-11-20
reviewIn: 12
---

Quality is a promise the system makes to adopters, and it only holds if a second person checks each component against a written list before it ships. This page covers how a component gets checked before it enters the Figma library or the coded library, and who checks it. The [design-to-code contract](/ds101/design-to-code-contract/) defines what "done" means at each stage. [Component lifecycle](/ds101/component-lifecycle/) decides whether the component should exist at all.

:::tip[Key takeaways]
- **Have someone other than the builder test it.** The builder misses the same gaps when checking that they missed when building.
- **Write criteria a tester can act on.** "Check the colors" leaves each tester to invent the test, so results vary by who ran it.
- **Stress content, not just variants.** A component that passes every variant with mockup copy still breaks on the first real string.
:::

## The problem

Curtis describes the moment his team was asked how they checked components:

> "Ugh. We had documented neither what we check for nor how we QA. At all." — [Nathan C.](https://nathanacurtis.substack.com/p/component-qa-in-design-systems-b18cb4decb9c)

His test for any team is that "your answer must be better than 'We check stuff after we build it.'" Without a list and a second reviewer, the gaps reach adopters. [Curtis's account of testing Figma components](https://nathanacurtis.substack.com/p/testing-figma-components-a47fc978465f) opens with the kind of thing that slips through: a button shape that didn't grow with its label, a hardcoded style, and properties that didn't match the code API.

## Practices

### Write the checklist before you need it

[Curtis's 2017 QA checklist](https://nathanacurtis.substack.com/p/component-qa-in-design-systems-b18cb4decb9c), written for web components, checks eight areas: visual quality through tokens, enough states and variations, responsiveness, content resilience (too much, too little, none), composability, functionality, accessibility, and browser and device compatibility. Usability testing is extra credit, not a gate: "We don't gate releases of an component — particularly the smallest ones — by usability testing."

For Figma assets, [his component review](https://nathanacurtis.substack.com/p/the-figma-component-review-f42114450b4d) marks each item Pass, Fail, or Not Applicable, and warns that the items have to be specific: "Criteria to 'Test the props' or 'Check colors' is too vague for testers to jump in and feel confident." [Usability](/ds101/usability/#criteria-for-a-usable-component) owns the item-by-item review questions in that order. [Accessibility](/ds101/accessibility/) owns the accessibility checks.

### Have someone other than the builder test it

Curtis's rule is to "identify a predictable role expected to review each contribution" ([Curtis](https://nathanacurtis.substack.com/p/component-qa-in-design-systems-b18cb4decb9c)). The builder checks their own work first, a second person runs the list, and the component doesn't ship until it passes. In his [Figma testing post](https://nathanacurtis.substack.com/p/testing-figma-components-a47fc978465f) he names three ways to staff it, each suited to a different team:

- **"If you build it, you test it"**: solo or very small teams, where nobody else is available.
- **"Builder(s) build → tester(s) test"**: teams with dedicated or approving roles.
- **"I'll test yours, you test mine"**: larger teams that can trade reviews.

The workflow is the same in each: the builder writes the test cases, the tester runs the review from an assigned ticket, comments on what fails, and checks the fixes. The [Figma component review](https://nathanacurtis.substack.com/p/the-figma-component-review-f42114450b4d) names the four steps: prepare, review, retest and resolve, complete.

### Test only once the API is stable

Curtis's [prerequisites for testing a Figma component](https://nathanacurtis.substack.com/p/testing-figma-components-a47fc978465f) are that the design is handed off, the API is stable (element, property, and option names), and most features are built. The test checks whether the asset shows what the code shows. It doesn't check whether the design is right for users. That's [usability](/ds101/usability/) work.

### Stress content, not just variants

[Usability](/ds101/usability/#design-every-state-against-real-data) lists the states to design. QA is where they get tested. Curtis's [visual test cases](https://nathanacurtis.substack.com/p/component-visual-test-cases-e501e2d21def) cover five kinds:

- **Properties**: every combination, including deprecated options.
- **Content**: short, long, just right, wrong, colliding, and missing, where the element should collapse.
- **Spacing**: narrowing the frame by 1px at a point where text wraps.
- **Layout**: fixed narrower and wider, hug, fill, and inside themed containers.
- **Composition**: slots filled with custom content.

His [component testing plans](https://nathanacurtis.substack.com/p/component-testing-plans-face830d7e44) add dark and brand backgrounds, density sizes, touch, and translation: a long German label, a wider yen price, a global header in German, Chinese, Arabic, and Cyrillic.

### Keep test cases apart from documentation

Curtis's takeaway from his 2017 QA work is to "separate documentation from testing artifacts" ([Curtis](https://nathanacurtis.substack.com/p/component-qa-in-design-systems-b18cb4decb9c)). A "kitchen sink" page sits beside the docs page and holds every case, for review and visual diffing. A docs page is the wrong place, because it fits every example into the article's width and loads the CSS of everything else on the page. In Figma, his [visual test cases](https://nathanacurtis.substack.com/p/component-visual-test-cases-e501e2d21def) sit to the right of the variant grid and work like Storybook stories: they let a reviewer confirm that "edits change what you intend, and don't change anything else."

### Grow the test plan one criterion at a time

Curtis's [testing plans](https://nathanacurtis.substack.com/p/component-testing-plans-face830d7e44) add criteria as columns beside the component list, one planning period (three to six months) at a time, each marked critical, yes, maybe, or not pursued. Basics come from day one: a kitchen sink page, tokens reviewed by both design and engineering, manual browser testing, and linting. Functional tests, visual regression tests, unit tests, an accessibility audit, and SemVer with changelogs come before launch. Dedicated QA staff, automated cross-browser testing, and component analytics are out of reach for most teams. The grid is a [doneness matrix](https://nathanacurtis.substack.com/p/doneness-matrices-c7f0a026365f): components as rows, criteria as columns. His 2019 examples name tools like BackstopJS and IE11. Keep the approach, not the tool list.

### Decide how much Figma polish is enough

Curtis's [Figma testing post](https://nathanacurtis.substack.com/p/testing-figma-components-a47fc978465f) asks: "How much quality is essential before publishing a component?" Code quality comes first, because code is what ships to users. Taking a Figma library from 92% to 98% "good enough" might cost two designers six months, and in his words "design assets are roadkill on the path to production experiences built in code that change constantly." Set the bar on purpose, so the checklist doesn't hold a component back for detail adopters won't notice.

### Criteria for publishing a component

Ask these in order before a component enters the Figma library or the coded library:

1. Is the API stable, with element, property, and option names that match the code?
2. Has the builder checked it against the written checklist?
3. Do test cases cover properties, content, spacing, layout, and composition, on a page apart from the docs?
4. Does it pass the [usability criteria](/ds101/usability/#criteria-for-a-usable-component)?
5. Does it pass the [accessibility](/ds101/accessibility/) checks? Curtis's Figma review has no accessibility item, so this needs its own step.
6. Has a second person marked every item Pass or Not Applicable?
7. Were all failures fixed and retested?

## Common mistakes

- **Gating every release on usability testing.** Curtis treats it as extra credit and doesn't gate releases on it, especially for the smallest components ([Curtis](https://nathanacurtis.substack.com/p/component-qa-in-design-systems-b18cb4decb9c)).
- **Turning asset QA into a design critique.** Curtis scopes the test to whether the asset shows what the code shows, not whether the design is right for users ([Curtis](https://nathanacurtis.substack.com/p/testing-figma-components-a47fc978465f)).
- **Assuming the Figma review covers accessibility.** Curtis's review order has no accessibility item, so a Figma-only pass can leave contrast, focus, and labels unchecked.
