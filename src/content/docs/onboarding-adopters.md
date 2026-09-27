---
title: Onboarding Adopters
reviewed: 2026-09-25
reviewIn: 24
---

A new designer or engineer decides in their first week whether to build with the system or around it. Onboarding that's specific to this system, honest about its gaps, and clear about what to do when a part is missing keeps them building with it. [Measuring adoption](/ds101/measuring-adoption/) places onboarding at the first stage of adoption, before a team is using the system day to day.

:::tip[Key takeaways]
- **Write onboarding for this system specifically.** Generic docs teach nothing, so newcomers start building around the system in week one.
- **Say what to do when a part is missing.** The first gap decides whether a newcomer waits for the system or builds their own.
- **Keep onboarding self-serve and easy to update.** Onboarding that needs a person, or a reshoot, for every change goes stale.
:::

## The problem

The onboarding skill in Murphy Trueman's [design-system-ops toolkit](https://github.com/murphytrueman/design-system-ops/blob/main/skills/onboarding/SKILL.md) names two ways onboarding docs fail. Written from the system team's side, they "assume context and hand the newcomer a reading list instead of a path." Written from a template, they "describe a generic design system rather than this one, so the reader learns nothing they couldn't have guessed." Either way, the newcomer hits a moment where the system is "close but not quite right," and builds around it. The skill's point is that this is where drift begins: "The drift both create starts in week one."

[Ness Grixti](https://nessgrixti.com/portfolio/wise-design-onboarding/) saw the same pattern at Wise. Designers weren't avoiding the system because it lacked components. They were rebuilding and re-requesting components that already existed, because there was no structured way to learn what was there.

## Practices

### Write it for this system, not a generic one

A newcomer learns from real names: the package they install, the Figma library they enable, the token they use for spacing. The skill builds every guide from the repository and the design file first: the package name and exports, the token source, the test setup, the library's pages and variable collections. It asks the team only for what those can't answer. Its quality check is strict: "Every install command, import path, token name, library name and URL comes from the repository, Figma or the team; none is invented." It's honest about the current state too. "The component library is mature; the docs are catching up in [area]" is more useful than "comprehensive."

### Give designers and engineers separate paths

The two roles come to the system from opposite sides: "a designer composes with a library (Figma, Storybook); an engineer consumes an API (imports, props, types)." The skill writes a shared core for everyone, covering what the system is, how the team works, and common questions. Then each role gets its own section. Designers get library setup, where the docs live, and what a handoff needs, meaning the states, named tokens, and spec fields the [design-to-code contract](/ds101/design-to-code-contract/) lists. Engineers get an install command they can copy, a first render, the token access pattern, and how testing works.

### Say what to do when the system doesn't have it

The first gap a newcomer hits decides whether they wait for the system or build their own. The skill's guide spells out the route: check the docs, ask in the team's channel, check whether another team has already solved it, then raise it through the contribution route. "Don't build a local version first; local versions are where drift starts." Name the channel, the maintainer, and roughly how long a contribution takes, so asking feels faster than building. [Contribution models](/ds101/contribution-models/) covers what happens once the request arrives.

### End the first two weeks with one real piece of work

A reading list doesn't show whether someone can use the system. The skill's first two weeks are checkbox tasks that "start with orientation and end with one real piece of work using only system parts," plus one human task: pairing with someone on a recent feature built with the system. For a system with fewer than five components, the skill leans on people even more: "'ask [name] to pair with you on your first task' beats 'explore the docs' when the docs have three pages."

### Keep onboarding self-serve and easy to update

Onboarding that needs a person every time doesn't scale, and onboarding that's hard to update goes stale. Wise's first attempt was a video series, and every system change meant a reshoot. Grixti's team replaced it with a modular, self-serve course inside Figma, which moved more than 150 designers off ad hoc calls. [Documentation coverage](/ds101/documentation-coverage/) has the full story and the tools it produced.

## Common mistakes

- **Stating good practice as the team's policy.** How often consumers should update, whether local wrappers are allowed, and what the system guarantees on accessibility are decisions, not facts. The skill's rule: "Don't fill a policy in from good practice. 'Update monthly' is a policy the team sets, not a fact the skill knows." Leave it marked as something to confirm until the team decides.
- **Telling engineers to mock the system in tests.** The skill's engineer section says to render the real components instead, because "mocking replaces the roles, labels and behaviour your queries depend on."
- **Implying the system makes the product accessible.** The guide should state the accessibility guarantee the system makes and what stays with the adopting team: "heading order, alt text, focus management of the composition." [Component accessibility](/ds101/component-accessibility/) covers where that line falls.
