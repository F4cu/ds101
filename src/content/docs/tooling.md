---
title: Tooling
reviewed: 2026-09-26
reviewIn: 6
---

Every tool this wiki mentions, grouped by the job it does, with tags for what it costs
and what it depends on. Many sources describe teams with enterprise plans. The tags show
which practices are within reach on a smaller budget and which quietly assume a larger
one.

Plans and prices change often. Each tag links to the vendor's own docs, last checked in
September 2026. Confirm before you buy.

## Reading the tags

- **Cost**: `Free`, `Open source`, `Freemium` (a free tier with paid features),
  `Paid`, and `In-house`, meaning a company built it for itself and you can't buy it.
- **Needs**: what has to be in place first. That might be a Figma plan or seat
  (`Figma Org/Enterprise`, `Full or Dev seat`), `Repo + build` (a code repository and
  a build step), `CI` (the automated pipeline that checks every change before it
  merges), or an AI tool (`Claude Code`, `Paid Claude plan`).
- A tag like `Pro: themes` names the paid tier and the feature it unlocks.
- **Used in** links the pages that cite a tool. **Related** marks a tool no page
  cites yet, next to the page where it would fit.

## Tokens

**DTCG format**: the shared, tool-independent file format for tokens. It's a
specification, not a tool.\
`Free` `Open standard`\
Used in: [Token architecture](/ds101/token-architecture/)

