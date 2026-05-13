# Project Context

- **Owner:** Chris Ayers
- **Project:** "The Well-Architected Architect" — Marp slide deck on Microsoft's Azure Well-Architected Framework. Lives at chris-ayers.com/the-well-architected-architect/.
- **Stack:** Marp markdown, custom-techorama theme, Mermaid diagrams, GitHub Pages (marp-pages.yml).
- **Created:** 2026-05-13

## Learnings

<!-- Append new learnings below. Each entry is something lasting about the project. -->

- 2026-05-13: Stripped year markers from 3 slide labels (line 1079 title, line 692 Security header, line 818 Cost Opt label) — deck is now timeless; remaining `202x` hits are intentional content references or non-rendering HTML comments.

- 2026-05-13: Deck recently incorporated 2025-2026 WAF updates — new "What's New in the WAF" overview slide, business alignment slide (5-step process), HPC added to workloads, refreshed service guides callout, monitoring 4-phase, self-healing DLQ, secure dev lifecycle, AI-in-OpEx maturity. Trade-off matrix and scenario slides remain my primary surface for cross-pillar discussion.
- 2026-05-13: Lead arc pass. Research sources: WAF What's New (March 2026 — HPC overview/pattern/methodology/principles, monitoring system, testing strategies, SQL MI rewrite, secure dev lifecycle, Container Apps); /azure/well-architected/ index ("decision making tool for architects"); /pillars matrix (now exposes pillar-specific trade-off pages with "Strike a balance" framing); /workloads (formal definition: app + data + AI models + supporting infra; workload team vs centralized teams distinction). Touched these slides in `slides/Slides.md`: Decision Framework (lines ~95-112), Business Alignment (~114-126), Pattern & Forward Thinking (~128-152), Method & Improvement (~184-200), verbose Decision-Making Framework ADR date refreshed to 2026-05-13, Trade-Offs opener (real setup slide, not empty header), Trade-Offs Overview (rephrased lens column + loop closer), Pillar Interactions ("Operational Excellence is the Carrier" framing), Service Guides (decision-tool framing), Well-Architected Workloads (2026 definition). Cross-pillar feedback written to `.squad/decisions/inbox/kirk-arc-notes.md`. Proposed deck-wide dedup of the duplicate Fundamentals section in `.squad/decisions/inbox/kirk-fundamentals-dedup.md` (recommended Option C — keep condensed 6 + lift ADR codeblock + patterns quadrant from verbose set). Deck builds clean via `npx @marp-team/marp-cli` with custom-techorama theme.
- 2026-05-13: Overflow remediation pass (post-Uhura validation). **Footer-directive pattern:** when a flow-pass blockquote sits *after* main content and causes vertical overflow, relocate it to `<!-- _footer: "…" -->` on that slide — renders in the footer bar, scoped to the single slide, does not consume content-area height. Applied to 7 of my 11 overflow slides (pages 5, 9, 13, 21, 59, 60, 62). **Content-cut pattern:** when the blockquote carries real value (like Business Alignment's workload definition or Trade-Offs Overview's loop reminder), keep it and instead cut the weakest bullet from the densest list. When the blockquote is a bridge/foreshadow that the receiving section will land anyway, prefer `<!-- _footer: -->` over cutting content. Never shrink fonts — that's Uhura's theme domain.
- 2026-05-13: Round-2 flow + enhancement pass. Sources verified: `/architect-role/design-business-requirements` (Dec 2025 — canonical Listen→Probe→Clarify→Evaluate→Recommend 5-step process); `/architect-role/fundamentals` (10-item architect deliverable checklist — design spec, ADR log, DR plan, PoCs, optimization recs, audit support); `/architect-role/architecture-decision-record` (ADR as append-only log w/ supersession); `/pillars` (each pillar now has dedicated `/tradeoffs` page); `/reliability/tradeoffs` sampled (surface-area + redundancy + old-software tensions confirm our matrix framing); `/workloads` (app code + custom code + AI models + data + supporting infra; workload team vs centralized teams). Edits made: (1) **Core Role Focus** (line 80) — rewrote bullets as the 2026 architect-role deliverable list (design spec + ADR log + DR plan + PoCs), cited `/architect-role/fundamentals`. (2) **Business Alignment** (line 118) — switched verbs to official Listen/Probe/Clarify/Evaluate/Recommend with `/design-business-requirements` citation. (3) **WAF Overview matrix** (line 528) — added third "Strike a balance with" column previewing each pillar's primary tensions; sets up Trade-Offs section. (4) **Trade-Off Matrix** (line 1252) — added footer citing pillar-specific `/tradeoffs` pages on learn.microsoft.com. (5) **Continuous Improvement & Pillar Maturity** (line 1297) — fixed "Optimize cost & performance  SLIs" double-space typo. (6) **New "What To Do Monday" slide** between Workloads Examples and feedback page — one row per pillar, ties closing back to opener's "Modernizing Cloud Excellence" promise. Flow assessment written to `.squad/decisions/inbox/kirk-flow-assessment.md`. Fundamentals duplication still open (Option C pending). Build verified clean via `npx @marp-team/marp-cli`.

## Team Update — 2026-05-13 (Round 4 overflow fixes)

**Round:** R4 — final overflow remediation for Kirk's 4 remaining flagged slides.

