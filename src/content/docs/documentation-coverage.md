---
title: Documentation Coverage
reviewed: 2026-07-02
reviewIn: 24
---

Documentation is measured against the code, never the other way around. The code is the true answer to "what components exist." When code and docs disagree, that's drift, in one of two directions. A component in code with no docs is a coverage gap: the docs fell behind. A doc page for a component that no longer exists is an orphan: the docs missed a removal.

:::tip[Key takeaways]
- **Audit docs against the code.** The docs platform's own list lags, so it can report full coverage while gaps go unseen.
- **Report the spread across rungs.** One percentage can look healthy while almost nothing has usage guidance.
- **Flag unsure findings as questions.** One confident false alarm makes a team discount the whole audit.
:::

## The problem

The tempting shortcut is to treat the documentation platform's component list as the inventory. But platforms lag, and a missing platform entry is exactly what's being audited. Measure docs against the platform and you'll confidently report full coverage while three shipped components sit undocumented and two doc pages describe components deleted last quarter.

## The model

The design-system-ops documentation notes ([`knowledge-notes/documentation-coverage.md`](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/documentation-coverage.md)) split "documented" into three rungs instead of a yes/no.

### Rung one: exists

There's at least one Storybook story, a small live example page that proves the component renders and makes it findable. The notes call this "the floor, not real documentation."

### Rung two: described

A proper docs page covering props, variants, and anatomy, enough that a developer can use the component without reading its source.

### Rung three: guided

Usage guidance: when to use it, when not to, anti-patterns, and accessibility notes. Enough that a team can use it *correctly* without asking anyone.

## Practices

### Report the spread across rungs

The gaps between rungs are where coverage numbers mislead: "a system where every component has a story but nothing reaches rung 3 has a coverage number that looks healthy and a documentation surface that isn't." Report how components are spread across the three rungs, not one percentage.

This isn't a niche problem. zeroheight's *Design Systems Report 2026* (147 practitioners) found documentation in 92% of design systems, but only 45% of teams are satisfied with it, and only 66% document their tokens at all. A third of teams ship tokens with no explanation of how to use them. High coverage with low satisfaction at that scale is the rung-one-without-rung-three pattern, industry-wide. The same survey found 76% of teams provide no onboarding materials at all.

### Build onboarding people can use on their own

Designers weren't under-using **Wise's** system because it was lacking. They were building custom solutions and re-requesting components that already existed, because there was no structured way to learn what was there. The team's first try, a video series, went stale as soon as the system changed: every update meant a reshoot.

The fix, described by [Ness Grixti](https://nessgrixti.com/portfolio/wise-design-onboarding/), was an interactive, self-serve course built inside Figma. It's modular enough for a newcomer to go through in order and for an experienced designer to jump to what they need. Testing surfaced three supporting tools: a plugin that generates component doc pages from templates, a widget that shows documentation without leaving the canvas, and a widget that replaces the overwhelming default properties panel with only the controls that matter for that component. The result: 150+ designers moved to self-serve onboarding, replacing ad hoc calls. The broader lesson: an onboarding failure often means people can't find or use what's already documented, not that the docs are missing. [Onboarding adopters](/ds101/onboarding-adopters/) covers what the onboarding itself should contain.

### Flag stale docs as a question

Staleness is computed from git change dates (git records when each file last changed). So it only tells you the doc is older than a code change, and that change might be an internal refactor that needs no doc update. The design-system-ops notes say to phrase stale findings as "doc predates a code change — confirm it still matches," never "doc is wrong." Where the platform has no reliable timestamp, report staleness as "unknown" rather than guessing.

### Put guidance inside the tools people use

[Grixti's observation on adoption](https://nessgrixti.com/articles/the-hidden-work-behind-design-system-adoption/) applies here: a system isolated in a documentation site fails even when the docs are good. Rung-three knowledge needs to show up where people already work: tokens exposed in the design tool, guidance in code comments and editor autocomplete, and starter templates that build in the right patterns instead of just listing the wrong ones. A rung-three doc nobody visits, because the answer already reached them through their tools, isn't a gap. It's the goal.

## Common mistakes

- **Presenting an unsure match as a confirmed gap.** When an audit pairs code components with doc pages by name, some matches are unconfirmed. The design-system-ops notes warn that asserting one as a hard gap "is the fastest way to lose a team's trust in the whole skill." Once a team catches one confident-sounding false alarm, they discount everything else the audit says, including the real findings. Label anything you're unsure of as a question.
