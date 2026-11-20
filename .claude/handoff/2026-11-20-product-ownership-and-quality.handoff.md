---
status: active
created: 2026-11-20
completed:
---

# Handoff: product ownership, library releases, component QA

Research is done and the pages are not written yet. This file is the reference for writing them. It plans:

- one new page, `product-ownership.md`
- one new page, `component-qa.md`
- an extension to `release-management.md`
- small edits to `usability.md`, `design-to-code-contract.md` and `team-models.md`

**Why:** the coverage audit on 2026-11-20 (against design-system-owner roles) found that the guide covers versioning, API design, platform divergence and migration basics well. It has no page on running the system as a product (roadmap, backlog, intake, triage, saying no) and nothing on how a Figma library gets reviewed and published. The goal is personal knowledge for interviews that probe this. The guide is not evidence of skill (see `ds-jobs/profile/evidence-map.md`, R2).

Follow `CLAUDE.md` page conventions: page template, inline citations, `citations.md` entries with years, glossary entries, sidebar entry, and `reviewed` / `reviewIn` frontmatter.

---

## 0. Source status (read this first)

**Research boundary:** most sources below are from authors or orgs already in the pool: Curtis, GOV.UK team playbook, Figma Learn and UXPin. **Nord, GitLab (Pajamas + handbook) and Fleet were added to the pool with the user's approval on 2026-11-20** to fill the scoring, saying-no, cadence and release-notes gaps. Add them to `index.md`'s source list when the pages are written. Still outside the pool, not used: Adjust Atlas and CSS-Tricks' "nine states".

**Scale note for the new sources:** Fleet's handbook is product-org process, not design-system process. GitLab's handbook pages are product-design process; only the Pajamas pages are design-system process. Say so in the sentence when using them, per the voice rule on scale.

**Access note:** Medium (`medium.com/eightshapes-llc`) and `eightshapes.com` return 403/500 to automated fetches. Curtis mirrors every post on `nathanacurtis.substack.com/p/<same-slug>`; all notes below were read there. `citations.md` currently links some Curtis posts on Medium; keep whichever host the page already uses for that post, and use Substack for new ones.

**All sources were read in full on 2026-11-20 unless marked otherwise.** Dates are the displayed dates; Substack mirrors don't state the Medium original date.

