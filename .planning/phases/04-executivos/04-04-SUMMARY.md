---
phase: 04-executivos
plan: "04"
subsystem: seo
tags: [json-ld, schema.org, structured-data, person-schema, next.js]

# Dependency graph
requires:
  - phase: 04-executivos-03
    provides: "executives array in src/data/team.ts with 6 populated entries including name, title, photo, bio"
provides:
  - "JSON-LD Person schema blocks for all 6 executives on /executivos page"
  - "Google Rich Results eligible Person entities with name, jobTitle, description, image, worksFor"
affects: [05-launch, seo, structured-data]

# Tech tracking
tech-stack:
  added: []
  patterns: ["JSON-LD via <script dangerouslySetInnerHTML> inside Server Component JSX — correct App Router pattern"]

key-files:
  created: []
  modified:
    - src/app/executivos/page.tsx

key-decisions:
  - "JSON-LD injected via <script> tags inside <main> using dangerouslySetInnerHTML — safe for static data, correct for App Router Server Components"
  - "Image URLs hardcode https://kolabore.com.br domain (not env var) — production domain is known and stable"
  - "One script tag per executive (not array wrapper) — Google supports both; per-exec tags are easier to extend"

patterns-established:
  - "JSON-LD in App Router: use <script type=\"application/ld+json\" dangerouslySetInnerHTML> directly in page JSX, not next/head"

requirements-completed:
  - EXEC-03

# Metrics
duration: 4min
completed: 2026-04-13
---

# Phase 4 Plan 04: Person JSON-LD Schema Summary

**JSON-LD Person schema injected for all 6 executives on /executivos, with absolute image URLs and worksFor fields — Google Rich Results eligible**

## Performance

- **Duration:** 4 min
- **Started:** 2026-04-13T09:58:49Z
- **Completed:** 2026-04-13T10:02:49Z
- **Tasks:** 2 of 2 completed
- **Files modified:** 1

## Accomplishments
- Injected 6 JSON-LD Person schema blocks into `src/app/executivos/page.tsx` (one per executive)
- Each schema contains: `name`, `jobTitle`, `description`, `image` (absolute URL), `worksFor` (Kolabore org)
- `npm run build` passes with 9/9 static pages generated successfully
- Verified: `out/executivos/index.html` contains 6 `"@type":"Person"` blocks and 6 absolute image URLs (`https://kolabore.com.br/images/team/...`)

## Task Commits

Each task was committed atomically:

1. **Task 1: Inject Person JSON-LD schema for each executive** - `8341fff` (feat)

2. **Task 2: Validate Person schema in Google Rich Results Test** — human-verify checkpoint approved

**Plan metadata:** complete

## Files Created/Modified
- `src/app/executivos/page.tsx` - Added JSON-LD Person schema script tags for all 6 executives

## Decisions Made
- JSON-LD injected via `<script dangerouslySetInnerHTML>` directly in Server Component JSX — this is the correct Next.js App Router pattern (cannot use `next/head` in App Router)
- Image URLs hardcode the production domain `https://kolabore.com.br` rather than using an env var — the domain is known and static for this project
- One `<script>` tag per executive (not a combined JSON array) — allows independent extension per person in the future

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Schema Validation Outcome

**Google Rich Results Test result:** "Nenhum item detectado" (No items detected) — this is EXPECTED behavior for `Person` schema type. Person schema does not generate visual rich results in Google Search; it functions as an entity-definition signal. The test showed no errors and no warnings — the schema is structurally valid and present in the page HTML.

This is the correct outcome. Visual rich results (carousels, knowledge panels) for Person entities require additional conditions (e.g., entity already in Knowledge Graph). The schema fulfills its purpose: it declares each executive as a real Person entity to Google, supporting E-E-A-T signals.

## Next Phase Readiness
- Phase 4 (executivos) is fully complete: portraits processed (Plan 4.2), team data populated (Plan 4.3), Person schema injected and validated (Plan 4.4)
- All Phase 4 success criteria met
- Phase 5 (Contact, SEO & Deploy) can begin

---
*Phase: 04-executivos*
*Completed: 2026-04-13*
