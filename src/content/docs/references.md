---
title: References
---

Every source cited across the wiki, grouped by page, in reading order. Inline
citations within each page link the same sources at the point they're used — this page
exists so the reading list can be scanned or followed up on without the surrounding
prose.

Each entry ends with its publication year. "Living doc" marks documentation sites and
repositories that are updated continuously rather than published once, and "n.d." marks
a source with no findable date. A `Dated` tag marks a source that is old for its area
and describes tools or examples that have since changed. Older sources used only for principles aren't flagged.

## Foundations, token architecture, design-to-code contract

- Murphy Trueman, [`design-system-ops`](https://github.com/murphytrueman/design-system-ops) — `knowledge-notes/*.md`, the primary source for Part 1 and most of Part 2's governance mechanics. Living doc.
- [Nathan Curtis, "Component Contracts and Schemas"](https://nathanacurtis.substack.com/p/component-contracts-and-schemas), 2026: `READY_FOR_DEV` handoff, keeping contracts current, and ADRs
- Alla Kholmatova, *Design Systems: A Practical Guide to Creating Design Languages for Digital Products* (O'Reilly, 2017)
- [Jina Anne, "Design Systems are for People"](https://www.aiga.org/inspiration/talks/jina-anne-design-systems-are-for-people), AIGA, n.d.

## Component accessibility

- Murphy Trueman, `design-system-ops` — [`skills/accessibility-per-component/SKILL.md`](https://github.com/murphytrueman/design-system-ops/blob/main/skills/accessibility-per-component/SKILL.md), living doc: the five audit dimensions, the evidence rule, and the extended protocol for complex components
- Murphy Trueman, `design-system-ops` — [`sample-outputs/fixture-accessibility-per-component.md`](https://github.com/murphytrueman/design-system-ops/blob/main/sample-outputs/fixture-accessibility-per-component.md), living doc: the Tooltip sample audit
- Murphy Trueman, `design-system-ops` — [`skills/cicd-integration/SKILL.md`](https://github.com/murphytrueman/design-system-ops/blob/main/skills/cicd-integration/SKILL.md), living doc: automated accessibility scans in CI and what they can't cover
- [GOV.UK Design System, "Accessibility strategy"](https://design-system.service.gov.uk/accessibility/accessibility-strategy/), updated 2024: what the system can't guarantee, testing with assistive technology, the GDS 30% automated-testing figure, and research with disabled people
- [GOV.UK Design System, "Accessibility statement"](https://design-system.service.gov.uk/accessibility-statement), updated 2024: published known issues
- [Nathan Curtis, "'Accessible' Design Systems Don't Guarantee Accessible Products"](https://medium.com/eightshapes-llc/accessible-design-systems-dont-guarantee-accessible-products-3478e3a462ba), 2018: configure, compose, and customize as the adopter's three jobs, with Adam Rowe (Morningstar Design System) quoted on screen-reader testing
- [W3C, "Web Content Accessibility Guidelines (WCAG) 2.2"](https://www.w3.org/TR/WCAG22/), 2023
- [European Union, Directive (EU) 2019/882 (European Accessibility Act)](https://eur-lex.europa.eu/eli/dir/2019/882/oj), 2019 — applies from 28 June 2025
- [ETSI, EN 301 549 V3.2.1](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf), 2021 — the EAA's harmonised standard, referencing WCAG 2.1 AA

## Layout accessibility

- [Nathan Curtis, "Typography in Design Systems"](https://nathanacurtis.substack.com/p/typography-in-design-systems-6ed771432f1e), 2019: separating heading level from H tag
- [W3C, ARIA Authoring Practices Guide, "Landmark Regions"](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/), living doc: keeping all content in landmarks, and labelling landmarks that repeat
- [W3C, "Understanding Success Criterion 1.3.2: Meaningful Sequence"](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html), living doc: matching code order to visual order, and CSS positioning as a failure
- [GOV.UK Design System, "Page template"](https://design-system.service.gov.uk/styles/page-template/), living doc: the skip link, header, main, and footer frame
- [Carbon Design System, "UI shell header: Accessibility"](https://carbondesignsystem.com/components/UI-shell-header/accessibility/), living doc: the built-in header region and skip link, and the one-time annotation per product
- [Carbon Design System, "Keyboard accessibility"](https://carbondesignsystem.com/guidelines/accessibility/keyboard/), living doc: the default navigation order and landmarks
- [Cloudscape Design System, "Building accessible experiences"](https://cloudscape.design/foundation/core-principles/accessibility/Building-accessible-experiences/), living doc: heading hierarchy, code order, and the app layout component
- [Cloudscape Design System, "Static dashboard"](https://cloudscape.design/patterns/general/service-dashboard/static-dashboard/), living doc: ordering dashboard content by importance, and its accessibility guidelines
- [Cloudscape Design System, "Configurable dashboard"](https://cloudscape.design/patterns/general/service-dashboard/configurable-dashboard/), living doc: letting users rearrange dashboard items
- Murphy Trueman, `design-system-ops` — [`skills/accessibility-per-component/SKILL.md`](https://github.com/murphytrueman/design-system-ops/blob/main/skills/accessibility-per-component/SKILL.md), living doc: the landmark-regions check for components that fill a page region

## Component composition in code

- [Nathan Curtis, "Subcomponents"](https://medium.com/eightshapes-llc/subcomponents-753ce9f6600a), 2022
- [Nathan Curtis, "Slots in Design Systems"](https://nathanacurtis.substack.com/p/slots-in-design-systems), 2025
- [Nathan Curtis, "Configuration Collapse"](https://nathanacurtis.substack.com/p/configuration-collapse), 2026
- Brad Frost, *Atomic Design*, [Chapter 2](https://atomicdesign.bradfrost.com/chapter-2/), 2016 — atoms, molecules, organisms
- [Radix Primitives, "Composition"](https://www.radix-ui.com/primitives/docs/guides/composition), living doc — parts and the `asChild` pattern
- [Radix Primitives, "Dialog"](https://www.radix-ui.com/primitives/docs/components/dialog), living doc: the Dialog anatomy example
- [Workday Canvas Design System, "Compound Components"](https://github.com/Workday/canvas-kit/blob/master/modules/docs/mdx/COMPOUND_COMPONENTS.mdx), living doc: the compound Tabs example
- [MUI, "Button API"](https://mui.com/material-ui/api/button/), living doc: the `startIcon` slot prop

## Component composition in Figma

- [Nathan Curtis, "Architecting Subcomponents"](https://www.youtube.com/watch?v=NiDoqI_ZhvY), Schema by Figma, 2022
- [Figma, "Taking cues from code"](https://www.figma.com/blog/taking-cues-from-code/), 2022
- [story.to.design, "Subcomponents: How to make your design system more flexible"](https://story.to.design/blog/subcomponents-more-flexible-design-systems), 2022
- [fourzerothree.in, "Crafting Components with Subcomponents and Nested Instances"](https://www.fourzerothree.in/p/crafting-components-with-subcomponents), 2025
- [Nathan Curtis, "Component Contracts and Schemas"](https://nathanacurtis.substack.com/p/component-contracts-and-schemas), 2026: the 96-variant disabled example

## Multi-platform component specs

- [Nathan Curtis, "Component Specifications"](https://medium.com/eightshapes-llc/component-specifications-1492ca4c94c), 2023
- [Nathan Curtis, "Components as Data"](https://medium.com/@nathanacurtis/components-as-data-2be178777f21), 2025
- [Nathan Curtis, "The EightShapes Specs Figma Plugin"](https://nathanacurtis.substack.com/p/the-eightshapes-specs-figma-plugin-2892f21adc96), 2023
- [Nathan Curtis, "Component Contracts and Schemas"](https://nathanacurtis.substack.com/p/component-contracts-and-schemas), 2026: the `size` enum example
- [Design Tokens Community Group, "Design Tokens Specification Reaches First Stable Version"](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/), W3C, October 2025

## Platform divergence

- [Nathan Curtis, "Finding Platform Balance in a Design System"](https://medium.com/eightshapes-llc/finding-platform-balance-in-a-design-system-47eaae48de98), 2015
- [Nathan Curtis, "Component Contracts and Schemas"](https://nathanacurtis.substack.com/p/component-contracts-and-schemas), 2026
- [Nathan Curtis, "Reimagining a Token Taxonomy"](https://medium.com/eightshapes-llc/reimagining-a-token-taxonomy-462d35b2b033), 2022

## UI audit

- [Brad Frost, "Conducting an Interface Inventory"](https://bradfrost.com/blog/post/conducting-an-interface-inventory/), 2015
- [18F Methods, "Interface audit"](https://methods.18f.gov/decide/interface-audit/), living doc
- [Obvious University, "How to audit a design system"](https://university.obvious.in/product-design/design-system/how-to-audit-a-design-system), updated 2024
- [Nielsen Norman Group, "How to Conduct a Heuristic Evaluation"](https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/), 2023
- [Clearly Design, "Audit before you scaffold: meeting projects where they are"](https://clearly.design/articles/ai-ready-ds-3-design-system-audit), 2026

## Pilot strategy & launch prioritization

- [Dan Mall](https://danmall.com), living doc — Superfriendly; primary site for the pilots-and-scorecards methodology cited below via secondary write-ups
- [Dan Mall, via UXPin, "On Design Systems: Dan Mall of Superfriendly"](https://www.uxpin.com/studio/blog/design-systems-dan-mall-superfriendly/), 2017
- [Dan Mall, scorecard reproduced by Obvious University, "How to run a design system pilot"](https://university.obvious.in/product-design/design-system/how-to-run-a-design-system-pilot), updated 2024
- [Big Medium, "Design Systems: Pilots & Scorecards"](https://bigmedium.com/ideas/links/design-systems-pilots-scorecards.html), 2017 — summarizing Dan Mall's original pilots-and-scorecards article
- [Dan Mall, via NTT Data, "Design that scales: Unlocking design system success with Dan Mall"](https://launch.nttdata.com/insights/design-that-scales-unlocking-design-system-success-with-dan-mall), 2025
- [Dan Mall, "Dan Mall: creating a sustainable design system practice,"](https://ellessmedia.com/csi/dan-mall/) Content Strategy Interviews, 2023

## Team models, decision governance, component lifecycle & contribution models

- [Murphy Trueman, "The bidirectional design system: When code talks back to design"](https://blog.murphytrueman.com/the-bidirectional-design-system/), 2025
- Murphy Trueman, `design-system-ops` — [`knowledge-notes/design-to-code-contract.md`](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/design-to-code-contract.md) and [`executive-communication.md`](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/executive-communication.md), living doc: service levels for the core team
- [Nathan Curtis, "Team Models for Scaling a Design System"](https://medium.com/eightshapes-llc/team-models-for-scaling-a-design-system-2cf9d03be6a0), 2015
- [Nathan Curtis, "The Fallacy of Federated Design Systems"](https://medium.com/@nathanacurtis/the-fallacy-of-federated-design-systems-23b9a9a05542), 2024
- [Nathan Curtis, "Defining Design System Contributions"](https://medium.com/eightshapes-llc/defining-design-system-contributions-eb48e00e8898), 2020
- [Jina Anne, "The Salesforce Team Model for Scaling a Design System"](https://medium.com/salesforce-ux/the-salesforce-team-model-for-scaling-a-design-system-d89c2a2d404b), 2015 — Salesforce UX
- [Jina Anne, "Design Systems and Hybrids"](https://24ways.org/2017/design-systems-and-hybrids/), 24ways, 2017
- [Jina Anne, "There Is No Design System"](https://24ways.org/2019/there-is-no-design-system/), 24ways, 2019
- zeroheight, *Design Systems Report 2026* (147 practitioners) — [report.zeroheight.com](https://report.zeroheight.com)
- IBM Carbon — deprecation and migration-guide practice, cited as the standard reference for sunsetting. Living doc.
- Martin Fowler, *Refactoring: Improving the Design of Existing Code* (1999) — the rule of three, credited there to Don Roberts
- Chris Ballantine-Thomas, GOV.UK Design System, ["Iterating the GOV.UK Design System contribution model"](https://designnotes.blog.gov.uk/2023/05/31/iterating-the-gov-uk-design-system-contribution-model/), 2023
- Brad Frost, *Atomic Design* (2016), Chapter 5 — Inayaili de León Persson's Canonical Vanilla Framework (modification/addition/removal decision tree); Alex Schleifer and Jina Bolton quotes; Nathan Curtis's "living, funded product" line
- [Cathy Dutton, "The Problem with Patterns,"](https://alistapart.com/article/problem-with-patterns/) A List Apart, 2018
- [Ness Grixti, "Rethinking Contribution: Lessons from the Messy Middle of Design Systems"](https://nessgrixti.com/articles/rethinking-contribution-lessons-from-the-messy-middle-of-design-systems/), 2025
- [Design System Tactics, "RACI"](https://www.designsystemtactics.com/tactics/raci), 2025
- [DesignX, "Design System Governance: An Enterprise Guide"](https://designx.co/design-system-governance-enterprise/), n.d.

## Onboarding adopters

- Murphy Trueman, `design-system-ops` — [`skills/onboarding/SKILL.md`](https://github.com/murphytrueman/design-system-ops/blob/main/skills/onboarding/SKILL.md), living doc: the shared core and role sections, the first two weeks, and marking team policies to confirm
- [Ness Grixti, "Wise Design System Onboarding"](https://nessgrixti.com/portfolio/wise-design-onboarding/), n.d. — the self-serve Figma course

## Design system maturity

- [Huei-Hsin Wang, "Design-System Maturity: A 6-Dimension Framework,"](https://www.nngroup.com/articles/design-system-maturity/) Nielsen Norman Group, 2026

## Fostering contribution

- [Amy Hupe, "5 Lessons on Enabling Design System Contribution"](https://amyhupe.co.uk/articles/5-lessons-on-enabling-design-system-contribution/), 2019
- [Inayaili de León, "Design Systems: How to Foster Participation,"](https://www.youtube.com/watch?v=6xZHHHgTt9A) Design Systems London, 2018
- [Ness Grixti, "Rethinking Contribution: Lessons from the Messy Middle of Design Systems"](https://nessgrixti.com/articles/rethinking-contribution-lessons-from-the-messy-middle-of-design-systems/), 2025
- zeroheight, *Design Systems Report 2026*

## Component API design

- [Nathan Curtis, "Configuration Collapse"](https://nathanacurtis.substack.com/p/configuration-collapse), 2026
- [Supernova, "Building Durable Component APIs for Design Systems"](https://www.supernova.io/blog/building-durable-component-apis-for-design-systems), 2023
- [MUI, "API design approach"](https://mui.com/material-ui/guides/api/), living doc
- [Wealthfront Engineering, "Building Wealthfront's multi-platform design system"](https://eng.wealthfront.com/2022/05/10/building-wealthfronts-multi-platform-design-system/), 2022
- Murphy Trueman, `design-system-ops`, [`skills/metadata-schema-generator/SKILL.md`](https://github.com/murphytrueman/design-system-ops/blob/main/skills/metadata-schema-generator/SKILL.md), living doc: prohibited prop combinations
- [Murphy Trueman, "Slots and the control paradox"](https://murphytrueman.substack.com/p/slots-and-the-control-paradox), 2025: deciding what stays locked

## Component property naming

- [Nathan Curtis, "Crafting Component API, Together"](https://medium.com/eightshapes-llc/crafting-ui-component-api-together-81946d140371), 2021 `Dated` — predates Figma's boolean, text, and instance-swap properties (2022) and slots; cited for the principles, with tool details from Curtis's 2026 posts
- [Nathan Curtis, "Code Only" Props in Figma](https://nathanacurtis.substack.com/p/code-only-props-in-figma), 2026
- [Nathan Curtis, "Component Contracts and Schemas"](https://nathanacurtis.substack.com/p/component-contracts-and-schemas), 2026: `READY_FOR_DEV` in place of a handoff meeting
- [Supernova, "Building Durable Component APIs for Design Systems"](https://www.supernova.io/blog/building-durable-component-apis-for-design-systems), 2023: consistent names and the `src`/`image` exception
- [MUI, "API design approach"](https://mui.com/material-ui/guides/api/), living doc: boolean naming and defaults, boolean vs. enum
- [Figma, "Taking cues from code"](https://www.figma.com/blog/taking-cues-from-code/), 2022
- [Figma Learn, "Apply changes to instances"](https://help.figma.com/hc/en-us/articles/360039150733-Apply-changes-to-instances), living doc: which overrides carry across variants
- [Figma Learn, "Use slots to build flexible components in Figma"](https://help.figma.com/hc/en-us/articles/38231200344599-Use-slots-to-build-flexible-components-in-Figma), living doc: one slot property across variants
- [Murphy Trueman, "What your components look like as data"](https://blog.murphytrueman.com/what-your-components-look-like-as-data/), 2026: descriptive layer names and enum properties

## System inventory

- Murphy Trueman, `design-system-ops` — [`knowledge-notes/component-governance.md`](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/component-governance.md), living doc: token-to-component coupling, composition mapping, cross-system dependencies, and the eight lifecycle stages
- Murphy Trueman, `design-system-ops` — [`skills/codebase-index/SKILL.md`](https://github.com/murphytrueman/design-system-ops/blob/main/skills/codebase-index/SKILL.md), living doc: the generated inventory with token bindings, the uses/usedBy graph, and the Tooltip example
- [Romina Kavcic, "Gamechanger: Automatically sync design tokens from GitHub to Airtable"](https://learn.thedesignsystem.guide/p/gamechanger-automatically-sync-design), 2025
- [Romina Kavcic, "Building an Agentic Flows Inventory in Airtable"](https://learn.thedesignsystem.guide/p/building-an-agentic-flows-inventory), 2025
- [Nathan Curtis, "Reimagining a Token Taxonomy"](https://nathanacurtis.substack.com/p/reimagining-a-token-taxonomy-462d35b2b033), 2022: the component audit sheet, the proposed-tokens sheet, and the Airtable preference
- [Nathan Curtis, "The Figma Component Review"](https://nathanacurtis.substack.com/p/the-figma-component-review-f42114450b4d), 2022: the status and version check
- [Nathan Curtis, "Planning a Design System Generation"](https://nathanacurtis.substack.com/p/planning-a-design-system-generation-ce4120393557), 2024: the dependency chain and the generation's doneness matrix
- [Nathan Curtis, "Doneness Matrices"](https://nathanacurtis.substack.com/p/doneness-matrices-c7f0a026365f), 2010: the definition and when not to use one

## Release management: versioning, changelogs & migration guides

- [Nathan Curtis, "Versioning Design Systems"](https://medium.com/eightshapes-llc/versioning-design-systems-48cceb5ace4d), 2018
- [Supernova, "8 Examples of Versioning in Leading Design Systems"](https://www.supernova.io/blog/8-examples-of-versioning-in-leading-design-systems), 2024
- [Design Tokens Substack, "How to Manage Breaking Changes in Design Tokens"](https://designtokens.substack.com/p/how-to-manage-breaking-changes-in), 2026
- [zeroheight, "Handling breaking changes in a design system without causing chaos"](https://zeroheight.com/blog/handling-breaking-changes-in-a-design-system-without-causing-chaos/), 2026 — Shaun Bent
- [zeroheight, "Deprecating in design systems: When it's time to say goodbye"](https://help.zeroheight.com/hc/en-us/articles/36474257606555-Deprecating-in-design-systems-When-it-s-time-to-say-goodbye), n.d.
- [Carbon Design System, migration guide](https://v10.carbondesignsystem.com/help/migration-guide/design/), archived v10 docs, n.d. `Dated` — Carbon v11 replaced v10 in 2022
- [Keep a Changelog](https://keepachangelog.com), living doc
- [UXPin, "How to Create a Design System Changelog"](https://www.uxpin.com/studio/blog/how-to-create-a-design-system-changelog/), 2025

## Dependency observability

- [Murphy Trueman, "We know how to build design systems, but we don't know how to operate them"](https://blog.murphytrueman.com/we-know-how-to-build-design-systems-but-we-dont-know-how-to-operate-them/), 2026
- Spotify Encore — daily version-usage statistics and slot/prop-override analytics, referenced via [Murphy Trueman](https://blog.murphytrueman.com/we-know-how-to-build-design-systems-but-we-dont-know-how-to-operate-them/) (2026) and [Figma, "How Spotify's design system goes beyond platforms"](https://www.figma.com/blog/creating-coherence-how-spotifys-design-system-goes-beyond-platforms/) (2023)
- [Dependency-Track documentation](https://docs.dependencytrack.org/), living doc — SBOM-based component analysis, the supply-chain-security analogue of this practice

## Governance case studies

- [Ness Grixti, "Wise Multi-Brand Design System — Case Study"](https://nessgrixti.com/portfolio/wise-multi-brand/), n.d.
- zeroheight, *Design Systems Report 2026*
- Figma / Design Executive Council — Grammarly champions-network anecdote, via "The new business case for design systems" (2026)
- [Chris Ballantine-Thomas, "Iterating the GOV.UK Design System contribution model"](https://designnotes.blog.gov.uk/2023/05/31/iterating-the-gov-uk-design-system-contribution-model/), 2023

## Scaling across decades

- [Kathrin Schalber, "UXT to Siemens Industrial Experience Migration"](https://ix.siemens.io/blog/2025/09/31/uxt-eos), Siemens iX blog, October 2025
- [Siemens iX documentation](https://ix.siemens.io/docs/home/overview) and [Siemens iX on GitHub](https://github.com/siemens/ix), living docs — open-source, multi-framework (React, Angular, Vue, Blazor) design system
- David Sward, "Solving the Design System Problem When Products Live for Decades," UXDX EMEA 2026 — cited from the published session description; no public transcript or recording was available at time of writing, so claims drawn from it are flagged inline as his framing rather than independently verified

## Inheriting a legacy system

- [Murphy Trueman, "Design system archaeology"](https://blog.murphytrueman.com/design-system-archaeology/), April 2026
- [Nathan Curtis, "Adopting Design System Generations"](https://nathanacurtis.substack.com/p/adopting-design-system-generations-900535442a16), 2024
- Amy Hupe, "Renovating a design system: Why modernization should feel like turning dials, not flipping switches," zeroheight blog, June 2026 — cited from title/framing only; the post's body text was not retrievable at time of writing

## Communication

- [Nathan Curtis, "Design System Communications"](https://medium.com/eightshapes-llc/design-system-communications-ca679ffc36d3), 2019
- [Nathan Curtis, "Design System Release Cadence"](https://medium.com/eightshapes-llc/design-system-release-cadence-2e3e6694ba21), 2018
- [Nathan Curtis, "Stewarding Design System Contributions"](https://medium.com/eightshapes-llc/stewarding-design-system-contributions-817665b6c7dd), 2020
- [Twilio Paste, GitHub Discussions: Office Hours](https://github.com/twilio-labs/paste/discussions/categories/office-hours), living doc
- [GOV.UK Design System, "A guide to the design system monthly chat"](https://team-playbook.design-system.service.gov.uk/community/a-guide-to-the-design-system-monthly-chat), living doc
- [Acorn Design System (Mozilla), "Office hours"](https://acorn.firefox.com/latest/support/help-and-support/office-hours-UePgrNIe), living doc
- Brad Frost, *Atomic Design* (2016), Chapter 5 — office hours, state-of-the-union meetings, the Shyp/Micah Sivitz PR-notification example
- [Figma / Design Executive Council, "The Future of Design Systems is Marketing"](https://www.figma.com/blog/the-future-of-design-systems-is-marketing/), 2024 — Spotify, News UK examples
- [Catriona Shedd, "Design Systems Ambassador at Salesforce"](http://www.catrionashedd.com/portfolio/design-systems-ambassador-at-salesforce/), n.d.
- [Omlet, "Scaling adoption and advocacy for an enterprise-wide design system with Guy Segal"](https://omlet.dev/blog/scaling-design-system-adoption-and-advocacy-with-guy-segal/), 2024 — Thomson Reuters ambassador pods
- zeroheight, *Design Systems Report 2026* — staffing data

## Measuring adoption

- [Murphy Trueman, "The component adoption gap: understanding the psychology behind design system success"](https://murphytrueman.substack.com/p/the-component-adoption-gap-understanding), 2025
- zeroheight, *Design Systems Report 2026*
- David Vera / zeroheight help centre, "How to measure the dev side of a design system," n.d. — Pinterest FigStats, Atlassian's adoption scanner
- [Productboard, "How we measure adoption of a design system at Productboard"](https://www.productboard.com/blog/how-we-measure-adoption-of-a-design-system-at-productboard/), 2021
- [Mews Developers, "Building a design system adoption metric from production data"](https://developers.mews.com/design-system-adoption-metric-building/), 2025
- [Ness Grixti, "The Hidden Work Behind Design System Adoption"](https://nessgrixti.com/articles/the-hidden-work-behind-design-system-adoption/), 2025

## Documentation coverage

- zeroheight, *Design Systems Report 2026*
- [Ness Grixti, "The Hidden Work Behind Design System Adoption"](https://nessgrixti.com/articles/the-hidden-work-behind-design-system-adoption/), 2025
- [Ness Grixti, "Wise Design System Onboarding"](https://nessgrixti.com/portfolio/wise-design-onboarding/), n.d.

## Communicating value, estimating ROI & business alignment

- zeroheight, *Design Systems Report 2026*
- [Figma / Design Executive Council, "The new business case for design systems"](https://www.figma.com/blog/the-new-business-case-for-design-systems/), 2026 — Freshworks, SAP, Hyundai Motor Group, Grammarly, Linear, Notion examples
- [Supernova, "Getting Executive Buy-In and Proving ROI of Design Systems"](https://www.supernova.io/blog/getting-executive-buy-in-proving-roi-design-systems), 2024 — interviews with Lauren LoPrete (Cash App) and PJ Onori (Instacart)
- [Supernova, "How to Build a Business Case for Your Design System"](https://www.supernova.io/blog/how-to-build-a-business-case-for-your-design-system), 2024
- [Mike Fortuna, "How I Calculated the Business Case for a Design System"](https://medium.com/@m4tuna/how-i-calculated-the-business-case-for-a-design-system-549def283eb5), 2024: the per-component cost formula and button example
- [Adobe XD, "20 levers for communicating the value/ROI of design"](https://xd.adobe.com/ideas/perspectives/leadership-insights/20-levers-communicating-value-roi-design), 2020
- Murphy Trueman, `design-system-ops` — [`knowledge-notes/executive-communication.md`](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/executive-communication.md), living doc: labelled figures, one loaded rate, and payback from running totals; growth, risk, and cost framing, phased asks, and following a proposal to a decision
- Nathan Curtis, quoted in Brad Frost, *Atomic Design* (2016), Chapter 5 — "a living, funded product with a roadmap & backlog"

## Brand alignment

- [userQ, "Design Systems vs. Brand Guidelines"](https://userq.com/design-systems-vs-brand-guidelines-understanding-the-key-differences/), 2025
- [Ness Grixti, "Wise Multi-Brand Design System — Case Study"](https://nessgrixti.com/portfolio/wise-multi-brand/), n.d. — also cited in [Governance case studies](/ds101/governance-case-studies/)
- [DHL Brand Hub](https://www.dpdhl-brands.com/en/group/), living doc; [MetaDesign — DHL](https://metadesign.com/en/work/dhl), 2019 — brand-management platform, cited as a boundary example rather than a design-system case study

## Stakeholder alignment & planning horizons

- [Marianne Ashton-Booth, "From Silos to Systems"](https://marianneashtonbooth.com) — UXDX Berlin 2026 talk; ITVX Mosaic design system case study, stakeholder influence/frequency quadrant, Now/Next/Future planning horizons, LeanDS framework
- [Marianne Ashton-Booth, "LeanDS Framework"](https://marianneab.substack.com/p/leands-framework), 2024 — `marianneab.substack.com`
- Stafford Beer, *Diagnosing the System for Organisations* (1985) — the Viable System Model, applied to design systems by Ashton-Booth
- Simon Sinek's Golden Circle (Why/How/What), from *Start With Why* (2009), applied to stakeholder levels by Ashton-Booth
- zeroheight, *Design Systems Report 2026*

## AI readiness, governance under AI consumption, agentic workflow design, AI output discipline, scaling AI effort

- [Romina Kavcic, "Design tokens that AI can actually read"](https://learn.thedesignsystem.guide/p/design-tokens-that-ai-can-actually), 2025
- [Romina Kavcic, "Should you build an agent for your design system"](https://learn.thedesignsystem.guide/p/should-you-build-an-agent-for-your), 2026
- [Murphy Trueman, "Your next design system user is an agent"](https://blog.murphytrueman.com/your-next-design-system-user/), 2025
- [Murphy Trueman, "Your design system is fragmenting into agent files"](https://blog.murphytrueman.com/your-design-system-is-fragmenting-into-agent-files/), 2026: the Storybook Component Manifest and its MCP add-on
- Murphy Trueman, `design-system-ops` — `knowledge-notes/ai-readiness.md`, `agent-orchestration-guide.md`, `output-discipline.md`, `mcp-setup-guide.md`. Living doc. In September 2026 the MCP guide's middle layer changed from a system MCP server to repo files with an `AGENTS.md` entry point.
- [Romina Kavcic, "5 MCP Connections Every Design System Team Needs Right Now"](https://learn.thedesignsystem.guide/p/5-mcp-connections-every-design-system), 2025
- [Shane P Williams, "Legibility Is the New Governance"](https://designsystemscollective.substack.com/p/legibility-is-the-new-governance), 2026 — Design Systems Collective
- [Shane P Williams, "The Informal Contract Is Over"](https://designsystemscollective.substack.com/p/the-informal-contract-is-over), 2026 — Design Systems Collective
- [Shane P Williams, "Drift Doesn't Announce Itself"](https://designsystemscollective.substack.com/p/drift-doesnt-announce-itself), 2026 — Design Systems Collective
- [Shane P Williams, "The Job Nobody Is Hiring For Yet"](https://designsystemscollective.substack.com/p/the-job-nobody-is-hiring-for-yet), 2026 — Design Systems Collective

## CI for agentic workflows

- [GitHub, "Safe Outputs"](https://github.github.com/gh-aw/reference/safe-outputs/), living doc — GitHub Agentic Workflows documentation
- [Sil Bormüller, "Your Design System Is Not Ready for AI Agents"](https://www.intodesignsystems.com/blog/design-system-not-ready-for-ai-agents), 2026 — conference write-up carrying Romina Kavcic's CI trust-tier framework, Jan Six's GitHub Primer safe-outputs example, and Diana Wolosin's Indeed pipeline figures, from the AI Design Systems Conference 2026
- Murphy Trueman, `design-system-ops` — `knowledge-notes/ai-readiness.md`. Living doc.

## Context engineering, documentation for agents, agentic UI patterns, generative loops

- [Diana Wolosin, "Design Systems for AI: Introducing the Context Engine"](https://www.designsystemscollective.com/design-systems-for-ai-introducing-the-context-engine-777726da6a01), n.d.
- Murphy Trueman, `design-system-ops`, [`skills/metadata-schema-generator/SKILL.md`](https://github.com/murphytrueman/design-system-ops/blob/main/skills/metadata-schema-generator/SKILL.md), living doc: per-value `semantic` guidance in component metadata
- [Romina Kavcic, "Design tokens that AI can actually read"](https://learn.thedesignsystem.guide/p/design-tokens-that-ai-can-actually), 2025: the token `meta` example
- Diana Wolosin — benchmark of 8 MCP configurations against 1,056 prompts at Indeed, referenced via [Into Design Systems conference](https://www.intodesignsystems.com/), 2026
- [Jan Six, Into Design Systems conference, "Build design systems with agents"](https://www.intodesignsystems.com/agenda/build-design-systems-with-agents), 2026
- [Carbon Design System, "Carbon for AI"](https://carbondesignsystem.com/guidelines/carbon-for-ai/), living doc
- [AWS Cloudscape, "User-authorized actions"](https://cloudscape.design/gen-ai/patterns/user-authorized-actions/), living doc
- [AWS Cloudscape, "Response regeneration"](https://cloudscape.design/gen-ai/patterns/response-regeneration/), living doc
- [GitLab Pajamas, "AI-human interaction"](https://design.gitlab.com/patterns/ai-human-interaction/), living doc — patterns explicitly flagged by GitLab as still in development
- [Atlassian, "Atlassian Design System: building the context engine for the AI era"](https://www.atlassian.com/blog/ai-at-work/atlassian-design-system-building-the-context-engine-for-the-ai-era), 2026
- [Microsoft Learn, "Human-centered design for agents"](https://learn.microsoft.com/en-us/agents/design-guidelines/human-centered-design), living doc — flagged on the source page as AI-generated content on an official Microsoft doc, not an individually authored piece

## Figma access for agents

- [Nathan Curtis, "Figma Component Specs on Command"](https://nathanacurtis.substack.com/p/figma-component-specs-on-command), 2026: MCP vs. mechanical extraction, the button and action list compression figures, AI downstream of specs
- [Directed Edges, `specs`](https://github.com/DirectedEdges/specs), living doc: `specs-cli` setup, personal access token, and licensing
- [Sil Bormüller, `figma-cli` README](https://github.com/silships/figma-cli/blob/main/README.md), living doc: connection modes, the self-measured token comparison with API-based MCP, and the `snapshot`/`check` commands
- [Sil Bormüller, `figma-cli` SECURITY.md](https://github.com/silships/figma-cli/blob/main/SECURITY.md), living doc: what each connection mode touches

## Tooling

Vendor docs and pricing pages, used only for plan, seat, and license details.

- [Figma Learn, "Code Connect"](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect), living doc: Organization and Enterprise plans, Full or Dev seat
- [Figma Learn, "Guide to the Figma MCP server"](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server), living doc: remote vs. desktop server availability
- [Figma Learn, "Claude Code and Figma: Set up the MCP server"](https://help.figma.com/hc/en-us/articles/39888612464151-Claude-Code-and-Figma-Set-up-the-MCP-server), living doc: the Figma plugin for Claude Code
- [Figma Learn, "Figma skills for MCP"](https://help.figma.com/hc/en-us/articles/39166810751895-Figma-skills-for-MCP), living doc: the skill list, and the Organization or Enterprise requirement for `figma-code-connect`
- [Figma Developer Docs, "Write to canvas"](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/), living doc: Full seat to write, Dev seat read-only
- [Figma, "Agents, Meet the Figma Canvas"](https://www.figma.com/blog/the-figma-canvas-is-now-open-to-agents/), 2026: free during beta, usage-based later
- [Figma Developer Docs, "Rate limits & access" (MCP server)](https://developers.figma.com/docs/figma-mcp-server/rate-limits-access/), living doc
- [Figma Developer Docs, "Rate limits" (REST API)](https://developers.figma.com/docs/rest-api/rate-limits/), living doc: Starter plan file-read limits
- [Figma Developer Docs, "Variables"](https://developers.figma.com/docs/rest-api/variables/), living doc: Enterprise only
- [Figma Developer Docs, "Library Analytics"](https://developers.figma.com/docs/rest-api/library-analytics-intro/), living doc: Enterprise only
- [Figma Learn, "View and explore library analytics"](https://help.figma.com/hc/en-us/articles/360039238353-View-and-explore-library-analytics), living doc: Organization and Enterprise plans
- [Tokens Studio documentation](https://docs.tokens.studio/), living doc: Pro-only features
- [Specs plugin documentation](https://www.specsplugin.com/), living doc: Pro features
- [Style Dictionary](https://styledictionary.com/), living doc
- [Terrazzo](https://terrazzo.app/), living doc: MIT license
- [Storybook, "Manifests"](https://storybook.js.org/docs/ai/manifests), living doc: AI features in preview
- [GitHub Agentic Workflows](https://github.github.com/gh-aw/), living doc: supported engines and billing
- [Claude Code, "Advanced setup"](https://code.claude.com/docs/en/setup), living doc: required plans
- [Chromatic pricing](https://www.chromatic.com/pricing), living doc: free plan snapshot allowance, paid plan prices
- [Changesets](https://github.com/changesets/changesets), living doc: MIT license
- [Airtable pricing](https://airtable.com/pricing), living doc
- [PostHog pricing](https://posthog.com/pricing), living doc

## A note on sourcing discipline

Every claim on this site is attributed to a specific person, post, report, or named
company outcome — not to "the industry" or an unnamed consensus. Where two sources agree
independently, that's noted as two people reaching the same conclusion separately, not
merged into one voice. Where they disagree, both positions are left standing. If a page
needed a claim none of its sources actually support, it says so as an open question
rather than inventing an answer. See [Start here](/ds101/) for the full framing.
