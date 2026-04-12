---
phase: 01-foundation
plan: 05
subsystem: routing, data
tags: [routes, data-layer, typescript, scaffold]
dependency_graph:
  requires: [01-02, 01-03]
  provides: [all-6-routes, data-layer]
  affects: [02-homepage-sections, 03-inner-pages, 04-executivos]
tech_stack:
  added: []
  patterns: [next-app-router-static, typed-data-files]
key_files:
  created:
    - src/app/kolabore/page.tsx
    - src/app/expertise/page.tsx
    - src/app/engajamento/page.tsx
    - src/app/executivos/page.tsx
    - src/app/contato/page.tsx
    - src/data/team.ts
    - src/data/areas.ts
    - src/data/formats.ts
  modified:
    - src/app/page.tsx
decisions:
  - "executives array left empty — Phase 4 content gate enforced; placeholder portraits would contradict trust positioning"
  - "Areas and formats descriptions written in PT-BR executive tone matching Kolabore brand voice"
metrics:
  duration: "10 min"
  completed: "2026-04-11"
  tasks: 2
  files: 9
---

# Phase 01 Plan 05: Route Scaffold and Data Layer Summary

All 6 route directories scaffolded with placeholder pages; three typed data files created with real content from PRD — areas (8) and formats (8) fully populated, executives array intentionally empty pending Phase 4 portrait processing.

## Tasks Completed

### Task 1: Scaffold all 6 route placeholder pages
- Updated `src/app/page.tsx` to clean placeholder using design tokens (`font-display`, `text-h1`, `text-mist`, `text-silver`)
- Created 5 new route directories: `kolabore/`, `expertise/`, `engajamento/`, `executivos/`, `contato/`
- Each page renders the route name in an `<h1>` for distinguishability during development
- `npm run build` exits 0; all 6 routes appear in `out/` with `index.html`
- Commit: `6100adb`

### Task 2: Create typed data files in src/data/
- Created `src/data/team.ts`: `Executive` interface with 7 fields + empty `executives` array
- Created `src/data/areas.ts`: `Area` interface + 8 areas (supply-chain, operacoes, procurement, governanca, qualidade, projetos, inovacao, conselho)
- Created `src/data/formats.ts`: `EngagementFormat` interface + 8 formats (consultoria, assessment, benchmark, quick-win, workshop, mentoring, comites, custom)
- `npx tsc --noEmit` passes clean
- `npm run build` passes
- Commit: `6480f73`

## Build Results

```
Route (app)
- / (static)
- /kolabore (static)
- /expertise (static)
- /engajamento (static)
- /executivos (static)
- /contato (static)

out/ directories confirmed:
- out/kolabore/index.html OK
- out/expertise/index.html OK
- out/engajamento/index.html OK
- out/executivos/index.html OK
- out/contato/index.html OK
```

## Data Files Summary

### src/data/areas.ts — 8 areas
| ID | Label |
|----|-------|
| supply-chain | Supply Chain |
| operacoes | Manufatura e Operações |
| procurement | Procurement |
| governanca | Governança |
| qualidade | Qualidade e Food Safety |
| projetos | Projetos e Transformação |
| inovacao | Inovação |
| conselho | Conselho e Comitês |

### src/data/formats.ts — 8 formats
| ID | Label |
|----|-------|
| consultoria | Consultoria Completa |
| assessment | Assessments |
| benchmark | Benchmarks |
| quick-win | Quick Wins |
| workshop | Workshops |
| mentoring | Mentoring |
| comites | Participação em Comitês |
| custom | Projetos Customizados |

### src/data/team.ts
- `Executive` interface exported with fields: `id`, `name`, `title`, `photo`, `specialties` (string[]), `credential`, `bio`
- `executives` array is **empty** — Phase 4 content gate enforced per pitfall watchlist

## TypeScript Check

`npx tsc --noEmit` — CLEAN (0 errors)

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

The 5 new route pages and the updated homepage are intentional stubs — each renders only a placeholder heading and message. This is the stated goal of this plan. Phase 2 and 3 will wire real content into these routes.

The `executives` array is intentionally empty. The plan explicitly specifies this as a Phase 4 content gate.

## Self-Check: PASSED
