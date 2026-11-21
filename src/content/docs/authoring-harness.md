---
title: Authoring Harness
reviewed: 2026-11-21
reviewIn: 6
---

An agent can write a valid component spec in minutes, but only inside a setup built to stop it guessing. [Nathan Curtis](https://nathanacurtis.substack.com/p/a-spec-first-component-authoring) calls that setup a **harness**: the schema the spec must match, the instructions and rules the agent loads, the references it reads, and the checks that run on every edit. Each part replaces a guess with a fact the agent can look up.

:::tip[Key takeaways]
- **Give agents reports, not examples to copy.** An agent copying a neighboring spec copies its structure too, including what doesn't fit.
- **Validate across files, not only each file.** Otherwise an example can still use an option the component has dropped.
- **Load references at the stage that needs them.** Context read too early crowds out the decision the agent is making now.
:::

## The problem

A spec has hundreds of small decisions in it, and wherever the agent can't find the answer, it makes one up.

> "Agents seem to love inferring. Frankly, they ravenously infer." — [Nathan C.](https://nathanacurtis.substack.com/p/a-spec-first-component-authoring)

Guessing costs time as well as accuracy. In one of Curtis's early sessions, the agent spent 74,000 tokens (the units a model reads and bills by) on procedure alone, 44% of everything it read before writing a line. Another session re-read the same instruction files six times. Atlassian's design system team saw the same habit from the other side: in their test runs, agents "ignored your carefully written instructions and read source files instead," and only reading the [run transcripts](https://www.atlassian.com/blog/ai-at-work/giving-ai-agents-design-system-context-from-the-terminal-what-we-learned-building-a-cli) showed it.

Curtis's harness is built around his own spec format, YAML files that compile to Figma and React, and his figures come from his own sessions, with no baseline to compare against. The parts still apply to any team that has agents write specs or components against a schema. [Specifications](/ds101/specifications/#author-the-spec-as-data-in-the-repo) covers why a team would keep its spec as data in the first place.

## Practices

### Put descriptions and examples in the schema

The schema (the file that says which fields a spec may have and which values each allows) is the first thing an agent should read, so it should answer questions, not only reject wrong answers. Curtis tightened loose types, such as moving opacity from any number to a value between 0 and 1. He also added a description and an example to each field, so that models "consult descriptions and examples before guessing." A field with no description leaves the agent to guess its meaning from its name.

### Write each rule with its obligation and its mistake

Curtis keeps nine rule files, one per part of the spec (props, styles, variants, anatomy, slots, and others). Each rule states how strict it is (must, should, never, or could), names the mistake it forbids, and cites the decision record behind it. One example: reuse the prop names peer components already use, so `label` and not `text` when the other components say `label`.

He also records the rules he considered and declined, so the same proposal doesn't come back. When an agent fumbles something new in a session, the fix becomes a line in the skill (the instruction file the agent loads), not a correction in the chat that the next session won't see. [Agent Evals](/ds101/agent-evals/#turn-each-correction-into-a-rule-or-a-check) covers the same loop at the scale of a whole eval suite.

### Load references at the stage that needs them

Curtis groups his references into packs, each read at one stage of the work. The API pack (naming conventions, existing props, anatomy analysis) is read before the agent writes the component's API. The styling pack (token files and the styles reference) waits until styling starts, because reading it earlier "dilutes api work." His skill puts the rule plainly: "A pack is read once and never reopened."

This is the [minimal context principle](/ds101/context-engineering/#load-only-the-context-each-task-needs) applied inside a single task. Trueman splits context between agents. Curtis splits it between the stages of one agent's work.

### Give agents reports, not examples to copy

Existing specs are tempting templates, but Curtis says they show idiom and "should never be the source of structure." Instead, his analyze commands write reports the agent reads in place of inferring: which props the library already uses, which tokens exist and which go unused, which components nest inside which, and which layer names break when converted to code keys.

The reports also catch misreadings. In one session an agent read a "2x" spacing token as 16px and wrote an outline that passed validation but was wrong. A token lookup fixed it, and replaced a search that had taken 59 seconds with a quick read.

### Keep template comments short

Curtis's five starter files (API, variants, examples, supplemental notes, and consumer guidelines) show each kind of prop with as few comments as possible. His reasoning: comments invite the agent to write more comments and to skip the schema, which is where the real answers are. This one is his judgment from watching sessions, not something he measured.

### Validate every edit, across files

Curtis runs validation on every edit, in two layers. A schema check runs per file. A catalog of cross-file rules then checks references between files, such as what a slot accepts. Each error names the file, the exact field, and what's wrong, like a token missing from the library or a prop the API doesn't declare.

The second layer is where his own gap showed up. An example still configured a button with `size: Large` after the button had dropped Large, and it passed, because examples weren't checked against the props they set. He has since added that check. [Specifications](/ds101/specifications/#validate-the-spec-against-a-schema) covers the single-file schema check this builds on.

## Common mistakes

- **Starting a new spec by copying a neighbor's.** The neighbor's structure comes along with its idiom, and the agent treats it as the answer. Curtis keeps existing specs as style references only.
- **Fixing a fumble in the conversation.** The correction disappears when the session ends, and the next session makes the same mistake. Curtis's skill grew by absorbing each failure "as lines in the file."
- **Reading a passing validator as complete.** Curtis's `size: Large` example passed for as long as no rule compared examples with props. Each check covers only what someone thought to check.
- **Expecting his speed on day one.** Curtis's "about 5 minutes" per component came after many tuning sessions, and he says he's "nowhere near done tuning." Budget for building the harness, not just running it.
