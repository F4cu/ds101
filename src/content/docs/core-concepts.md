---
title: Core Concepts
reviewed: 2026-07-02
reviewIn: 12
---

A design system isn't a component library. It's three separate jobs that share one name: tokens, components, and governance. Most designers only ever touch the middle one, and each of the three fails in its own way when it's neglected.

:::tip[Key takeaways]
- **Look after all three layers.** Treat the system as just components, and you won't see stale tokens or dead governance coming.
- **Treat governance as what makes it trustworthy.** Without it, the system collects components by inertia instead of intent.
- **Expect most of the work to be scaffolding.** Plan only for new components, and the audits, docs, and upkeep that keep it running get left out.
:::

## The problem

Design systems drift. The [design-system-ops toolkit's README](https://github.com/murphytrueman/design-system-ops#readme) puts it bluntly: tokens go stale, components fall out of spec, and governance documentation gets written once and never updated.

Each of those is a different failure at a different layer. Stale tokens mean the vocabulary no longer matches what the product ships: every "blue" in Figma is now a slightly different blue in code. Out-of-spec components have quietly drifted from their definitions. Dead governance means nobody knows how a change gets in, so changes either stop or happen everywhere at once with no record. If you think of the system as "a set of components," you only see one of these three failures coming.

## The model

### Tokens

The raw vocabulary: colors, spacing, type sizes. [Token architecture](/ds101/token-architecture/) covers how to structure them.

### Components

The assembled units built from that vocabulary. [Code Composition](/ds101/code-composition/) names their layers and how they're built in code, and [Figma Composition](/ds101/figma-composition/) covers the same structure in the design file.

### Governance

The decisions about what belongs, how it changes, and how it leaves. [Decision governance](/ds101/decision-governance/) and [Component lifecycle](/ds101/component-lifecycle/) cover how to run it.

## Practices

### Look after all three layers

Alla Kholmatova's book *Design Systems* (O'Reilly, 2017) names the payoff of getting all three right, not just the middle one: "Without a shared design language and practices, collaboration is difficult."

Tokens and governance are what make that shared language last. Without them, "the library" is just a folder of components that look similar today and will quietly stop matching as soon as nobody's watching.

### Expect most of the work to be scaffolding

The design-system-ops toolkit sorts design-systems work into five categories. It isn't a universal taxonomy, but it's a useful picture of what running a system involves day to day:

- **Audit**: understand what you actually have (token audits, drift detection, naming checks).
- **Govern**: run the system as infrastructure (contribution workflows, deprecation, decision records).
- **Document**: make the system readable by people and machines.
- **Validate**: check quality before it ships (accessibility, token compliance).
- **Communicate**: adoption reports and stakeholder briefs.

Notice how little of that list is "design a component." Most of the work is the scaffolding around the components.

### Treat governance as what makes the system trustworthy

The [design-system-ops governance notes](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/component-governance.md) define it as "the set of decisions and processes that determine what belongs in a design system, how it gets there, how it changes, and how it leaves. Without it, a design system accumulates components by inertia rather than by intent... Governance is not bureaucracy. The goal is not to make contribution harder — it is to make the system trustworthy. A system that accepts anything is a system nobody trusts."

### Judge the system by what it frees people to do

[Jina Anne](https://www.aiga.org/inspiration/talks/jina-anne-design-systems-are-for-people) compares design systems to McDonald's assembly line and NYC Transit's sign standards. Both succeed by removing noise so people can focus on what matters, not by imposing order for its own sake. A token, a component, or a process is a means, not the goal. It should give designers and engineers a toolbox that frees up energy for real problems, not handcuffs. A system judged only on technical metrics, like less duplicated code or faster delivery, is being measured on the mechanism instead of its purpose.

## Common mistakes

- **Equating "the design system" with "the Figma library."** With a component-shaped mental model, you invest everything in the middle layer while the vocabulary underneath rots and the decision-making around it never gets defined. When something goes wrong, like a rebrand that touches five hundred files or a library full of near-duplicate buttons nobody trusts, it looks like a component problem. But it started one layer up or one layer down.

Next: [Token architecture](/ds101/token-architecture/).
