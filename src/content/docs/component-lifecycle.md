---
title: Component Lifecycle
reviewed: 2026-09-24
reviewIn: 24
---

Every component enters the system through a decision and should leave through one too. This page owns those decisions: how to sort a request, what a new component has to clear to get in, and when an existing one should go. [Release management](/ds101/release-management/) covers the mechanics of shipping and retiring it. [Decision governance](/ds101/decision-governance/) covers how the decision gets owned and recorded.

:::tip[Key takeaways]
- **Sort each request into a lane first.** Otherwise a new component gets reviewed like a quick bug fix, or the reverse.
- **Add a component only when 3+ teams need it.** Without a bar, the system grows by inertia instead of intent.
- **Remove components on clear triggers.** A system with no way to remove things only grows until it collapses.
:::

## The problem

The design-system-ops governance notes ([`knowledge-notes/component-governance.md`](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/component-governance.md)) warn that without deliberate decisions, "a design system accumulates components by inertia rather than by intent." A system with no way to remove things only grows, until it collapses under its own weight.

## Practices

### Sort each request into a lane first

Inayaili de León Persson's **Canonical** Vanilla Framework sorts every incoming change into one of three lanes before anything else happens (Brad Frost, *Atomic Design*, Chapter 5):

- **Modification**: feature additions, bug fixes, visual tweaks, or performance work on something that exists.
- **Addition**: a new pattern filling a gap, with explicit safeguards against bloat.
- **Removal**: deprecation shipped with advance notice, not a surprise.

Sorting first keeps a "should we add a new component" conversation from being argued like a five-minute bug-fix review, or the reverse. Additions and removals then go through the criteria below.

<div class="mermaid-wrap">

```mermaid
flowchart TD
  Req["Incoming request"] --> Q{Which lane?}
  Q -->|Modification| B{Breaking?}
  B -->|No| M["Quick review"]
  B -->|Yes| Maj["Major release<br/>deprecate first"]
  Q -->|Addition| A["Criteria for adding"]
  Q -->|Removal| R["Criteria for removing"]
```

</div>

A modification can still break adopters. Renaming a Dialog prop is a modification, but it's also a major release. Run it through the [criteria for a major release](/ds101/release-management/#criteria-for-a-major-release), and deprecate the old prop before you remove it.

