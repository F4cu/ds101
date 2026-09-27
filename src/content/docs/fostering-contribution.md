---
title: Fostering Contribution
reviewed: 2026-09-17
reviewIn: 24
---

An open contribution door doesn't produce contributors on its own. [Contribution models](/ds101/contribution-models/) answer how outside teams propose and ship changes. This page answers what makes people actually show up. Amy Hupe's five lessons on enabling contribution and Inayaili de León's talk on fostering participation start from the same observation: contribution is a behavior you build on purpose, not a feature you ship once.

:::tip[Key takeaways]
- **Recruit the quiet ones.** An open door alone filters out the people whose context the system needs most.
- **Keep standards high, and help people meet them.** A pattern published before it's ready erodes trust faster than a slow review.
- **Triage every contribution.** A repo that never answers pull requests teaches people not to bother.
:::

## The problem

An open process that waits for pull requests selects for people who already have the confidence, spare time, and standing to show up unprompted. That's a narrow slice of the people who use the system every day. [Contribution models](/ds101/contribution-models/) shows how narrow: zeroheight's 2026 data found 82% of teams get contributions from ten or fewer designers, whatever the company's size. Leaving the door open isn't neutral. As [Amy Hupe](https://amyhupe.co.uk/articles/5-lessons-on-enabling-design-system-contribution/) argues, it quietly filters out exactly the people whose context the system most needs.

## Practices

### Recruit the quiet ones

A passive model only reaches people already equipped to push through friction. [Inayaili de León's talk](https://www.youtube.com/watch?v=6xZHHHgTt9A) (Design Systems London, 2018) names the fix: "listen to the quiet ones." Build spaces where people feel safe raising an issue, asking a question that's been asked before, or admitting they don't understand something, without being made to feel slow. A system used by a whole organization needs contributors who look like that organization, not just its most confident designers.

### Let teams diverge before converging

Hupe, citing Cathy Dutton, warns that "patterns should never sacrifice user context for efficiency and consistency." Converge too early and a shared pattern smooths over real differences in how teams need to solve a problem. Let teams solve it independently first. That's what reveals which parts of the problem were actually shared. Pushing everyone onto one answer too fast produces uniformity, not fit.

### Keep standards high, and help people meet them

Relaxing quality standards so more people can clear them backfires. A pattern published before it's ready erodes trust in the system faster than a slow review does. [Hupe](https://amyhupe.co.uk/articles/5-lessons-on-enabling-design-system-contribution/)'s fix is clearer standards plus hands-on support. A contributor who knows exactly what "done" looks like, with someone helping them get there, clears a high bar faster than one facing a vague bar alone.

### Model the behavior you want, in the open

De León pairs three habits that reinforce each other:

- **Do it visibly yourself.** The core team should write docs the way it wants docs written and report bugs the way it wants bugs reported, so newcomers have a real example to copy.
- **Mean it when you say help is welcome.** A proposed component or fix needs somewhere real to land, reviewed in good faith. If every outside PR sits unreviewed for months, people learn not to bother.
- **Share work in progress.** Publishing only finished work means teams build in isolation until something lands, which is exactly when duplicated effort and conflicting assumptions surface, too late to fix cheaply. Early drafts and open questions let other teams say "we hit this already" while the direction is still easy to change.

### Meet teams where they work

[Ness Grixti](https://nessgrixti.com/articles/rethinking-contribution-lessons-from-the-messy-middle-of-design-systems/) found the highest-trust relationships came from sprint embedding and pairing directly with product teams. Sitting inside their work reveals context a submitted request never would, and turns a requester into someone who feels ownership. Accepting informal starting points helps too: a screenshot or a Loom video as a first draft lowers the bar to start without lowering the bar for what ships.

Language matters as much as presence. Grixti's own example: naming systems after sci-fi references (Sputnik, Orion Nebula, Neptune) felt playful inside the team but came across as elitist to people outside it. Dense diagrams and jargon-heavy docs do the same. A system's language is either an invitation or a filter, whether or not that's the intent.

### Make contribution part of people's goals

Nobody gets a bonus for filing a design-system PR, and it isn't in most contributors' job descriptions. [Hupe](https://amyhupe.co.uk/articles/5-lessons-on-enabling-design-system-contribution/) says the core team should expect to do most of the initial legwork: hunt for patterns that need standardizing instead of waiting for submissions, and keep offering hands-on support. [Grixti](https://nessgrixti.com/articles/rethinking-contribution-lessons-from-the-messy-middle-of-design-systems/) names the mechanism. If a product team is judged purely on shipped product work, system contribution isn't just unrewarded, it's dropped the moment a deadline gets tight. The fix has to be structural: contribution named explicitly in goals and roadmaps, not just encouragement from the system team.

### Pitch contribution as context, not speed

It's tempting to pitch contribution as a way to grow the system faster. [Hupe](https://amyhupe.co.uk/articles/5-lessons-on-enabling-design-system-contribution/) is blunt that this usually isn't true: reviewing and integrating someone else's work is often slower than the core team building it. The real payoff is that a contributor brings context the core team doesn't have, so the result works for teams and users the core team never sees. [Contribution models](/ds101/contribution-models/) makes the same point with data. Don't sell contribution to leadership as extra capacity, because the pitch collapses the first time someone checks the numbers.

## Common mistakes

- **Treating "we accept contributions" as a policy instead of a practice.** A CONTRIBUTING.md file and an open GitHub repo meet the letter of an open model without doing any of the work on this page. A repo that accepts PRs in principle but never triages them teaches people not to bother next time. [Operating cadence](/ds101/operating-cadence/) covers the channels and stewardship that carry this culture day to day.
