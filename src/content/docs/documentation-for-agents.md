---
title: Documentation for Agents
reviewed: 2026-09-18
reviewIn: 6
---

A page of prose with a sidebar is a good shape for a person skimming for one fact. It's a poor shape for a model that has to parse the whole thing to find it. Documentation for agents needs structured metadata as a first-class artifact, not an appendix to the human docs.

:::tip[Key takeaways]
- **Put contracts in JSON, judgment in prose.** One format for both leaves exact values ambiguous or strips nuance from guidance.
- **Treat tokens as an API.** Without descriptions, an agent sees a wall of values with no reason to pick one.
- **Build the rule into the component.** A rule on a separate docs page drifts from what ships.
:::

## The problem

The two audiences need different formats, not different amounts of effort. One document written to serve both usually under-serves whichever reader didn't get the format built for them. Atlassian's design system team measured what the right format is worth. After shipping an MCP server and structured schemas for components, icons, tokens, and lint rules, [they reported](https://www.atlassian.com/blog/ai-at-work/atlassian-design-system-building-the-context-engine-for-the-ai-era) "52% accuracy improvement in AI calls, 34% faster on average across ADS specific tasks, 26% reduction in AI tooling calls, 16% reduction in AI token usage."

## Practices

### Put contracts in JSON, judgment in prose

Diana Wolosin's split: component APIs, the things that must be exact like a prop's type or a variant's valid values, belong in JSON, because "it has explicit keys, explicit values, explicit boundaries, and there is no ambiguity." Guidance that needs judgment, like when to use a variant or what an anti-pattern looks like, stays in natural language. Forcing it into a rigid schema would strip the nuance that makes it useful.

The split doesn't have to mean two separate files. In [Murphy Trueman's component metadata](https://github.com/murphytrueman/design-system-ops/blob/main/skills/metadata-schema-generator/SKILL.md), a single prop carries both:

```json title="Button.metadata.json (excerpt)"
{
  "name": "variant",
  "type": "enum",
  "values": ["primary", "secondary", "ghost"],
  "default": "primary",
  "semantic": {
    "primary": "Use for the single most important action on the page or in a section",
    "secondary": "Use for supporting actions alongside a primary action",
    "ghost": "Use for tertiary actions or actions within dense UI"
  }
}
```

`values` and `default` are the exact contract. `semantic` holds one sentence of judgment per value, in plain language. Trueman's rule for filling it in: take the guidance from code comments or the team's docs. If neither has it, leave `semantic` out and flag the prop "rather than writing plausible guidance." Longer guidance, like anti-patterns with examples, still belongs in prose.

### Expect the structuring to help humans too

[Atlassian's](https://www.atlassian.com/blog/ai-at-work/atlassian-design-system-building-the-context-engine-for-the-ai-era) sharpest line on why this isn't AI-only busywork: "To identify the rules that help LLMs, you also uncover the rules that help explain these concepts to humans — and that's a good thing." [Governance for AI](/ds101/governance-for-ai/) makes the same claim from Shane P Williams's side: work that makes the system legible to agents is quality work for everyone.

### Treat tokens as an API

[Romina Kavcic](https://learn.thedesignsystem.guide/p/design-tokens-that-ai-can-actually) makes the case for **tokens as an API**. Most tokens are structured for humans, so when an AI reads them via MCP, it sees "a wall of nested objects with no context about why these values exist or when to use them." Tokens are the contract between design and code. You can't restructure a component library overnight, but "you can add descriptions to your top 20 tokens in an hour," and that hour pays off in everything built on them. It's the semantic-naming idea from [Token architecture](/ds101/token-architecture/), seen through an AI's eyes.

Kavcic's fullest example shows what a described token can carry (trimmed here):

```json title="tokens.json (excerpt)"
"color-feedback-errorDefault": {
  "value": "#DE3E25",
  "type": "color",
  "meta": {
    "description": "Primary error state color",
    "usage": ["destructive button backgrounds", "error alert borders"],
    "doNot": ["use for warnings"],
    "pairedTokens": ["color-text-error"],
    "a11y": { "contrastOnWhite": "4.52:1", "wcagLevel": "AA" },
    "components": ["Button", "Alert", "Input", "Toast"]
  }
}
```

Each field answers a question an agent would otherwise guess at: where the token goes (`usage`), where it doesn't (`doNot`), what it's used with (`pairedTokens`), and whether it's safe to use on white. Her example uses the older `value` and `type` keys. In the [DTCG format](/ds101/token-architecture/#store-tokens-in-the-shared-dtcg-format), those are `$value` and `$type`, the description goes in `$description`, and extra fields like these go under `$extensions`, the spec's place for tool-specific data.

### Name components by their role

[Murphy Trueman](https://blog.murphytrueman.com/your-next-design-system-user/) makes the parallel argument for **components as an API**: "Your design system is already an API; the question is whether it's a good one." Classify by purpose, not appearance. A component called `FeatureHighlight` or `OnboardingStep` tells a machine its role. `BlueCard` or `CardBase` tells it nothing.

### Build the rule into the component

IBM Carbon ships its AI-transparency requirement as a component, not a policy page: "Each AI component is required to have an embedded AI label and explainability popover that alerts users to AI-generated content" ([Carbon for AI](https://carbondesignsystem.com/guidelines/carbon-for-ai/)). The documentation isn't a separate artifact describing the requirement. The requirement lives in the component, so it can't drift from what ships. [Agentic UI patterns](/ds101/agentic-ui-patterns/) has more on this approach.

## Common mistakes

- **Writing one document and hoping it serves both audiences.** A human-readable prose page and machine-readable metadata are different artifacts for different ways of reading. Neither is a substitute for the other.
