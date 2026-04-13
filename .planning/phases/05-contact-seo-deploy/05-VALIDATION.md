---
phase: 5
slug: contact-seo-deploy
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-13
---

# Phase 5 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual verification + build output inspection |
| **Config file** | none — static export, no jest/vitest configured |
| **Quick run command** | `npm run build && ls out/sitemap.xml out/robots.txt` |
| **Full suite command** | Pre-launch checklist in ROADMAP.md Phase 5 |
| **Estimated runtime** | ~60 seconds (build) |

---

## Sampling Rate

- **After every task commit:** Run `npm run build` — verify zero errors; check plan-specific output files exist
- **After every plan wave:** Run full `npm run build` + spot-check build output artifacts for that wave
- **Before `/gsd:verify-work`:** Full pre-launch checklist must pass
- **Max feedback latency:** 60 seconds (build time)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 5-01-* | 5.1 | 1 | CONT-01 | Build smoke | `npm run build && ls out/contato/index.html` | ❌ Plan 5.1 | ⬜ pending |
| 5-02-* | 5.2 | 1 | CONT-02 | Build check | `npm run build && grep -h "<title>" out/*/index.html out/index.html` | ❌ Plan 5.2 | ⬜ pending |
| 5-02-* | 5.2 | 1 | CONT-03 | Build check | `grep og:image out/index.html` | ❌ Plan 5.2 | ⬜ pending |
| 5-03-* | 5.3 | 2 | CONT-04 | Build check | `npm run build && ls out/sitemap.xml out/robots.txt` | ❌ Plan 5.3 | ⬜ pending |
| 5-04-* | 5.4 | 2 | CONT-06 | Config check | `grep trailingSlash next.config.ts` | ✅ Already set | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

*No Wave 0 needed — no automated test infrastructure to install. `npm run build` is the primary gate; post-build file checks confirm artifact presence.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| H1/H2/H3 heading hierarchy valid | CONT-05 | Static HTML inspection required | Open each page in browser, run DevTools "Accessibility" heading inspector |
| All 6 routes survive hard refresh on Hostinger | CONT-07 | Requires live deploy | Paste each URL directly into browser; verify no 404; `.htaccess` SPA fallback must be active |
| Form email reaches client inbox | CONT-08 | Requires live Formspree + real inbox | Submit form; confirm receipt in client's inbox + spam; test Outlook/M365 if client uses that provider |
| OG image renders in LinkedIn Post Inspector | CONT-03 (live) | Requires live URL | Paste homepage URL into LinkedIn Post Inspector; verify image appears correctly |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 60s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
