---
title: Scaling Across Decades
reviewed: 2026-09-18
reviewIn: 24
---

Most design-system advice assumes a normal software lifecycle: a few years, one deploy pipeline, one company that owns it end to end. Industrial products don't work that way. Factory automation software or a medical equipment interface can stay in the field for decades, be maintained by a team that has changed twice, and end up owned by a different company after an acquisition. At that scale, the system's job is holding one design language together across products that were never built at the same time, on the same stack, or by the same team.

:::tip[Key takeaways]
- **Consolidate parallel systems into one.** A system per product line duplicates work and makes the portfolio feel inconsistent.
- **Support several tech stacks from one source.** Enforcing one framework forces every product team into a migration.
- **Plan legacy support from the start.** Products stay in the field for decades and get stranded outside whatever system comes next.
:::

## The problem

Left alone, a large industrial company collects one specialized design system per product line. Each is reasonable on its own, and each solves the same problems slightly differently. Nobody chose that. It's what happens when long-lived products get built years apart, sometimes by teams that arrive through an acquisition with their own tooling. The result is duplicated component work, a UX that feels inconsistent across one company's portfolio, and legacy products stranded outside whatever comes next.

This page covers the organizational version of the problem: why the fragmentation happens. For what to do when you're the one who inherits such a system, see [Inheriting a legacy system](/ds101/inheriting-a-legacy-system/).

## Practices

### Consolidate parallel systems into one

Siemens ran two parallel design systems for years: an older toolkit called UXT (User Experience Toolkit) and its newer Siemens Industrial Experience (iX). In October 2025, Siemens folded UXT into iX instead of maintaining both. It shut down UXT's CDN and moved teams onto the unified system, bringing design resources, documentation, and governance back into one effort ([Kathrin Schalber, Siemens iX blog](https://ix.siemens.io/blog/2025/09/31/uxt-eos)).

That's a concrete, dated example of a pattern **David Sward**, Siemens' Chief Design Officer and VP of User Experience, describes at larger scale in [his UXDX EMEA 2026 talk](https://uxdx.com/profile/david-sward/). Siemens reached its current single design language only after confronting many specialized, product-specific systems built up over its history.

### Support several tech stacks from one source

[Siemens iX](https://ix.siemens.io/docs/home/overview) ships components for React, Angular, Vue, and Blazor from the same design source, instead of picking one framework and making every product team migrate. It's a direct answer to a claim Sward makes in his talk: enforcing a single tech stack across an organization this size is a mistake. Product teams inherit their stack from whatever was current when their product was built, sometimes a decade before another team's. A system that ships in one framework locks out everyone who isn't on it. One design language doesn't require one tech stack.

### Plan legacy support from the start

Industrial and medical hardware can stay on the market, and in support, for decades, far longer than the team that designed its interface stays together. Sward's talk description frames this as a central constraint. A system built for a two-year product cycle doesn't hold up when the product is still shipping fifteen years later, maintained by people who never met the original designers. So legacy support has to be planned from the start, the same way a component's deprecation path is planned at release, not invented at retirement (see [Release management](/ds101/release-management/)). By the time a decades-old product needs it, the team that could have planned for it is usually gone.

### Open-source the design assets

Siemens iX's components, documentation, and icon set are [open source on GitHub](https://github.com/siemens/ix), not kept behind an internal wall. Sward's talk description cites this as deliberate, following the same logic as supporting several stacks. A system serving products built on different timelines, by different teams, some of which aren't even Siemens teams yet, benefits from being adoptable without a procurement or access conversation first.

### Build the system to absorb acquisitions

Sward's talk description claims that design systems "break the moment acquisitions occur, unless the system is built to evolve." Treat this as his framing, not an independently verified fact. The reasoning holds up on its own terms: an acquired product arrives with its own components, token values, and sometimes its own design language, and a system that assumed a closed, single-company world has no way to absorb it. It's an open question worth testing against your own org's experience. It's here because it's central to how Sward frames the problem, not because another source in this wiki backs it up.

## Common mistakes

- **Treating consolidation as a one-time migration.** The UXT-to-iX merge came years after both systems had shipped independently. Plan for consolidation as an ongoing possibility, not a project with a fixed end date.
