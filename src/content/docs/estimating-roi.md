---
title: Estimating ROI
reviewed: 2026-09-25
reviewIn: 24
---

An ROI estimate for a design system is only as credible as its weakest input. Label where every figure came from, cost the work and value the savings at the same hourly rate, and count payback from running totals. Almost nobody does this: zeroheight's *Design Systems Report 2026* (147 practitioners) found only 5% of teams measure ROI at all, so an honest rough estimate already puts you ahead of most of the field.

:::tip[Key takeaways]
- **Label where every figure came from.** One invented number, found by finance, discredits the correct ones next to it.
- **Count payback from running totals.** Costs come early and benefits grow slowly, so one year's figures mislead.
- **Shrink the ask if it doesn't pay back.** Tweaking inputs until the case works is how invented numbers get in.
:::

## The problem

ROI (return on investment) figures travel. The design-system-ops executive communication notes ([`knowledge-notes/executive-communication.md`](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/executive-communication.md)) point out that leadership documents "get forwarded, quoted in budget meetings and checked months later," and that "a number that turns out to be invented costs more credibility than the whole document earned." One inflated input, found by someone in finance, discredits the correct ones next to it.

Not everyone thinks the numbers are worth chasing. Lauren LoPrete of Cash App, [interviewed by Supernova](https://www.supernova.io/blog/getting-executive-buy-in-proving-roi-design-systems), says of velocity: "I don't think you can have a metric here. A quantitative approach to velocity or speed is a waste of time in my opinion." Both views are left standing here. If you do estimate, the practices below keep the estimate honest.

## Practices

### Price one component, then multiply

Mike Fortuna's business case for a design system starts small: the cost of one button, built separately by every project. At $100 an hour, he puts it at $2,000 to design and build, $1,000 to test and revise, and $500 in upkeep over its life. Fifty projects each building their own comes to $175,000. With the button in the system, the build and testing happen once and each project pays only to integrate it (he assumes $200), so the total is $13,000. His formula:

```text title="Fortuna's formula"
Total cost = initial investment
  + (integration cost × projects)
```

He talks in hours on purpose, because "that can easily be turned into cost" for the business side. Run his figures through the practices below and they hold up well: one rate on both sides, and the $200 integration cost marked as an assumption. The gaps to fill are the ones the practices name. His sum covers one year, assumes all fifty projects adopt at once, and leaves out upkeep of the shared button itself.

### Label every figure

The notes' rule: every figure is measured (from a named source such as a repo scan, a tool's output, or a team), estimated (with the reasoning shown), or assumed (stated as an input the reader can change). "A figure with none of these labels doesn't go in." Unknowns stay visible as `[needs data: what's missing]`, and the document ends with one `Based on:` line listing its sources and their dates. The values below are illustrative, and the labels follow the notes:

```text title="Business case inputs"
Teams using the system: 12
  measured: import scan, Sep 2026
Rebuild time per component: 3 days
  estimated: two teams' reports
Loaded hourly rate: $72
  assumed: $150k a year
Hours saved per week: [needs data]
```

Notice that the gap stays in the list. A reader can see exactly what's missing and fill it, instead of wondering which numbers were guessed.

### Cost the work and value the savings at one rate

A **loaded hourly rate** is what an hour of someone's time really costs the company: salary plus overheads like benefits, divided by working hours. The notes insist on one rate for both sides of the sum, stated as an assumption. Their example shows why: "Valuing saved hours at $150 while costing an FTE at $150,000 a year (about $72 an hour) inflates the return by half." An FTE is one full-time employee.

### Count payback from running totals

Payback, in the notes' definition, is "the first month in which cumulative benefit is at least cumulative cost, not the month a single year's benefit would cover a single year's cost." The difference matters because a system's costs come early and its benefits grow slowly as teams adopt it. PJ Onori of Instacart, in the same Supernova interviews, sets expectations low for the first year: "perhaps you can get a 5% efficiency gain. Even that can be a great 'quick win' for leadership." The notes also ask you to recompute every total, ROI, and payback figure from the listed inputs each time, so a changed input can't leave an old conclusion standing.

### Ask teams what the system saves them

You rarely have a clean before-and-after comparison, so ask. Onori: "I wouldn't shy away from asking designers and engineers how much time they estimate the system saves them per week. There's a good chance the numbers will be all over the place, but as an aggregate, it can provide a useful view." Label the result as estimated, with the survey as its source.

### Build from your own numbers, not benchmarks

The notes rule out borrowed figures like "teams with mature systems ship 30% faster" unless the source is supplied and cited. Your own measured win is stronger. [Dan Mall's pilot approach](/ds101/pilot-strategy/) measures what the system saved one real team (in his example, an app that had taken six months and about $375K was built in three months for about $175K) and brings that number to the next funding conversation.

### Shrink the ask if it doesn't pay back

The notes warn against deciding the case pays back and then "pick[ing] inputs until it does." If the honest inputs don't pay back, say so and narrow the ask. A smaller first phase that does pay back is easier to approve, and it produces the measured numbers for the next case. [Business alignment](/ds101/business-alignment/) covers asking for the first phase, not the whole vision.

## Common mistakes

- **Presenting a rough illustration as a measurement.** Back-of-the-envelope sums like the one in [Communicating value](/ds101/communicating-value/) are useful for persuading, because they're easy to remember. They aren't inputs. If one ends up in the business case, label it as an estimate and show the reasoning.
- **Leading with the arithmetic instead of what it means.** The notes flag "presenting data without interpretation": a figure on its own "leaves the reader guessing whether that is good." Say what the payback means for the decision in front of the reader, then show the sums.