An accepted addition follows the steps in [Product ownership](/ds101/product-ownership/#split-the-backlog-by-delivery-step), from Propose to Publish. The [Design-to-code contract](/ds101/design-to-code-contract/) sets what each stage has to meet before the next one starts. Large systems also release a new component in phases. **Atlassian** starts it in Early Access at `0.x` and moves it to Beta and then General Availability as it settles ([Release management](/ds101/release-management/#use-semver-as-the-impact-signal)).

The lane is the second sort. The first is the triage in [Product ownership](/ds101/product-ownership/), which sorts requests by how fast they need an answer. On **GOV.UK's** [Frontend tracker](https://github.com/alphagov/govuk-frontend/labels), both sorts are labels. Every new issue starts as `awaiting triage`. Triage adds a type, like `🐛 bug` or `feature request`, a component name such as `accordion`, and sometimes `⚠️ high priority`. GOV.UK has no lane labels, only `breaking change`, so the type label does the lane's job.

Three requests show how the lanes split the work:

| Request | Lane | Next |
|---|---|---|
| Dialog focus bug | Modification | Quick review |
| New Drawer | Addition | Criteria for adding |
| Retire old Modal | Removal | Trace usage first |

The Drawer either fails an early question, for example because it's really a Dialog variant, or it becomes a `Drawer [Propose]` story ([Product ownership](/ds101/product-ownership/) shows the steps). The Modal goes through the criteria for removing, but tracing its users comes first (see Common mistakes below). The sources don't say whether an accepted removal gets its own step stories or a single release task.

### Give local work a path to graduate

Most requests that fail the criteria below still need building. If the only options are "in the system" or "on your own," teams take the second one and the system never hears about it. [Brad Frost](https://bradfrost.com/blog/post/a-design-system-governance-process/) calls a component that "only really pertains to one specific product or use case" a snowflake. It goes on the product team's backlog, not the system's. The system team still sets guidelines for tracking snowflakes, so that "refactoring into the design system" is easier later.

Frost's [ecosystem model](https://bradfrost.com/blog/post/the-design-system-ecosystem/) adds a middle layer. Recipes are compositions of system components that a product or product family uses consistently but the whole organization doesn't. Product teams maintain and publish their own recipe libraries. The system team can "graduate" a recipe into the core "if it proves to be super successful," which makes the recipe layer "a little design system component incubator."

Graduating doesn't skip the bar. A recipe that's ready to move up goes through the criteria for adding, like any other addition. Its time as a recipe answers some of those questions with evidence: which teams actually used it, and whether they used it for the same user problem.

### Criteria for adding a component

Ask these in order. A proposal that fails an early question doesn't need a debate about the later ones.

1. **Is it actually new?** A new visual expression of something that exists, like a new button color, is usually a variant of the existing component, not a new one ([API Design](/ds101/api-design/)). If it's meant to replace an existing component, [GOV.UK](https://design-system.service.gov.uk/community/contribution-criteria/) asks for evidence that it's better.
2. **Do three or more teams need it now?** Dan Mall's threshold from [Pilot strategy](/ds101/pilot-strategy/): if three or more teams need it *right now*, it goes in. If only one team does, that team solves it on its own for now. This matches software's **rule of three**, from Martin Fowler's *Refactoring* (1999), credited there to Don Roberts. A pattern earns a shared abstraction the third time it shows up, once there's real evidence of the shape it needs. GOV.UK's evidence is concrete: screenshots of, or links to, versions already built in different services.
3. **Is it the same user problem each time?** [Cathy Dutton](https://alistapart.com/article/problem-with-patterns/) warns that reuse is usually measured from the organization's side, not the user's. A date picker shared by leisure travel booking and urgent medical scheduling looks identical, but one user is comparing options and the other needs the first available slot. State the user's goal without describing the interface. "Three teams want a date picker" fails. "Three teams need to help someone book the earliest slot" passes.
4. **Does it clear the quality bar?** It meets accessibility standards before shipping, not after. It's complete: states, responsive behavior, content guidance, and docs, not just the happy path. And it's worth the maintenance cost, since the system team carries it forever. The [design-to-code contract](/ds101/design-to-code-contract/) spells out what "complete" means at each stage.

The old refactoring rule applies here too: "Three strikes and you refactor," attributed to Don Roberts in Martin Fowler's *Refactoring* (1999).

The four questions don't all get asked at the same time. [GOV.UK](https://design-system.service.gov.uk/community/contribution-criteria/) splits its criteria into two gates. To be accepted, a proposal has to be *useful*, with "evidence that this component or pattern would be useful for many teams or services," and *unique*, not a copy of something already in the system. Only at publication does it have to be *usable* (tested with "a representative sample of users, including those with disabilities"), *consistent* with existing styles and code standards, and *versatile* enough for a range of services, like a date input that can ask for a year only, a month and year, or a full date. Questions 1 to 3 above make up the proposal gate, and question 4 is the publish gate. Splitting them lets a team accept a proposal before the work exists without implying it's ready to ship.

### Criteria for removing a component

Deprecate a component when any of these is true:

- a better alternative exists with a clear migration path
- usage is at or near zero
- accessibility debt can't be fixed
- maintenance cost outweighs its value
- it no longer fits the system's direction

Every deprecation needs a timeline and a migration path, not just a warning. **IBM's** Carbon is the standard reference for bundling deprecations with detailed migration guides. [Release management](/ds101/release-management/) covers the deprecate → migrate → remove sequence.

## Common mistakes

- **Deprecating a component without tracing its usage first.** Murphy Trueman warns that a component's riskiest users are often the invisible ones: low-priority internal tools nobody thinks to check. See [System Takeover](/ds101/system-takeover/) and [Dependency observability](/ds101/dependency-observability/) for how to find them, and [System inventory](/ds101/system-inventory/) for which system components render it.
- **Leaving candidates waiting with no exit.** From 2018, GOV.UK published new components as "Experimental," with the status to be lifted once research proved them. In 2023 the team checked and found it had "only ever added the experimental tag, never removed it." Nobody had defined the bar. One working group member asked: "what is that threshold? Is it three services?" GOV.UK [dropped the tag](https://github.com/alphagov/govuk-design-system/issues/3194) and pointed users to the research on each page instead. A candidate status needs a written way out, in both directions: graduating, or staying local as a snowflake on the product team's backlog. The sources don't set a review cadence for this.