| Key | Source | Date | Pool? |
|---|---|---|---|
| C-ROAD | Curtis, "Roadmaps for Design Systems" — `nathanacurtis.substack.com/p/what-s-will-your-design-system-deliver-4b81d41be0d4` | 2015 | yes |
| C-PROD | Curtis, "A Design System isn't a Project. It's a Product, Serving Products." — `.../a-design-system-isn-t-a-project-it-s-a-product-serving-products-74dcfffef935` | 2016 | yes (quoted via Atomic Design ch. 5 already) |
| C-JIRA | Curtis, "Using Jira for Design Systems" — `.../using-jira-for-design-systems-10ec31c3327e` | 2019 | yes |
| C-SUPP | Curtis, "Design Systems Support" — `.../design-systems-support` | 2020 | yes |
| C-LEAD | Curtis, "Design System Leader(s) & Manager(s)" — `.../design-system-leader-s-manager-s-3bfa49d79883` | 2017 | yes |
| C-TEAM | Curtis, "Designing a Systems Team" — `.../designing-a-systems-team-d22f27a2d81d` | 2017 | yes |
| C-CAD | Curtis, "Design System Release Cadence" — `.../design-system-release-cadence-2e3e6694ba21` | 2018 | **already cited** in `operating-cadence` |
| C-SHARED | Curtis, "Figma Shared Libraries" — `.../figma-shared-libraries-d2dfbf9d1b8d` | 2022 | yes |
| C-GEN | Curtis, "Adopting Design System Generations" — `.../adopting-design-system-generations-900535442a16` | 2024 | yes |
| C-QA | Curtis, "Component QA in Design Systems" — `.../component-qa-in-design-systems-b18cb4decb9c` | 2017 | yes |
| C-PLAN | Curtis, "Component Testing Plans" — `.../component-testing-plans-face830d7e44` | 2019 | yes |
| C-TFC | Curtis, "Testing Figma Components" — `.../testing-figma-components-a47fc978465f` | 2022 | yes |
| C-VTC | Curtis, "Component Visual Test Cases" — `.../component-visual-test-cases-e501e2d21def` | 2022 | yes |
| C-REV | Curtis, "The Figma Component Review" — `.../the-figma-component-review-f42114450b4d` | 2022 | **already cited** in `property-naming` / `figma-composition` |
| C-DONE | Curtis, "Doneness Matrices" — `.../doneness-matrices-c7f0a026365f` | 2010 | **already cited** |
| C-SPEC | Curtis, "Component Specifications" | 2023 | **already cited** in `specifications` |
| C-STATES | Curtis, "The Sorry State of States" | 2024 | **already cited** |
| GOV-PRI | GOV.UK team playbook, "How we prioritise" — `team-playbook.design-system.service.gov.uk/how-we-work/how-we-prioritise/` | living doc | yes (playbook in pool) |
| GOV-CYC | GOV.UK team playbook, "Delivery cycle" — `.../how-we-work/delivery-cycle/` | living doc (says 3-week cycle started Jan 2024) | yes |
| GOV-DEC | GOV.UK team playbook, "Decision making techniques" — `.../guides/decision-making-techniques/` | living doc | yes |
| GOV-SUP | GOV.UK team playbook, "Daily support responsibilities" — `.../support/support-responsibilites/` | last reviewed 2023-09-04; self-flagged as possibly out of date | yes |
| GOV-ROAD | GOV.UK Design System, "Roadmap" — `design-system.service.gov.uk/community/roadmap/` | updated 2026-10-21 | yes |
| UXP-MGR | UXPin, "Advice to New Design System Managers from 5 Experts" — `uxpin.com/studio/blog/advice-to-new-design-system-managers/` | 2023 | UXPin in pool; the 5 named contributors are new names (vendor content with product promo) |
| FIG-BR | Figma, "Branching in Figma" (best practices) — `figma.com/best-practices/branching-in-figma/` | n.d. | yes |
| FIG-BRL | Figma Learn, "Guide to branching" — `help.figma.com/hc/en-us/articles/360063144053` | living doc | yes |
| FIG-PUB | Figma Learn, "Publish a library" — `help.figma.com/hc/en-us/articles/360025508373` | living doc | yes |
| FIG-UPD | Figma Learn, "Review and accept library updates" — `help.figma.com/hc/en-us/articles/360039234193` | living doc | yes |
| NORD-PRI | Nord Design System, "Backlog Prioritization" — `nordhealth.design/backlog-prioritization-model` | living doc (n.d.) | **new, approved** |
| NORD-SUP | Nord Design System, "Support" — `nordhealth.design/resources/support/` | living doc (n.d.) | **new, approved** |
| PAJ-REL | GitLab Pajamas, "Release process" (UI kit) — `design.gitlab.com/get-started/uik-release-process` | living doc, updated 2026-10-09 | **new, approved** |
| PAJ-CON | GitLab Pajamas, "Contributing" — `design.gitlab.com/contribute/contributing` | living doc, updated 2026-09-15 | **new, approved** |
| PAJ-LIFE | GitLab Pajamas, "Contribution lifecycle" — `design.gitlab.com/contribute/lifecycle` | living doc, updated 2026-09-15 | **new, approved** |
| GL-OPS | GitLab Handbook, "Product Design Operations" — `handbook.gitlab.com/handbook/upstream-studios/product-design/operations/` | living doc | **new, approved** (read from the raw source in `gitlab-com/content-sites/handbook`, because the rendered page returns navigation only) |
| GL-CAP | GitLab Handbook, "Product Designer Priorities and Capacity Management" — `handbook.gitlab.com/handbook/upstream-studios/product-design/workflow/capacity-management/` | living doc | **new, approved** (raw source, same as above) |
| FLEET-PD | Fleet handbook, "Product design" — `fleetdm.com/handbook/product` | living doc (n.d.) | **new, approved** |
| FLEET-PG | Fleet handbook, "Product groups" — `fleetdm.com/handbook/company/product-groups` | living doc (n.d.) | **new, approved** (prioritisation section read verbatim from `fleetdm/fleet` `handbook/company/product-groups.md`) |

**Not readable / not found:** the Design Systems Collective post "Your design system won't work without prioritization" returned 403. Nord's impact/effort matrix is an image; its axis labels and scale weren't readable, so describe it as a 2×2 only. No source gives a word-for-word script for saying no: Fleet gives the mechanics, not the message. Treat the script as an **open question**.

---

## 1. New page: `product-ownership.md`

