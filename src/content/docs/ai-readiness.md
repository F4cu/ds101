---
title: AI Readiness
reviewed: 2026-09-25
reviewIn: 6
---

An AI-ready design system is one AI agents and tools can use, reason about, and generate from without needing knowledge nobody wrote down. Most systems assume a human who can infer intent from visual context or ask a colleague. An agent can't infer or ask. It only works with what's explicit. But the gap isn't new: the same unwritten knowledge has always confused new team members and outside contributors. The design-system-ops notes ([`knowledge-notes/ai-readiness.md`](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/ai-readiness.md)) sum it up: AI readiness is design-system quality, applied with more precision.

:::tip[Key takeaways]
- **Fix context at the source.** Weak metadata in Figma or code turns into invented props, broken code, and failed tests downstream.
- **Describe tokens and components by purpose.** An agent can't ask what something is for, so it guesses from the name.
- **Publish a machine-readable component manifest.** Without one, an agent has to work out which component fits from prose docs.
:::

## The problem

Without explicit context, errors compound. The same notes call this the **context cascade**: context quality at the source carries through every downstream consumer. Strong metadata in a Figma component leads to accurate AI-generated code, correct implementation, and reliable tests. Weak metadata leads to hallucinated props (properties the AI invents because the real ones weren't documented), broken implementation, and failed tests. Every layer either inherits good context or amplifies bad context. There's no neutral handoff.

## Practices

### Invest in context at the source

Because the cascade compounds, the cheapest place to fix context is where it starts: the component's metadata in Figma and code. An hour spent there pays off in every layer built on top of it.

### Publish a machine-readable component manifest

The [design-system-ops notes](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/ai-readiness.md) describe a **machine-readable component manifest**: a structured JSON index of every component, with its name, category, description, props, variants, composition relationships, token bindings, accessibility role, and status. An agent querying it can turn "I need a component for user input with validation" into a specific component, variant, and configuration, without reading documentation pages. That's the difference between a system that works with AI and one that's *legible* to it.

The notes specify the minimum fields for each component, and the key names below are theirs. The TextField values are illustrative, and each list is trimmed to one item:

```json title="manifest.json (one entry)"
{
  "name": "TextField",
  "category": "input",
  "description": "Single-line text input with a label and inline validation message.",
  "props": [
    {
      "name": "error",
      "type": "string",
      "required": false,
      "description": "Validation message shown below the field"
    }
  ],
  "variants": [
    { "name": "compact", "description": "Dense forms and filter bars" }
  ],
  "composedOf": ["Label", "HelperText"],
  "composedIn": ["Form", "FilterBar"],
  "tokens": ["input.border.default"],
  "a11y": { "role": "textbox" },
  "status": "stable",
  "version": "2.1.0"
}
```

Asked for "user input with validation," an agent can match the `input` category, the description, and the `error` prop. `composedOf` and `composedIn` tell it what the field is built from and where it belongs. `status` tells it the component is safe to use. It gets all of this without opening a docs page.

If your components already live in Storybook, you may not need to build the manifest from scratch. [Trueman](https://blog.murphytrueman.com/your-design-system-is-fragmenting-into-agent-files/) points out that Storybook 10.3 generates a Storybook Component Manifest automatically. It lists components, props, stories, and docs, and an MCP (Model Context Protocol) add-on lets agents query it before they generate UI. MCP is the standard interface AI agents use to read data from other tools. That generated list covers the basics, but the composition, token, and status fields above are still yours to add.

[Context engineering](/ds101/context-engineering/) covers task-specific versions of this manifest: Murphy Trueman's per-task context loading, and a **context engine** built independently by Diana Wolosin.

### Describe tokens and components by purpose

[Kavcic](https://learn.thedesignsystem.guide/p/design-tokens-that-ai-can-actually) describes what an agent sees when it reads an undocumented token set: "a wall of nested objects with no context about why these values exist or when to use them." A new team member hits the same ambiguity, but can at least ask someone. The same goes for component names. In [Trueman's](https://blog.murphytrueman.com/your-next-design-system-user/) examples, `BlueCard` or `CardBase` tells a machine nothing about its role, while `FeatureHighlight` or `OnboardingStep` does.

For tokens, the [DTCG format](/ds101/token-architecture/#store-tokens-in-the-shared-dtcg-format) has a place for purpose built in: an optional `$description` next to the value.

```json title="tokens/semantic.json"
"color.feedback.error": {
  "$type": "color",
  "$value": "{color.red.600}",
  "$description": "Error text and borders on invalid form fields. Not for warnings."
}
```

The name says what the token is. The description says when to use it and when not to. That's the context a wall of nested objects leaves out.

[Documentation for agents](/ds101/documentation-for-agents/) covers treating tokens and components as an API, from Romina Kavcic and Murphy Trueman.

### Document anti-patterns and edge cases

Per the design-system-ops notes, components with ambiguous names, undocumented anti-patterns, and vague purpose descriptions fail AI consumers first, and human consumers next.

## Common mistakes

- **Treating AI readiness as a separate AI layer bolted onto the system.** It isn't. The work is quality work, done with more precision, and it helps every consumer, including the humans.
