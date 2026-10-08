---
title: Start Here
---

This wiki covers the layer above day-to-day design system work: the operational and
architectural calls nobody hands you a manual for. Why split tokens into tiers? What
makes a component governed rather than just in a library? When does AI help, and when
does it add a new kind of mess?

It assumes you already know the basics of building and running a design system: not
just Figma libraries, but coded components, how they ship to production, and how a
team keeps them in shape.

:::caution[Scale these practices to your team]
Most of the practices here come from large organizations and design systems, such as
IBM Carbon, Wise, ITVX, Siemens iX, GOV.UK, Atlassian, and Salesforce Lightning, with
hundreds of engineers and designers. Not every practice fits every system. For a small
or mid-sized team, some approaches are more process than the problem needs. Take the
reasoning, and scale the practice to fit your team.
:::

## Sources

Every claim names the person or report it came from, with a link. Where sources agree,
the page says so. Where they disagree, both views stay. Ordered by how much of the wiki
draws on them:

- **Murphy Trueman**, `design-system-ops` toolkit: the backbone of the foundations and most
  governance pages, used as evidence for principles, not settings to copy
- **Nathan Curtis**, EightShapes: team models, contribution, component APIs, token
  naming, cadence
- **zeroheight's Design Systems Report** and **Figma's Design Executive Council**:
  survey data and company case studies
- **Ness Grixti**: contribution, onboarding, and Wise's multi-brand system
- **Romina Kavcic**: tokens as machine-readable assets, scoping AI access
- **Brad Frost**: governance decision trees and feedback loops
- **IBM Carbon**, **AWS Cloudscape**, **Atlassian**, **Microsoft**, **GitLab Pajamas**:
  published AI interaction patterns
- **Diana Wolosin**, **Shane P Williams**, **Jan Six**: documentation and context for
  AI agents
- **GOV.UK Design System**: accessibility strategy, contribution, and community rhythm
- **Supernova**: business cases, ROI, API durability, and versioning
- **Dan Mall**: pilot strategy
- **Amy Hupe** and **Inayaili de León**: getting people to contribute
- **Jina Anne**: cyclical team models and shared ownership
- **Nielsen Norman Group**: maturity assessment and heuristic evaluation
- **W3C**: WCAG, ARIA patterns, and the design tokens spec
- **Cathy Dutton**: what really deserves to be a shared pattern
- **Marianne Ashton-Booth**: stakeholder mapping and three-horizon planning
- **Radix Colors** and **Canonical** (Maximilian Blazek): accessible color scales
- **Workday Canvas**, **Radix Primitives**, **fourzerothree.in**, **story.to.design**:
  subcomponents in code and in Figma
- **Braid** (SEEK), **React Spectrum** (Adobe), and **Kent C. Dodds**: spacing between
  parts and guarding parts used outside their parent
- **Alice Packard**: what makes a Figma component easy for designers to use

The [Citations](/ds101/citations/) page collects every citation in one place.

## How to read a page

Every page has the same shape: a lead with the main takeaway, a **Key takeaways** box,
**The problem**, then **Practices** written as advice, so the "On this page" menu works
as a checklist. Some pages add **Choosing …** for real alternatives or **The model** for
a structure to understand first. Every page ends with **Common mistakes**.

## How the wiki is organized

1. **01. Strategy**: audit, pilot, take over an existing system, or assess its maturity.
2. **02. Foundations**: core concepts, token architecture and naming, accessible colors, Design-to-Code Contract, and platform divergence.
3. **03. Components**: specifications, composition in Figma and code, APIs, property naming, usability, and accessibility.
4. **04. Governance**: team and decision models, contribution, lifecycle, inventory, releases, cadence, onboarding, long-term scale, and case studies.
5. **05. Health**: adoption, performance, dependencies, and documentation coverage.
6. **06. Business**: value, ROI, brand, and stakeholder alignment.
7. **07. AI Integration**: readiness, context, documentation, governance, risk, Figma access, workflows, CI, output discipline, and UI patterns.

**Reference**: the glossary and citations.

Start with [Core Concepts](/ds101/core-concepts/), or jump to any
section from the sidebar. The [glossary](/ds101/glossary/) defines every term along the
way.