- **Title:** "Product Ownership". Use **Practice** page type.
- **Sidebar:** 04. Governance, after `team-models`.
- **Frontmatter:** `reviewed: <date written>`, `reviewIn: 24` (governance tier).
- **Lead, drafted from C-PROD:** a system's value only shows up when products ship with it, so someone has to run it like a product. That means deciding what comes next, saying so publicly, and handling requests case by case.
- **The problem:** use C-PROD's "no funded persistence" risk after launch (exact: "What do we do now?"). Add C-ROAD's responsive-images example: it sat in the "coming soon" column month after month because nobody with traction owned it (exact: "Responsive images stayed on the far right month after month after month."). Organisation not named.

### Practices (≤7, advice headings)

1. **Name one owner who decides priorities.** C-LEAD's Systems Lead job description has three hats: design/dev leadership, product management ("decisively resolve priorities, timing, risks and possible breaking changes", paraphrased) and project management/scrum mastery (owns backlog and roadmap, runs sprint planning, delivers releases at a predictable cadence). The lead "need not necessarily perform daily design and development tasks" (exact). C-PROD asks: who decides (a PM who "drives decisions"), who does the work (people committed >4 h/week), who pays. GOV-DEC's MoSCoW needs "an accountable decision maker" (exact wording: "require an accountable decision maker"). UXP-MGR (Nina Jurcic) describes the manager's day-to-day as close to a Product Owner's: gathering requirements, writing tickets, prioritising. Three sources agree that one named person must own the decision.
2. **Keep the roadmap to now, next, later.** C-ROAD: most roadmaps show "now, next and sometime in the near future" in sprint or monthly increments. A roadmap shows commitment (which justifies funding), makes priorities visible to products with competing interests, and sets a cadence teams can rely on. "Leave out the detail" (exact): minor parts and the long tail of fixes drown it. Test sentence (exact): "We are working on [this] now, [that] next, and the [other thing] sometime soon". Priority order for an established system: new sections or topics, then new important parts, then significant enhancements. GOV-ROAD is a live example (updated Oct 2026) with three horizons: "Recently shipped / Working on now / Future plans". Future plans are undated, and the page states its purpose as helping "service teams prepare and plan their own work" (exact). Both sources agree.
3. **Sort every request before you schedule it.** C-SUPP's case categories:
   - *Immediate:* get help, submit a defect, request a compliance review. These need a fast reply; silence strains the relationship.
   - *Deliberative:* request a feature, propose a contribution, request training. The customer needs to know "What can the system do, by when?" (exact). Triage declines it, activates it, or moves it to the backlog.
   - *Generic:* feedback, contact us.

   Link to `component-lifecycle`'s modification / addition / removal lanes, which own the add/remove criteria; don't duplicate them. Intake fields for a feature request stay light: new or enhancement, shared need, urgency (week/month/quarter/year), then a discovery task. Defects add screenshots, reproduction steps and versions.
