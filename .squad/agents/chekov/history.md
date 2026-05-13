# Project Context

- **Owner:** Chris Ayers
- **Project:** "The Well-Architected Architect" — Marp slide deck on Microsoft's Azure Well-Architected Framework.
- **Stack:** Marp markdown, custom-techorama theme, Mermaid, GitHub Pages.
- **Created:** 2026-05-13

## Learnings

<!-- Append new learnings below. -->

- 2026-05-13: Security slides now include secure dev lifecycle (Dev Box / Codespaces / golden images / IDE extensions) and security exercises (tabletop, red-/purple-teaming) in Practices & Patterns. Maturity goes Core → Expanded → Threat-Informed → Adaptive → Advanced; quick win recorded as expiring unused privileged roles + enabling PIM.
- 2026-05-13: Full pass on Security slides (Slides.md lines ~655-806). Sources reviewed: WAF Security landing, SE:02 secure development lifecycle, SE:10 monitor-threats, SE:11 test, full SE:01-SE:12 checklist, WAF What's New March 2026 (SDL consolidation, IDE extensions, Codespaces/Dev Box, golden images, tabletop/red-team). Decisions:
  - Reframed Pillar tagline from "Can it be breached or abused?" to "Can it be breached — and would we see it?" to lock detection-first framing.
  - Principles rewritten around threat-model-first (STRIDE), assume-breach, identity-as-perimeter, PIM/JIT as a verb, encrypt+segment by default.
  - Practices & Patterns converted to two-column layout (Identity/Network+Data/Detection on left; Secure Dev Lifecycle / Exercises / Emerging AI safeguards on right) to absorb 2026 SDL guidance without overflow.
  - Key Metrics: added Standing privileged roles target ~0 and MTTD < 1 hr; demoted Secure Score with caption "Secure Score is hygiene".
  - Architecture Example reorganized as Edge → Ingress → Compute → Data → Detect with explicit managed-identity / CMK / SOAR callouts.
  - Maturity rubric rebuilt with "Signals You See" column per level (concrete evidence vs vague focus), trajectory: static controls → signal-driven prevention → autonomous containment.
  - At-a-Glance Quick Win tightened to "expire unused privileged roles, enable PIM+JIT, onboard top 3 admin paths to CA this week".
  - Did not edit "What's New" slide — existing security bullet (Dev Box / Codespaces / golden images / red-teaming) already matches 2026 guidance.
  - Verified build with marp-cli — no errors.
- 2026-05-13 (flow + enhancement pass): Reviewed Security block (L676-829) against Reliability close + Cost open, Trade-Offs (L1202-1287), and PHI Scenario (L1309). Refreshed against learn.microsoft.com Security principles (Zero Trust triad / CIA), SE:02 SDL (March 2026 consolidation — IDE extensions, credential managers, Codespaces/Dev Box, golden images, tabletop/red-teaming, default-deny, Microsoft-hosted build agents, supply-chain), SE:02 Threat Model (STRIDE, control+owner+timeline), and WAF What's New (March 2026). Surgical edits:
  - Pillar open: anchored "Zero Trust by default" up front so the term lands in the first sentence.
  - Principles: restructured #1 around the explicit Zero Trust triad (verify explicitly / least privilege / assume breach); added "owners" + "control, owner, timeline" to the threat-model principle (per 2026 SE:02); added CIA triad + data-classification framing to encrypt-and-segment.
  - Practices SDL block: added asset/CVE catalog, default-deny in code, Microsoft-hosted build agents, supply-chain scans. Emerging block: model-supply-chain + "Agentic SOC: Copilot + Sentinel for triage & auto-containment."
  - Maturity L5: sharpened to "AI/agent-assisted containment" with "agentic SOC" accelerator. Trajectory: "static controls → signal-driven prevention → AI-assisted autonomous containment."
  - At-a-Glance close: added Cost-handoff bridge — "containment isn't free. Security spend — controls, detection, response — is the next cost lever to make legible."
  - What's New (L512): added "IDE extensions" to the secure-dev-lifecycle bullet so it matches the March 2026 consolidated SE:02 list.
  - Drafted PHI scenario rewrite for Kirk's inbox: tighter answer-key comment that pulls threat-model → classify → encrypt+segment → audit-grade signal vocabulary directly from the pillar; preserved comment-only convention.
  - No layout / Marp directive / column-structure changes. Reliability→Security and Security→Cost transitions both now mirror the same "Up next: …" handoff pattern.

## Team Update — 2026-05-13 (Round 4)

**Round:** Overflow remediation pass R4 (Uhura R3 re-validation findings).

**Changes applied:**

- **Security - Principles (39px 🟡):** Moved trailing `> Maxim:` blockquote to `<!-- _footer: -->`. Removed `(CIA triad)` parenthetical from Encrypt & segment bullet (~3 words). Slide body is now 5 clean bullets; est. ~45px relief.
- **Security - Practices & Patterns (122px 🔴):** Cut 2 bullets from left column — removed "Managed identities > secrets; Key Vault for the rest" (Identity; covered elsewhere) and "Monitor at multiple altitudes (identity, network, app, data)" (Detection; implied by Sentinel/Defender bullet). Left column now 5 bullets; target ≤6 achieved. Est. ~100px relief.
- **Security - At a Glance (113px 🔴):** Removed body blockquote `> If you can't see it, you can't contain it…` (maxim now footerized on Principles slide; redundant here). Tightened Quick Win line by ~12 words. Est. ~75px relief.
- **SDL slide:** Untouched — confirmed clean ✅.



