---
status: done
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
5. Add or extend the term's `glossary.md` entry, ending "See [page]. How-to: [Design System Tactics](url)." (Added 2026-11-25; the glossary is the index of methods instead of a separate hub page.)
6. `npm run build` must pass.

## Outcome (2026-11-25)

All candidate tactic pages were read. Linked: business case (`estimating-roi`), champion (`pilot-strategy`), team model (`team-models`), naming structure (`token-naming`), deprecation (`component-lifecycle`). Glossary entries added or extended for office hours, champions and advocates, migration guide, business case, team model, deprecation.

Skipped, with reasons:
- `ui-audit`: already links 18F's "Interface audit" how-to.
- `product-ownership`: already links Curtis's roadmap post.
- `contribution-models`: "champions network" there is about contributors; the tactic is about spreading adoption.
- `onboarding-adopters`: the page covers designers and engineers together; the site splits them, and Grixti's Wise case is already cited.
- `adoption-metrics`: never uses "success metrics".
- AI pages: none use the terms in body text (only in takeaways or Common mistakes leads).

## Candidates as listed on 2026-11-24

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

- Strategy pages: decided 2026-11-25, tactics only. Strategies sequence tactics into plans, which the wiki's own pages already do.
- Frameworks with no reference that aren't on this site (now/next/later, JTBD, Atomic Design) were raised but not decided. Linking them needs a source from the existing pool.
