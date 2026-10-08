---
title: System Maturity
reviewed: 2026-09-19
reviewIn: 24
---

Maturity isn't one score. The Nielsen Norman Group's newer framework rates a system on six separate dimensions, and a system can be a 5 on infrastructure and a 2 on governance at the same time. Collapsing that into one number hides exactly the gap a team most needs to see. Source: [Huei-Hsin Wang, "Design-System Maturity: A 6-Dimension Framework,"](https://www.nngroup.com/articles/design-system-maturity/) NN/g, 2026.

:::tip[Key takeaways]
- **Score the six dimensions separately.** A blended score hides the weak dimension while the total keeps saying "fine."
- **Run the assessment as a conversation.** Scores filled in alone come without the alignment that made the exercise worth running.
- **Read each score against your org's size.** A low score can be right for a small team that doesn't need that dimension yet.
:::

## The problem

A blended score can average a strong dimension against a weak one and land in the comfortable middle. The team never sees which dimension needs attention, and the weak one keeps getting worse, with ungoverned contributions piling up or a well-built system losing its budget, while the total keeps saying "fine."

## The model

NN/g's six dimensions aren't a new topic so much as names for territory this wiki already covers page by page. Each linked page goes deeper than a maturity framework can. The framework's value is naming all six side by side, so none gets forgotten.

### Organizational alignment

Funding, sponsorship, and whether the roadmap stays legible to the business. See [Business alignment](/ds101/business-alignment/) and [Stakeholder alignment](/ds101/stakeholder-alignment/).

### Team effectiveness

Capacity, makeup, and whether the team model fits the org's size. See [Team models](/ds101/team-models/), [Contribution models](/ds101/contribution-models/), and [Fostering contribution](/ds101/fostering-contribution/).

### Infrastructure robustness

Tokens, components, tooling, and the handoff underneath them. See [Token architecture](/ds101/token-architecture/) and [Design-to-Code Contract](/ds101/design-to-code-contract/).

### Governance

How decisions get made, recorded, and revisited. See [Decision governance](/ds101/decision-governance/). Its five-stage ladder (ad hoc → managed → systematic → measured → optimised) tracks how governance practices build up within one team. It's one linear track, not six independent ones. A system can be advanced on that ladder and still score low on alignment or adoption here, because those depend on things governance alone doesn't control, like executive sponsorship and other teams' behavior.

### Support

Documentation, onboarding, and how actively the team equips people to use the system. See [Documentation coverage](/ds101/documentation-coverage/) and [Operating cadence](/ds101/operating-cadence/).

### Adoption

Whether teams actually use, trust, and rely on the system, measured rather than assumed. See [Adoption Metrics](/ds101/adoption-metrics/) and [Dependency observability](/ds101/dependency-observability/).

## Practices

### Run the assessment as a conversation

Wang's process: 4–8 evaluators score all six dimensions independently on a 1–5 scale. They include system team members across design, engineering, product, and content, plus product-team representatives and sponsors. Then they meet to "triangulate and align," focusing on where their scores diverge rather than where they agree. The result is plotted as a hexagonal radar chart and reassessed quarterly, or after a major org change. Wang is explicit that the biggest value isn't the shape. It's the discussion that happens because people had to justify their number to each other.

### Prefer a balanced shape over a big uneven one

"A 10-person startup and a 10,000-person enterprise can both have a mature design system, but the conditions that define maturity can differ significantly." A small, balanced radar, with modest scores and nothing neglected, is healthier than a large, uneven one. Picture infrastructure at 5 because someone built beautiful components alone, while governance and adoption sit at 1 because nobody else knows the system exists.

### Judge team effectiveness by fit to org size

This wiki's deepest take on team effectiveness is Nathan Curtis's team-model taxonomy. A small org that over-invests in federated governance pays for coordination it doesn't need. An enterprise still running on one maintainer is understaffed for its scale. Curtis's revised view is sharper: federation is never a starting model. It's layered onto a funded central core once the org needs it. Read a team-effectiveness score against that fit, not a universal ideal. [Team models](/ds101/team-models/) has the full argument and survey data.

## Common mistakes

- **Reading a low score on one dimension as a system-wide failure.** A startup scoring low on governance because it has no formal RFC process isn't failing. At three product teams, it may not need one yet. Read every score against org size and stage, not a universal target.
- **Filling out the six scores alone.** A team that scores itself without the cross-functional discussion gets a number with none of the alignment that made the exercise worth running.
