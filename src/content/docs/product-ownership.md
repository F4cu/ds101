---
title: Product Ownership
reviewed: 2026-11-20
reviewIn: 24
---

A design system only shows its value when products ship with it, so someone has to run it like a product: decide what comes next, say so in public, and handle each request on its merits. This page covers that work: the roadmap, intake, triage, response times, and saying no. [Decision governance](/ds101/decision-governance/) covers how decisions get owned and recorded. [Component lifecycle](/ds101/component-lifecycle/) covers what a new component has to clear to get in.

:::tip[Key takeaways]
- **Name one owner who decides priorities.** Without one, roadmap items sit in "coming soon" for months because nobody can move them.
- **Sort every request before you schedule it.** Otherwise every request gets treated as urgent, and the backlog follows whoever shouts loudest.
- **Publish a response time and keep it.** Silence after a request strains the relationship and erodes trust.
:::

## The problem

[Curtis](https://nathanacurtis.substack.com/p/a-design-system-isn-t-a-project-it-s-a-product-serving-products-74dcfffef935) describes the risk after launch: a system built as a project has no funded persistence, and the team is left asking "What do we do now?" Even a system with a roadmap can stall if nobody owns the items on it. In one of Curtis's projects, a responsive-images item sat in the "coming soon" column because nobody with traction in the organization owned it:

> "Responsive images stayed on the far right month after month after month." — [Nathan C.](https://nathanacurtis.substack.com/p/what-s-will-your-design-system-deliver-4b81d41be0d4)

## Practices

### Name one owner who decides priorities

Three sources agree that one named person has to own the call. [Curtis's Systems Lead job description](https://nathanacurtis.substack.com/p/design-system-leader-s-manager-s-3bfa49d79883) gives the role three hats: design and development leadership, product management (resolving priorities, timing, risks, and breaking changes decisively), and project management (owning the backlog and roadmap, running planning, and releasing at a predictable cadence). The lead "need not necessarily perform daily design and development tasks." **GOV.UK's** [guide to MoSCoW](https://team-playbook.design-system.service.gov.uk/guides/decision-making-techniques/), which sorts items into Must, Should, Could, and Won't, says the method needs "an accountable decision maker." In [UXPin's roundup of advice for new design system managers](https://www.uxpin.com/studio/blog/advice-to-new-design-system-managers/), Nina Jurcic describes the manager's day as close to a Product Owner's: gathering requirements, writing tickets, and prioritizing.

This is the product slice of the ownership question. [Decision governance](/ds101/decision-governance/) covers the RACI matrix that names an owner for every other recurring decision.

### Keep the roadmap to now, next, later

[Curtis](https://nathanacurtis.substack.com/p/what-s-will-your-design-system-deliver-4b81d41be0d4) says most roadmaps show "now, next and sometime in the near future," in sprint or monthly steps. A roadmap does three jobs: it shows commitment, which justifies funding; it makes priorities visible to product teams with competing interests; and it sets a rhythm teams can plan around. His advice is to "leave out the detail," because minor parts and the long tail of fixes drown it. A good roadmap passes his one-sentence test: "We are working on [this] now, [that] next, and the [other thing] sometime soon."

**GOV.UK's** [public roadmap](https://design-system.service.gov.uk/community/roadmap/) is a live example with three horizons: recently shipped, working on now, and future plans. Future plans carry no dates. The page says it exists to help "service teams prepare and plan their own work."

### Sort every request before you schedule it

[Curtis](https://nathanacurtis.substack.com/p/design-systems-support) sorts incoming cases into three kinds:

- **Immediate**: getting help, reporting a defect, asking for a compliance review. These need a fast reply.
- **Deliberative**: requesting a feature, proposing a contribution, asking for training. The requester needs to know "What can the system do, by when?" Triage declines it, starts it, or moves it to the backlog.
- **Generic**: feedback and general contact.

Keep the intake form light. For a feature request, Curtis asks whether it's new or an enhancement, whether the need is shared, and how urgent it is (this week, month, quarter, or year), then opens a discovery task. Defects add screenshots, reproduction steps, and versions. Once a request is a change to the system, [Component lifecycle](/ds101/component-lifecycle/) sorts it into the modification, addition, or removal lane and owns the criteria for each.

### Answer within a published response time

[Curtis](https://nathanacurtis.substack.com/p/design-systems-support) separates the first response ("we heard you") from the resolution, and recommends publishing a response time for the first. His survey caption says "60% of teams respond in a day or less," without giving the sample size or method. Triage can happen at the daily standup, in a weekly planning queue, or in a "Not Yet Prioritized" bucket, which is his own preference. Keep channels few: chat is "by far the preferred, most responsive and effective channel." He adds his own caveat: "I'm not an authority on customer service workflow."

**GOV.UK** turns this into a rota. The team publishes support hours, someone is on support each day, and that person pauses sprint work: "Whilst on support, it is preferable to pause sprint work and prioritise support tasks" ([GOV.UK](https://team-playbook.design-system.service.gov.uk/support/support-responsibilites/)). The playbook page was last reviewed in 2023 and flags itself as possibly out of date.

The sources don't agree on a number. Curtis says to publish one. **Fleet**, a product company whose handbook describes product-org process rather than design-system process, [unpacks every request within one week](https://fleetdm.com/handbook/product). **Nord** promises no number, only "as time permits" ([Nord](https://nordhealth.design/resources/support/)). Treat this as a range to choose from, not a standard.

### Say no with a reason and a local path

No source gives a word-for-word script for saying no, but several give the mechanics. Curtis's sample refusal points to a local path: "Given your urgency, your best bet is to make it locally in your product" ([Curtis](https://nathanacurtis.substack.com/p/design-systems-support)). His reasoning: the larger and more varied the adopter base, the less one team's emergency can drive the backlog. [Component lifecycle](/ds101/component-lifecycle/#give-local-work-a-path-to-graduate) covers how that local work can later graduate into the system.

Fleet's [product-group handbook](https://fleetdm.com/handbook/company/product-groups) treats no as "not now." A request that isn't prioritized "only means the feature has been rejected _at that time_." The decision owner tells the requester, who can bring it back to a future planning meeting. Fleet also commits that a de-prioritized story's requester is told "within 1 business day of the decision to de-prioritize the story." Fleet's [product design handbook](https://fleetdm.com/handbook/product) makes every unpacked request open with three lines: why the user asked, what they can do in the interim (or "No workaround."), and what happens eventually (or "No plans."). That puts a workaround and a stated plan into every answer, including a no.

**GitLab's** Pajamas design system offers a softer version: [classify the request](https://design.gitlab.com/contribute/contributing) as core, extended, or out of scope, then choose how much the system team supports it, from no support (the contributor owns it) to end-to-end. Support is reviewed every milestone and scaled back when work stalls, which "helps keep our capacity focused on active contributions." [Contribution models](/ds101/contribution-models/) covers how contributions flow once accepted.

Record the reason either way. **GOV.UK's** [decision guide](https://team-playbook.design-system.service.gov.uk/guides/decision-making-techniques/) asks for a rationale on every item so "the rationale can be revisited in the future, by any team member." [Decision governance](/ds101/decision-governance/) covers where those records live.

### Check capacity before you commit

Priority says what matters most. Capacity says what fits. **GitLab's** [capacity guide](https://handbook.gitlab.com/handbook/upstream-studios/product-design/workflow/capacity-management/), written for product designers rather than a design-system team, sets the order for when "more than one thing wants the same hour": committed milestone work, anything blocking someone else, and protected exploration come first. Research and stretch work come next, and backlog items last.

To estimate what fits, GitLab uses optional issue weights of 1, 2, 3, 5, 8, and 13, where "a weight of 8 or 13 indicates that the issue may be too large." Its capacity template averages the weight completed over the last three months and subtracts planned time off.

### Split the backlog by delivery step

[Curtis's Jira guide](https://nathanacurtis.substack.com/p/using-jira-for-design-systems-10ec31c3327e), drawn from his work with **Morningstar**, splits feature work into one story per step: Propose, Design, Code, Doc, and Publish. Each step has its own owner and definition of done, so a component that's designed but not documented shows up as unfinished. He groups epics into evergreen work (visual style, component fixes and additions, architecture, operations), formative work (strategy, early adopters, the doc site), and growth (new categories, major initiatives). Versions work as buckets: "Next Minor Release," "Not Yet Prioritized," and "Business as Usual." He calls Jira "an acquired taste."

The steps aren't linked by a parent issue. Each one is a top-level story named for the feature plus its step, like `Color [Propose]` or `Color [Doc]`, and templated sub-tasks sit under each step. A component's steps are found by name, not by hierarchy.

The sub-tasks are mostly reviews: "each task has different reviewers (for which we use subtasks)." Curtis's Jira guide gives a full sub-task list only for a new **Dialog**'s `[Propose]` story. His [earlier post on feature steps](https://nathanacurtis.substack.com/p/system-features-step-by-step-e69c90982630) gives the owner and definition of done for each step. That post calls Propose and Code "Discover" and "Build," and dates from 2017, when Sketch was the main design tool. Combined, a Dialog would run like this:

| Story | Owner | Done when |
|---|---|---|
| `Dialog [Propose]` | Contributor | Scoped, then agreed or declined |
| `Dialog [Design]` | Designer | Director approves; engineer can build it |
| `Dialog [Code]` | Developer | Designer and peer engineer review |
| `Dialog [Doc]` | Designer or dev | Technical editor reviews |
| `Dialog [Publish]` | Developer | Pages and links tested |

Steps can overlap, but they close in order, and Publish starts only after the rest are done. Curtis adds one assignment rule: "Don't preassign review subtasks." Assign each review sub-task when the review is ready to begin.

**GOV.UK** splits the same work by cycle instead. Each cycle's goal gets one epic issue with a brief and a list of what the cycle should deliver. GitHub sub-issues hold the tasks, spread across two repos: the design-system site for design and guidance, and Frontend for code. A label per component, shared across both repos, ties work on the same component together from one cycle to the next. The table compares the two setups.

| Level | Curtis | GOV.UK |
|---|---|---|
| Epic | Standing category | One cycle's goal |
| Story | One per fixed step | Free-form sub-issue |
| Link | Name in the title | Parent epic, label |

The [language navigation epic](https://github.com/alphagov/govuk-design-system/issues/5322) shows the steps without naming them. A sample of its 25 sub-issues:

| Step | Sub-issue |
|---|---|
| Research | Reach out to services with language switchers |
| Decide | Decide how to implement the language switcher |
| Design | Language Switcher design specs |
| Code | Create an accessible English/Welsh language switcher |
| Guidance | Draft guidance on using the language switcher |
| Review | Language switcher final review |

Releases get their own epic, created from a template with "Who needs to work on this" and "Done when" checklists ([Release v6.7.0](https://github.com/alphagov/govuk-frontend/issues/7663)). The difference shows in the docs. Curtis's fixed Doc step makes missing documentation visible by default. With free-form sub-issues, guidance tasks exist only if someone adds them. The language navigation epic has seven because the team added them.

The rhythm around the backlog varies. Curtis describes sprints with grooming, planning, and standups. **GOV.UK** runs [fixed-length, three-week cycles](https://team-playbook.design-system.service.gov.uk/how-we-work/delivery-cycle/) followed by a reflection week for show and tell, a retro, and planning the next cycle. [Fleet](https://fleetdm.com/handbook/company/product-groups) skips sprints, arguing that "batching work into fixed multi-week iterations creates unnecessary latency," and ships whatever is complete at each three-week release. Pick by team size and by how often adopters can absorb change. [Operating cadence](/ds101/operating-cadence/) covers the release rhythm and the channels around it.

## Choosing a prioritisation method

Start with the method that needs no tooling, and add structure only when the backlog outgrows it. The three methods below are sorted by how much setup they need. None of the sources gives a numeric scoring model such as RICE or WSJF for a design system, so treat any score as a local invention.

### Questions

**GOV.UK** [asks three sets of questions](https://team-playbook.design-system.service.gov.uk/how-we-work/how-we-prioritise/) about each item. *Should we do this?* covers strategy fit, keeping the product running, relevance, and user need. *Does it have value?* asks whether it helps many services and "Is it something only our team can or will do?" *Do we have capacity?* covers duration, skills, and how much is known. It's a checklist, not a score. It costs nothing to adopt and fits a team of any size. Nina Jurcic adds one input in the [UXPin roundup](https://www.uxpin.com/studio/blog/advice-to-new-design-system-managers/): watch which components are most used and valued, and expand those.

### Impact and effort

**Nord** [first decides which features aren't critical](https://nordhealth.design/backlog-prioritization-model), then ranks the rest on a 2×2: "Features that require the lowest effort for the highest impact go to the top of our backlog." Requests come from product teams, sales, QA, and customer support, and the product manager "prioritizes our backlog and defines the design system direction," seeking consensus between conflicting requesters. It fits a large backlog with many requesters. The page doesn't say who breaks a tie.

### Gate plus ranking

**Fleet's** [product groups](https://fleetdm.com/handbook/company/product-groups) admit a request only if it meets one of four criteria: a small UX improvement "that isn't quite a bug but it's so small that it's worthwhile," a contribution to the year's company or product-maturity goals, *core* work that serves the company's main purpose, or *context* work that's critical to a customer's buying decision. Core beats context unless the context item is a customer promise or a P0–P2 request. This is product-org process, not design-system process. It fits a system whose requests come straight from paying customers, and it costs a clear definition of "core" that everyone accepts.

## Common mistakes

- **Stuffing the roadmap with fixes and minor parts.** The commitments that justify funding get lost in the long tail ([Curtis](https://nathanacurtis.substack.com/p/what-s-will-your-design-system-deliver-4b81d41be0d4)).
- **Opening many intake channels and watching none.** Curtis recommends few channels, with chat as the main one ([Curtis](https://nathanacurtis.substack.com/p/design-systems-support)).
- **Not budgeting for support.** Curtis estimates informal support takes "consistently 20% or up to 50%" of daily time ([Curtis](https://nathanacurtis.substack.com/p/design-systems-support)). A plan that leaves no room for it slips every sprint.