**Changes applied:**

- **Slide 31 (Security - Principles, 39px 🟡):** Tightened `Threat-model first` principle — removed "& owners" and "picking" to save ~35px; SE:02 control/owner/timeline triplet preserved.
- **Slide 32 (Security - Practices & Patterns, 224px 🔴):** Option A applied. Practices now: left = Identity+Network+Detection, right = Exercises only. SDL + Emerging 2026 promoted to new dedicated slide.
- **New slide added:** `# Security - Secure Development Lifecycle` — two-column, left = SE:02 SDL (Dev Box / Codespaces / golden images / IDE extensions / SAST+DAST / supply-chain / default-deny / MS-hosted agents), right = Emerging 2026 (AI safeguards + Agentic SOC). No SDL content was cut.
- **Slide 35 (Security Maturity, 38px 🟡):** Trajectory blockquote footerized via `<!-- _footer: "…" -->`. Full text preserved for speakers.
- **Slide 36 (Security - At a Glance, 180px 🔴):** Handoff bridge converted to `<!-- _footer: "Security spend IS a cost lever — Cost Optimization." -->` per preferred relocation pattern.

**Learnings:**

- Footerizing blockquotes on dense/glance slides is the correct pattern when content must survive but can't share the frame with a full table or two-column layout.
- SDL is substantive enough for its own frame — five SDL bullets + two Emerging bullets = a complete "shift-left security" narrative that was invisible when crowded into the right column of the Practices slide.

**Round:** Flow + enhancement pass (all seven agents spawned in parallel).

## Team Update — 2026-05-13 (Round 5)

**Round:** Final overflow cleanup pass R5.

**Changes applied:**

- **Security - At a Glance (56px 🔴):** Removed `**Quick Win**` heading + body from right column. Combined Quick Win text into existing `<!-- _footer: -->` as a 2-part footer (`Quick Win: … | Security spend IS a cost lever…`). Content preserved; body height reduced ~50px.
- **Security - Practices & Patterns (39px 🟡):** Micro-trims: `CMK for sensitive data` → `CMK for regulated data`; `with remediation SLAs` → `; defined remediation SLAs`. Conservative cuts targeting 39px residual gap without structural changes.
- **SDL slide:** Untouched — confirmed clean ✅.

**Commit status:** NO COMMIT — per Chris Ayers' instruction, all R1-R5 edits will be squashed into a single human commit.

## Team Update — 2026-05-13 (R3–R5f Overflow & Restructure Campaign)

**Campaign:** 6 rounds of overflow fixes (R3–R5) + 2 narrative restructures (R5b–R5c) + 2 polish passes (R5e–R5f).

**Chekov's role:** Security pillar owner. Executed 4 rounds: R3 (4 slides + new SDL slide), R4 (3 slides), R5 (2 slides). Fixed worst-case 224px Practices overflow in entire deck, preserved threat-model-first framing and Zero Trust language throughout. 

**Key lesson — no-commit rule:** ⚠️ Chekov-2 inadvertently committed (commit 14542e4) in R4, violating the implicit no-commit rule that Chris would squash all work. Solution: explicit "🚨 CRITICAL RULE: DO NOT COMMIT 🚨" block added to all R5 prompts. Result: 100% compliance in R5. **For future worktree-local sessions:** make NO-COMMIT explicit in every spawn prompt.

**Tech debt:** Theme safety net `section { overflow: hidden }` covers remaining overflow on Security Practices (79px measured, clipped cleanly). One regression from R4→R5 noted (Practices grew from +39px to +79px); Chekov's R5 tightened text but likely didn't reduce bullet count.

---

**Participants:** Kirk (overall), Scotty (Reliability), Spock (Cost), McCoy (OpEx), Sulu (Performance), Uhura (Layout).

**Cross-pillar handoffs wired this round:**
- **Reliability → Security** — "reliability assumes the system is still yours" (Reliability close) hands off to Security's "Can it be breached — and would we see it?" (Security open).
- **Security → Cost** — "containment isn't free. Security spend is the next cost lever to make legible" (Security close) bridges to Cost's unit-economics framing.
- **Cost → OpEx** — "cost discipline rides on operational discipline — without safe change & feedback loops, savings regress" bridges to OpEx as the "carrier" pillar.
- **OpEx → Performance** — "operating safely is half the story — Performance proves it at P99 under load" (OpEx At-a-Glance) hands off to Perf's tail-latency validation.
- **Performance → Trade-Offs** — "performance never lives alone — every gain costs something elsewhere" (Perf At-a-Glance) introduces Trade-Offs chapter.

**Notes:** Drafted Healthcare PHI scenario rewrite (threat-model-first anchor: SE:03 data classification → CMK + Key Vault → PIM/JIT → Defender/Sentinel audit-grade ingestion → tune perf/cost after controls are in place). Submitted to Kirk for integration. Decision proposal on maturity indicator: lead metric is MTTD/dwell time, not Secure Score (supports Kirk's trade-off framing that security is a detection-and-containment cost, not a checklist cost). Detection-first maturity trajectory now resonates across Reliability (signal-driven) and OpEx (agentic) pillars.
