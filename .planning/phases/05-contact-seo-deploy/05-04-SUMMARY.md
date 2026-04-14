---
phase: 05-contact-seo-deploy
plan: "04"
subsystem: performance
tags: [lighthouse, performance, lcp, tbt, cls, motion]

# Dependency graph
requires:
  - phase: 05-contact-seo-deploy
    provides: All pages built (Plans 5.1–5.3 complete)
provides:
  - LCP fix: HeroSection converted to Server Component with CSS-only animation
  - Priority hints on first ExportedImage in ExecutiveCard and TeamPreviewSection
affects: [deploy]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "LCP-safe hero: Server Component + CSS @keyframes (no opacity:0 initial state)"
    - "priority={eager} on ExecutiveCard first image — proper preload hint"
    - "priority={i === 0} on TeamPreviewSection first portrait"

key-files:
  created: []
  modified:
    - src/components/sections/HeroSection.tsx
    - src/styles/globals.css
    - src/components/ui/ExecutiveCard.tsx
    - src/components/sections/TeamPreviewSection.tsx

key-decisions:
  - "HeroSection: removed 'use client' + Motion — CSS animation is LCP-safe (element visible from first paint)"
  - "TBT ~1,800ms accepted: caused by Motion animations in below-the-fold sections — removing them would change intended UX"
  - "Target score ≥ 90 not reached (score: 71); deviation accepted by user — animations are intentional design decision"

patterns-established:
  - "Above-the-fold hero: always Server Component, CSS animation only"

requirements-completed: []

# Metrics
duration: ~15min
completed: 2026-04-14
---

# Phase 05 Plan 04: Lighthouse Audit Summary

**HeroSection converted to Server Component eliminating opacity:0 LCP penalty — Lighthouse mobile score improved from 47 to 71**

## Performance

- **Duration:** ~15 min
- **Completed:** 2026-04-14
- **Tasks:** 2 of 2 complete (Task 2 score accepted by user)
- **Files modified:** 4

## Accomplishments

- **Task 1:** Fixed ExportedImage priority hints — `priority={eager}` on ExecutiveCard, `priority={i === 0}` on TeamPreviewSection. All portrait images already had `width={400} height={400}` — no CLS risk.
- **Task 2:** HeroSection converted from `'use client'` + Motion to Server Component with CSS `@keyframes hero-slide-up`. LCP dropped from 8.8s to visible-from-first-paint. Score improved 47 → 71.

## Deviations from Plan

**Score target (≥ 90) not reached — accepted.** Remaining score gap (71 vs 90) is driven by TBT ~1,800ms from Motion hydration across 25 client components in below-the-fold sections. User explicitly chose not to touch animations — this is an intentional design/UX trade-off, not a bug.

Acessibilidade: 100 | Práticas recomendadas: 100 | SEO: 100 | Desempenho: 71

## Issues Encountered

- CLS = 0 (perfect — no layout shift)
- FCP = 1.4s (good)
- LCP = reduced significantly after hero fix
- TBT = ~1,840ms — Motion JS hydration, accepted
