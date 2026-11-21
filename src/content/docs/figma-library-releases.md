---
title: Figma Library Releases
reviewed: 2026-11-21
reviewIn: 12
---

Publishing a Figma library doesn't change anyone's files. It offers an update that each file has to accept, so a release only works if the change was reviewed before it went out and designers can tell from the note what accepting it will cost them.

:::tip[Key takeaways]
- **Review on a branch, publish from main.** Without a second look, a broken component goes straight into every file that accepts the update.
- **Label breaking changes by impact.** Otherwise designers accept an update blind and find lost overrides later.
- **Publish tokens before components.** Component work stalls, because nothing can bind to a variable that isn't published yet.
:::

## The problem

A code release reaches products when a team bumps a version. A Figma release reaches them when a designer clicks Update, often without knowing what the update changes. [GitLab's Pajamas](https://design.gitlab.com/get-started/uik-breaking-changes) defines a breaking change in a Figma library as "anything that would require a designer to take any action after updating," such as changed dimensions or lost overrides. If the release doesn't say which updates are like that, designers either accept everything and repair their files afterwards, or stop accepting updates and drift away from the library. The shared rules for versions, deprecation, and changelogs live in [Release management](/ds101/release-management/). This page covers what's different when the thing being released is a Figma library.

## Practices

### Review on a branch, publish from main

A Figma branch is a copy of the library file where changes can be made and reviewed without editing the original. [Figma's branching guide](https://help.figma.com/hc/en-us/articles/360063144053) is explicit about the order: "You can only publish to a library from the main file," so a branch has to be merged first. Its [best-practice page](https://www.figma.com/best-practices/branching-in-figma/) lets people without edit access to the library propose changes on a branch, "much like a pull request in code." Reviewers can approve, approve and merge, or ask for more changes. [Curtis](https://nathanacurtis.substack.com/p/figma-shared-libraries-d2dfbf9d1b8d) saw this settle into a pattern by 2022: "more teams are limiting main branch work to maintainer(s) and production work to contributors on branches," with publishing and change announcements left to maintainers.

[Pajamas's release process](https://design.gitlab.com/get-started/uik-release-process) adds the human step: another designer reviews the change in a branch or draft first. Then a Design System team member publishes it, "regardless of how minor." Branching isn't on every plan. Figma lists it for Organization, Enterprise, Education, and Government plans, while publishing a library also works on Professional. A Professional team has to review in a draft or a duplicate file instead. What the reviewer checks is covered in [Component QA](/ds101/component-qa/).

### Publish tokens before components

A component can only bind to a variable once the library holding that variable is published. Pajamas therefore publishes its design tokens library as soon as a token branch merges, not at the end of the milestone (its monthly release), so component branches can use the new variables straight away. Community copies of the files are published after the organization library. Non-breaking fixes don't wait for the release either: "We favor continuous delivery," so bug fixes and patches ship any time during the milestone. The order is tokens, then components, then public copies. It's the Figma version of [versioning token changes on their own](/ds101/release-management/#version-token-changes-on-their-own).

### Write the reason in the publish description

Each publish asks for a description, ["a summary of any decisions or changes"](https://help.figma.com/hc/en-us/articles/360025508373). Figma shows it to designers while they accept the update, and keeps it in the file's version history. That makes it the release note designers actually read, so the reason for a change belongs there, not only in a changelog on another site. Pajamas lists the changes as a dashed list in that field.

### Expect every file to accept the update

[Figma](https://help.figma.com/hc/en-us/articles/360039234193) shows a blue badge on the Libraries icon in each file that uses the library. A designer then applies changes asset by asset with Update, or all at once with Update all, after comparing old and new side by side or as an overlay. Until someone with edit access to that file does this, it keeps the old version. A release isn't finished when it's published: tell teams it exists ([Release management](/ds101/release-management/#push-every-release-to-consuming-teams) covers the push), and say whether it's safe to click Update all.

### Label breaking changes by impact

Pajamas gives every breaking change in its Figma library "a level and specific explanation," and uses the highest level when one change spans several:

- **Low:** a low chance of regression, such as auto layout replacing a spacer without changing the spacing.
- **Medium:** "requires validating the impact," such as a size change that may need layout adjustments.
- **High:** breaks overrides or adds features that aren't backwards compatible. The change ships as a new version of the component, and the old one stays deprecated but available for at least a milestone.
- **Extreme:** needs a whole new library file, such as moving styles into their own library.

Its [published notes](https://design.gitlab.com/get-started/uik-release-notes) put the label at the start of the entry, as in "Breaking (medium): Updates focus ring utility to use border radius design tokens." The process page sorts entries into Additions, Enhancements, Changes, and Fixes. Its wording rule is "Use the simple present tense with an implied subject when adding to the release notes," as in "Adds itemName." A designer can then judge from the label alone how much checking the update needs. Before changing a component, Pajamas suggests building a matrix of configurations and overrides in a branch to see what breaks.

### Mark deprecations on the component itself

Pajamas keeps a deprecated component or style ["available for at least one milestone"](https://design.gitlab.com/get-started/uik-breaking-changes) before removing it. Its name and description field start with `(⚠ DEPRECATED)`, the description says what to use instead, and the Link field points to the replacement. Deprecated pages move to the bottom of the file. Designers see the warning on the instance they're already using, which is the rule [Release management](/ds101/release-management/#deprecate-before-you-remove) sets for every deprecation. Pajamas also says to keep the link to the deprecated component intact, and not to create a new component named DEPRECATED.

## Common mistakes

- **Assuming a published library is in everyone's files.** [Figma](https://help.figma.com/hc/en-us/articles/360039234193) only offers the update. A fix that "shipped" stays missing from a product file until someone there accepts it.
- **Leaving the publish description empty.** Designers accepting the update then can't tell a fix from a breaking change, and the reason never reaches [version history](https://help.figma.com/hc/en-us/articles/360025508373).
- **Publishing components before the tokens they use.** Component branches can't bind to unpublished variables, so the release order matters ([Pajamas](https://design.gitlab.com/get-started/uik-release-process)).
