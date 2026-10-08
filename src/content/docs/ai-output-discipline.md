---
title: AI Output Discipline
reviewed: 2026-09-19
reviewIn: 6
---

An AI tool auditing your tokens, components, or docs only knows what it found in the files it scanned, not what's in a Notion doc, another repo, or a teammate's head. Its output has to say so. "No documentation was found in the scanned files" is a scoped claim. "The system has no documentation" is an overreach the tool can't back up. The same discipline covers how findings are delivered. Every rule on this page comes from the design-system-ops output notes ([`knowledge-notes/output-discipline.md`](https://github.com/murphytrueman/design-system-ops/blob/main/knowledge-notes/output-discipline.md)).

:::tip[Key takeaways]
- **Scope every claim to the files scanned.** One unverified claim stated as fact makes readers doubt every other finding.
- **Use status labels instead of scores.** A made-up number implies a measurement that never happened.
- **Treat deviations as possibly deliberate.** Otherwise the report keeps flagging choices the team made on purpose.
:::

## The problem

A design system lead running these audits usually knows the system better than the tool does. The first time a report states something false as fact, like "components are not accessible" when it simply found no ARIA attributes in the files it read, the lead stops trusting the report's other findings too, including the correct ones. Overconfidence is worse than an incomplete scan. An incomplete scan just needs a wider net next time. A report that states unverified claims as fact poisons every future run. [Agentic Workflows](/ds101/agentic-workflows/) flags scoped claims as one thing an agent needs before publishing anything. This page is the fuller rule.

## Practices

### Use status labels, not invented scores

"Do not invent numeric scores, grades, or ratings. This is a hard rule, not a preference." No `7/10`, no `Grade B`, no `82%` health score. A number implies a measuring instrument that doesn't exist. Instead:

- Dimension health: 🟢 Strong / 🟡 Functional / 🟠 Weak / 🔴 Absent
- Finding severity: 🔴 Critical / 🟠 High / 🟡 Medium / ⚪ Low

Real counts stay in ("78 of 84 components have tests"), because those are facts. The ban is only on a number standing in for a judgment call. Labels force that judgment to be defended with evidence instead of hidden behind a number.

### Match report length to the question

"Are my tokens structured correctly?" deserves a focused answer about token structure, not a full health report with a governance appendix. "Audit my tokens" earns the structured report. "How healthy is my system?" earns the full assessment. Getting it wrong either way costs trust: too much buries what the person asked, and too little reads as evasive. When it's unclear, answer the narrow version first and offer the wider one: "I found three structural issues with your token architecture. Want the full audit with remediation guidance?"

### Cut empty sections and methodology

"Dimension 3: No issues found" and a paragraph explaining how the scan ran both use up space the reader might need for a follow-up question, without adding a finding.

### Treat deviations as possibly deliberate

An audit sees the code, not the conversations and trade-offs behind it. "Token names violate semantic naming conventions and should be renamed" assumes a mistake. "These names describe appearance rather than intent — if that's a deliberate convention, tell me so I can skip this next time" leaves room for a deliberate choice. The report's closing section should invite that correction as input the next run can use. Once a lead marks a finding as intentional, the next run should stop flagging it.

### Give one caveat per finding, in a peer's tone

Hedging spirals, like "it's possible that this might potentially indicate a gap, though it could also be intentional," bury the finding under qualifiers. State it once and move on. Tone follows the same rule. "These component names break from the pattern the rest of your library follows — worth aligning when you next touch them" reads as a colleague's review. "Flag any component whose name does not follow the dominant convention" reads as a compliance check. Most people running these audits are auditing their own system, and the output should sound like it.

## Common mistakes

- **Stating an absence as fact.** "The system has no documentation" claims knowledge the tool doesn't have. "No documentation was found in the scanned files" is the version it can stand behind.
