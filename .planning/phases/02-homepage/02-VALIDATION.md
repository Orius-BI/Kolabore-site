---
phase: 2
slug: homepage
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-12
---

# Phase 2 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None — build verification + manual visual inspection |
| **Config file** | none |
| **Quick run command** | `npm run build` |
| **Full suite command** | `npm run build && npm run lint` |
| **Estimated runtime** | ~45 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run build` — exit non-zero = task not done
- **After every plan wave:** Run `npm run build && npm run lint`
- **Before `/gsd:verify-work`:** Build clean + manual visual check at 375px and 1440px + substitution test on all headings + Formspree end-to-end test
- **Max feedback latency:** ~45 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | Status |
|---------|------|------|-------------|-----------|-------------------|--------|
| hero-copy-draft | 2.1 | 1 | HOME-01 | Copy review | `npm run build` (no TS error) | ⬜ pending |
| challenges-copy | 2.1 | 1 | HOME-03 | Copy review | Manual substitution test | ⬜ pending |
| hero-section-build | 2.2 | 2 | HOME-01 | Build | `npm run build` | ⬜ pending |
| audience-section-build | 2.2 | 2 | HOME-02 | Build | `npm run build` | ⬜ pending |
| challenges-section-build | 2.3 | 3 | HOME-03 | Build | `npm run build` | ⬜ pending |
| formats-section-build | 2.3 | 3 | HOME-04 | Build | `npm run build && grep -c 'format' out/index.html` | ⬜ pending |
| seniority-section-build | 2.3 | 3 | HOME-05 | Build | `npm run build` | ⬜ pending |
| team-preview-null | 2.4 | 4 | HOME-06 | Behavior | `grep -c "TeamPreview" out/index.html` (expect 0 or section absent) | ⬜ pending |
| areas-section-build | 2.4 | 4 | HOME-07 | Build | `npm run build` | ⬜ pending |
| contact-form-build | 2.4 | 4 | HOME-08 | Build | `npm run build` (TS pass); Formspree test manual | ⬜ pending |
| motion-imports | 2.5 | 5 | DESIGN-04 | Code review | `grep -r "motion/react-m" src/components/home/` | ⬜ pending |
| no-hardcoded-colors | 2.5 | 5 | DESIGN-01 | Lint | `grep -rn "#b8933f\|#0d0d0d\|#f5f5f4" src/components/home/` (expect 0) | ⬜ pending |
| responsive-375 | 2.5 | 5 | DESIGN-02 | Browser | Manual: DevTools 375px on all sections | ⬜ pending |
| responsive-1440 | 2.5 | 5 | DESIGN-02 | Browser | Manual: DevTools 1440px on all sections | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Create `.env.local` with `NEXT_PUBLIC_FORMSPREE_ID=<real-id>` before Plan 2.4 end-to-end form testing
  - Formspree free account at formspree.io — takes 2 minutes
  - Without this, ContactSection builds fine but form submissions will fail at runtime

*If deferred: form builds but cannot be tested end-to-end until env var is populated.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Substitution test on all headings | DESIGN-05 | Copy quality cannot be automated | For each H1/H2: replace "Kolabore" with a competitor name — if the sentence still works, it's too generic and must be rewritten |
| Contact form submission | HOME-08 | Requires live Formspree endpoint | Fill form with name/company/role/message, submit, verify success state appears AND email arrives in inbox |
| Layout at 375px mobile | DESIGN-02 | Visual inspection needed | Chrome DevTools → 375px → scroll through all sections, check for overflow, text clipping, button overflow |
| Layout at 1440px desktop | DESIGN-02 | Visual inspection needed | Resize browser to 1440px, verify grid layouts expand correctly, no excessive whitespace |
| No "consultorês" copy | DESIGN-05 | Linguistic quality | Read every paragraph — flag any: "soluções robustas", "ecossistema", "alavancagem", "sinergias", "disruptivo", generic consulting phrases |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 60s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
