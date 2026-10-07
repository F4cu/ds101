---
title: Pilot Strategy
reviewed: 2026-09-16
reviewIn: 24
---

> "I haven't done a design system where we didn't pilot it first." — [Dan M.](https://www.uxpin.com/studio/blog/design-systems-dan-mall-superfriendly/)

Mall treats a design system's first components the way a TV network treats a pilot episode: a small, real production run before anyone commits to a full season. The pilot tells you whether a component survives contact with a real product before it gets locked in as v1. Source: [Big Medium, "Design Systems: Pilots & Scorecards"](https://bigmedium.com/ideas/links/design-systems-pilots-scorecards.html).

:::tip[Key takeaways]
- **Build the first components from real screens.** Components built on a guess get announced and then ignored.
- **Time the pilot window deliberately.** Join too late, and folding in system parts means a refactor no team volunteers for twice.
- **Aim for about 80% standard components.** A system that demands 100% fights legitimate custom work, and teams leave it.
:::

## The problem

The alternative to piloting is what Mall describes as the default failure. A designer and an engineer pair off, build the components they believe teams need, publish them, and wait for adoption. Nothing happens, because nobody tested the guess against real work first. The library becomes what he calls "ghost towns and graveyards": built, announced, and ignored.

Piloting reverses the order. Instead of guessing what a team needs and hoping they show up, you build the system out of what a real team is already building. The first components have proven consumers, not hypothetical ones. Source: [Dan Mall, Content Strategy Interviews](https://ellessmedia.com/csi/dan-mall/).

## Practices

### 1. Time the pilot window deliberately

Too early, and the team doesn't know enough about what it's building for the pilot to surface real components. Too late, with design or code already underway, and folding in system components means a refactor expensive enough that no team volunteers twice. [Mall](https://bigmedium.com/ideas/links/design-systems-pilots-scorecards.html) treats the window as narrow and worth protecting, not something to fill with whichever project happens to be free.

### 2. Score candidate projects together

Mall's scorecard rates each candidate project from 0 (unlikely) to 10 (likely) on eight factors:

- reusable-component potential
- reusable-pattern potential
- high-value elements central to the flow
- technical feasibility
- a champion who will see the pilot through and promote it afterward
- scope achievable in about three to four weeks
- independence from legacy code that would force a large refactor
- excitement value: will this pilot make other teams want in?

Scoring it together, with product, engineering, and design in the room, keeps the choice defensible when someone asks why their project wasn't picked. Source: [Mall's scorecard, reproduced by Obvious University](https://university.obvious.in/product-design/design-system/how-to-run-a-design-system-pilot).

### 3. Mine the component list from real screens

Mall collects screenshots and walkthroughs across the organization's existing apps, anywhere from 20 to 100 products, and looks for what recurs. "All of them have some sort of left-side navigation. That's a component that maybe we should start with." His threshold, three or more teams needing it *right now*, is now part of the wiki's [criteria for adding a component](/ds101/component-lifecycle/#criteria-for-adding-a-component). Run the [UI audit](/ds101/ui-audit/) first to get the inventory this step works from.

### 4. Borrow before you build

Mall's scorecard decides *which* components earn a pilot. The [Lean Design System](https://docs.leandesignsystem.org/tactics/principles/minimum-viable-design-system) methodology answers a different question: what to hand the pilot team on day one. Its answer is to fill early gaps with third-party building blocks, like Bootstrap or Material-UI, or an icon or illustration set like blush.design, instead of spending pilot time custom-building components whose value isn't proven.

Its definition behind this: "any socio-technical system that makes our product development successes repeatable and transferable is a design system." A wiki of borrowed, well-organized parts is a real starting system, not a placeholder. Replace a borrowed piece with a custom one only once real use in the pilot justifies the cost.

### 5. Run several small pilots

Mall's projects typically run four to nine pilots. Build a small library of ten to twenty first components, prove them by building or rebuilding a real app with it, then put the result in front of users in a beta to find what's missing or wrong before declaring v1. Each pilot either confirms a component or sends it back for rework. That's cheaper to learn in a four-week pilot than after ten teams adopted the wrong API. Source: [Dan Mall via UXPin](https://www.uxpin.com/studio/blog/design-systems-dan-mall-superfriendly/).

### 6. Fund the next phase with proof

Instead of pitching the system as an idea and asking for budget up front, [Mall](https://launch.nttdata.com/insights/design-that-scales-unlocking-design-system-success-with-dan-mall) runs the pilot quietly and measures what it saved a real team. His example: an app that used to take six months and about $375K was built in three months for about $175K. He brings that number, not a deck of principles, to whoever controls the next round of funding. [Communicating value](/ds101/communicating-value/) and [Business alignment](/ds101/business-alignment/) cover how to build the case from it.

### 7. Aim for 80% standard, not 100%

Mall's picture of a healthy system past its first pilots: about 80% of product work built from standard components, and about 20% left as legitimate custom work, not a failure to comply. A system that expects 100% compliance is fighting the custom cases it was never designed for, and teams will leave it rather than fight back.

## Common mistakes

- **Treating the pilot and launch as a project with an end date.** Mall's metaphor for what a system needs afterward is gardening, not construction: "that's what it takes to have something grow." That means weekly rituals (he cites a team that gives every Friday to the system), repeated communication, and continued care, until "at some point it flips to it's actually harder to stop doing this thing than it is to continue doing it" ([Content Strategy Interviews](https://ellessmedia.com/csi/dan-mall/)). A pilot that ships is only the "Now" horizon from [Stakeholder alignment](/ds101/stakeholder-alignment/). If nothing carries it into "Next" and "Future," it stalls just like an unpiloted launch, a few months later. [Operating cadence](/ds101/operating-cadence/) covers the rituals that prevent this.