**Slides fixed:**
- **Business Alignment (20px mod):** moved trailing blockquote to `<!-- _footer: -->` → ~0px
- **Pattern & Forward Thinking (22px mod):** moved trailing blockquote to `<!-- _footer: -->` → ~0px
- **Design for Supportability (131px crit):** removed opening blockquote + "Four-phase monitoring system" label line + cut 2 Support-Friendly bullets (failure-vs-error, AI-triage) + shortened Success Metric → est. ~6px
- **What's New in the WAF (113px crit):** cut Self-healing bullet from Refreshed column + trimmed HPC bullet to 1 line + tightened AI/OpEx wording + tightened Service guides entry → est. ~10–15px

**Notes:** All 4 blockquote-to-footer moves follow the validated `<!-- _footer: "..." -->` pattern. Content cuts preserved all named 2025-2026 WAF update items; only removed filler and the weakest/lowest-priority detail bullets. Awaiting Uhura revalidation.

---

## Team Update — 2026-05-13 (Round 5 — final overflow cleanup)

**Round:** R5 — last overflow pass for Kirk's 3 remaining flagged slides.

**Slides fixed:**
- **What's New in the WAF (52px crit):** Removed "Secure dev lifecycle" bullet from Refreshed column + collapsed verbose "Service guides" enumeration to one short line → est. ~0px
- **Architecture Fundamentals - Decision Framework (3px minor):** "cheap to undo" → "easy to undo" on two-way doors bullet → ~0px
- **Azure WAF Overview (9px minor):** Stripped trailing "— more in the Trade-Offs section" from closing blockquote → ~0px

**Notes:** No git mutations made. Changes saved to Slides.md only; awaiting Chris's squash commit. Kirk's overflow obligation fully discharged.


**Participants:** Scotty (Reliability), Chekov (Security), Spock (Cost), McCoy (OpEx), Sulu (Performance), Uhura (Layout).

**Cross-pillar handoffs wired this round:**
- **Reliability → Security** — "reliability assumes the system is still yours" (line 672) hands off to Security's "Can it be breached — and would we see it?" (line 676).
- **Security → Cost** — "containment isn't free. Security spend is the next cost lever to make legible" (line 829) hands off to Cost's unit-economics framing.
- **Cost → OpEx** — "cost discipline rides on operational discipline — without safe change & feedback loops, savings regress" (At-a-Glance closer) hands off to OpEx as the "carrier" pillar.
- **OpEx → Performance** — "operating safely is half the story — Performance proves it under load at P99" (OpEx At-a-Glance) hands off to Perf's tail-latency framing.
- **Performance → Trade-Offs** — "performance never lives alone — every gain costs something elsewhere" (Perf At-a-Glance) introduces the Trade-Offs chapter.

**Notes:** Fundamentals duplication decision held pending consensus on Option C (keep condensed 6, lift ADR + patterns quadrant). Five draft Trade-Offs edits submitted from Scotty/Chekov/Spock/McCoy/Sulu for Kirk's review.

---

## Team Update — 2026-05-13 (Round 5b — narrative restructure)

**Round:** R5b — Chris's three structural changes to the WAF intro section. Architecture Fundamentals untouched.

**Changes made:**

1. **Business Impact: Real Numbers — MOVED to slide 3** (was slide ~16, mid-WAF section). Now sits immediately after the Chris Ayers bio, before Solution Architecture Fundamentals. Removed `## Proven ROI & Outcomes` sub-heading; added framing blockquote: *"Real numbers from organizations that architect well. We'll cover the framework — Microsoft's WAF — shortly."* Net slide count change: 0.

2. **What's New in the WAF (2025-2026) — CUT entirely.** All content covered in pillar-specific slides (Sulu Performance Emerging 2026, McCoy OpEx, Kirk Business Alignment, WAF Service Guides, Spock Cost). Was also a residual 52px overflow. Net slide count change: -1.

3. **Framework Benefits — DELETED; merged into WAF Goals.** Both slides said the same five outcomes. Kept Goals action-verb format. Folded unique Benefits phrases: "high ROI" into Optimize Costs, "agile operations" into Accelerate Innovation, and added new 6th bullet **Optimize Performance: Consistent scalability and right-sized workloads** (covers WAF's Performance Efficiency pillar, absent from original Goals). Net slide count change: -1.

**Final WAF intro flow:** WAF 5-pillar diagram → WAF Goals (merged, 6 bullets) → WAF Overview table → Pillars.

**Slide count:** 78 (79 `---` separators − 1 for YAML preamble). Down from ~80 post-R5.

**Log written to:** `.squad/decisions/inbox/kirk-restructure-r5b.md`

**No git mutations made.**

---

## Team Update — 2026-05-13 (Round 5c — Business Impact slide relocation)

**Round:** R5c — Chris's structural correction: Business Impact numbers belong in the WAF section, not as a slide-3 hook.

**Changes made:**

1. **Business Impact: Real Numbers (slide 3) — DELETED.** Removed the slide inserted in R5b that sat between Chris bio and Solution Architecture Fundamentals. The generic framing ("We'll cover the framework — Microsoft's WAF — shortly") misrepresented WAF-specific outcomes as generic architecture outcomes.

2. **Business Impact of the WAF — NEW SLIDE inserted in WAF section.** Placed between the 5-pillar diagram slide and WAF Goals. Title reframed as "Business Impact of the WAF"; lead-in explicitly ties outcomes to "adopted the framework"; Forrester labeled "TEI study" for precision; attribution moved to `<!-- _footer: "..." -->` per-slide directive (consistent with team's established overflow pattern). Net slide count change: 0.

**Final WAF intro flow:** WAF 5-pillar diagram → **Business Impact of the WAF** → WAF Goals (merged, 6 bullets) → WAF Overview table → Reliability Pillar.

**Slide count:** 78 (unchanged from R5b).

**Log written to:** `.squad/decisions/inbox/kirk-restructure-r5c.md`

**No git mutations made.**