**Style Dictionary**: turns one token file into each platform's output (CSS, iOS,
Android).\
`Open source` `Repo + build`
([docs](https://styledictionary.com/))\
Used in: [Token architecture](/ds101/token-architecture/),
[Platform divergence](/ds101/platform-divergence/)

**Terrazzo**: another token pipeline that reads the DTCG format.\
`Open source` `Repo + build`
([docs](https://terrazzo.app/))\
Used in: [Token architecture](/ds101/token-architecture/)

**Tokens Studio**: edits tokens inside Figma and syncs them to a Git repo. Single-file
sync to GitHub or GitLab is free. Themes and multi-file sync are Pro.\
`Freemium` `Figma plugin` `Pro: themes, multi-file sync`
([docs](https://docs.tokens.studio/))\
Used in: [Token architecture](/ds101/token-architecture/),
[Context engineering](/ds101/context-engineering/)

**Figma variables via REST API**: reading or writing variables from a script, for
example to sync them with a token file. The variables themselves work on any plan. The
API for them doesn't.\
`Figma Enterprise` `Full seat`
([docs](https://developers.figma.com/docs/rest-api/variables/))\
Used in: [System inventory](/ds101/system-inventory/)

## Specs and design-to-code

**Specs (formerly EightShapes Specs)**: Nathan Curtis's Figma plugin. It generates
anatomy, props, and layout/spacing specs from a component. Features like token
references and subcomponents are Pro.\
`Freemium` `Figma plugin` `Pro: tokens, nested specs`
([docs](https://www.specsplugin.com/))\
Used in: [Component specs](/ds101/component-specs/)

**specs-cli**: the command-line version of Specs. It reads a whole Figma library through
the REST API and writes one YAML spec per component into the repo, with no AI involved.
It needs a Figma personal access token, and subscribers add a Specs license key.\
`Open source` `Figma API` `Repo`
([repo](https://github.com/DirectedEdges/specs))\
Used in: [Figma access for agents](/ds101/figma-access-for-agents/)

**Figma Code Connect**: maps a Figma component to its import in code, so agents see the
real `import` line instead of guessing it.\
`Paid` `Figma Org/Enterprise` `Full or Dev seat`
([docs](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect))\
Used in: [Scaling AI effort to risk](/ds101/scaling-ai-effort-to-risk/)

**Storybook**: live component examples and docs. Since 10.3 it also generates a
component manifest (a JSON index of components and props) that agents can query
through an MCP add-on. MCP (Model Context Protocol) is the standard way AI agents read
data from other tools. The AI features are
still in preview.\
`Open source` `Repo + build`
([docs](https://storybook.js.org/docs/ai/manifests))\
Used in: [AI readiness](/ds101/ai-readiness/),
[Documentation coverage](/ds101/documentation-coverage/),
[Governance for AI](/ds101/governance-for-ai/),
[Onboarding adopters](/ds101/onboarding-adopters/)

## Inventory and adoption

**Figma REST API**: the base for usage scanners like Pinterest's FigStats. File reads
work on the free Starter plan with a Full or Dev seat, at 10 calls a minute. View and
Collab seats get about 20 calls a month.\
`Free` `Figma API`
([rate limits](https://developers.figma.com/docs/rest-api/rate-limits/))\
Used in: [Measuring adoption](/ds101/measuring-adoption/),
[CI for agentic workflows](/ds101/ci-for-agentic-workflows/)

**Figma library analytics**: built-in component usage stats. The in-app view needs an
Organization plan. The Library Analytics API, the version a script can read, needs
Enterprise.\
`Paid` `Figma Org/Enterprise`
([in-app](https://help.figma.com/hc/en-us/articles/360039238353-View-and-explore-library-analytics),
[API](https://developers.figma.com/docs/rest-api/library-analytics-intro/))\
Used in: [Measuring adoption](/ds101/measuring-adoption/)

**FigStats (Pinterest) and Atlassian's adoption scanner**: usage trackers for Figma and
code, built internally. The small-team version of FigStats is a script on the Figma REST
API. For code, it's a script that counts imports.\
`In-house`\
Used in: [Measuring adoption](/ds101/measuring-adoption/),
[Performance in context](/ds101/performance-in-context/)

**Airtable**: Romina Kavcic's browsable view of token files, synced one way from GitHub.\
`Freemium`
([pricing](https://airtable.com/pricing))\
Used in: [System inventory](/ds101/system-inventory/)

**PostHog**: product analytics that also tracks what AI features and agents do in
production. It checks design decisions against real usage.\
`Freemium`
([pricing](https://posthog.com/pricing))\
Used in: [Performance in context](/ds101/performance-in-context/),
[Scaling AI effort to risk](/ds101/scaling-ai-effort-to-risk/)

## Quality and CI

**axe-core**: automated accessibility checks. Run it through `jest-axe`, Playwright
(open-source browser testing), or the Storybook test runner. It catches only the
machine-detectable subset of issues.\
`Open source` `CI`\
Used in: [Component accessibility](/ds101/component-accessibility/)

**Chromatic**: visual regression testing for Storybook. It screenshots every story on
each change and flags pixel differences for review. It's also a place to publish
Storybook. The free plan covers 5,000 snapshots a month in Chrome. Paid plans start at
$179 a month.\
`Freemium` `Storybook` `CI`
([pricing](https://www.chromatic.com/pricing))\
Related: [Measuring adoption](/ds101/measuring-adoption/),
[CI for agentic workflows](/ds101/ci-for-agentic-workflows/)

**GitHub Agentic Workflows**: runs an agent inside GitHub Actions with no write access.
The agent can only request actions, and a separate job checks and runs them. The model
behind it (Copilot, Claude Code, Codex, and others) brings its own billing.\
`CI` `GitHub Actions` `AI engine billing`
([docs](https://github.github.com/gh-aw/))\
Used in: [CI for agentic workflows](/ds101/ci-for-agentic-workflows/)

## Releases

**Changesets**: versioning and changelogs for packages in one repo, including a
monorepo that publishes each component as its own package. Each pull request adds a
small file that says which packages change, the SemVer bump, and a one-line summary.
At release time, Changesets bumps the versions and writes the changelog entries.\
`Open source` `Repo + build` `npm packages`
([repo](https://github.com/changesets/changesets))\
Related: [Release management](/ds101/release-management/)

## Agentic AI

**design-system-ops**: Murphy Trueman's skill pack for inventory, metadata,
accessibility audits, onboarding docs, and CI checks. Each skill is a `SKILL.md` file of
instructions an agent follows. The repo is free, but running it takes a paid Claude plan
(Pro or higher) or API billing.\
`Open source` `Claude Code` `Paid Claude plan`
([repo](https://github.com/murphytrueman/design-system-ops),
[Claude Code plans](https://code.claude.com/docs/en/setup))\
Used in: [System inventory](/ds101/system-inventory/),
[Component accessibility](/ds101/component-accessibility/),
[Onboarding adopters](/ds101/onboarding-adopters/),
[Context engineering](/ds101/context-engineering/)

**`AGENTS.md`**: a plain file at the repo root. It tells any coding agent where things
live and links out to per-task context.\
`Free` `Repo`\
Used in: [Context engineering](/ds101/context-engineering/)

**Figma MCP server**: gives an agent a component's names, variants, and token values.
The remote server works on any plan. The desktop server needs a Dev or Full seat on a
paid plan. Daily limits scale with the plan: 200 calls a day on Starter and
Professional, 600 on Organization and Enterprise. View and Collab seats get 6 calls a
month (20 on Starter).\
`Freemium` `Figma API` `Dev/Full seat for daily use`
([guide](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server),
[limits](https://developers.figma.com/docs/figma-mcp-server/rate-limits-access/))\
Used in: [Scaling AI effort to risk](/ds101/scaling-ai-effort-to-risk/)

**Figma plugin for Claude Code**: bundles the Figma MCP server settings with Figma's
own skills. `figma-use` writes frames, components, and variables into a Figma file.
`figma-generate-library` builds a Figma library from a codebase. `figma-code-connect`
matches published components to their code and creates the Code Connect links in bulk.
Writing to a file needs a Full seat, and Dev seats stay read-only. The Code Connect
skill also needs an Organization or Enterprise plan. Figma announced writing to the
canvas in March 2026 as free during a beta, and says it will later be a usage-based
paid feature.\
`Claude Code` `Paid Claude plan` `Full seat to write` `Beta: usage-based later`
([setup](https://help.figma.com/hc/en-us/articles/39888612464151-Claude-Code-and-Figma-Set-up-the-MCP-server),
[skills](https://help.figma.com/hc/en-us/articles/39166810751895-Figma-skills-for-MCP),
[write access](https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/),
[pricing note](https://www.figma.com/blog/the-figma-canvas-is-now-open-to-agents/))\
Used in: [Scaling AI effort to risk](/ds101/scaling-ai-effort-to-risk/)

**figma-cli**: Sil Bormüller's CLI that lets Claude Code or Cursor build in Figma
Desktop directly, with no API token and no Figma rate limit. It also exports JSX,
Storybook stories, and DTCG tokens, and checks a file against saved contracts in CI.
The default connection mode patches the desktop app. Browser and Safe modes don't.\
`Open source` `Figma Desktop` `Claude Code or Cursor`
([repo](https://github.com/silships/figma-cli))\
Used in: [Figma access for agents](/ds101/figma-access-for-agents/)

**Other MCP connections**: Kavcic's starter set is GitHub, GitLab, Mintlify, PostHog,
and Slack. Each one follows that tool's own plan and permissions.\
`Varies`\
Used in: [Scaling AI effort to risk](/ds101/scaling-ai-effort-to-risk/)

## Starting without a budget

The free route covers most of what this wiki describes. Tokens can run through the DTCG
format and Style Dictionary or Terrazzo. Storybook covers live examples and a starter
component manifest. For docs, [Documentation coverage](/ds101/documentation-coverage/)
measures staleness from git history, not from a platform. For agents, an `AGENTS.md`
file plus the repo, in the shape the design-system-ops MCP guide recommends, is enough.
It "does not ship a design system MCP server, and most teams don't need one." What the
free tier can't reach is mostly on the Figma side: Code Connect, library analytics, and
the variables API.
