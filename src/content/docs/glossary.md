---
title: Glossary
---

One line per term, in the order they're introduced across the wiki. Each links back to
the page where it's explained in context.

**Design token** — a named, reusable value (a color, a spacing unit, a font size) that
stands in for a hardcoded value in code. See [Token architecture](/ds101/token-architecture/).

**Primitive token** — the raw-value tier of a token system; describes *what* a value is
(`color.blue.500`), never what it means. See [Token architecture](/ds101/token-architecture/).

**Semantic token** — the intent tier of a token system; describes *why* a value is used
(`color.action.primary`), referencing a primitive underneath. See
[Token architecture](/ds101/token-architecture/).

**Component token** — an optional third tier that scopes a semantic token's intent to one
specific component, referencing a semantic token underneath. See
[Token architecture](/ds101/token-architecture/).

**Alias** (token reference) — a token that points to another token instead of holding a
raw value directly, so a single change at the source propagates everywhere it's
referenced. See [Token architecture](/ds101/token-architecture/).

**DTCG** — the Design Tokens Community Group's shared file format for design tokens,
letting different tools read and write the same token files. See
[Token architecture](/ds101/token-architecture/).

**Resolver file** — a DTCG file that composes token sets into modes, such as light/dark
or brand variants, for theming. See [Token architecture](/ds101/token-architecture/).

**Token taxonomy** — the set of levels a token name can draw on (namespace, object,
base, modifier) and the order they appear in. See [Token naming](/ds101/token-naming/).

**Namespace** (token) — a prefix, such as a short system name, theme, or business
domain, that keeps one system's tokens from colliding with another's. See
[Token naming](/ds101/token-naming/).

**Polyhierarchy** — a decision that fits two places in a token taxonomy, handled by
aliasing one name to the other so the value lives once. See
[Token naming](/ds101/token-naming/).

**Primitive** (component) — a generic, context-free building-block component (often
literally named `Box` or `Stack`) with direct access to design tokens but no domain
meaning of its own; the same idea Brad Frost calls an atom. Not to be confused with a
primitive token (above), the raw-value tier of a token system. See
[Component composition in code](/ds101/component-composition-in-code/).

**Subcomponent** — an independently composable component with its own API, intended for
use only within one specific parent component, such as `CardMedia` inside `Card`. Distinct
from a primitive by scope, not size: a primitive is reusable anywhere, a subcomponent is
tied to its parent. See [Component composition in code](/ds101/component-composition-in-code/).

**Part** — Radix Primitives' term for the same concept as a subcomponent: one piece of a
component exposed separately so consumers compose it rather than configure it through
props, e.g. `Dialog.Trigger`, `Dialog.Content`. See [Component composition in code](/ds101/component-composition-in-code/).

**Compound component** — the code-level pattern that implements subcomponents/parts: a
parent component composed from smaller components while retaining access to all of the
parent's semantic elements, e.g. `Tabs.List`, `Tabs.Item`, `Tabs.Panel`. See
[Component composition in code](/ds101/component-composition-in-code/).

**Slot** — the insertion point a parent component exposes so a subcomponent or other
content can be placed into it, rather than the piece placed there. Leaning on slots
trades a large configuration-prop surface for a small number of well-defined insertion
points. In Figma, a slot is a native component property. See [Component composition in code](/ds101/component-composition-in-code/).

