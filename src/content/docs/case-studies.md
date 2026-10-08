---
title: Case Studies
reviewed: 2026-09-16
reviewIn: 24
---

Almost every real governance failure, and every real success, only makes sense in context: what worked for one team's size, stage, and structure would have failed for another. These four cases are worked examples, not templates. Each ends with what made the outcome depend on its context.

:::tip[Key takeaways]
- **Register changes centrally, even local ones.** At Wise, a local theme fork missed nested components still bound to the old tokens.
- **Don't build governance a system hasn't earned.** A review board can't rescue a library that's missing what teams need.
- **Publish what you want built.** GOV.UK found that waiting for proposals brought in ones the community didn't need.
:::

## The problem

Without concrete cases, governance principles are easy to agree with and hard to apply. Teams reach for the nearest generic best-practice list instead of reasoning about their own situation. A worked example, including the ones that went wrong, gives you something to reason *from*.

## The cases

### Wise: forking instead of extending

**Wise's** product systems team was asked to add a new color theme for a second platform brand, and pushed back. The change seemed to affect only one surface (Editorial), and updating the shared color library for a second brand didn't seem justified for that scope. So the Editorial team duplicated the color library and extended it themselves, locally.

What got missed: core product components, like buttons, inputs, and the rest of the shared library, were already being used *inside* Editorial. Those nested instances were still bound to the original single-brand tokens. When the new theme was applied, the surrounding Editorial patterns updated correctly, but the nested product components kept their default colors. The inconsistency only showed up after the fork was live.

The lesson: nested components inherit their token bindings, not their surrounding context. A component deep in a composition that Citations an unthemed token looks fine right up until someone applies a theme around it. What would have worked: registering the request centrally even though it looked single-surface, so the system team could see the nesting risk before the fork. This was one piece of a larger brand refresh. [Brand alignment](/ds101/brand-alignment/) covers how Wise's 2023 rebrand reshaped its token infrastructure. Source: [Ness Grixti's Wise case study](https://nessgrixti.com/portfolio/wise-multi-brand/).

### zeroheight: the adoption paradox

zeroheight's *Design Systems Report 2026* (147 practitioners) surfaces a paradox. Ask teams with *poor* adoption why, and 55% blame weak governance, second only to lack of a company mandate (73%). Ask teams with *good* adoption what drove it, and only 24% mention governance. They credit component completeness (79%) and communication or community (59%).

Picture two teams side by side. One has an elaborate review board, multi-stage approval, and a strict contribution template, and still struggles, because half its library is missing what teams actually need. The other has light governance, a small decision log, and no review committee, but ships a complete, well-communicated core, and adoption follows.

The reading: weak governance is the explanation people reach for when a system is already failing for other reasons. Strong governance isn't what causes success. It's what stops a *successful* system from decaying once it has adoption. Building elaborate governance before a system has earned adoption solves a problem the team doesn't have yet.

### Grammarly: a small champions network

**Grammarly** built a network of ten advocates across design and engineering to help enable the rest of the organization and drive adoption. It wasn't an open contribution door. It was a specific, named group of people with real standing. It worked well enough that engineering offered to trade headcount for further design-system investment, which is about as concrete a signal of trust as a contribution model can produce.

The context that made it work: ten people is a small, sustainable number, consistent with the finding in [Contribution models](/ds101/contribution-models/) that real contribution stays small regardless of company size. The network also spanned design and engineering, so it had standing on both sides of the handoff. Source: [Figma / Design Executive Council, "The new business case for design systems"](https://www.figma.com/blog/the-new-business-case-for-design-systems/).

### GOV.UK: a public community backlog

The **GOV.UK** Design System runs on a public community backlog, documented in the open and at a different scale than most private-company examples. It's a public GitHub repo where anyone across UK government can propose a component or pattern. A working group reviews each proposal for whether it's useful and not a duplicate, then marks it to-do and pairs it with a contributor. Most major additions come from outside the system team, but it isn't a free-for-all. A named community designer runs weekly catch-ups with whoever is building the thing, the GOV.UK equivalent of Curtis's steward role.

The team's own account of iterating the model is candid about what they got wrong the first time. [Chris Ballantine-Thomas](https://designnotes.blog.gov.uk/2023/05/31/iterating-the-gov-uk-design-system-contribution-model/) writes: "In the past, we often waited for teams to approach us for proposals for patterns and components, which did not always match with the community's needs."

Their fix was to flip from reactive to proactive: publish what the team currently wants built *before* anyone proposes it. That way contributor effort lands on something the system needs, rather than being reviewed and declined after the fact. The context that made it work: a public-sector team working in the open, across many departments, with a funded system team to run the backlog.

## Patterns across cases

Each case argues for something different:

- **Wise** argues for registering changes centrally even when they look local.
- **The adoption paradox** argues against building governance a system hasn't earned yet.
- **Grammarly** argues for a small, named group over either a wide-open door or a purely centralized team.
- **GOV.UK** argues for steering contribution toward known needs instead of waiting for it to arrive.

All four are true at once, for different reasons, at different points in a system's life. That's the point of reading governance as contextual rather than as a checklist.

## Common mistakes

- **Copying one case's structure as "the" answer.** Each outcome depended on the team's size, stage, and structure. Take the reasoning, not the org chart.