4. **Answer within a published response time.** C-SUPP separates first response ("we heard you") from resolution and recommends publishing a response time. Its survey caption says "60% of teams respond in a day or less" (exact; sample size and method not given, so say so if you use it). Triage locations: daily standup, a weekly planning queue, or a "To Triage" / "Not Yet Prioritized" bucket (Curtis's favourite). GOV-SUP: published support hours, a daily support rota, and the rule that whoever is on support pauses sprint work (exact: "Whilst on support, it is preferable to pause sprint work and prioritise support tasks."). Keep channels few: chat is "by far the preferred, most responsive and effective channel" (exact, C-SUPP). Note Curtis's own caveat: "I'm not an authority on customer service workflow" (exact).
5. **Rank against strategy, value and capacity.** GOV-PRI's three question sets:
   - *Should we do this?* Strategy fit, keeping the product running, relevance, external factors, user need or long-standing pain point.
   - *Does it have value?* Benefits many services, "Is it something only our team can or will do?" (exact), benefits the team, opens future opportunities.
   - *Do we have capacity?* Duration, skills, role constraints, enough information.

   These are checklist questions, not a scoring model. GOV-DEC adds MoSCoW with a rationale recorded for every item, plus pre-mortems and risk-vs-benefit. UXP-MGR adds: monitor which components are most used and valued, and expand those. Two independent orgs agree on strategy fit and user need.

   **From the new sources (this practice may become a `## Choosing a prioritisation method` section if it outgrows one practice; apply the and/or test):**
   - *Impact/effort matrix (Nord, NORD-PRI).* Intake comes from product teams, sales, QA and customer support. First "we start by deciding what features aren't critical" (exact). Then: "Features that require the lowest effort for the highest impact go to the top of our backlog" (exact); high-effort, low-impact items sink. The PM "prioritizes our backlog and defines the design system direction" (exact) and seeks consensus between conflicting requesters. The page doesn't say who breaks a tie.
   - *Gate criteria plus a ranking rule (Fleet, FLEET-PG; read verbatim from the repo).* A request must meet one of four criteria:
     1. a small UX improvement "that isn't quite a bug but it's so small that it's worthwhile"
     2. contributes to company or product-maturity goals for the year
     3. *core*: directly serves the company's core purpose
     4. *context*: mission critical for a customer's buying situation

     Core beats context unless the context item is a customer promise or a P0–P2 request. Product-org process, not design-system process: say so.
   - *Capacity, not just priority (GitLab, GL-CAP).* The order when "more than one thing wants the same hour" (exact):
     - **Must:** committed milestone work, anything blocking someone else, protected exploration and vision work.
     - **Should:** research tasks, stretch issues, Pajamas contributions.
     - **Nice:** backlog items.

     Optional UX issue weights 1/2/3/5/8/13 ("A weight of 8 or 13 indicates that the issue may be too large", exact). Capacity template: average of weights completed over the last 3 months, minus planned time off. Good for the interview line "how do you know what fits in a sprint?"
   - Recommendation for the page: present GOV.UK's questions as the default (no tooling needed). Then impact/effort (Nord) when the backlog is large, and a gate-plus-ranking rule (Fleet) when the system serves paying customers' requests directly.
6. **Say no with a reason and a local path.** Thin sourcing: write this practice short. UXP-MGR says the manager must be confident to say "no" to requests that don't fit the system's strategy (paraphrase; no script given). C-SUPP's sample refusal (exact): "Given your urgency, your best bet is to make it locally in your product." Its reasoning: the larger and more varied the adopter base, the less one team's emergency can drive the backlog. GOV-DEC: record the rationale so "the rationale can be revisited in the future, by any team member" (exact), in a decision log, issue comment or design-history page. Link to `decision-governance`. Cross-check `contribution-models` before writing this: it may already own "documented local path".

   **New sources fill the mechanics:**
   - *Fleet (FLEET-PG, verbatim): "no" means "not now".* If a request isn't prioritised at the Feature Fest meeting, "it only means the feature has been rejected _at that time_" (exact). The decision owner notifies the requester, who can put it back on the board for a future meeting. The same applies when accepted work is later de-prioritised. Fleet's commitment (exact): "the prioritized user story will be delivered or the requester will be notified within 1 business day of the decision to de-prioritize the story." Urgent requests go to the Head of Product Design, who decides and, if prioritising, de-prioritises something else and notifies those requesters. This is the best-sourced answer to "how do you say no".
   - *Fleet (FLEET-PD): unpack the why before deciding.* Every request is "unpacked within one week" (exact). An unpacked request opens with three lines: *User requested this because*, *In the interim* (or "No workaround."), *Eventually* (or "No plans."). That structure forces a workaround and a stated plan into every answer, including a no.
   - *Pajamas (PAJ-CON, PAJ-LIFE): "no" as a level of support, not a rejection.* Each request is classified as core, extended or out of scope (or "pending classification"). It then gets a support level: no support (contributor owns it; default for extended), consult and review (default for core), task-specific, or end-to-end. Support is reviewed every milestone and scaled back when work stalls; the stated reason is that it "helps keep our capacity focused on active contributions" (exact). The lifecycle filter asks four questions: new or a variation, why existing elements don't cover it, useful beyond one case, feasible to maintain. If reuse is unclear, "wait until more evidence emerges before adding it" (exact). This overlaps `component-lifecycle` and `contribution-models`; link rather than repeat, and keep only the support-levels idea here.
   - *GitLab (GL-OPS): holding the line on quality.* When a PM wants to move an issue to build before it meets UX standards, the designer creates follow-on issues or applies a `Deferred UX` label. That's a recorded "not yet", not a block.
7. **Run the backlog in the team's existing cadence.** C-JIRA (Morningstar example):
   - Split feature work into separate stories per step: Propose, Design, Code, Doc, Publish. Each step has its own definition of done and owner.
   - Epics: evergreen (visual style; components: fix, enhance, deprecate, add; architecture; operations), formative (strategy, early adopters, doc site) and growth (new categories, major initiatives, stack shifts).
   - Versions as buckets: "Next Minor Release", "Not Yet Prioritized", "Business as Usual".
   - Ceremonies: grooming, planning, standup (2–3/week). Jira is "an acquired taste" (exact).

   GOV-CYC is the alternative: fixed-time, variable-scope 3-week cycles plus a reflection week (show and tell, retro, next-cycle planning), with squads formed around briefs prioritised by team leads. Note: neither GOV.UK page uses the word "Scrum". Possible snippet: none needed.

   **Three more data points from the new sources:**
   - *Fleet (FLEET-PG): continuous flow instead of sprints.* "batching work into fixed multi-week iterations creates unnecessary latency" (exact fragment). They ship what's complete at each three-week release. No story points or velocity; T-shirt sizes only for customer promises and risky work. Rituals: daily standup, weekly planning, weekly user-story review, a release demo and retro every 3 weeks. Board: Inbox → Drafting → Blocked → Ready → In progress → Ready for review → Awaiting QA → Ready for release → Done.
   - *GitLab (GL-OPS, PAJ-REL): monthly milestones.* Issues labelled `Deliverable` get a designer by milestone kickoff; `Stretch` may not. Designers add a "User Experience" section to the group's planning issue so design work is visible in planning. Pajamas releases at the end of each milestone, with non-breaking fixes shipped continuously.
   - *Nord (NORD-SUP):* no sprint cadence published. Weekly office hours (Fridays) where people bring "feature ideas" as well as bugs.

   The page can present three ways to plan: sprints (Curtis/Jira), fixed-length cycles (GOV.UK) and continuous flow with a release train (Fleet). Pick by team size and how often consumers can absorb change. Still open: none of the sources maps the Scrum roles (PO, Scrum Master, refinement, sprint review) to a design-system team. Fleet's "user story review" is the closest thing to refinement, and its release demo the closest thing to a sprint review.

### Common mistakes (source-grounded)

- Roadmap stuffed with fixes and minor parts (C-ROAD).
- Treating every request as urgent. Most can't be (C-SUPP).
- Opening many intake channels and watching none (C-SUPP).
- Informal support swallowing the week: Curtis estimates it at "consistently 20% or up to 50%" of daily time (exact, C-SUPP). Budget for it.
- Roadmap items with no owner who has traction in the org (C-ROAD's responsive images).

### Open questions (flag them, don't fill them)

- Still no source for a numeric scoring model (RICE/WSJF); Nord's 2×2 and GitLab's issue weights are the closest.
- Still no word-for-word "no" message; Fleet gives the mechanics (not now, notify, re-add, 1 business day).
- Still no design-system-specific mapping of Scrum roles (PO / SM / refinement / sprint review).
- Response times by source:
  - C-SUPP: publish one.
  - Fleet: one business day for a request, one week to unpack.
  - Nord: no number at all ("as time permits", exact).

  Present this as a range, not a standard.

### Glossary candidates

Intake, triage, roadmap horizon (now/next/later), support rota, MoSCoW.

---

## 2. Extend `release-management.md`: Figma library releases

`operating-cadence` already owns sprint-rhythm cadence (cites C-CAD). Don't repeat it. Add one `###` cluster or 2–3 practices on the **designer side** of a release. Page tier is 12 months; Figma behaviour is medium risk, so cite Figma Learn (living doc) for tool behaviour.

- **Merge on a branch, publish from main.** FIG-BRL: you can only publish to a library from the main file; branches must be merged first. FIG-BR: non-editors branch the library and request review "much like a pull request in code" (paraphrase of the page's analogy); editors approve, approve and merge, or suggest changes. Merged branches are archived with their comments, and undo goes through version history. C-SHARED (2022): "more teams are limiting main branch work to maintainer(s)", with contributors working on branches. Note FIG-BRL lists branching for Org, Enterprise, Education and Government plans, not Professional, while FIG-PUB lists publishing for Professional too. **Re-check the current plan table before writing.**
- **Write the reason in the publish description.** FIG-PUB: every publish prompts for a description, "a description of the library's purpose, or a summary of any decisions or changes" (exact). Subscribers see it when accepting updates and in version history. This is Figma's built-in place for release notes and rationale.
- **Expect subscribers to accept updates, not receive them.** FIG-UPD: subscribers get a blue badge and choose Update or Update all, with side-by-side or overlay comparison. Updates are not applied automatically. Consequence for the guide: a Figma "release" reaches files only when each consuming file accepts it. Pair this with the existing "Push every release to consuming teams" practice.
- **Decide whether Figma and code ship together.** C-CAD (2018, describes Sketch; say so in the sentence) has three mixing patterns:
  1. Code and docs are coupled, and the design toolkit updates less often.
  2. Toolkit and design docs ship biweekly while engineering ships code independently.
  3. Code ships biweekly and docs update anytime.

  Also from C-CAD: continuous-release teams (Atlaskit, FT Origami) see the design toolkit "lag or drift" from code. Hot fixes need "most steps of the ordinary release process plus a few special steps" (paraphrase) and must be merged back into ongoing branch work. Adobe Spectrum quote (exact): "We have clients building against specific timelines. They can't — and don't want to — constantly pull down UI updates."
- **Optional, from C-SHARED:** core, shared and local library tiers. Promote a feature to a shared library when "3+ teams/groups (including the library's maintainers) for 12+ months" need it (exact). It overlaps with `component-lifecycle`'s rule of three; link it, don't restate. Publishing and change communication are maintainer-only tasks; promotion to core is core-steward-only.

- **Write designer release notes in four categories (Pajamas, PAJ-REL).** This fills the release-notes gap. Pajamas releases its Figma UI kit at the end of each milestone. The minimum output is a release-notes update; there's no version number other than the milestone ("At the moment there's no formal version numbering other than the milestone number.", exact). Categories:
  - **Additions:** new components, icons, variants, illustrations.
  - **Enhancements:** improvements to Figma features, components, workflow, docs. A breaking change can also be an enhancement.
  - **Changes:** neutral or breaking changes, plus deprecations, including those landing next release.
  - **Fixes:** bugs and broken items.

  Writing rule (exact): "Use the simple present tense with an implied subject when adding to the release notes." For example "Adds itemName." / "Fixes itemName." A video accompanies the release where possible, showing changes, how to judge impact, and how to use new features. Compare with Keep a Changelog (already cited): same idea, fewer categories, written for designers. Fits next to "Sort the changelog into standard categories"; consider merging the two into one practice with a designer-side example.
- **Publish tokens first, then components (Pajamas, PAJ-REL).**
  - Library updates are published by a Design System team member "regardless of how minor" (exact).
  - Another designer reviews the change in a branch or draft first.
  - The tokens library is published as soon as a token branch merges, not at milestone end, because component branches can't bind to new variables until it's published.
  - Changes go in the publish description as a dashed list.
  - Community files are published after the org library.
  - Non-breaking fixes can ship any time in the milestone ("We favor continuous delivery", exact).

  This gives the guide a concrete publish order: tokens → components → community copies.

**Still open:** Pajamas's breaking-changes guide (`design.gitlab.com/get-started/uik-breaking-changes`) and release-notes page (`.../uik-release-notes`) weren't fetched. Read them when writing: they may hold a deprecation notice period and sample entries.

---

## 3. New page: `component-qa.md`

- **Title:** "Component QA" (or "Quality Gates"; check the glossary for conflicts). Use **Practice** page type with one `### Criteria for publishing a component`.
- **Sidebar:** 03. Components, after `usability`.
- **Frontmatter:** `reviewIn: 12` (component tier).
- **Ownership boundary:**
  - `design-to-code-contract` owns *what* "done" means at each stage.
  - `component-lifecycle` owns whether a component should exist.
  - This page owns **how you check** a component before it enters the Figma library or the coded library, and **who checks**.

  Link both ways.

**Lead:** quality is a promise the system makes to adopters, and it only holds if a second person checks against a written list before release. C-QA's opening (exact): "Ugh. We had documented neither what we check for nor how we QA. At all." This is a good block quote for The problem. Also from C-QA (exact): "Your answer must be better than 'We check stuff after we build it.'"

### Practices

1. **Write the checklist before you need it.** C-QA's eight areas (2017, web):
   1. visual quality via tokens
   2. sufficient states and variations
   3. responsiveness
   4. content resilience (too much, too little, none)
   5. composability
   6. functionality
   7. accessibility
   8. browser/device compatibility

   Usability testing is "extra credit" and doesn't gate release (exact: "We don't gate releases of an component — particularly the smallest ones — by usability testing."). C-REV (2022) is the Figma equivalent, with ten categories: metadata, anatomy, color styles, text styles, properties, content, spacing, layout, composition, behaviors. Each item is Pass / Fail / Not Applicable. Criteria must be specific (exact): "Criteria to "Test the props" or "Check colors" is too vague for testers to jump in and feel confident."
2. **Have someone other than the builder test it.** C-QA (exact): "Identify a predictable role expected to review each contribution." The builder self-checks first, a second person runs the list, and release is blocked until it passes. C-TFC's three models, each saying who fits:
   - "If you build it, you test it": solo or small teams.
   - "Builder(s) build → tester(s) test": dedicated or approving roles.
   - "I'll test yours, you test mine": larger teams.

   C-TFC's workflow: builder makes the test cases, optional critique, then a tester runs the review (assigned in Jira or Asana), comments, and validates fixes. C-REV gives the four steps: Prepare, Review, Retest and resolve, Complete.
3. **Test only once the API is stable.** C-TFC prerequisites: design handed off, API stabilised (names of elements, properties, options), most features built. Testing checks whether the asset displays what code displays. It does **not** check whether the design is right for users; that's usability.
4. **Stress content, not just variants.** This is where the "states and edge cases" topic lands; see §4. C-VTC case types:
   - properties: every combination, including deprecated ones
   - content: short, long, just right, wrong, colliding, missing (the element should collapse)
   - spacing: narrow by 1px at a wrap point
   - layout: fixed narrower and wider, hug, fill, themed containers
   - composition: slots with custom content

   C-PLAN's extras: dark/brand backgrounds, density sizes, touch, i18n/RTL (long German label, wider yen price; global header in German, Chinese, Arabic, Cyrillic).
5. **Keep test cases apart from documentation.** C-QA takeaway (exact): "Separate documentation from testing artifacts." That means a "kitchen sink" page beside the docs page, used for review and visual diffing. C-VTC: Figma test cases sit to the right of the variant grid. They work like Storybook stories and let reviewers confirm "edits change what you intend, and don't change anything else" (exact fragment).
6. **Grow the test plan one criterion at a time.** C-PLAN:
   - Per program increment (3–6 months), add criteria as columns beside the component list, each marked critical / yes / maybe / not pursued.
   - Basics from day one: kitchen sink, tokens reviewed by both disciplines, manual browser testing, linting.
   - Before launch: functional tests, visual regression (BackstopJS), unit tests, accessibility audit, SemVer and changelogs.
   - Out of reach for most teams: dedicated QA, automated cross-browser testing, component analytics.

   This connects to C-DONE's doneness matrix (rows = components, columns = criteria), already cited.
7. **Set how much Figma polish is enough.** C-TFC asks (exact): "How much quality is essential before publishing a component?" Code quality comes first. Going from 92% to 98% "good enough" might cost six months of two designers. "design assets are roadkill on the path to production experiences" (exact, partial). This is a counterweight to the checklist; keep it.

### Criteria for publishing a component (numbered, reviewer order)

Draft from C-REV's order, compressed:

1. Named and described consistently with code?
2. Anatomy and layers named per spec?
3. Every fill and text uses the most semantic token or style?
4. Properties, options and defaults match the code API?
5. Content stress cases pass?
6. Spacing and layout hold across sizes?
7. Slots and nested components reflow?
8. Accessibility checks passed? (C-QA/C-PLAN; C-REV has no a11y item)
9. Tester marked every item Pass or N/A, and fixes were retested?

### Common mistakes

- Publishing on the builder's own check only (C-TFC opening: a button shape that didn't grow with its label, a hardcoded style, an API that didn't match code).
- Vague criteria (C-REV).
- Testing in the docs page (C-QA).
- Polishing Figma for months while code waits (C-TFC).

### Freshness flags for `citations.md`

- C-QA 2017 and C-PLAN 2019 name IE/IE11 and BackstopJS: mark `Dated` for tool examples, keep them for principles.
- C-CAD 2018 describes Sketch: mark `Dated`.

### Open questions

- No source names a formal approver for publishing ("approving role" in C-TFC is the closest).
- No source says what happens when builder and tester disagree.
- C-REV has no accessibility item for Figma assets.

---

## 4. States and edge cases: already covered, small additions only

The audit flagged this as thin. That was **wrong**:

- `usability.md` → "Design every state against real data" and "Decide how long content behaves" (Trueman's five states: loading, empty, error, partial, overflow).
- `property-naming` / `figma-composition` already cite C-STATES (disabled as its own property, error with disabled, splitting prop-driven from interaction states).
- `design-to-code-contract` lists every state in the design contract.

Add only:

- In `usability.md`, one sentence + link: content stress is *tested* on the new `component-qa` page (C-VTC case types, C-PLAN i18n examples).
- Optionally, in `usability.md` or `property-naming`: C-STATES' state axes as a compact list (interactive; selected, with checkbox indeterminate making it a 3-option enum; disabled boolean; readonly boolean, where disabled wins over readonly; validation enum none/error/success; focus not modelled as its own prop). It also has the survey finding (exact): "No Figma assets supported plausible state combinations like readonly + focus or hover + error." **Check first** that `property-naming` doesn't already say this.
- C-SPEC's "Text wrapping / Overflow" spec section (what to expect with excessive content: truncation vs wrapping) fits `specifications.md` if it isn't there already.

---

## 5. Bonus (researched, not in the four asks): roles, for `team-models.md`

The "owner vs architect" question has **no source in the pool**. No source describes a design-system architect role or a decision-rights split. What exists:

- C-TEAM (2017), stage-3 team composition:
  - MUST have design and engineering
  - SHOULD have product management and leadership (vision, roadmaps, adoption monitoring, backlogs, scrums)
  - COULD have specialities (content, a11y, performance, SEO)
  - usually no QA or research

  The team needs "recognized authority from both design and engineering disciplines" (exact). Lessons: blend disciplines, half-time members have risks, rotate members while keeping some continuity, expect the team to shrink after a release.
- C-LEAD: the Systems Lead job description (see §1, practice 1).
- C-SPEC: only the design lead plus 1–2 senior designers edit the core spec file's main branch.

- **New, Fleet (FLEET-PG), verbatim.** This is the closest thing to a decision-rights split that any source gives:
  - the EM owns cadence and staffing
  - the Product Designer owns whether a story reaches Ready and its scope ("what is in, what is out, and what is deferred", exact)
  - the Tech Lead owns architecture and technical scope
  - QA owns acceptance criteria and readiness for release

  Rule (exact): "When two roles overlap, the named DRI has the final call." It's a product group, not a design-system team, but it maps directly onto an owner (scope) vs architect (technical design) split.

Possible addition to `team-models`: a short "Name who owns priorities and who owns architecture" practice, using Fleet's DRI split as the example and C-TEAM for why both disciplines need authority. No design-system source names an "architect" role; say so.

---

## 6. Interview use (personal, not for the guide)

Likely probes and where the answer will live:

| Probe | Page / practice |
|---|---|
| "How do you decide what goes on the roadmap?" | product-ownership: now/next/later; GOV-PRI questions |
| "A PO needs a component next week. What do you do?" | product-ownership: sort the request; say no with a local path (Curtis's sample line) |
| "How do requests reach you, how fast do you answer?" | product-ownership: published response time, support rota |
| "How do you run the DS backlog in scrum?" | product-ownership: Propose/Design/Code/Doc/Publish stories; GOV.UK cycles |
| "What has to be true before something enters the Figma library?" | component-qa: criteria list, second-person review |
| "How do you test edge cases?" | component-qa: content stress cases; usability: five states |
| "How do designers learn about a library change?" | release-management: publish description, accept-updates flow, push to teams |
| "Do Figma and code release together?" | release-management: C-CAD mixing patterns |
| "What do your release notes look like?" | release-management: Pajamas four categories, present tense |
| "How do you score/rank requests?" | product-ownership: GOV.UK questions → Nord impact/effort → Fleet core vs context |
| "How do you know what fits in a sprint?" | product-ownership: GitLab capacity order and issue weights |
| "Who decides, you or the architect?" | team-models: Fleet DRI split |

---

## Checklist for the writing session

- [ ] Re-read `CLAUDE.md` page conventions, plus `release-management.md` and `contribution-models.md` as template references
- [ ] Check `contribution-models`, `decision-governance` and `component-lifecycle` for overlaps before writing §1 practices 3 and 6
- [ ] Write `product-ownership.md` and add it to the sidebar (Governance)
- [ ] Write `component-qa.md` and add it to the sidebar (Components)
- [ ] Extend `release-management.md` (§2)
- [ ] Small edits to `usability.md`, `design-to-code-contract.md` and optionally `team-models.md` (§4, §5)
- [ ] `citations.md`: add every new source with its year and `Dated` tags where flagged
- [ ] `index.md`: add Nord, GitLab Pajamas/Handbook and Fleet to the named-source list (approved 2026-11-20)
- [ ] Read Pajamas `uik-breaking-changes` and `uik-release-notes` before writing §2
- [ ] `glossary.md`: add new terms
- [ ] Re-verify Figma plan availability for branching vs publishing before stating it
- [ ] `npm run build` passes; check on a phone-width viewport
- [ ] Set this handoff to `status: done`
