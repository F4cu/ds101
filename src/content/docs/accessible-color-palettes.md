---
title: Accessible Color Palettes
reviewed: 2026-09-27
reviewIn: 12
---

A palette is accessible when anyone using it can tell which colors are safe together without testing every pair by hand. That takes three things: each color has a job held in a token, steps are spaced by contrast, and the system publishes the pairs it has checked in every theme. [Token architecture](/ds101/token-architecture/) covers how color tokens are layered. This page covers the colors themselves.

:::tip[Key takeaways]
- **Give each color one job in a token.** Components bound straight to palette steps won't change with the theme.
- **Check contrast on every theme's final values.** A pair that passes in light mode can fail in dark mode.
- **Keep feedback colors apart from the brand.** A red brand color can make error states invisible.
:::

## The problem

> "Any system designer responsible for color must be familiar with WCAG 2.0 rules, have a tool to test color pairs."
>
> — [Nathan Curtis, "Color in Design Systems"](https://nathanacurtis.substack.com/p/color-in-design-systems-a1c80f65fa3)

Curtis's 2016 advice still holds, but it assumes one person checks pairs one at a time. A typical palette starts with a brand color, a few grays, and red, amber, and green for feedback, with shades picked by eye. Nobody knows which blue is safe on which gray, so teams pick what looks right on their monitor. Then dark mode arrives: every pair needs checking again, some tokens never got a dark value, and raised cards look sunken. Then a second brand arrives with a red primary, and error messages stop standing out.

Each failure has the same cause: the palette records colors but not the relationships between them.

## Choosing a palette source

Start with the legal question. If your product has to meet a regulation such as the European Accessibility Act, you'll be measured against WCAG 2 AA ([Component accessibility](/ds101/component-accessibility/) covers why). Murphy Trueman's [`theme-audit` skill](https://github.com/murphytrueman/design-system-ops/blob/main/skills/theme-audit/SKILL.md) sets the baseline: "4.5:1 for body text, 3:1 for large text and for non-text elements such as borders, focus indicators and icons." Then ask how many themes and brands you need, and whether anyone on the team can own color.

Some palettes are built on **APCA** (Accessible Perceptual Contrast Algorithm) instead. It scores contrast as a lightness value (written Lc) and accounts for font size and whether text is lighter or darker than its background. [Maximilian Blazek](https://ubuntu.com/blog/generating-color-palettes-for-design-systems-inspired-by-apca), a designer at Canonical, explains the appeal: WCAG "produces both false positives and false negatives when it evaluates contrast between two colors." But APCA isn't part of any published WCAG standard, so passing it doesn't show compliance.

**Adopt a ready-made scale.** [Radix Colors](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale) gives every hue 12 steps, and "each step was designed for at least one specific use case," from app backgrounds (steps 1–2) to text (11–12). It suits a small team with no one to design color. The first cost is that its contrast guarantees are APCA, not WCAG. A 2024 [test of the light palette](https://github.com/radix-ui/colors/issues/41) found 283 text and background pairs that fail WCAG AA. Vlad Moroz of Radix replied that when WCAG 2 matters, he recommends avoiding "oranges, yellows, cyans, etc." Blues, purples, and most greens pass both. The second cost is missing states. Solid fills get a default (step 9) and a hover (step 10), but no pressed or disabled step, and a [question about disabled](https://github.com/radix-ui/colors/issues/25) went unanswered. Radix's own components add `surface`, `indicator`, `track`, and `contrast` values outside the 12 steps, which the npm package [doesn't include](https://github.com/radix-ui/colors/issues/51). You still decide those states yourself.

**Generate scales from your brand colors.** Radix's [custom palette tool](https://www.radix-ui.com/colors/custom) builds a 12-step scale from a brand color, a gray, and a background, with contrast "similar to what Radix Colors provide," so the APCA caveat carries over. It suits a team that needs its own brand but can't hand-tune every hue. The cost is inheriting the generator's assumptions. Blazek's contrast-spaced experiment (see [Space steps by contrast](#space-steps-by-contrast)) ended with Canonical choosing "(for good reasons) to go with the WCAG-based approach" instead.

**Build your own palette behind semantic tokens.** Large systems design their own palette and don't let product teams use it directly. At [Atlassian](https://atlassian.design/foundations/color), "rather than choosing a certain shade or value, you'll choose a design token," with WCAG AA contrast targets. [Carbon](https://carbondesignsystem.com/elements/color/overview/) works the same way, and Canonical's [Vanilla](https://vanillaframework.io/docs/settings/color-settings) targets WCAG 2.2 AA. It suits a system with several themes or brands that must show audit evidence. It costs the most: someone designs and maintains every scale in every theme.

The options combine. You can generate scales with a tool and put your own semantic tokens in front, so you can swap palettes later without touching components.

## Practices

### Give each color one job

When a color has a named job, designers pick by purpose instead of by eye. The job belongs in a [semantic token](/ds101/token-architecture/), not in the swatch. Carbon calls these role-based tokens: "Each token is assigned a role and a value." Its `$text-secondary` token "can dynamically map to `Gray 70` or `Gray 30` depending on the theme," while the role stays the same.

Before choosing or building a scale, list every state your components need a color for: default, hover, pressed, selected, disabled, focus, and the text on each. Check each one has a token. This is where a fixed scale runs out, as the Radix option above shows. A scale whose steps have jobs is a good way to lay out the values underneath, but product teams should only see the tokens.

Keep the set small. Curtis's 2016 advice is to "offer a handful of options and avoid tedious variety," and Romina Kavcic's [survey of 50 token files](https://learn.thedesignsystem.guide/p/50-design-token-files-one-problem) found Fluent and Radix each publishing over 600 color tokens, because "some systems publish every shade and some publish only the few they use."

### Space steps by contrast

Curtis's 2016 post suggests naming shades "between 0 and 100 based on HSL's lightness." It predates wide browser support for perceptual color spaces, and HSL lightness doesn't match what people see: a yellow and a blue at the same HSL lightness look very different. Blazek puts it bluntly: "RGB has very inhuman characteristics." Perceptually uniform color spaces such as OKLCH, where equal steps look equal to a person, "support human perception, not computers."

Then let contrast set the gaps. Blazek builds on the idea that "contrast should determine the gradation between colors in a palette." In the WCAG-based palette his experiment starts from, "every pair of colors with a distance of 500 will have the WCAG mandated contrast ratio of 4.5:1." Nobody needs to test gray-100 text on gray-600 to know it passes. Radix makes the same kind of promise in APCA terms: steps 11 and 12 "are guaranteed to Lc 60 and Lc 90 APCA contrast ratio on top of a step 2 background from the same scale."

### Publish the pairs you've tested

Swatches show what colors exist, not which go together. Curtis recommends "reversed pairings to adopt or avoid," such as white on blue and blue on white. His 2017 post on [light and dark modes](https://nathanacurtis.substack.com/p/light-dark-9f8ea42c9081) uses EightShapes' Contrast Grid, which shows every text color against every background at once. Put a grid like that next to the palette, with the actual ratios rather than pass or fail, so a reader can see how close a borderline pair came ([Component accessibility](/ds101/component-accessibility/) explains why).

### Check contrast on resolved values in every theme

A token name doesn't tell you its contrast. `color.text.secondary` might pass in light mode and fail in dark mode. Trueman's theme audit asks you to "compute contrast from resolved values (follow aliases to the final colour in that theme) rather than judging by name." It also covers the cases automated checks get wrong:

- **Wide-gamut colors.** Colors defined in OKLCH, Lab, LCH, or Display P3 can be more vivid than a standard (sRGB) screen shows. Convert them to sRGB first, and "say when a value was out of gamut and clipped."
- **Transparent colors.** "A colour with alpha has no contrast ratio on its own." Blend it over the background it sits on first. If that background isn't known, report the ratio as not computed rather than guess.
- **Non-text elements.** Borders, focus indicators, and icons need 3:1 too, and are the pairs most often skipped.

In dark mode, check the surfaces as well as the text. Trueman: "Raised surfaces should be lighter than the base background — elevation reads as lightness in dark themes, since shadows barely show. A surface darker than the background reads as sunken." Dark mode needs its own surface steps, not the light ones inverted.

### Keep feedback colors apart from the brand

Error, warning, and success colors only work if they stand out, and the brand color is the one most likely to get in the way. For every brand, Trueman's audit compares each feedback color with that brand's primary action color and flags anything below 3:1, "because a brand whose primary is red makes error states invisible." [Governance case studies](/ds101/governance-case-studies/) shows another way a second brand's colors go wrong, at Wise.

If they're too close, change one. Either way, an error state needs an icon or text too, since [WCAG 2.2](https://www.w3.org/TR/WCAG22/) doesn't allow color to be the only signal.

### Write down what each color token is for

Given two reds in a token file, a person or an AI agent can't tell which is the brand and which means danger. Kavcic [tested this](https://learn.thedesignsystem.guide/p/50-design-token-files-one-problem) with a brand crimson, a danger red, and no descriptions. In two of three runs, the agent put the brand crimson on a delete button. "The agent was not being careless. `crimson500` is a perfectly reasonable guess for 'destructive' if all you have is the name and the hex." With a `$description` on each token, two runs gave the same correct answer. Her example of good practice is GitHub Primer, whose tokens carry "a value, plus a job, plus a note on when to skip it." A trimmed version of the same shape:

```json
"danger": {
  "$value": "{color.red.600}",
  "$type": "color",
  "$description":
    "Errors and deletes. Not brand."
}
```

Notice that the description also says what the color is *not* for. That's what tells an agent to leave the brand red alone. [Documentation for agents](/ds101/documentation-for-agents/) covers the rest of the metadata a token can carry.

## Common mistakes

- **Treating an APCA palette as WCAG-compliant.** Even some pairs within one Radix hue fail WCAG: the [2024 test](https://github.com/radix-ui/colors/issues/41) measured amber-2 and amber-11 at 4.43:1. If WCAG applies to you, check the pairs you ship yourself.
- **Leaving color tokens out of a new theme.** Trueman's [`token-audit` skill](https://github.com/murphytrueman/design-system-ops/blob/main/skills/token-audit/SKILL.md) rates it High severity when a shipped theme doesn't redefine a color token, because the theme silently keeps the default value.
- **Pointing components straight at palette steps.** A button background bound to `{color.blue.500}` won't change with the theme. Trueman's example: "dark mode will show blue on blue."
- **Adding a shade for every request.** Curtis warns against "tedious variety." Each extra step is another row and column in the contrast grid and another value to theme.
