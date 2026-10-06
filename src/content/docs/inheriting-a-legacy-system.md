---
title: Inheriting a Legacy System
reviewed: 2026-09-18
reviewIn: 24
---

Most design-system writing assumes you're building from zero. Most real systems aren't met that way: someone else built this one, left, and now you're running it. In Murphy Trueman's framing, that has already happened two or three times at most organizations with a system old enough to matter. Walking in cold takes a different discipline than building fresh: **design system archaeology**, reading what's there to understand what was meant, before you touch anything.

:::tip[Key takeaways]
- **Read the system before judging it.** A confident rebuild brings back edge cases the last team already solved.
- **Ship one small fix in your first 90 days.** A rebuild or rename that early throws away knowledge built into the old parts.
- **Trace usage before deprecating anything.** The riskiest users are often internal tools nobody thinks to check.
:::

## The problem

Two failures show up when someone inherits a system without this work. Either they're too intimidated to change anything, so the system stiffens under new ownership. Or they rebuild with confidence and bring back every edge case the previous team already solved, because that knowledge lived in their heads and never reached the docs.

Trueman puts the reframe plainly: you're not inheriting components, you're inheriting decisions. Each one was a frozen argument. Treating it as an accident instead of a compromise is how solved problems come back.

## Practices

### 1. Read the system before judging it

[Trueman](https://blog.murphytrueman.com/design-system-archaeology/): "An audit asks what's broken. Archaeology asks what was meant." Judging a component before understanding why it exists is the first mistake most inheritors make. Her reading order:

1. **Tokens first**, since they show what the previous team believed about structure.
2. **Component architecture** next, treating anything that breaks the system's own pattern as a scar, not a bug.
3. **Contribution history**: git logs, Figma file history, and RFCs (written change proposals circulated for feedback before a decision), to learn *when* and *who* decided things.
4. **Documentation last**, because reading it first gives false confidence about how much you understand.

She sorts what she finds into **load-bearing lore**, undocumented decisions that still matter (like an accessibility fix or a cross-team compromise), and **vestigial lore**, workarounds for a problem that no longer exists. The test: if you can't answer "why is it like this," treat it as load-bearing until proven otherwise.

### 2. Ship one small, precise fix in the first 90 days

[Trueman](https://blog.murphytrueman.com/design-system-archaeology/) is specific about the early period:

- **Don't rebuild.** She cites Joel Spolsky's warning that "crufty-looking parts encode hard-earned knowledge," the logic behind Netscape's failed full rewrite.
- **Don't rename anything.** A rename ripples through code, docs, and every team's mental model before you've earned that call.
- **Don't publish your early judgments.** Keep them private until at least month three.

Instead, ship one small, precise thing: a documentation fix for something commonly misunderstood, a tighter contract for a messy component, or an undocumented exception made explicit. It should be small enough to prove you understood the system, and not big enough to overrule a team that isn't there to defend its choices.

### 3. Renovate one dial at a time

Amy Hupe's framing for modernizing an aging system, once the archaeology is done, is to turn dials, not flip switches: small, thoughtful improvements one at a time, rather than a full rebuild. This is a lighter citation than the others here. The zeroheight post's full text didn't render to quote directly, so treat this as the title and framing convey it, not a full account of her argument (Amy Hupe, "Renovating a design system: Why modernization should feel like turning dials, not flipping switches," zeroheight blog, June 2026).

### 4. Roll out a new generation incrementally

The same problem shows up at the org level when a system moves to a new **generation**. That's [Nathan Curtis's term](https://nathanacurtis.substack.com/p/adopting-design-system-generations-900535442a16) for an overhaul big enough to touch colors, typography, spacing, and components at once, "more a revolution than a refinement." The hard part isn't building it. It's that teams keep shipping on the old generation under deadline pressure while it happens, and they'll route around a single cutover.

Curtis's answer has two parts. First, deliver incrementally: let adopters integrate before the new system is finished, instead of one big switch-over. Second, run **Kickstarts**: hands-on sessions where the system team migrates a sample product alongside the adopter, in the adopter's own environment, instead of handing over a migration guide and leaving. Both put the system team in the position of asking "how can we help you succeed?" instead of standing between a team and its deadline.

## Common mistakes

- **Deprecating a component without tracing its usage first.** Trueman warns that a component's riskiest users are often the invisible ones: low-priority internal tools nobody thinks to check.
