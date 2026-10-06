---
title: Context Engineering
reviewed: 2026-09-18
reviewIn: 6
---

A design system's context, meaning the structured facts an AI agent needs to use it correctly, doesn't appear for free once you've written good docs. It has to be built as its own artifact: scoped, structured, and tested against how agents actually use it. Murphy Trueman and Diana Wolosin, working independently, arrived at the same shape: context split into scoped units an agent loads per task. Wolosin calls it a **context engine**.

:::tip[Key takeaways]
- **Build context as its own artifact.** Docs written for people rely on skimming and asking a colleague, which an agent can't do.
- **Test context formats with real agents.** The format that looks right isn't always the one agents resolve correctly.
- **Load only the context each task needs.** Loading everything wastes tokens and can make agents perform worse.
:::

## The problem

[Diana Wolosin](https://www.designsystemscollective.com/design-systems-for-ai-introducing-the-context-engine-777726da6a01) is blunt about why this needs its own discipline:

> "Your tokens, guidelines, accessibility rules, and UX patterns don't matter if the LLM consuming them can't read them as structured, meaningful context." — [Diana W.](https://www.designsystemscollective.com/design-systems-for-ai-introducing-the-context-engine-777726da6a01)

Prose written for people relies on things a model doesn't have: skimming for relevance, tolerance for ambiguity, and a colleague to ask. A context engine fills that gap. It isn't a rewrite of the docs, but a structured layer alongside them. In Wolosin's words: "A context engine is the machine-readable brain of your design system. It captures the why, what, and how of your product, then structures it into metadata that AI can reliably use." She calls it required, not optional: "The context engine is not the future of design systems. It's the missing infrastructure that design systems need today to thrive in the AI era."

## Practices

### Test context formats against real agent behavior

Wolosin didn't assume a metadata format would work. She tested it. At Indeed, she benchmarked eight MCP (Model Context Protocol) configurations against 1,056 prompts to find which structure agents actually resolved correctly. The "obviously correct" format isn't obvious until you measure it. [Generative loops](/ds101/generative-loops/) covers the same propose-measure-revise discipline in agent orchestration, where the harder question is when the loop stops.

### Design the agent's environment, not just its instructions

Jan Six designs agent experiences for Copilot at GitHub and created Tokens Studio, the widely used Figma design-tokens plugin. [He frames](https://www.intodesignsystems.com/agenda/build-design-systems-with-agents) context engineering as environment design, not prompt writing: "Agents are changing our world fast, multiplying what we can achieve. But they're only as good as the instructions we give them—and the environments we put them in." The environment includes what the agent can reach (see MCP layering in [Scaling AI effort to risk](/ds101/scaling-ai-effort-to-risk/)) as much as what it's told.

### Load only the context each task needs

Trueman's design-system-ops orchestration guide ([`knowledge-notes/agent-orchestration-guide.md`](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/agent-orchestration-guide.md)) calls this the minimal context principle: "Each agent should receive only the system context relevant to its task. A token auditor needs the token architecture but not the content guidelines." Loading everything into every agent, the guide notes, wastes tokens and can make agents perform worse.

In practice the toolkit does this with files rather than one big bundle. Its [MCP guide](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/mcp-setup-guide.md) makes an `AGENTS.md` file in the repo "the entry point": it says where things live, and links out to the component inventory, per-component metadata, and lint rules. An agent follows only the links its task needs.

Wolosin's context engine, built independently for a different production system, lands on the same shape: don't hand an agent everything at once, split context into scoped, loadable units, and treat that structuring as infrastructure, not documentation overhead. Two practitioners reaching the same design from separate starting points is stronger evidence than either alone.

## Common mistakes

- **Assuming existing documentation already is context.** Prose written for a human skimmer isn't the same artifact as structured metadata a model can reliably parse. Good docs are a starting point, not a substitute.
