---
title: Business Alignment
reviewed: 2026-09-16
reviewIn: 24
---

A design system's roadmap should stay legible against what the company cares about *right now*, not run as a self-contained backlog the rest of the org has to take on faith. The work may barely change from one year to the next, but the reason you give for funding it should follow what the company is optimizing for. [Communicating value](/ds101/communicating-value/) is about making the case to each funder. Business alignment is about keeping that case current and carrying it through to a decision.

:::tip[Key takeaways]
- **Lead with what the company cares about now.** A pitch framed for last year's priorities sounds out of touch, however good the work.
- **Ask for the first phase only.** A multi-year ask feels unmovable and gets approved as something other than what you meant.
- **Say what's different from last time.** If an earlier system didn't stick, readers remember it even when you don't mention it.
:::

## The problem

A system pitched once at launch and never re-justified drifts out of sync with what the business is optimizing for. A cost-cutting year and a growth year call for different emphasis in the same roadmap. "We'll ship new products faster" wins funding in a growth year and sounds out of touch in a year of cuts, even when the work behind it is excellent.

## Choosing a framing

The design-system-ops executive communication notes ([`knowledge-notes/executive-communication.md`](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/executive-communication.md)) observe that "the same situation can lead three ways," and the right one is whichever "matches the reader's priorities." So choose by what leadership is talking about this cycle, not by what the system team is proudest of. New markets or launches point to growth. A recent incident or audit points to risk. Budget reviews point to cost. Lead with one, and let the others support it.

### Lead with growth

This fits when the system lets the company scale or move faster: new products, new markets, more teams shipping on the same foundations. The notes' pattern is: "We are currently [current state]. To [strategic goal], we need [investment]. This will [specific speed or scale benefit]." It works best with product leadership, executives, and growth-stage companies. The cost is that you have to name the specific goal the system serves. A general promise of "faster" is exactly the kind of overpromise the notes warn against.

### Lead with risk

This fits when the current state creates technical, compliance, or user-facing risk. The pattern is: "We are currently [current state], which creates [specific risk]. The cost of this risk is [impact]. We can remove it by [investment]." The notes' example is accessibility. When every team builds its own accessibility implementation, the company carries legal exposure and excludes users. Moving that work into the system removes both problems. Risk works with executives, with compliance-conscious organizations, and in the months after an incident. The cost is evidence: the notes require a claim like "documented compliance gaps" to cite the audit it came from.

### Lead with cost

This fits when the problem is waste, such as teams maintaining separate versions of the same interface elements. The pattern is: "We are currently [current state], which costs us [figure, labelled]. We can recover this by [investment]." It works with engineering leadership and finance-minded organizations. The cost is real inputs. Leadership documents get forwarded and checked months later, and the notes warn that "a number that turns out to be invented costs more credibility than the whole document earned." [Estimating ROI](/ds101/estimating-roi/) covers building that figure from labeled inputs.

## Practices

### Map the roadmap to current company goals

Before each planning cycle, ask what the company's top-line goals actually are right now. Check whether the system's roadmap visibly serves at least one of them, in words a non-design stakeholder would recognize. If it can't be connected to any current priority, notice that before a budget conversation forces the question. This check is also how you pick the framing above.

How formal the mapping is depends on the org. At one end, [Figma's Design Executive Council research](https://www.figma.com/blog/the-new-business-case-for-design-systems/) describes SAP making its design system a board-level KPI, tracked through OKRs (objectives and key results, a common goal-setting format). Most teams need far less than that: the same one-line mapping, revisited each cycle.

### Flag what's critical to the budget holders

[Supernova's guidance on getting buy-in](https://www.supernova.io/blog/how-to-build-a-business-case-for-your-design-system) puts it plainly: map your roadmap to company-level priorities, and flag the parts of your budget request that are mission-critical to the people who currently hold the budget, not the parts that are mission-critical to the system team.

### Ask for the first phase, not the whole vision

The executive communication notes warn that "a multi-year, multi-scope ask feels unmovable and gets approved as something other than what was meant." Ask for the first phase, and ask for the next once the first is delivering. Keep it to three asks or fewer, stated together in one section, so the reader knows exactly what they're approving. [Pilot strategy](/ds101/pilot-strategy/) takes this further: prove the value on one real team before asking for a budget at all.

### Say what's different from last time

If the company tried a design system before and it didn't stick, the notes put it simply: "readers remember." Don't leave the earlier attempt unmentioned. Name what happened and what is specifically different this time. [System Takeover](/ds101/system-takeover/) covers finding out what that earlier attempt actually decided.

### Follow the proposal through to a decision

A good case can still stall on the way to a decision. The notes give the sender a sequence:

- Send it to the budget owner directly, not to their staff, and say when the decision is needed.
- Allow about a week before a decision meeting for a brief, and two to three weeks before a budget deadline for an investment pitch.
- If there's no decision after two weeks, ask whether there are questions or the proposal needs adjusting.
- If the answer is no, ask why. "The real objection is often not the one the document addressed (timing, a competing priority, missing product buy-in)," and knowing it shapes the next attempt.
- If the answer is yes, confirm the scope, timeline, and success measures, and record the decision (see [Decision governance](/ds101/decision-governance/)).

## Common mistakes

- **Reporting only good news.** The executive communication notes warn that "readers detect cherry-picking and wonder what is hidden." Lead with the honest picture, meaning what's working and what isn't, with evidence for both.
- **Overpromising.** "Eliminate all inconsistency, halve engineering time" creates, in the notes' words, "expectation debt that is paid in trust when the outcomes don't fully arrive." Say specifically what the investment will do, and name what it won't.
