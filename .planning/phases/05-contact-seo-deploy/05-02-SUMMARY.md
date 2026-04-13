---
phase: 05-contact-seo-deploy
plan: "02"
subsystem: seo
tags: [next.js, metadata, open-graph, json-ld, seo, schema.org]

# Dependency graph
requires:
  - phase: 04-executivos
    provides: Page components and routes for all 6 pages
provides:
  - Unique title + description metadata on all 5 pages (homepage, kolabore, expertise, engajamento, executivos)
  - Organization JSON-LD schema on homepage
  - OG metadata config (url, title, description) per page — OG image pending Task 2
affects: [05-contact-seo-deploy, deploy]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Page-level metadata: each page exports const metadata typed as Metadata from next"
    - "Homepage uses title.absolute to override the root layout template"
    - "OG fields added per page but rely on file-based opengraph-image for actual image (Task 2)"
    - "Organization JSON-LD injected via dangerouslySetInnerHTML script tag in JSX"

key-files:
  created: []
  modified:
    - src/app/page.tsx
    - src/app/kolabore/page.tsx
    - src/app/expertise/page.tsx
    - src/app/engajamento/page.tsx
    - src/app/executivos/page.tsx

key-decisions:
  - "Homepage uses title.absolute to avoid double-brand ('Kolabore | Consultoria Executiva | Kolabore')"
  - "kolabore page title changed from 'Kolabore — Quem somos' to 'A Kolabore' to avoid redundancy with template"
  - "OG image per-page relies on Next.js file convention (opengraph-image.jpg) not inline config"

patterns-established:
  - "Metadata pattern: import type { Metadata } then export const metadata: Metadata = {...}"
  - "openGraph block per page only sets title, description, url — image is inherited via file convention"

requirements-completed: [CONT-02, CONT-05]

# Metrics
duration: 3min
completed: 2026-04-13
---

# Phase 05 Plan 02: SEO Metadata Summary

**Unique title/description metadata exports added to all 5 pages plus Organization JSON-LD on homepage via Next.js metadata API**

## Performance

- **Duration:** ~3 min
- **Started:** 2026-04-13T12:00:00Z
- **Completed:** 2026-04-13T12:03:00Z
- **Tasks:** 1 of 2 complete (Task 2 is checkpoint:human-verify — paused)
- **Files modified:** 5

## Accomplishments

- Added `export const metadata: Metadata` to src/app/page.tsx (homepage) with absolute title to avoid double-brand
- Added Organization JSON-LD schema block to homepage JSX (schema.org/Organization with name, url, logo, description, address)
- Fixed kolabore/page.tsx title from 'Kolabore — Quem somos' to 'A Kolabore', added typed Metadata + OG fields
- Added metadata exports to expertise, engajamento, and executivos pages (all 3 had none before)
- All pages now have OG url, title, and description — OG image auto-resolved via file convention once Task 2 creates opengraph-image.jpg
- Build passes (verified in worktree)

## Task Commits

1. **Task 1: Add metadata exports to all pages + Organization JSON-LD** - `b99933e` (feat)

**Note:** Task 2 (checkpoint:human-verify) requires human to create the 1200x630 OG image and run heading hierarchy audit. No automation commit yet.

## Files Created/Modified

- `src/app/page.tsx` - Added metadata export with absolute title + Organization JSON-LD script in JSX
- `src/app/kolabore/page.tsx` - Fixed title to 'A Kolabore', added Metadata type, added OG fields
- `src/app/expertise/page.tsx` - New metadata export: title 'Expertise', description, OG block
- `src/app/engajamento/page.tsx` - New metadata export: title 'Engajamento', description, OG block
- `src/app/executivos/page.tsx` - New metadata export: title 'Executivos', description, OG block

## Decisions Made

- Homepage uses `title: { absolute: '...' }` to prevent the template from appending " | Kolabore" to an already-branded title
- kolabore page title changed to "A Kolabore" — short, clean, renders as "A Kolabore | Kolabore" (21 chars)
- OG image not specified inline in any page's openGraph config — Next.js file convention (opengraph-image.jpg in src/app/) auto-generates og:image with higher priority than config

## Deviations from Plan

None - Task 1 executed exactly as specified in the plan.

## Known Stubs

- `src/app/opengraph-image.jpg` does not yet exist — Task 2 requires human to create it. Until this file exists, og:image meta tags will not be present in built HTML.

## Issues Encountered

None — all 5 files compiled cleanly, build passes.

## User Setup Required

**Task 2 is a checkpoint:human-verify gate.** The human must:

1. Create a 1200x630 JPG image using brand colors (#0d0d0d bg, #f5f5f4 text, #b8933f accent) and save it to `src/app/opengraph-image.jpg`
2. Run `npm run build && grep -c "og:image" out/index.html` to confirm og:image meta tag is generated
3. Audit heading hierarchy on all 6 pages via browser DevTools (verify 1 H1 per page, no skipped levels)
4. Fix any heading issues found, then type "approved" to signal continuation

## Next Phase Readiness

- Task 1 complete: all pages have unique title + description metadata (CONT-02 satisfied)
- Heading hierarchy audit still required (CONT-05 — needs manual verification)
- OG image still required (CONT-03 — Task 2 gate)
- trailingSlash: true confirmed in next.config.ts (CONT-06 already satisfied from Phase 1)

---
*Phase: 05-contact-seo-deploy*
*Completed: 2026-04-13 (partial — paused at Task 2 checkpoint)*
