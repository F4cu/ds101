---
title: UI Audit
reviewed: 2026-09-16
reviewIn: 24
---

Audit what already exists before you design what should replace it. Two separate exercises come before the first token or component: an **interface inventory**, which catalogs every distinct UI treatment already shipping, and a **heuristic evaluation**, an expert usability review against a fixed set of principles. The inventory answers "what do we have, and where is it inconsistent?" The evaluation answers "where does it break known usability principles?"

:::tip[Key takeaways]
- **Inventory every treatment before designing anything.** Skip it, and discovery moves into implementation, where gaps come back as blockers.
- **Catalog first, and judge in a separate pass.** Mixing the two turns the evidence into one person's redesign preferences.
- **Check heuristic findings with real users.** An expert review is a judgment, not evidence from users.
:::

## The problem

Skipping the audit doesn't remove the discovery work. It moves it into the middle of implementation, where the same gaps and inconsistencies come back as blockers instead of inputs. That's the argument in [Clearly Design's "Audit before you scaffold"](https://clearly.design/articles/ai-ready-ds-3-design-system-audit).

[Brad Frost](https://bradfrost.com/blog/post/conducting-an-interface-inventory/) frames the inventory as groundwork for a design system, not general housekeeping. Breaking existing pages into their component parts puts redundant, inconsistent treatments side by side. That gives a team concrete material, not opinion, to show stakeholders why a shared system is worth building.

Heuristic evaluation comes from a different lineage: Jakob Nielsen and Rolf Molich's usability-inspection method. A small panel of evaluators judges an interface against fixed principles instead of testing it with users. [Nielsen Norman Group](https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/) is explicit that it's fast and cheap compared to user research, useful for catching obvious problems early, and *not* a substitute for user research.

## Practices

### 1. Inventory every distinct treatment

Frost's method: screenshot each distinct treatment of each UI element (a button with a bevel versus one without, not every button on every page). Then lay them out by category, so near-duplicates sit next to each other. His recurring example is a bank site with a dozen unrelated button styles, versus a site like Etsy where the same few patterns repeat everywhere. The inventory makes that contrast undeniable instead of a matter of taste.

### 2. Catalog without judging

[Obvious University's audit sequence](https://university.obvious.in/product-design/design-system/how-to-audit-a-design-system) makes this an explicit rule. Group similar components, track where each came from, and record how often each is used, while deliberately not judging any of it. Only in the next step do teams flag what should change. Merge the two steps and the inventory turns into an opinionated redesign before the cataloging is done.

### 3. Annotate page by page, then reconcile

**18F**, a former US federal digital-services office whose methods are public and widely cited, runs the audit as a checklist. [Their method](https://methods.18f.gov/decide/interface-audit/): screenshot every page in scope, note typography, header and body styles, color, buttons, and icons on each, and annotate inconsistencies page by page. Then reconcile: for each inconsistency, adopt one existing treatment or design a new one. The result is one list of every component, pattern, and interface feature in the product, which becomes the seed material for the design system.

### 4. Run the heuristic evaluation as its own pass

[NN/g's method](https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/): 3–5 evaluators, each trained on Nielsen's 10 usability heuristics, review the interface independently, in timeboxed sessions of about 1–2 hours each, before comparing notes. A single evaluator reliably misses issues a panel catches. Findings are then combined by affinity diagramming (grouping similar findings into clusters by hand to spot patterns) and prioritized as a group.

### 5. Check heuristic findings with real users

NN/g's own caveat is the one that gets dropped when teams cite the method secondhand. A heuristic evaluation is an expert's judgment against general principles, not evidence from real users. A flagged issue is a hypothesis about what's wrong. Check it against actual usage before it drives a redesign.

## Common mistakes

- **Merging the inventory and the heuristic evaluation into one loose "audit."** Once judgment ("this button style is bad") enters the same pass as cataloging ("this button style exists"), the inventory stops being neutral evidence and becomes one person's redesign preferences. A scorecard or stakeholder conversation later needs to *not* be built on that. Finish the inventory first, as the objective record of what exists. Then bring in the heuristic evaluation, and real user validation, to decide what should change.
