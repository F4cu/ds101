---
title: Migration Guides
reviewed: 2026-11-26
reviewIn: 12
---

A migration guide turns a breaking change into steps a consuming team can follow without reading the diff. It's written once by the people who made the change, so dozens of teams don't each work out the same fix on their own.

:::tip[Key takeaways]
- **Pair every change with its replacement.** A guide that only says what changed leaves each team to pick its own fix.
- **Split the steps by how teams consume the system.** Teams whose setup the guide doesn't describe get stuck or guess.
- **Ship the replacement before you remove anything.** Otherwise every team has to migrate on release day.
:::

## The problem

A changelog line like "Removed `light-blue`" is accurate, but it isn't a migration path. Each team reading it decides on its own what to use instead, and different teams decide differently, so the product drifts. The teams that don't build the default way get it worst: instructions written for the default setup don't tell a team writing its own HTML what to change. And a guide that only lives in the release notes reaches the people who read release notes, which leaves out most designers and anyone who wasn't watching that week.

[Release management](/ds101/release-management/) covers when a change is breaking and how long the old version stays. This page covers what the guide says once that's decided.

## Practices

### Pair each change with its replacement

The core of a [migration guide](https://www.designsystemtactics.com/tactics/migration-guides) is a side-by-side map of old to new. [Design System Tactics](https://www.designsystemtactics.com/tactics/migration-guides) suggests showing it "with names, screenshots, or code snippets." GOV.UK's [v6.0.0 release notes](https://github.com/alphagov/govuk-frontend/releases/tag/v6.0.0) show the format at its plainest. Changed colours get a table of colour, previous value and change. Removed colours get a suggested replacement: `light-blue` (`#5694ca`) becomes "Blue tint 25% (exact match)." Renamed tag classes get before and after code, labelled "Previously" and "Now."

The snippets below mirror the shape of that tag rename:

```html title="Previously"
<strong class="govuk-tag
  govuk-tag--turquoise">
  Active
</strong>
```

```html title="Now"
<strong class="govuk-tag
  govuk-tag--teal">
  Active
</strong>
```

Only the modifier class changes. A team can find every `--turquoise` in its code and know exactly what to put in its place.

[Murphy Trueman's](https://github.com/murphytrueman/design-system-ops/blob/main/skills/change-communication/SKILL.md) `design-system-ops` toolkit adds two items a table leaves out: edge cases that need special handling, and "what to do if migration is not feasible by the deadline," with a contact route. Tell teams how to check the result, too. GOV.UK's advice is one line: "You should test your service against the new type scale." None of the sources here goes further than that. A checklist for verifying a migration is still an open question for this guide.

### Split the steps by setup

Teams consume a system in different ways, and each way needs different steps. GOV.UK's [v5.10.0](https://github.com/alphagov/govuk-frontend/releases/tag/v5.10.0) gave its brand refresh separate instructions for four setups. Nunjucks is the templating language GOV.UK's components ship in, and the setups were the Nunjucks page template, the Nunjucks macros only, no Nunjucks at all, and the Prototype Kit. The teams writing their own HTML got the new SVGs pasted into the notes and were told to "use the examples on our website to check your updates." When v6.0.0 removed the old brand, it split the removal steps the same way. [Brand alignment](/ds101/brand-alignment/) covers what else that rebrand asked of each team.

### Label the effort of each change

A team planning a sprint needs to know whether the upgrade is an afternoon or a quarter. [Design System Tactics](https://www.designsystemtactics.com/tactics/migration-guides) labels each change low, medium or high effort so teams can plan, and suggests scanning codebases to give each team its own report.

### Ship the replacement before you remove anything

If the new token and the removal of the old one arrive in the same release, every team has to migrate the day it upgrades. Trueman's [token migration agent](https://github.com/murphytrueman/design-system-ops/blob/main/skills/token-migration-agent.md) separates the two. The new token ships, and the old one becomes an alias of it, marked deprecated, in a minor release where "nothing breaks." The build warns on every remaining use. Removal waits for the next major. In the Design Tokens Community Group (DTCG) format, the old token looks like this, following his `$deprecated: "Use {new.path}"` example:

```json
"brand-primary": {
  "$value": "{action-primary}",
  "$deprecated": "Use {action-primary}"
}
```

Because the old name points at the new one, the two can never drift to different values while teams migrate. The warning count per team becomes the progress measure. [Release management](/ds101/release-management/#deprecate-before-you-remove) sets how long the alias stays.

### Ship a codemod for mechanical changes

A codemod is a script that rewrites old usage in a team's code automatically. Renames of tokens, props and import paths are mechanical, so they're the place for one. Trueman's [codemod generator](https://github.com/murphytrueman/design-system-ops/blob/main/skills/codemod-generator/SKILL.md) puts it this way: "A codemod does the mechanical part deterministically across every file." Atlassian lists its codemods in its [llms.txt](https://atlassian.design/llms.txt), including one that moves the deprecated `xsmall` Avatar size to `xxsmall`. A codemod doesn't finish the job. [Design System Tactics](https://www.designsystemtactics.com/tactics/migration-guides) notes that teams "still need to handle edge cases, custom implementations," and Trueman names token renames inside CSS-in-JS (styles written inside JavaScript, as in styled-components) as the usual leftover. List what the codemod doesn't cover in the guide.

### Give the guide a deadline and follow up

A guide sitting in the release notes waits to be found. Trueman's [change-communication skill](https://github.com/murphytrueman/design-system-ops/blob/main/skills/change-communication/SKILL.md) sends breaking changes straight to the affected teams, in one sentence that tells each team whether it's affected: "If you use [component/token name], you will need to [specific action] before [date] to avoid [specific consequence]." It then schedules three follow-ups: a reminder a week before the date, a confirmation on the day, and a check two weeks later for teams that still need help. [Release management](/ds101/release-management/#push-every-release-to-consuming-teams) covers the routine release post. This is the extra step for changes that need action.

## Common mistakes

- **Deprecating only after everyone has migrated.** Trueman's [token migration agent](https://github.com/murphytrueman/design-system-ops/blob/main/skills/token-migration-agent.md) records that an earlier version did this, which "deprecates tokens nothing uses and gives consumers no warning while they still do."
- **Opening the announcement with the reasoning.** [Trueman's](https://github.com/murphytrueman/design-system-ops/blob/main/skills/change-communication/SKILL.md) rule: "Lead with the change and its impact, not the reasoning. Teams want to know what they need to do before they want to understand why." The why goes in a linked document.
- **Telling only engineers.** Designers see the Figma library update prompt, not the changelog. Trueman warns that a change sent only to engineers "shows up as design-to-code drift a sprint later." Put the same map in the library publish notes ([Figma library releases](/ds101/figma-library-releases/)).
