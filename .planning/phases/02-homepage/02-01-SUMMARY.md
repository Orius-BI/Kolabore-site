---
phase: 02-homepage
plan: "01"
subsystem: ui
tags: [typescript, copy, content, homepage]

# Dependency graph
requires: []
provides:
  - "src/content/homepage.ts — typed constants for all 8 homepage sections"
  - "Single source of truth for all homepage text, importable by sections 2.2–2.4"
affects:
  - "02-02: HeroSection + AudienceSection + ChallengesSection"
  - "02-03: FormatsSection + SenioritySection + TeamPreviewSection"
  - "02-04: ContactSection + AreasSection + page.tsx"

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Content-as-constants: all copy lives in src/content/, never embedded in components"
    - "TypeScript as const assertions on all content objects for strict typing"

key-files:
  created:
    - src/content/homepage.ts
  modified: []

key-decisions:
  - "All copy pre-authored and substitution-tested before any component is built — decouples copy review from layout concerns"
  - "areas.subtitle uses 'Expertise aplicada' — single allowed use of 'expertise' as adjective qualifier, not standalone noun"

patterns-established:
  - "Pattern: content file exports named const matching section name (hero, audience, challenges, formats, seniority, teamPreview, areas, contact)"
  - "Pattern: components in plans 2.2–2.4 do named import from src/content/homepage.ts — no string literals in components"

requirements-completed: [DESIGN-05]

# Metrics
duration: 8min
completed: 2026-04-12
---

# Phase 2 Plan 01: Homepage Copy — Typed Content Constants Summary

**All 8 homepage section copies authored as TypeScript constants in src/content/homepage.ts, substitution-tested, no forbidden words, build passing.**

## Performance

- **Duration:** 8 min
- **Started:** 2026-04-12T19:16:52Z
- **Completed:** 2026-04-12T19:24:00Z
- **Tasks:** 1
- **Files modified:** 1

## Accomplishments

- Created `src/content/homepage.ts` exporting 8 typed constants (hero, audience, challenges, formats, seniority, teamPreview, areas, contact)
- All copy passes substitution test and uses no forbidden words (potencializar, soluções inovadoras, parceria estratégica, resultados extraordinários, disruptivo)
- Hero headline is 7 words, noun phrase, problem-first
- Challenge questions are executive first-person present tense (not service labels)
- Seniority metrics are specific and attributable ("~35 anos")
- TypeScript compiles cleanly; `npm run build` exits 0

## Task Commits

1. **Task 1: Create src/content/homepage.ts with all section copy** — `59d8a70` (feat)

**Plan metadata:** (docs commit follows)

## Files Created/Modified

- `src/content/homepage.ts` — All homepage text as TypeScript constants; 8 named exports covering every homepage section

## Decisions Made

- Copy authored directly from plan-provided strings, validated against PRD sections 7, 8, 11 and 02-RESEARCH.md copy patterns
- `areas.subtitle` uses "Expertise aplicada" — treated as acceptable since "expertise" is used as an adjective qualifier, not a standalone noun (copy rule forbids "expertise" as standalone noun only)

## Deviations from Plan

None — plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None — no external service configuration required.

## Next Phase Readiness

- `src/content/homepage.ts` is ready for immediate import by Plans 2.2, 2.3, and 2.4
- All 8 section constants are typed with `as const` — downstream components get full type inference
- No blockers for Phase 2 continuation

---
*Phase: 02-homepage*
*Completed: 2026-04-12*
