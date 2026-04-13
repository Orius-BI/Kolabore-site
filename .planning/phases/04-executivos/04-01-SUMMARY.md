---
phase: 04-executivos
plan: "01"
subsystem: ui
tags: [next.js, react, motion, tailwind, next-image-export-optimizer]

# Dependency graph
requires:
  - phase: 01-foundation
    provides: Next.js static export scaffold, design tokens, layout primitives (Section, Container)
  - phase: 02-homepage
    provides: UI primitives (Button, SectionHeading), motion animation patterns
provides:
  - ExecutivosHeroSection component with motion entry animation
  - ExecutiveCard component with portrait, tags, credential, hover reveal
  - /executivos page assembled with hero + grid + CTA sections
  - Empty-array content gate (renders gracefully with no executives)
affects: [04-03, phase-5-seo]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "ExecutiveCard hover reveal via translate-y CSS transform (no layout shift)"
    - "Content gate pattern: conditional render for empty data array"
    - "ExportedImage from next-image-export-optimizer for static export compatibility"

key-files:
  created:
    - src/components/sections/ExecutivosHeroSection.tsx
    - src/components/ui/ExecutiveCard.tsx
  modified:
    - src/app/executivos/page.tsx

key-decisions:
  - "Hover reveal implemented with translate-y-full/group-hover:translate-y-0 — pure CSS, zero layout shift"
  - "Content gate renders 'Perfis em breve.' when executives array is empty — page deployable before portraits"
  - "eager prop on ExecutiveCard: first card uses loading='eager', rest are lazy"

patterns-established:
  - "Group hover pattern: add 'group' to card root, child overlay responds via group-hover: variants"
  - "Hero section above fold: uses animate= with initial/animate props (not whileInView)"
  - "Grid cards below fold: uses whileInView with viewport={{ once: true }}"

requirements-completed: [EXEC-01, EXEC-02]

# Metrics
duration: 6min
completed: 2026-04-13
---

# Phase 4 Plan 01: Executivos Page Summary

**ExecutivosHeroSection + ExecutiveCard components with CSS-only hover reveal, plus /executivos page assembled with empty-array content gate ready for real portrait data in Plan 4.3**

## Performance

- **Duration:** ~6 min
- **Started:** 2026-04-13T09:36:31Z
- **Completed:** 2026-04-13T09:42:00Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments

- ExecutivosHeroSection: dark hero matching PageHeroSection pattern, above-fold motion with animate= (not whileInView), eyebrow/headline/subheadline/CTA wired
- ExecutiveCard: portrait via ExportedImage (static export compliant), specialty tag chips (first 3 visible), credential line, hover overlay using translate-y-full/group-hover:translate-y-0 — zero layout shift
- /executivos page: fully assembled with empty-array gate ("Perfis em breve."), 2-col mobile/3-col desktop grid, CTA section — npm run build succeeds

## Task Commits

1. **Task 1: ExecutivosHeroSection and ExecutiveCard components** - `67ca5b5` (feat)
2. **Task 2: Wire /executivos page — hero + grid** - `8e74a71` (feat)

## Files Created/Modified

- `src/components/sections/ExecutivosHeroSection.tsx` - Page hero, motion entry, CTA to /contato
- `src/components/ui/ExecutiveCard.tsx` - Card consuming Executive interface, ExportedImage, CSS hover reveal
- `src/app/executivos/page.tsx` - Assembled page replacing placeholder; hero + grid section + CTA section

## Decisions Made

- Hover reveal implemented with translate-y CSS transform only (not height animation) — eliminates layout shift entirely
- Empty array content gate renders gracefully so page can be deployed while portraits are being processed
- `eager` prop passed only to first card (index 0) to optimize LCP without blocking other cards

## Deviations from Plan

None — plan executed exactly as written.

## Issues Encountered

None. TypeScript compilation clean, build succeeded on first attempt.

## Known Stubs

- `src/app/executivos/page.tsx` renders "Perfis em breve." when `executives` array is empty — intentional content gate per plan spec. Resolved in Plan 4.3 when real portraits are processed and `executives` array is populated.

## Next Phase Readiness

- ExecutiveCard component is fully wired — Plan 4.3 only needs to populate `src/data/team.ts` with real Executive objects and place portrait images in `public/images/team/`
- Page is deployable as-is (empty state renders cleanly)
- Blocker: portrait photos must be processed from `docs/imagens clientes *` before Plan 4.3 (per Plan 4.2)

---
*Phase: 04-executivos*
*Completed: 2026-04-13*
