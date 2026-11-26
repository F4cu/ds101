---
title: System Principles
reviewed: 2026-11-26
reviewIn: 24
---

Principles are only worth writing if they settle decisions. A design system's principles cover both how its products should feel and how the team chooses between options. Keep three to five, make each one take a side, and use them in every critique and review until people can recite them.

:::tip[Key takeaways]
- **Make each principle settle a decision.** A principle anyone would agree with never chooses between two options.
- **Keep one shared set of three to five.** Separate sets per team pull the system apart, and long lists get forgotten.
- **Pair every principle with a real example.** Without one, even a well-worded principle gets read several ways.
:::

## The problem

Most published principles could belong to any product. Alla Kholmatova's book [*Design Systems*](https://smashingmagazine.com/provide/design-systems-chapter-2.pdf) (Smashing, 2017) uses "Simple. Useful. Enjoyable." as her example: qualities like these "should be a given," and "I've yet to see a consumer digital product which has 'Complex,' 'Useless,' and 'Painful to work with' among its principles." A principle like that can't guide a decision, because every option in a design review can claim to meet it. The team keeps arguing from taste, and the system has no point of view of its own.

> "Otherwise, we all might as well use Material Design and call it a day." — Dan M., via [Alla K.](https://smashingmagazine.com/provide/design-systems-chapter-2.pdf)

## Practices

### Start from what the system is for

Kholmatova says principles "must support the larger purpose of the product," so start from the company's values or product vision. TED's site has a one-sentence purpose, "Spread the talks as far and as wide as possible." From it follow inclusion, accessibility, and "prioritizing performance and accessibility over flashy features."

For the system itself, [Ness Grixti's Hypothesis Statement tactic](https://www.designsystemtactics.com/tactics/hypothesis-statement) gives a fill-in sentence: "We believe a design system for [audience] will solve [problems] and help us achieve [business goals]." Her [System Vision tactic](https://www.designsystemtactics.com/tactics/system-vision) looks further ahead. Participants write what they hope people will say about the system in three or five years, then cluster and vote on the statements. Both give the principles something to serve.

### Write principles that settle decisions

Kholmatova's test is whether a principle gives "actionable advice." FutureLearn replaced "Make it simple" with "No needless parts. Every design element … must have a purpose." The first is hard to check. The second can be acted on: go through the interface and ask what each element is for. Her other pairs work the same way, such as "Make it clear" becoming "Only one number 1 priority. What do you want your users to see and do first?"

### Take a side when values conflict

A principle with a point of view says what you give up. Kholmatova's examples: Salesforce's Lightning Design System ranks its principles, "Clarity. Efficiency. Consistency. Beauty," so beauty never beats clarity. Medium's "Direction over Choice" traded formatting options for an editor that keeps writers focused. Her question "Can we justify making this module more usable at the cost of making it less flexible?" is the kind a principle should answer before the review starts. [Rigidity and Flexibility](/ds101/rigidity-and-flexibility/) covers the system-level version of that trade-off.

### Keep one set of three to five

Kholmatova notes that larger companies can have separate principles for the brand, the user experience, and the system, which "can contribute to a design system's fragmentation." Atlassian merged its marketing and product principles into one set of values, "Bold," "Optimistic," and "Practical, with a wink." Each value applies at a different strength depending on the surface: marketing gets the boldness, product and support get the practicality. As Kevin Coffey at Atlassian put it, "Nobody wants a bold support page."

Keep the set small too. Kholmatova puts the number that stays in use at three to five, and Grixti's [Crafting System Principles tactic](https://www.designsystemtactics.com/tactics/crafting-system-principles) has the group vote down to the same range. When Kholmatova asked teams at TED, Atlassian, and Airbnb about their principles, all of them recalled theirs instantly.

### Draft alone, then look for shared themes

Kholmatova suggests asking team members to write their principles individually, as they'd explain good design to a new hire in five sentences, then comparing. The overlap shows how unified the team already is, and she finds it worth comparing new joiners' answers with those of people who've worked on the product for years. Grixti's tactic adds a step: cluster the ideas and mark where they contradict each other, because those tensions are what the final principles have to settle. Write for the people who build the product, Kholmatova adds, not for a brand manual.

### Pair each principle with a real example

"Nothing can make a principle more practical than pairing it with a real-life example," Kholmatova writes. TED values clarity of message over aesthetics, so its talk banner fits long titles instead of clipping them. Atlassian's "Optimistic" shows up in Jira, where a card moves to "Done" right away while validation runs in the background. Point to the place in your own interface where each principle is visible, and add one when you can't find it.

### Use them in critiques and reviews

Principles stay memorable only if they're "in constant use," in critiques, presentations, and reviews. At Airbnb, Roy Stanfield told Kholmatova: "When we design a new component, we want to make sure it addresses all four of those." Spotify asks in critiques and QA whether a design is "in TUNE," an acronym for its four principles. Grixti suggests asking an AI model to apply each principle to edge cases, which shows which ones are too vague to decide anything.

## Common mistakes

- **Writing principles for a brand manual.** Kholmatova: "A surefire way to end up with vague design principles is to have no idea who they're for." Principles written for a careers page or a partner pitch read well and guide nothing. Write them for the designers, engineers, and content people who make the product.
- **Setting principles once and never revisiting them.** Kholmatova notes principles can start clear and "over time become more diluted and lose their authenticity," as well as the reverse. Testing them in critiques is how a team notices a principle has stopped helping, and rewrites it.
