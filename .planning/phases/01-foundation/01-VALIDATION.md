---
phase: 1
slug: foundation
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-11
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | None pre-installed — build verification is the primary mechanism |
| **Config file** | none — Wave 0 optionally adds vitest |
| **Quick run command** | `npm run build` |
| **Full suite command** | `npm run build && test -f out/.htaccess && ls out/kolabore out/expertise out/engajamento out/executivos out/contato` |
| **Estimated runtime** | ~30–60 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run build` — exit non-zero = task not done
- **After every plan wave:** Run `npm run build && test -f out/.htaccess && ls out/kolabore out/expertise out/engajamento out/executivos out/contato`
- **Before `/gsd:verify-work`:** Full build clean + browser smoke test (all 6 routes via `npx serve out`, hard-refresh each)
- **Max feedback latency:** ~60 seconds (build time)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | Status |
|---------|------|------|-------------|-----------|-------------------|--------|
| build-produces-out | 1.1 | 1 | FOUND-01 | Build | `npm run build && test -d out` | ⬜ pending |
| routes-in-out | 1.1 | 1 | FOUND-01 | Build | `ls out/ \| grep -E "kolabore\|expertise\|engajamento\|executivos\|contato"` | ⬜ pending |
| image-optimizer-runs | 1.1 | 1 | FOUND-04 | Build | Build log contains "next-image-export-optimizer" | ⬜ pending |
| htaccess-in-out | 1.3 | 2 | FOUND-05 | Build | `test -f out/.htaccess` | ⬜ pending |
| htaccess-https-redirect | 1.3 | 2 | FOUND-05 | Build | `grep -c "HTTPS" out/.htaccess` (expect > 0) | ⬜ pending |
| no-google-fonts-link | 1.2 | 2 | FOUND-03 | Build | `grep -r "fonts.googleapis" out/` (expect empty) | ⬜ pending |
| lang-pt-br | 1.3 | 2 | FOUND-07 | Source | `grep 'lang="pt-BR"' src/app/layout.tsx` | ⬜ pending |
| data-typecheck | 1.5 | 3 | FOUND-10 | Build | `npx tsc --noEmit` (exit 0) | ⬜ pending |
| header-renders | 1.4 | 3 | FOUND-08 | Browser | Visit each route, confirm Header + Footer present | ⬜ pending |
| all-routes-render | 1.5 | 3 | FOUND-09 | Browser | `npx serve out -p 3001` → visit all 6 routes manually | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

Phase 1 has no unit-testable business logic — build-time verification is sufficient.

- [ ] Optional: `npm install -D vitest @vitejs/plugin-react` + `vitest.config.ts` — prepares test infrastructure for Phase 2+ component tests
- [ ] `tests/smoke/build.test.sh` — shell script asserting `out/` structure post-build (optional but recommended)

*If deferred: "Existing build verification commands cover all Phase 1 requirements without a test framework."*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Header transparent → solid on scroll | FOUND-08 | CSS scroll behavior not verifiable via build output | Run `npx serve out -p 3001`, open browser, scroll down on any page, confirm header background changes |
| All 6 routes render without 404 | FOUND-09 | Requires browser or HTTP client | Run `npx serve out -p 3001`, visit each route directly (paste URL, Enter), confirm no 404 |
| Footer renders on all pages | FOUND-08 | Visual confirmation needed | Scroll to bottom on each of the 6 routes |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 60s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
