---
phase: 05-contact-seo-deploy
plan: "03"
subsystem: seo
tags: [sitemap, robots, next.js, static-export, seo]
dependency_graph:
  requires:
    - "05-01"
    - "05-02"
  provides:
    - sitemap.xml at /out/sitemap.xml after build
    - robots.txt at /out/robots.txt after build
  affects:
    - Search engine indexing and crawlability
    - CONT-04 requirement satisfaction
tech_stack:
  added: []
  patterns:
    - Next.js App Router native file conventions (sitemap.ts, robots.ts)
    - export const dynamic = 'force-static' workaround for output: export
key_files:
  created:
    - src/app/sitemap.ts
    - src/app/robots.ts
  modified: []
decisions:
  - Native Next.js file conventions used over third-party packages (zero new dependencies)
  - export const dynamic = 'force-static' added to both files to work around GitHub issue #68667
metrics:
  duration: "1 min"
  completed_date: "2026-04-14"
  tasks_completed: 2
  files_created: 2
  files_modified: 0
requirements:
  - CONT-04
---

# Phase 5 Plan 03: Sitemap and Robots.txt Summary

Sitemap.xml and robots.txt generated via Next.js native file conventions with `export const dynamic = 'force-static'` workaround for the `output: 'export'` silent-skip bug (GitHub #68667).

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Create src/app/sitemap.ts | 5254954 | src/app/sitemap.ts |
| 2 | Create src/app/robots.ts | bb6510a | src/app/robots.ts |

## What Was Built

Two Next.js App Router file convention files that generate SEO metadata at build time:

**`src/app/sitemap.ts`** — Returns a `MetadataRoute.Sitemap` array with all 6 public routes, each with trailing slashes (matching `trailingSlash: true` in next.config.ts), `changeFrequency`, and `priority`. Generates `out/sitemap.xml` at `npm run build`.

**`src/app/robots.ts`** — Returns a `MetadataRoute.Robots` object allowing all crawlers with a `Sitemap` directive pointing to `https://kolabore.com.br/sitemap.xml`. Generates `out/robots.txt` at `npm run build`.

## Verification Results

All 4 verification checks passed:

```
out/sitemap.xml  — present after build
out/robots.txt   — present after build
sitemap.xml contains kolabore.com.br/contato/  — all 6 URLs confirmed
robots.txt contains Sitemap: https://kolabore.com.br/sitemap.xml
```

Build exits 0 with both files generated.

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None — both files are fully wired and produce real output.

## Self-Check: PASSED

- src/app/sitemap.ts — FOUND
- src/app/robots.txt — FOUND (out/robots.txt)
- Commit 5254954 — FOUND
- Commit bb6510a — FOUND