**Typed container** — a slot that accepts only specific children, such as a Card zone
that takes `CardMedia` but not arbitrary content. Nathan Curtis's term; the opposite of an
open slot. See [Component composition in code](/ds101/component-composition-in-code/#slots).

**Component property** (Figma) — a variant, boolean, text, or instance-swap property
attached directly to a Figma component; the design-tool equivalent of a prop in code. See
[Component composition in Figma](/ds101/component-composition-in-figma/).

**Nested instance** — a subcomponent instance placed inside a parent component in Figma,
with its own properties optionally exposed up through the parent's properties panel. See
[Component composition in Figma](/ds101/component-composition-in-figma/).

**Preferred instances** (Figma) — the curated list of components a slot offers to designers,
optionally enforced with "Only allow preferred instances"; Figma's version of a typed
container. See [Component composition in Figma](/ds101/component-composition-in-figma/).

**Design-to-code contract** — an explicit agreement about what "done" means at each
stage (design, build, documentation, release) of building a component. See
[The design-to-code contract](/ds101/design-to-code-contract/).

**Interface inventory** — a screenshot-and-catalog pass over every distinct treatment of every UI element already shipping, done before designing new tokens or components. See [UI audit](/ds101/ui-audit/).

**Heuristic evaluation** — an expert usability review of an interface against a fixed set of principles (Nielsen's 10 heuristics), run by a small panel independently before findings are consolidated; not a substitute for user research. See [UI audit](/ds101/ui-audit/).

**Pilot** (design system) — a real, already-planned product project used to build and
test a design system's first components against actual work, before they're locked in
as v1. See [Pilot strategy](/ds101/pilot-strategy/).

**Scorecard** (pilot scorecard) — a shared, numerically scored set of criteria used to
choose which candidate project to pilot a design system on, so the choice isn't made by
gut feel or seniority. See [Pilot strategy](/ds101/pilot-strategy/).

**Governance** (decision governance) — the decisions and processes that determine what
belongs in a design system, how it gets added, how it changes, and how it's removed. See
[Decision governance](/ds101/decision-governance/).

**Decision record** — a written note capturing why a significant design-system decision
was made, so it doesn't get silently re-litigated later. See
[Decision governance](/ds101/decision-governance/).

**Maturity stage** — where a design system sits on a five-level spectrum from ad-hoc to
optimised, describing the sophistication of its practices, not just its current health.
See [Decision governance](/ds101/decision-governance/).

**Maturity dimension** — one of six independent axes (organizational alignment, team
effectiveness, infrastructure robustness, governance, support, adoption) a design system
can be scored on separately, rather than collapsed into one overall stage. See
[Design system maturity](/ds101/design-system-maturity/).

**RACI matrix** — a table assigning each governance decision one Responsible, one
Accountable, and any number of Consulted or Informed parties, so it's clear who decides
versus who's just weighing in. See [Decision governance](/ds101/decision-governance/).

**Team model** — the structural answer to *who* builds and owns a design system: one
dedicated team, several product teams together, or both informing each other. See
[Team models](/ds101/team-models/).

**Contribution model** — how people outside the core team propose, build, and ship
changes to a system, distinct from who owns it and from the criteria a change has to
clear. See [Contribution models](/ds101/contribution-models/).

**Deprecation** — the formal process of retiring a component or token, on a timeline,
with a documented migration path to its successor. See
[Component lifecycle](/ds101/component-lifecycle/).

**Solitary model** — one team builds a system mostly for its own needs and makes the
result available to others, without formal support for outside consumers. See
[Team models](/ds101/team-models/).

**Centralized model** — a dedicated team produces and supports a system for other teams
to use as part of their own work. See [Team models](/ds101/team-models/).

**Federated model** — designers and engineers from multiple product teams decide on and
build the system together, rather than one team owning it centrally. See
[Team models](/ds101/team-models/).

**Cyclical model** — a centralized core team and a federated contributor group that
continuously inform each other, rather than one model replacing the other. See
[Team models](/ds101/team-models/).

**Community backlog** — a public, working-group-reviewed queue of proposed components
and patterns anyone can contribute to, used by GOV.UK's Design System, which publishes
what it wants built before anyone proposes it. See
[Contribution models](/ds101/contribution-models/).

**Rule of three** — the software-engineering principle that a duplicated pattern doesn't
earn a shared abstraction until it's needed a third independent time; applied to design
systems as a bar for when a one-off component becomes a system candidate. See
[Component lifecycle](/ds101/component-lifecycle/).

**Canonical Vanilla Framework** — Inayaili de León Persson's decision tree for sorting
an incoming pattern request into modification, addition, or removal before debating its
merits. See [Component lifecycle](/ds101/component-lifecycle/).

**System inventory** — a record of the design system's own tokens and components, with
each item's status, version, and dependencies, generated from the repo rather than kept
by hand. Distinct from an interface inventory, which catalogs what products already
ship. See [System inventory](/ds101/system-inventory/).

**High-fan-in component** — a component rendered by many other system components, so a
change to it reaches all of them. See [System inventory](/ds101/system-inventory/).

**Doneness matrix** — Nathan Curtis's grid for tracking many parts through the same
stages: parts as rows, stages or outputs as columns. See
[System inventory](/ds101/system-inventory/).

**Contribution vs. participation** — a contribution is a proposal, design, code, doc, or
asset released through the system for others to reuse; participation (feedback, bug
reports, office-hours attendance) is valuable but isn't a contribution. See
[Contribution models](/ds101/contribution-models/).

**Steward** — the person who guides a contributor through a large or unfamiliar
contribution, and who may finish the work themselves if the contributor stalls. See
[Contribution models](/ds101/contribution-models/).

**Composition** (component API) — building structural or content variation by nesting
and combining smaller pieces, instead of adding a configuration prop for every
variation. See [Component API design](/ds101/component-api-design/).

**Boolean prop** (show/hide toggle) — a prop that is either on or off, such as
`showFooter` or `disabled`. Figma's equivalent is a boolean property. See
[Component API design](/ds101/component-api-design/).

**Configuration collapse** — the end state of a component that has accumulated so many
layout props, boolean props, and nested subcomponents that its API becomes harder to
use than the problem it was meant to solve. See
[Component API design](/ds101/component-api-design/).

**Prop bloat** — the gradual, request-by-request accumulation of component properties
that each seem reasonable individually but together make a component fragile and hard
to maintain. See [Component API design](/ds101/component-api-design/).

**Prohibited combination** — a pair of prop values that the code accepts but the system
doesn't support (like a ghost button at large size), recorded in the component's
metadata with a reason and a severity so tools can refuse or flag it. See
[Component API design](/ds101/component-api-design/).

**Multi-platform (vs. cross-platform)** — sharing one set of design decisions and
intent across platforms while letting the implementation diverge to match each
platform's conventions, rather than forcing one implementation to run everywhere
identically. See [Component API design](/ds101/component-api-design/).

**Anatomy** (component anatomy) — a component's named parts and how they nest, agreed
once so Figma layers and code markup use the same names. See
[Component property naming](/ds101/component-property-naming/).

**Code-only prop** — a prop that exists in code but changes nothing visible, such as `id`
or `ariaLabel`, so it has no natural place in Figma's properties panel. See
[Component property naming](/ds101/component-property-naming/).

**Instance override** (Figma) — an edit made to one instance of a component, such as
changed text or a swapped icon, that Figma carries into another variant only if the
layer names match. See [Component property naming](/ds101/component-property-naming/).

**Data contract** (component) — a list of the fields a component needs, which are
optional, what format each takes, and what it shows when one is missing or malformed.
See [Component usability](/ds101/component-usability/).

**Controlled component** — a component whose state, such as its value or whether it's
open, is set by its parent through props (`value` and `onChange`), rather than kept in
its own local state (uncontrolled). See [Component usability](/ds101/component-usability/).

**Components as data** — authoring a component's anatomy, props, styles, and variants
directly as structured data (YAML/JSON) rather than a Figma file, so Figma and
generated code for each platform become outputs of that data instead of the source
it's reverse-engineered from. See
[Multi-platform component specs](/ds101/multi-platform-component-specs/).

**Component contract** — a precise, verifiable declaration of what a component must do
(its intent), as opposed to a description a platform team can interpret loosely; the
mechanism for handling structural or behavioral differences between platforms, as
opposed to token layering for value differences. See
[Platform divergence](/ds101/platform-divergence/).

**Coverage vs. usage vs. adoption** — three distinct measurements often conflated into
one: coverage is what proportion of a product is built from the system; usage is how
often specific components are reached for; adoption is whether a team is meaningfully
on the system at all. See [Measuring adoption](/ds101/measuring-adoption/).

**Adoption stage** — where a team sits on a five-stage path (aware, installed, consuming,
contributing, advocating) in how deeply it has taken up the system. See
[Measuring adoption](/ds101/measuring-adoption/).

**Three rungs of "documented"** — a component can exist (has a story), be described (has
a props reference), or be guided (has usage guidance) — three different bars, often
conflated into one. See [Documentation coverage](/ds101/documentation-coverage/).

**Staleness** — a signal that documentation may have fallen behind a component's last
code change, framed as a risk flag to confirm, not proof the doc is wrong. See
[Documentation coverage](/ds101/documentation-coverage/).

**Business case** — a translated argument for a design system's value, stated in terms
a non-design stakeholder (finance, engineering leadership, product) can evaluate, rather
than in the system's own internal metrics. See
[Communicating value](/ds101/communicating-value/).

**ROI** (return on investment) — a measure of value returned relative to cost; in design
systems, notoriously under-measured — only a small fraction of teams calculate it at all,
which is part of why a credible one stands out. See
[Estimating ROI](/ds101/estimating-roi/).

**OKR** (Objectives and Key Results) — a goal-setting framework pairing a qualitative
objective with a small number of measurable key results, commonly used by companies to
track priorities a design system's roadmap can be mapped against. See
[Business alignment](/ds101/business-alignment/).

**Payback** — the first month in which a design system's cumulative benefit is at least its
cumulative cost, counted from running totals rather than one year's figures. See
[Estimating ROI](/ds101/estimating-roi/).

**Growth, risk, and cost framing** — the three ways to lead a funding case, chosen by
what leadership is focused on this cycle: what the system lets the company scale, what
risk it removes, or what waste it recovers. See
[Business alignment](/ds101/business-alignment/).

**Loaded hourly rate** — what an hour of someone's time really costs the company (salary
plus overheads, divided by working hours); used at one rate for both the cost and the
benefit side of an ROI estimate. See [Estimating ROI](/ds101/estimating-roi/).

**European Accessibility Act (EAA)** — the EU directive that has required many
consumer-facing products and services to be accessible since 28 June 2025. Its technical
standard, EN 301 549, currently points to WCAG 2.1 AA. See
[Component accessibility](/ds101/component-accessibility/).

**Evidence rule** (accessibility) — an audit criterion passes only with evidence from the
running component or a computed contrast ratio; anything inferred from code alone is a
warning, not a pass. See [Component accessibility](/ds101/component-accessibility/).

**WCAG** (Web Content Accessibility Guidelines) — the W3C's accessibility standard,
organized into A, AA, and AAA conformance levels; 2.2 AA is the usual audit baseline. See
[Component accessibility](/ds101/component-accessibility/).

**Landmark** (landmark region) — a named region of a page, such as the header,
navigation, main content, or footer, that screen reader users can list and jump to. See
[Layout accessibility](/ds101/layout-accessibility/).

**Skip link** — a link at the very start of a page that moves keyboard focus past the
header and navigation to the main content. See
[Layout accessibility](/ds101/layout-accessibility/).

**Page shell** (page template) — the frame a design system provides around every page,
with its landmarks and skip link already built in. See
[Layout accessibility](/ds101/layout-accessibility/).

**Heading level vs. H tag** — Curtis's split between how big a heading looks (its level,
a visual style) and where it sits in the page outline (its HTML tag, `h1` to `h6`), so a
component can take its tag from the page it's used on. See
[Layout accessibility](/ds101/layout-accessibility/).

