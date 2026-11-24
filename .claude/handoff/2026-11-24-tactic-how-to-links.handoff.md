---
status: open
created: 2026-11-24
---

# Handoff: how-to links to Design System Tactics

**Goal:** when a page names a general-practice method (office hours, migration guides, a business case), link the term to a how-to page so the reader can see how it's done. The user asked for this because phrases like "use X approach" had no reference.

**Done (commit `1dd7203`, 2026-11-24), the reference for the format:**

- `operating-cadence.md`: "recurring [office hours]" and "internal [advocates]"
- `release-management.md`: "[migration guide]" in the lead
- `citations.md`: three entries under Communication and Release management
- `CLAUDE.md`: new rule "How-to links for general-practice terms" under Citations inline. Read it before starting.

## The rule, in short

- Link the term itself, once per page, at its first use in the body. Never in a heading, a Key takeaways bullet, or a Common mistakes bold lead.
- The link explains the term. It doesn't replace or move an existing citation. If Frost is credited for office hours, he stays credited.
- Don't phrase it as "Ness Grixti's tactic". The user's call: these are general practice, not her ideas. The site footer credits her, but the tactic pages name no author or source.
- Add a `citations.md` entry in the page's section: `- [Design System Tactics, "<Tactic title>"](url), n.d.: how-to link for the term`. No tactic page shows a date (only a "© 2026" footer), so it's always `n.d.`
- Design System Tactics is already in the source pool (RACI, Influence Mapping, Maturity Assessment), so no approval is needed for these links.

## Process per page

1. **Read the tactic page first** (web-fetch). Link only if it describes the same thing the sentence means. Skip if it's broader, narrower, or about a different thing. Example skipped on 2026-11-24: the Versioning tactic is generic versioning advice, so it doesn't belong on the SemVer section.
2. Find the first body use of the term. If the sentence doesn't name the term, a light rewording is OK ("Three teams run the same idea" → "Three teams run recurring [office hours]"). Don't rewrite the claim.
3. At most 2–3 tactic links per page, so the site doesn't read like a link farm.
4. Add the `citations.md` entry. Don't bump `reviewed` (this is not a claim re-check).
5. `npm run build` must pass.

## Candidates (unverified: tactic pages not yet read)

Line numbers are from 2026-11-24 and may have moved.

| Page | Term | Tactic URL |
|---|---|---|
| `estimating-roi.md` (~l.25) | business case | `/tactics/business-case` |
| `contribution-models.md` (~l.56), `pilot-strategy.md` (l.37) | champions | `/tactics/system-champions-and-advocates` (already read: champions nominated per product area, advocates inside the system team) |
| `ui-audit.md` (l.7) | interface inventory / audit | `/tactics/audit` |
| `product-ownership.md` | roadmap | `/tactics/roadmap-planning` |
| `onboarding-adopters.md` | onboarding | `/tactics/designer-onboarding`, `/tactics/developer-onboarding`; pick one or skip |
| `adoption-metrics.md` | success metrics | `/tactics/success-metrics` |
| `team-models.md` / `decision-governance.md` | choosing a governance model | `/tactics/choosing-a-governance-model`; one page only, whichever owns the decision |
| `token-naming.md` | naming standards | `/tactics/token-naming-standards` |
| `component-lifecycle.md` | retirement / replacement | `/tactics/retire-and-replace` |
| AI pages (`documentation-for-agents.md`, `ai-governance.md`, `ai-output-discipline.md`, `agentic-workflows.md`) | machine-readable docs, rules for AI generation, human review gates, prompt libraries | `/tactics/machine-readable-documentation`, `/tactics/rules-for-ai-generation`, `/tactics/human-review-gates`, `/tactics/prompt-libraries` |

All URLs are under `https://www.designsystemtactics.com`. Full index: `/tactics` (61 links found; the homepage says 63).

**AI pages:** high-risk tier (prefer sources from the last ~18 months). The tactic pages have no date, so check that what they describe matches current tools before linking, and tell the user if one looks old.

## Open questions for the user

- Should the strategy pages (`/strategies/...`, e.g. "Working with AI") be linked anywhere, or tactics only? Not discussed yet.
- Frameworks with no reference that aren't on this site (now/next/later, JTBD, Atomic Design) were raised but not decided. Linking them needs a source from the existing pool.
