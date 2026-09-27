# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A personal field guide (not a commercial product) to the operational and architectural
side of running a design system — token architecture, governance, adoption,
documentation, business alignment, and a dedicated section on AI-readiness and agentic
workflows. It's an [Astro Starlight](https://starlight.astro.build/) site: markdown
content pages, Starlight's default theme, no real component library and no real token
values anywhere (sources are cited for the ideas behind them, not replicated as config to
copy). Short illustrative code snippets are fine; see "Code snippets" under Page
conventions.

Published at https://f4cu.github.io/ds101/ via GitHub Pages, built and
deployed by `.github/workflows/deploy.yml` on push to `main`.

## Commands

```bash
npm install
npm run dev     # serve locally to preview changes
npm run build   # production build to dist/
npm run freshness  # list pages overdue for a freshness review
```

## Architecture

- **`astro.config.mjs`** — Starlight config: site metadata, the `sidebar` array (the only
  page ordering/navigation source — add new pages here or they won't appear in the nav),
  and the `astro-mermaid` integration for rendering Mermaid diagrams client-side
  (including re-rendering on Starlight's view-transition page swaps). Organized into seven
  sidebar groups: Getting started, Foundations, Components, Governance, Metrics,
  Business alignment, Agentic AI, followed by Glossary and References. A sidebar item is a bare filename slug
  (`'token-architecture'`) unless its nav label needs to differ from the page's `title`
  frontmatter, in which case use `{ slug: '...', label: '...' }`.
- **`src/styles/custom.css`** — the only custom CSS on top of Starlight's stock theme:
  WCAG line-length caps and the `.mermaid-wrap` scroll-box
  style. Deliberately does not reskin Starlight's default colors/fonts/sidebar chrome.
- **Content pages** (`src/content/docs/*.md`) — each is a standalone topic page. The
  `title` frontmatter field is what Starlight renders as the page's H1 and browser-tab
  title — don't also put a `# Title` line in the body, Starlight adds it automatically.
  `index.md` (originally `start-here.md`) is the homepage, served at `/`.
- **`glossary.md`** — one line per term introduced anywhere in the wiki, links back to the
  page that explains it in context. Update when a page introduces new terminology.
- **`references.md`** — every citation across the wiki, grouped by page/topic, mirroring
  the inline citations, each with its publication year (see "Source freshness"). Keep in
  sync when adding or changing a page's sources. Plain markdown like every other page,
  with no custom CSS or HTML.
- **`.claude/handoff/`** — the original build brief, research digest, and execution plan
  from when this site was generated. Historical record of how sourcing/scope decisions
  were made, not something to keep updated going forward.

## Page conventions

Every content page from Part 1 onward uses one template. It's built so the "On this page"
table of contents lists every practice as a short label. See `release-management.md` and
`contribution-models.md` as reference examples.

1. **Title (`title` frontmatter, rendered as the H1)**: name the principle or topic in
   2–5 words. Never restate the page's own subject descriptively (bad: `Component
   Building: Structuring Components in Figma`, should be `Component Composition in Figma`) and
   never stack a colon- or `&`-joined subtitle listing the page's own sub-topics (bad:
   `Release Management: Versioning, Changelogs & Migration Guides`). The title must match
   the link text used for this page everywhere else in the wiki (`astro.config.mjs`'s
   sidebar, `glossary.md`, other pages' cross-links) — update all of them together if the
   title changes. Do not add a `# Title` line in the page body — Starlight renders the
   frontmatter `title` as the H1 automatically.

   **File name = title in kebab-case**: lowercase, spaces to hyphens, punctuation dropped,
   `&` becomes `and`, and a leading "The" dropped (`The Design-to-Code Contract` →
   `design-to-code-contract.md`). The title is the source of truth. If it changes, rename
   the file too, and add the old URL to the `redirects` map in `astro.config.mjs` so
   published links keep working. Sidebar entries are then bare slugs, with no `label`
   override. `index.md` (the homepage) is the only exception.
2. **Lead** (no heading): 1–3 plain sentences stating the page's main takeaway. Starting
   with the takeaway always makes sense. Putting it in a heading doesn't, because long
   sentence headings clutter the TOC. No eyebrow labels anywhere.
3. **`:::tip[Key takeaways]`** aside: exactly 3 bullets, placed right after the lead. Each
   bullet is a bold imperative sentence (the advice, ≤ ~7 words) followed by one short plain
   sentence saying what goes wrong without it, so the bullet makes sense to someone who
   hasn't read the page: `- **Describe every semantic token.** Without a description, an
   agent guesses from the name and can pick the wrong color.` Pick by risk: the three
   practices that prevent the most common or most costly failures (those in `## The
   problem`, `## Common mistakes`, or the sources' warnings), not the ones easiest to
   summarize. Keep
   the reason general. Named examples stay in the body. See `token-naming.md`.
4. **`## The problem`**: the concrete failure mode that happens without this practice area.
5. **The core section(s)**, chosen by page type:
   - **Practice** (default, the page is a set of things to do): `## Practices`.
   - **Decision** (the page's value is picking between alternatives): `## Choosing <the
     decision>` (e.g. `## Choosing a model`), then `## Practices`.
   - **Model** (the page explains a structure, like token layers): `## The model`, with one
     `###` per layer or dimension, then `## Practices`. A Model page must still end in
     practices. It never just lists the parts of a design system.
   - **Case studies**: `## The cases` (`### Org: what they did`), then
     `## Patterns across cases`. Multi-paragraph named-org narratives live only here. Topic
     pages keep short (2–4 sentence) org examples inline and link here for the full story.

   Rules for the core sections:
   - **Only `##` and `###` headings.** Starlight's TOC shows levels 2–3 only, so a `####`
     practice is invisible when scanning. No numbers in headings, except on sequence pages
     where order matters (`### 1. Inventory the interface first`).
   - **Practice headings are advice**, imperative and ≤ ~8 words ("Deprecate before you
     remove"). Not a topic ("Deprecation lifecycle"), and not an "X, not Y" slogan.
     Aim for ≤ ~7 practices. Group larger sets under 2–3 `###` clusters.
   - **The and/or test.** If the reader should do all of the items, they're Practices. If the
     reader should pick one, they go under `## Choosing …`. Guidance on how to choose opens
     that section, before the options. It's never a separate `###`. Each option says, in
     prose, who does it, when it fits, and what it costs.
   - **Criteria.** When a page owns a decision rule (e.g. when to add a component), it gets a
     `### Criteria for …` heading with a numbered list of questions in the order a reviewer
     asks them. Each decision rule has one owning page. Other pages link to it.
   - **Citations inline.** Name the practitioner in the sentence and put the link on the
     name ("[Curtis](…) defines…"). No trailing "— author, title" lines. Block quotes keep
     their attribution line (`> — [Author, "Title"](url)`), separated from the quote by
     a blank `>` line so it renders as its own muted paragraph (styled in `custom.css`).
   - **Block quotes only in the lead or `## The problem`**, for a standalone author quote
     that anchors the page's argument (at most one per section). Quotes anywhere else stay
     inline in the sentence, so block quotes don't pile up and flatten the hierarchy.
   - **Diagrams inline**, directly under the practice or model they illustrate, never as a
     standalone `## Diagram` section. Only when a relationship is genuinely spatial or
     sequential. Wrap each Mermaid block in `<div class="mermaid-wrap">...</div>`, and keep
     it few-node and legible at ~800px max width.
   - **Code snippets inline**, like diagrams: directly under the model or practice they
     illustrate, only when the structure is clearer as code than as prose. Keep each under
     ~12 lines and ~40 characters wide (lines wrap on phones, but wrapped code reads
     badly). Tag the language (`tsx`, `json`). Mirror the shape of an example from a
     source the page already cites rather than inventing an API, and say so in the
     sentence. For before/after pairs, use two blocks with `title="..."` labels, and
     follow each snippet with a sentence on what to notice. See `component-composition-in-code.md`.
6. **`## Common mistakes`**: a bulleted list, each bullet a beginner-likely error grounded in
   a cited source where possible. A mistake that just reverses a practice heading is a
   duplicate. Delete it.

Other conventions:

- **Sourcing discipline**: every non-obvious claim is attributed to a specific person, post
  title, or source file — never blended into an unattributed "industry consensus" voice.
  Don't invent best practices without a traceable source; if a page needs a claim the
  sources don't support, flag it as an open question rather than asserting it. See
  `index.md` (the homepage) for the full list of named sources and `references.md` for the citation
  index.
- **Source freshness**: every entry in `references.md` ends with its publication year
  (`, 2021`). Use `living doc` for docs sites and repos that are updated continuously,
  `updated 2024` when only a last-updated date exists, and `n.d.` when no date can be
  found. Never guess a year. Check `datePublished` or `firstPublishedAt`, not the
  modified date. Medium and some other sites republish old posts with new dates.
  Judge a source's age by what it's used for, not by the date alone:
  - *Principles* (why governance fails, how contribution works) may cite older sources
    in any area.
  - *Concrete examples* (tool screenshots, Figma features, APIs, token formats, agent
    setups) must be current for their area:
    - **High risk**, the Agentic AI section: prefer the last ~18 months. Anything
      before 2024 gets a Dated tag and needs reconfirming before new use.
    - **Medium risk**, tokens, component architecture/API, multi-platform specs,
      release tooling, anything Figma-specific: flag sources before 2022 that describe
      tool behavior.
    - **Low risk**, governance, team/contribution models, business alignment,
      maturity, adoption, communication: no cutoff for principles. Flag only outdated
      tool examples.
  - Flag with an inline-code `` `Dated` `` tag after the year, followed by a short note
    on what changed (e.g. "Carbon v11 replaced v10 in 2022"). Dated tags go only in
    `references.md`, never in page prose. If a source's age changes
    how a reader should read it, say so in the sentence instead ("Curtis's 2015
    post predates Figma variables…").
  - **Review dates**: every content page (except `index.md`, `glossary.md`,
    `references.md`) has `reviewed: YYYY-MM-DD` and `reviewIn: <months>` frontmatter.
    `reviewIn` follows the risk tier above: 6 for the Agentic AI section, 12 for
    medium-risk pages (Foundations, Components, `release-management`), 24 for the rest.
    New pages get today's date and their tier. `npm run freshness` (also run before
    every build) lists overdue pages; the `freshness-check` skill checks them and
    reports findings. Bump `reviewed` only after a page's claims have actually been
    re-checked, not on unrelated edits.
  - When researching, check the publication date before using a source. If the only
    in-pool source for an example is dated, tell the user rather than presenting it as
    current practice. It's fine to keep an old source for the principle and ask for a
    newer example.
- **Research boundary**: when doing research for this wiki (new claims, new pages, filling
  an open question), draw only from professionals/sources already used somewhere in the
  site — don't pull in a new author, blog, or report just because it's a good source on
  the topic. Before researching, scan `index.md`'s source list and every page's
  citations (or `references.md`, which mirrors them) to know who's already in bounds. This
  keeps the source pool deliberately narrow rather than widening with every new page. If a
  claim genuinely needs a source outside that pool, flag it to the user and ask before
  adding a new name — don't add one silently.
- **Voice**: explain the *why* before the *what*. Assume the reader knows design system
  basics beyond Figma: coded components, how they ship to production, and how a team
  maintains them. Still define specialist terms (CI, agent orchestration) on first use.
  Most sources describe large organizations (see the scale note on `index.md`); when a
  practice clearly only pays off at that scale, say so rather than presenting it as
  universal. Prefer plain prose over bullet-dense reference tables except in the
  established "Common mistakes" and glossary sections. Avoid AI-writing tics ("load-bearing,"
  "blast radius," "north star," etc.) — use the plain word the sentence actually needs,
  even when drafting quickly. See the `ux-writing-review` skill for the full checklist.
- **Length**: pages run roughly 300–600 words per section-group; this is a field guide,
  not a textbook.
- **Mobile-first**: the primary read surface is a phone (iOS Safari). Don't add wide
  tables or unwrapped long inline code/URLs — they force horizontal scroll on a
  375–430px viewport. Any new diagram must go inside `.mermaid-wrap`.
- **Cross-linking**: link to other pages in-line with absolute, extension-less site paths
  that include the `/ds101` base (`[Token architecture](/ds101/token-architecture/)`)
  rather than duplicating an explanation that another page already owns. Astro doesn't
  add `base` to markdown links, so a bare `(/token-architecture/)` 404s on GitHub Pages. Astro does not resolve `.md`-suffixed relative links
  the way Docsify did — a link written as `(token-architecture.md)` 404s at build time.