**Source order** — the order of elements in the code, which sets what a screen reader
reads and where the Tab key goes next, whatever CSS does to their position on screen.
See [Layout accessibility](/ds101/layout-accessibility/).

**Metadata** — data *about* something, rather than the thing itself: not the component,
but the facts describing it (its name, its props, its variants, its accessibility role)
that let a person or an AI agent understand and use it correctly without having to
inspect the real thing directly. A book's title and author on the spine is metadata; the
book's contents aren't. See [AI readiness](/ds101/ai-readiness/).

**Context cascade** — the way context quality compounds through every handoff in a
system; strong metadata at the source produces reliable AI output downstream, weak
metadata produces hallucinated or broken output. See
[AI readiness](/ds101/ai-readiness/).

**Component manifest** — a structured, machine-readable index of every component in a
system (names, props, relationships, status) that AI agents and tooling can query
directly instead of parsing documentation pages. Storybook 10.3 generates a basic
one automatically, the **Storybook Component Manifest**. See
[AI readiness](/ds101/ai-readiness/).

**Agentic pass** — a run of an AI agent over a design, after it's marked ready for
development, that fills in the behavior and accessibility details a Figma file can't
hold. See [The design-to-code contract](/ds101/design-to-code-contract/).

**APG** (ARIA Authoring Practices Guide) — the W3C's reference for how each widget type
(menu, tabs, combobox, and so on) should behave for keyboard and screen-reader users.
See [Component accessibility](/ds101/component-accessibility/).

