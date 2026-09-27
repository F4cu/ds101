---
title: Start here
---

This wiki covers the layer above day-to-day design system work: the operational and
architectural calls nobody hands you a manual for. Why split tokens into layers? What
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

- **Murphy Trueman**, *Design System Ops*: the backbone of the foundations and most
  governance pages, used as evidence for principles, not settings to copy
- **Nathan Curtis**, EightShapes: team models, contribution, component APIs, cadence
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

The [references](/ds101/references/) page collects every citation in one place.

## How to read a page

Every page has the same shape: a lead with the main takeaway, a **Key takeaways** box,
**The problem**, then **Practices** written as advice, so the "On this page" menu works
as a checklist. Some pages add **Choosing …** for real alternatives or **The model** for
a structure to understand first. Every page ends with **Common mistakes**.

## How the wiki is organized

1. **Getting started**: auditing, piloting, inheriting a system, assessing maturity.
2. **Foundations**: what a design system is, token layers, the design-to-code contract,
   and multiple platforms.
3. **Components**: composition, API design, and accessibility.
4. **Governance**: ownership, decisions, contribution, lifecycle, inventory, releases, cadence.
5. **Metrics**: adoption, performance in context, dependencies, doc coverage.
6. **Business alignment**: the business case, brand, and stakeholders.
7. **Agentic AI**: making the system usable by agents, designing agent workflows, and
   designing AI features in your product.

Start with [What a design system is](/ds101/what-a-design-system-is/), or jump to any
section from the sidebar. The [glossary](/ds101/glossary/) defines every term along the
way.
