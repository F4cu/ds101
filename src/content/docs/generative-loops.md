---
title: Generative Loops
reviewed: 2026-09-18
reviewIn: 6
---

A **generative loop** is any orchestration shape where an agent's output feeds back into another round of generation. This page is about the kind that includes review: a **generator/reviewer loop**, where one agent produces work and a reviewer agent evaluates it and sends it back for revision. Pairing a generator with a reviewer only improves quality if the loop has a defined stopping point and a real way to measure whether an iteration improved. Without both, it either runs forever or settles on something nobody checked.

:::tip[Key takeaways]
- **Cap the loop and define "converged."** Without both, a loop runs forever or settles on something nobody checked.
- **Use a review loop only when needed.** It's the one pattern that can run indefinitely, so it's the costliest to get wrong.
- **Send capped runs to human review.** Hitting the iteration limit isn't the same as converging.
:::

## The problem

[Agentic Workflows](/ds101/agentic-workflows/) names four orchestration patterns from the design-system-ops orchestration guide ([`knowledge-notes/agent-orchestration-guide.md`](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/agent-orchestration-guide.md)): sequential chain, parallel agents, supervisor, and what the guide calls the **feedback loop**. This wiki uses the more specific name, generator/reviewer loop.

The first three each have a built-in end. A sequential chain finishes when its last agent runs. Parallel agents finish when every branch reports back. A supervisor finishes when it stops delegating. None needs a stopping rule, because stopping is just finishing. A generator/reviewer loop is the one pattern that routes work back to *itself*, and nothing about that shape says when to quit. Per the same guide, it "can loop indefinitely if convergence criteria are not defined."

## Practices

### Cap the loop and define "converged"

A generator/reviewer loop needs an explicit stopping condition before it runs, not a hope that it'll settle. The design-system-ops orchestration guide writes it as a rule: "The loop terminates when the reviewer reports no findings above a configured severity threshold, or when the maximum iteration count is reached." It recommends three iterations at most. Three isn't magic. An unbounded loop is a sign of a convergence rule nobody wrote down. Their broader rule applies too: "never silently skip a failed step." A loop that never converges is a hidden failure, not a thorough one.

### Use a review loop only when the task needs one

[Romina Kavcic's test](https://learn.thedesignsystem.guide/p/should-you-build-an-agent-for-your) for whether a task deserves an agent at all, "find the simplest solution possible, and only increase complexity when needed," applies to which pattern you choose, too. A generator/reviewer loop is the most expensive of the four to get wrong: it's the only one that can run indefinitely, and every extra round costs more agent time. If the work is predictable and doesn't need review, a sequential chain or parallel agents do the job without the open-ended shape. The orchestration guide keeps the loop for "quality-critical output where a single pass is insufficient," and names component descriptions, documentation, and governance rules as the work that benefits.

### Measure whether a format works

Diana Wolosin's benchmark of eight MCP configurations against 1,056 prompts (propose a format, measure how agents resolve it, revise) is a generative loop applied to infrastructure: a **format-evaluation loop**, where the candidate is a context format, not a piece of content. It isn't one of the four orchestration patterns. It's evidence that the same discipline (define "correct," then measure against it) recurs outside workflow design. A format that looks reasonable isn't necessarily the one that performs best. [Context engineering](/ds101/context-engineering/) has the full account.

### Ship the loop as a UI pattern

AWS Cloudscape treats response feedback as a shippable component, not an internal evaluation step: thumbs-up and thumbs-down controls, plus a dedicated [**response regeneration**](https://cloudscape.design/gen-ai/patterns/response-regeneration/) pattern for when an output misses. It's the same discipline as the agent-level loop, applied where a real user meets generated output.

## Common mistakes

- **Shipping whatever the last iteration produced.** Hitting the cap isn't the same as converging. The guide's rule: "If the loop reaches the maximum without converging, the output is flagged for human review."
- **Reaching for a generator/reviewer loop when a simpler pattern would do.** Having no built-in stopping point is a cost, not a feature. It's only worth paying when the task truly needs review and revision rather than a fixed sequence of steps.