**ARIA** (Accessible Rich Internet Applications) — HTML attributes that tell assistive
technology what a custom element is and what state it's in. First rule: don't use it
where a native HTML element already has the right meaning. See
[Component accessibility](/ds101/component-accessibility/).

**ARIA contract** — the accessibility part of a component's design spec: its role, its
keyboard pattern, and how it gets its accessible label. Agreed before build, not left
to QA. See [The design-to-code contract](/ds101/design-to-code-contract/).

**Anatomy role** — what a part of a component *is* (a button, a checkbox, a label),
recorded on that part in the spec so each platform can use its own native control.
See [Component accessibility](/ds101/component-accessibility/#record-each-parts-role-in-the-spec).

**Action** (anatomy action) — what activating a part *does*, such as closing the
component it belongs to, recorded separately from its role. See
[Component accessibility](/ds101/component-accessibility/#record-each-parts-role-in-the-spec).

**Agentic workflow pattern** — one of several ways multiple AI agents coordinate on a
task: sequential chain, parallel agents (what design-system-ops calls a parallel
fan-out), supervisor, or generator/reviewer loop (what design-system-ops calls the
feedback loop). See [Agentic workflow design](/ds101/agentic-workflow-design/).

**Autonomy level** — how much human review an AI agent's action requires before it takes
effect, ranging from fully autonomous to human-only. See
[Agentic workflow design](/ds101/agentic-workflow-design/).

**Scope note** — a brief statement of what an AI audit inspected, what it didn't, and what
it assumed, attached to the output so its claims can't be mistaken for broader knowledge
of the system than the tool actually has. See [AI output discipline](/ds101/ai-output-discipline/).

**Status label** — a qualitative marker (🟢 Strong, 🔴 Critical, ✅ PASS) used in place of
a numeric score or grade to report an AI audit's findings, forcing the judgment behind it
to be defended with evidence instead of hidden behind a number. See
[AI output discipline](/ds101/ai-output-discipline/).

**Safe outputs** — a CI pattern where an agent runs with no write permissions and can only
emit a structured request (open an issue, propose a PR); a separate, permission-controlled
job decides whether to act on it. See [CI for agentic workflows](/ds101/ci-for-agentic-workflows/).

**Trust tier** (CI) — one of three levels a CI-triggered agent change is sorted into by
confidence and risk — auto-merge, draft PR, or suggest-only — assigned per action, not per
agent. See [CI for agentic workflows](/ds101/ci-for-agentic-workflows/).

**Challenge Rating (CR)** — a difficulty rating for a UI component based on how dangerous
it is to implement incorrectly, used to calibrate how much documentation and audit rigor
it deserves. See [Scaling AI effort](/ds101/scaling-ai-effort-to-risk/).

**MCP (Model Context Protocol)** — the interface that lets AI agents read data (design
files, component metadata, code) directly from its source instead of a stale copy.
See [Scaling AI effort](/ds101/scaling-ai-effort-to-risk/).

**MCP layer** — one of three separated tiers of MCP access in a design system (the
design tool, the system's own metadata, the code-mapping bridge), kept apart so no
single connection becomes a bottleneck or a single point of failure. See
[Scaling AI effort](/ds101/scaling-ai-effort-to-risk/).

**CLI (command-line interface)** — a program run by typing short commands. For design
systems, a CLI can extract specs from Figma or check a Figma file with a script and no
model, so an agent reads the compact result instead of raw Figma data over MCP. See
[Figma access for agents](/ds101/figma-access-for-agents/).

**Round trip** — exporting a design system (tokens or component specs) and importing it
back, then comparing the result with the original to find what the format lost. See
[Figma access for agents](/ds101/figma-access-for-agents/).

**Context engineering** — building a structured, machine-readable layer of scoped
metadata that gives an AI agent what prose documentation alone can't,
treated as its own artifact rather than assumed to fall out of good docs; arrived at
independently by two practitioners in the same shape. See
[Context engineering](/ds101/context-engineering/).

**Context engine** — the machine-readable layer context engineering produces: scoped,
loadable units (Diana Wolosin's benchmarked metadata format; Murphy Trueman's
`AGENTS.md` entry point linking out to per-task files) that give an agent what it needs for a given task without handing it
everything at once. See [Context engineering](/ds101/context-engineering/).

**Generative loop** — any orchestration shape where an agent's output feeds back into
another round of generation; not every generative loop includes a review step. See
[Generative loops](/ds101/generative-loops/).

**Generator/reviewer loop** — the type of generative loop that includes review: a generator
agent produces work, a reviewer agent reviews it and sends it back for revision, capped at a
defined number of iterations so it can't run indefinitely. This is what design-system-ops
calls the feedback-loop orchestration pattern. See
[Generative loops](/ds101/generative-loops/).

**Format-evaluation loop** — a generative loop applied to infrastructure rather than a
single piece of output: propose a context format or metadata schema, measure how
agents actually perform against it, revise. Diana Wolosin's benchmark of eight MCP
configurations against 1,056 prompts is the concrete example. See
[Generative loops](/ds101/generative-loops/).

**Response regeneration** — AWS Cloudscape's shippable UI pattern for generative loops:
thumbs-up/thumbs-down controls plus a dedicated regenerate action, putting the same
discipline in front of the user instead of keeping it as an internal step between two
agents. See [Generative loops](/ds101/generative-loops/).

**AI label / explainability popover** — Carbon for AI's required, component-level
disclosure that marks content as AI-generated and explains it, so the transparency
requirement ships with the component instead of living in a guidelines page a team can
skip. See [Agentic UI patterns](/ds101/agentic-ui-patterns/).

**User-authorized actions** — AWS Cloudscape's scoped permission model ("Allow this
time," "Allow for this chat," "Always allow") for granting an agent authority to act,
matched to the risk and reversibility of the action instead of one blanket prompt. See
[Agentic UI patterns](/ds101/agentic-ui-patterns/).

**Agents vs. Flows** — GitLab Pajamas' distinction between conversational, iterative AI
interaction (Agents) and automated, repeatable AI interaction (Flows), each carrying
different risk tiers and opt-in requirements. See
[Agentic UI patterns](/ds101/agentic-ui-patterns/).

**Schema** — a fixed template that says what fields a piece of metadata must have and
what counts as a valid value in each one (a prop's type, a variant's allowed values),
so the data has "explicit keys, explicit values, explicit boundaries" and a program can
parse it without guessing. A restaurant menu's format — name, price, allergens, in that
order, every time — is a schema; the specific dish is the data filled into it. See
[Documentation for agents](/ds101/documentation-for-agents/).

**Design language** — the shared visual and interaction vocabulary a design system
expresses; used at industrial scale to describe the single, unifying layer that holds
together products built on different tech stacks, by different teams, sometimes
decades apart. See [Scaling across decades](/ds101/scaling-across-decades/).

**RFC** (Request for Comments) — a written proposal for a significant change, circulated
so people can weigh in before it's decided rather than after; part of a system's
contribution history worth reading when inheriting it. See
[Inheriting a legacy system](/ds101/inheriting-a-legacy-system/).

**Design system archaeology** — the discipline of reading and understanding an existing
design system you didn't build, distinct from an audit: an audit asks what's broken,
archaeology asks what was meant. See
[Inheriting a legacy system](/ds101/inheriting-a-legacy-system/).

**Load-bearing lore** — an undocumented decision in an inherited system that still
matters (an accessibility fix, a cross-team compromise); the default assumption for
anything you can't explain, until proven otherwise. See
[Inheriting a legacy system](/ds101/inheriting-a-legacy-system/).

**Vestigial lore** — an undocumented decision in an inherited system that was a
workaround for a problem that no longer exists. See
[Inheriting a legacy system](/ds101/inheriting-a-legacy-system/).

**Generation** (design system) — an overhaul large enough to touch colors, typography,
spacing, and components all at once — closer to a revolution than a refinement — as
distinct from an incremental release. See
[Inheriting a legacy system](/ds101/inheriting-a-legacy-system/).

**Kickstart** — a hands-on session where the design-system team migrates a sample
product alongside an adopter, in the adopter's own environment, instead of handing over
a migration guide and leaving them to it. See
[Inheriting a legacy system](/ds101/inheriting-a-legacy-system/).

**Tokens/components as an API** — the framing that a design system's tokens and
components are already an API contract, read by AI as much as by humans, and should be
named and structured by function (`OnboardingStep`) rather than appearance (`BlueCard`).
See [Documentation for agents](/ds101/documentation-for-agents/).

**Color scale** — a set of steps of one hue, from lightest to darkest, where each step has
a job (background, border, text) and the gap between steps is set by contrast. See
[Accessible color palettes](/ds101/accessible-color-palettes/).

**APCA** (Accessible Perceptual Contrast Algorithm) — a contrast formula that scores
readability as a lightness contrast value (Lc) and accounts for font size and polarity.
Not part of any published WCAG standard. See
[Accessible color palettes](/ds101/accessible-color-palettes/).

**Perceptually uniform color space** — a color space such as OKLCH where equal steps in
a value look like equal steps to a person, unlike RGB or HSL. See
[Accessible color palettes](/ds101/accessible-color-palettes/).

**Contrast grid** — a table of every text color against every background, with the
contrast of each pair, published next to the palette. See
[Accessible color palettes](/ds101/accessible-color-palettes/).
