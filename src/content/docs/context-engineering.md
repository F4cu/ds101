---
title: Context Engineering
reviewed: 2026-09-18
reviewIn: 6
---

A design system's context, meaning the structured facts an AI agent needs to use it correctly, doesn't appear for free once you've written good docs. It has to be built as its own artifact: scoped, structured, and tested against how agents actually use it. Murphy Trueman and Diana Wolosin, working independently, arrived at the same shape: context split into scoped units an agent loads per task. Wolosin calls it a **context engine**.

:::tip[Key takeaways]
- **Build context as its own artifact.** Docs written for people rely on skimming and asking a colleague, which an agent can't do.
- **Test context formats with real agents.** The format that looks right isn't always the one agents resolve correctly.
- **Point to the contract instead of copying it.** A copied list goes stale, and agents trust it over the real system.
:::

## The problem

[Diana Wolosin](https://www.designsystemscollective.com/design-systems-for-ai-introducing-the-context-engine-777726da6a01) is blunt about why this needs its own discipline:

> "Your tokens, guidelines, accessibility rules, and UX patterns don't matter if the LLM consuming them can't read them as structured, meaningful context." — [Diana W.](https://www.designsystemscollective.com/design-systems-for-ai-introducing-the-context-engine-777726da6a01)

Prose written for people relies on things a model doesn't have: skimming for relevance, tolerance for ambiguity, and a colleague to ask. A context engine fills that gap. It isn't a rewrite of the docs, but a structured layer alongside them. In Wolosin's words: "A context engine is the machine-readable brain of your design system. It captures the why, what, and how of your product, then structures it into metadata that AI can reliably use." She calls it required, not optional: "The context engine is not the future of design systems. It's the missing infrastructure that design systems need today to thrive in the AI era."

## Practices

### Test context formats against real agent behavior

Wolosin didn't assume a metadata format would work. She tested it. At Indeed, she benchmarked eight MCP (Model Context Protocol) configurations against 1,056 prompts to find which structure agents actually resolved correctly. The "obviously correct" format isn't obvious until you measure it. [Generative loops](/ds101/generative-loops/) covers the same propose-measure-revise discipline in agent orchestration, where the harder question is when the loop stops, and [Agent Evals](/ds101/agent-evals/) covers how to set up the measuring.

### Design the agent's environment, not just its instructions

Jan Six designs agent experiences for Copilot at GitHub and created Tokens Studio, the widely used Figma design-tokens plugin. [He frames](https://www.intodesignsystems.com/agenda/build-design-systems-with-agents) context engineering as environment design, not prompt writing: "Agents are changing our world fast, multiplying what we can achieve. But they're only as good as the instructions we give them—and the environments we put them in." The environment includes what the agent can reach (see MCP layering in [Risk Management](/ds101/risk-management/)) as much as what it's told.

### Load only the context each task needs

Trueman's design-system-ops orchestration guide ([`knowledge-notes/agent-orchestration-guide.md`](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/agent-orchestration-guide.md)) calls this the minimal context principle: "Each agent should receive only the system context relevant to its task. A token auditor needs the token architecture but not the content guidelines." Loading everything into every agent, the guide notes, wastes tokens and can make agents perform worse.

In practice the toolkit does this with files rather than one big bundle. Its [MCP guide](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/mcp-setup-guide.md) makes an `AGENTS.md` file in the repo "the entry point": it says where things live, and links out to the component inventory, per-component metadata, and lint rules. An agent follows only the links its task needs.

Wolosin's context engine, built independently for a different production system, lands on the same shape: don't hand an agent everything at once, split context into scoped, loadable units, and treat that structuring as infrastructure, not documentation overhead. Two practitioners reaching the same design from separate starting points is stronger evidence than either alone.

### Point to the contract instead of copying it

An agent file that copies a list from the system starts going stale the first time someone changes the system. [Cris Morales](https://southleft.com/insights/design-systems/what-does-ai-readiness-mean-in-design-systems/) found this was the main reason agents scored higher on Southleft's bare codebase than with its `AGENTS.md`, `llms.txt`, and skills. The files hardcoded component, prop, and token lists that the agent should have found in the source, so agents rebuilt components that already existed. Some files even held ghost tokens, made up by the agent that wrote the file. In a [follow-up](https://southleft.com/insights/design-systems/the-autonomy-vs-alignment-dial-for-ai/), Morales explains why a stale file does so much damage: "Agents consume files as truths." If a file lists tokens and components, "the agent takes that list as the whole catalog and won't look further."

His fix borrows two engineering principles. Separation of concerns gives each file one job. Structured discoverability, which he compares to progressive disclosure in UX, lets the agent find each fact when it needs it. "One truth in one place. Everything else redirects to it, working as an index." For a component catalog, that one place is a contract generated from code, like the [component manifest](/ds101/ai-readiness/#publish-a-machine-readable-component-manifest) Storybook can build. After the refactor, his `AGENTS.md` was about 90% smaller and scored the same, at lower cost. [Agent Evals](/ds101/agent-evals/#run-a-bare-baseline-first) has the numbers.

The exception is an agent that can't reach the source. [Vercel's public `design.md`](https://vercel.com/blog/how-our-agents-build-on-brand-pages-with-design-md) is for tools outside its codebases, so it documents the class names and tokens its published stylesheet provides. Even there, the list covers only what that one stylesheet provides, and Vercel tests every change to the file against a fixed set of eval prompts.

## Common mistakes

- **Cutting an agent file without checking what the cut removed.** Morales's first refactor of Southleft's `AGENTS.md` dropped its score from 90 to 72, because it took out a prop list without pointing the agent to the generated contract that replaced it. A shorter file is only lighter if the agent can still find everything it lost. Re-run the evals after every cut.
- **Assuming existing documentation already is context.** Prose written for a human skimmer isn't the same artifact as structured metadata a model can reliably parse. Good docs are a starting point, not a substitute.
