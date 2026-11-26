---
title: Rigidity and Flexibility
reviewed: 2026-11-26
reviewIn: 24
---

How strict a design system should be isn't one setting for the whole system. Decide it separately for foundations, components, contribution, and guidance, based on how your organization actually works, and write the result down so later decisions follow it.

:::tip[Key takeaways]
- **Lock only what must stay consistent.** Every other constraint pushes teams to work around the system.
- **Set strictness per area, not system-wide.** One setting ends up too tight for some areas and too loose for others.
- **Read deviation as a sign your position is off.** If you police overrides, teams hide them and you lose the signal.
:::

## The problem

A system can fail from either end. [Murphy Trueman](https://murphytrueman.substack.com/p/slots-and-the-control-paradox) describes both: when components are too rigid, "designers lose confidence. They can't experiment." When the system has too little control, the result is "chaos, inconsistency, no efficiency gains." Most teams never pick a position on purpose. They inherit one from whoever built the first components, or swing from one end to the other after each complaint.

> "Find the place on this spectrum that imposes enough constraints to avoid complete chaos." — Brad F., via [Murphy T.](https://murphytrueman.substack.com/p/slots-and-the-control-paradox)

## Choosing a position

Start from how the organization works, not from what the system team would prefer. [Ness Grixti's Rigidity vs Flexibility Mapping tactic](https://www.designsystemtactics.com/tactics/rigidity-vs-flexibility-mapping), which she credits to Ben Callahan's book *Maturing Design Systems*, opens with the business context: delivery culture, risk tolerance, how much autonomy teams have, and how much leadership supports the system. Those come out of a [maturity assessment](/ds101/system-maturity/). Grixti expects most organizations to land on a deliberate balance rather than at either end.

**Rigid.** The system team decides, and product teams use what's provided. Grixti says rigid approaches favor predictability, compliance, and shared standards. It fits an area where an inconsistency is costly to fix after release. The cost is the one Trueman names: teams can't experiment, so they stop trusting the system or work around it.

**Flexible.** The system offers defaults, and product teams adapt them. Grixti says flexible approaches favor autonomy, experimentation, and speed. Nathan Curtis puts the stance as "Products own their destiny, systems equip them to realise that destiny" (quoted by [Trueman](https://murphytrueman.substack.com/p/slots-and-the-control-paradox)). The cost is drift. Without a clear core, you get Trueman's "chaos, inconsistency, no efficiency gains."

**Balanced.** A locked core with documented ways to adapt everything around it. This is the position Grixti expects most teams to reach, but it takes the most work, because someone has to decide and write down where the line is.

## Practices

### Plot each area of the system separately

Grixti plots four spectra, not one: foundations (brand, accessibility, tokens), components and patterns, contribution and governance, and guidance and documentation. The positions can differ. A system can be strict on accessibility in its foundations and still loose about who may contribute. For each area, note what the position means for design, for build, and for who makes decisions, and where friction is likely.

### Lock only what must stay consistent

To decide what stays fixed, Trueman asks what "must stay consistent for brand identity, accessibility, or technical reasons?" and treats everything else as a candidate for flexibility. His thesis is that "giving up some control actually increases system health and adoption." [API Design](/ds101/api-design/) and [Figma Composition](/ds101/figma-composition/) cover how to build that line into a component: documented override points in code, and slots with preferred instances in Figma.

### Discuss, then plot again

A first plot records what each person assumes. Grixti has the group discuss the implications, then re-plot each area and note where views changed, aligned, or stayed contested. Keep the contested ones visible. They're the decisions most likely to be re-argued later.

### Turn the positions into written principles

A map on a whiteboard doesn't guide the next review. Grixti's last step turns the final positions into principles for how foundations are defined, components built, contributions reviewed, and guidance written. Fold them into the [system principles](/ds101/system-principles/) and record them where your other decisions live (see [Decision governance](/ds101/decision-governance/)), so a contribution reviewer can point to them instead of arguing from taste.

### Read deviation as feedback on the position

Overrides show where the chosen position doesn't fit the work. [Callahan](https://bencallahan.com/design-system-deviation-is-a-signal) treats deviation as "the evidence of" a problem rather than the problem itself, and one practitioner in his poll put it plainly: "If everyone is deviating the same way, we need to adapt to the needs of our users." [Adoption Metrics](/ds101/adoption-metrics/) covers how to track deviation. Re-run the mapping with each maturity assessment, as Grixti suggests, because the organization's risk tolerance and team autonomy change over time.

## Common mistakes

- **Making everything strict to be safe.** It feels like protecting quality, but Trueman's rigid failure follows: designers who "can't experiment" lose confidence in the system and work around it.
- **Loosening everything to win adoption.** Removing constraints after complaints trades one failure for the other. Trueman warns that a system with too little control delivers "no efficiency gains," which removes the reason to adopt it.
- **Settling contested areas by averaging.** If one group wants components locked and another wants them open, plotting the midpoint hides the disagreement. Grixti's re-plot step records contested areas as contested, so they get decided, not buried.
