---
phase: 04-executivos
plan: "03"
subsystem: ui
tags: [next-image-export-optimizer, static-export, team-data, portraits]

# Dependency graph
requires:
  - phase: 04-02
    provides: 6 WebP portrait files at public/images/team/*.webp (400x400, <100KB each)
provides:
  - Populated executives array in src/data/team.ts (6 Sócios with bios, credentials, specialties)
  - TeamPreviewSection on homepage renders 3 executive cards with real portraits
  - /executivos page renders real faces (phase 4 core deliverable unblocked)
affects: [04-04, 05-launch]

# Tech tracking
tech-stack:
  added: []
  patterns: [ExportedImage from next-image-export-optimizer for all portrait rendering]

key-files:
  created: []
  modified:
    - src/data/team.ts
    - src/components/sections/TeamPreviewSection.tsx
    - .gitignore

key-decisions:
  - "Gitignore public/images/team/nextImageExportOptimizer/ — build-time artifact, not source"
  - "TeamPreviewSection renders first 3 executives (slice) matching /executivos grid card pattern"

patterns-established:
  - "Portrait card pattern: ExportedImage bleeds to card edge, p-6 content below, rounded-t on image"

requirements-completed: [EXEC-01, EXEC-02]

# Metrics
duration: 2min
completed: 2026-04-13
---

# Phase 04 Plan 03: Executive Data Population Summary

**6 Sócios wired into team.ts with real bios, credentials and WebP portrait paths; TeamPreviewSection homepage card renders actual faces via ExportedImage**

## Performance

- **Duration:** ~2 min
- **Started:** 2026-04-13T09:55:04Z
- **Completed:** 2026-04-13T09:57:11Z
- **Tasks:** 1 auto (checkpoint:decision resolved by human before execution)
- **Files modified:** 4

## Accomplishments

- Populated `executives` array with 6 Sócios: Alexandre Guedes, Eduardo Araújo, Leonardo Moreira, Mário Sergio Gomes, Paulo Villas, Rino Abbondi
- Each executive has 5 specialty tags, one specific credential line, and a 2–3 sentence bio that passes substitution test
- TeamPreviewSection updated from photo-less placeholder cards to portrait-first cards using ExportedImage — section no longer returns null
- Build passes: 9 static pages generated, 6 portraits optimized across 17 sizes (102 total variants, 1.0 MB total)
- Added gitignore rule for `next-image-export-optimizer` build-time output

## Task Commits

1. **Task 2: Populate team.ts and update TeamPreviewSection** - `3fc6a9e` (feat)

**Plan metadata:** (docs commit to follow)

## Files Created/Modified

- `src/data/team.ts` — Replaced empty array with 6 Executive objects; all photo paths reference `/images/team/*.webp`
- `src/components/sections/TeamPreviewSection.tsx` — Added ExportedImage import; cards now show portrait image bleeding to card edge; renders `executives.slice(0, 3)` on homepage
- `public/images/next-image-export-optimizer-hashes.json` — Updated by build (tracks image optimization hashes)
- `.gitignore` — Added `public/images/team/nextImageExportOptimizer/` to prevent committing build-time generated image variants

## Decisions Made

- Gitignore the `nextImageExportOptimizer/` subfolder: it is generated at build time from source WebPs; committing it would add ~1MB of binary artifacts with no source-control value.
- TeamPreviewSection uses `executives.slice(0, 3)` to display the first three executives alphabetically — matches the pattern expected by the full `/executivos` page grid.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Gitignore next-image-export-optimizer build output**
- **Found during:** Task 2 (post-build git status check)
- **Issue:** `public/images/team/nextImageExportOptimizer/` appeared as untracked after build — generated binary artifacts with no source-control value
- **Fix:** Added ignore rule to `.gitignore` for both `public/images/team/nextImageExportOptimizer/` and `public/images/nextImageExportOptimizer/`
- **Files modified:** `.gitignore`
- **Verification:** `git status --short` no longer shows the folder as untracked
- **Committed in:** 3fc6a9e (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (Rule 2 — missing gitignore for generated output)
**Impact on plan:** Housekeeping only — no scope creep.

## Issues Encountered

None — build passed on first attempt.

## Known Stubs

None — all 6 executives have real data. TeamPreviewSection renders live data from the array. No hardcoded placeholder text in either modified file.

## User Setup Required

None — no external service configuration required.

## Next Phase Readiness

- Phase 4 core deliverable complete: `/executivos` page has real faces and real bios
- Homepage TeamPreviewSection now renders (no longer returns null)
- Ready for Phase 4 Plan 4 (final review / any remaining page wiring)
- No blockers for Phase 5 launch from this plan

---
*Phase: 04-executivos*
*Completed: 2026-04-13*
