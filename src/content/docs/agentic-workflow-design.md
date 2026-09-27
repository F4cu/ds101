---
title: Agentic Workflow Design
reviewed: 2026-07-02
reviewIn: 6
---

Agentic workflows are a coordination problem, not a capability problem. When you chain AI agents together (small automated workers, each doing one job), the hard part isn't making any one agent smarter. It's defining how they hand work to each other, and exactly where a human steps in. Skip either and you get output nobody can trust or explain.

:::tip[Key takeaways]
- **Use a workflow when the steps never change.** An agent on a fixed task adds cost and complexity with no payoff.
- **Set autonomy for each action.** Otherwise a trivial fix and a breaking change get the same level of review.
- **Never silently skip a failed step.** People assume a check that didn't run has passed.
:::

## The problem

Two voices point at the same failure from different angles. The design-system-ops orchestration guide ([`knowledge-notes/agent-orchestration-guide.md`](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/agent-orchestration-guide.md)) warns: "Never silently skip a failed step — a skipped audit is worse than a failed audit because the consumer assumes the audit passed." That's opacity without accountability. [Romina Kavcic](https://learn.thedesignsystem.guide/p/should-you-build-an-agent-for-your) comes at it from cost: "find the simplest solution possible, and only increase complexity when needed." Complexity without payoff on one side, hidden failures on the other: both come from building the automation before designing the coordination.

## Choosing an orchestration pattern

First decide whether the task needs an agent at all. Kavcic's test: if a task follows the same steps every time, you want a workflow, not an agent. And if a run saves less than $0.10 of human time, an agent doesn't pay for itself.

<div class="mermaid-wrap">

```mermaid
graph LR
  A[New task to automate] --> B{Same steps<br>every time?}
  B -- Yes --> C[Workflow, not agent<br>pick an orchestration pattern]
  B -- No, needs judgment --> D{Saves enough per run<br>to justify the cost?}
  D -- No --> E[Don't automate it]
  D -- Yes --> F{Mistake cheap<br>to catch and undo?}
  F -- Yes --> G[Agent runs on its own<br>logged, spot-checked]
  F -- No --> H[Agent stops at a human gate<br>a person approves the action]
```

</div>

The left branch is Kavcic's workflow-vs-agent test. The two agent outcomes are the ends of per-action autonomy (see the practices below). Then pick among the four patterns in the orchestration guide, which the [glossary](/ds101/glossary/) calls agentic workflow patterns:

### Sequential chain

Agents run in order, each feeding the next (Component Generator → Description Writer → Accessibility Auditor). It's easy to debug. The cost: it's slow, and one broken early step blocks everything behind it.

### Parallel agents

Agents run at once on separate pieces of the same task, like an Accessibility Auditor and a Performance Auditor working on the same component. The guide calls this a parallel fan-out. It trades the chain's slowness for a new cost: someone has to reconcile what each branch found.

### Supervisor

One agent delegates subtasks to others and decides when enough has been delegated, instead of following a fixed order or splitting the work up front.

### Generator/reviewer loop

A generator paired with a reviewer that sends work back. The guide calls it the **feedback loop**. It's the only pattern of the four with no built-in stopping point, which is why it gets its own page: [Generative loops](/ds101/generative-loops/).

## Practices

### Set autonomy per action, not per agent

How much review an action needs depends on what it does, not on which agent does it. [Kavcic](https://www.intodesignsystems.com/blog/design-system-not-ready-for-ai-agents) sorts agent changes by confidence and risk: a lint fix or a doc typo can merge on its own, a token update opens a draft PR a person merges, and a new API or breaking change is only ever a suggestion. [CI for agentic workflows](/ds101/ci-for-agentic-workflows/) covers how a pipeline enforces those tiers. The design-system-ops orchestration guide builds the checkpoints into each chain as **human gates**, spelled out in the chain's definition rather than left to the agent's judgment.

### Never silently skip a failed step

From the orchestration guide: a skipped audit is worse than a failed one, "because the consumer assumes the audit passed." Every step either succeeds, fails visibly, or reports that it didn't run.

### Scope claims to what was inspected

Anything an agent publishes on its own should scope its claims to what it actually checked: "no X was found in the files scanned," never "the system has no X" ([`knowledge-notes/output-discipline.md`](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/output-discipline.md)). [AI output discipline](/ds101/ai-output-discipline/) has the fuller rule.

## Common mistakes

- **Treating "the agent *can* do X" as "the agent should do X unsupervised."** They're different questions. Teams that never draw the line end up in one of two places. Over-trusting the agent lets unchecked output quietly degrade the system. Under-trusting it layers on so much review that the productivity gain disappears. The [orchestration guide](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/agent-orchestration-guide.md) tracks the balance as a human intervention rate: if workflows stop at human gates too often, "the autonomy levels may be too conservative. If too low, the oversight may be insufficient."
