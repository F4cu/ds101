---
title: AI Prototyping
reviewed: 2026-11-21
reviewIn: 6
---

A coded prototype built with AI lets a team react to a working idea before anyone commits to building it. It stays useful only if it's built from the system's real components and arrives with a spec engineers and agents can build from. Atlassian's design team now works this way, with its own prototyping app.

:::tip[Key takeaways]
- **Prototype with the system's real components.** Otherwise AI invents imports and token names that look right and don't exist.
- **Hand off a spec with every prototype.** Without one, engineers rebuild from what they can see and lose the decisions behind it.
- **Keep prototype code out of production.** Code that demos well can still break off the happy path.
:::

## The problem

AI makes a prototype cheap, so teams make many more of them. More prototypes means more to review, and AI-built prototypes fail in ways that are easy to miss in a demo.

> "AI can produce plausible but wrong outputs - a component import that doesn't exist, a token with the wrong name, an interaction that only works on the happy path." — [Guy J.](https://www.linkedin.com/pulse/building-protobox-our-home-grown-ai-prototyping-tool-guy-jenkins-gsw7c/)

[Jenkins](https://www.linkedin.com/pulse/building-protobox-our-home-grown-ai-prototyping-tool-guy-jenkins-gsw7c/) leads core design at Atlassian. His team prototyped with v0, Replit, Figma Make and others, and still uses many of them. But at Atlassian's scale (many stacks and products, one central R&D organization), third-party tools couldn't bend far enough. So the team built **Protobox**, a Mac app where anyone at Atlassian can build, comment on, test, and hand off coded prototypes.

Everything on this page comes from one company describing its own tool, and its figures come from internal pilots. Building a prototyping app is a large-organization move. The practices below don't depend on it.

## Practices

### Prototype with the system's real components

Protobox prototypes use the real design system components, so engineers can weigh in on feasibility while changes are still cheap, according to Atlassian's [AI PDLC Playbook](https://atlassianblog.wpengine.com/wp-content/uploads/2026/11/ai-pdlc-playbook.pdf). Jenkins credits "templates, structured configuration, and design-system guidance" with making prototypes faster and more reliable.

That guidance has to be written for the model. Atlassian publishes plain-text files for language models, and its [`llms-full.txt`](https://atlassian.design/llms-full.txt) includes the line "You must ONLY use tokens listed in this document, do not make up values." [Documentation for agents](/ds101/documentation-for-agents/) covers writing for that reader, and [Context engineering](/ds101/context-engineering/) covers giving it only what each task needs.

### Use code to converge, not to push pixels

Jenkins is careful about where code belongs. Atlassian uses code "intentionally - not 'tokenmaxxing'," and still sees pixel pushing as "an important part of most design processes" that belongs in tools like Figma. Code helps most in convergence, the phase where a direction is being narrowed toward something buildable: it brings feasibility and accessibility into the work earlier and cuts back-and-forth with engineering.

So a lo-fi idea can start anywhere. A prototype worth building in code is one that's close enough to a decision that real components, real data, and real interactions change what people think of it.

### Check the code before you share it

A prototype that looks right can still be built badly. Protobox's **Pre-flight** skill (instructions an agent loads for one job) runs a visual feedback loop on the prototype's code and improves its quality before it goes to engineering. [Agent Evals](/ds101/agent-evals/#have-people-judge-rendered-pages-blind) explains why that check has to look at the rendered page and not only the code: graders reading code miss what only shows on screen.

### Hand off a spec with every prototype

A second skill, **Spec-gen**, "turns any prototype into something ready to hand off to production," breaking the work into tasks for people and agents. The playbook lists what that spec carries: "screens, flows, behaviors, component details, accessibility requirements, and implementation notes." Engineers and agents build from the same spec the designer refined, not from their reading of a demo.

Atlassian estimates this cut design-to-build time by up to 50% in two pilot workflows. That is an estimate from its own pilots, not a measured benchmark. [Specifications](/ds101/specifications/) covers what a component spec needs. A prototype's spec adds the layer above it: the screens and flows that use the components.

### Keep prototype code out of production

Protobox code runs in a sandbox and doesn't ship. Jenkins calls production "the logical, next step," not the current state. When Atlassian did let product managers and designers ship code, it kept the changes small and low-risk. Over three months, 50+ of them shipped 100+ production changes, and every one went through engineering review and the standard deployment process. The playbook's rule is that "widening who can contribute doesn't change who is accountable": engineering still owns the technical quality of what ships. [Agentic Workflows](/ds101/agentic-workflows/#set-autonomy-per-action-not-per-agent) covers matching review to what a change can break.

## Common mistakes

- **Shipping the demo.** A prototype only has to work for the path someone shows. Jenkins's "interaction that only works on the happy path" is the failure that reaches users if the code goes straight to production.
- **Moving all design work into code.** Jenkins keeps pixel work in Figma. Code that's started too early locks in layout before the idea has been explored.
- **Prototyping outside the system.** A general AI tool with no access to your components builds its own. The prototype then reviews well and can't be built as shown.
- **Reading Atlassian's numbers as a forecast.** "Up to an estimated 50%" comes from two internal pilots at one very large company. Measure your own handoff before and after.
