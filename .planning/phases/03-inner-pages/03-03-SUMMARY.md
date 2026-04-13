---
phase: 03-inner-pages
plan: "03"
subsystem: expertise-page
tags: [inner-page, expertise, areas, copy, motion]
dependency_graph:
  requires: [03-01]
  provides: [expertise-page-complete]
  affects: [navigation, conversion-funnel]
tech_stack:
  added: []
  patterns: [motion-whileInView, section-component-composition, content-from-inner-pages-ts]
key_files:
  created:
    - src/components/sections/expertise/PageHeroSection.tsx
    - src/components/sections/expertise/ExpertiseIntroSection.tsx
    - src/components/sections/expertise/AreaDeepSection.tsx
    - src/components/sections/expertise/ExpertiseCtaBanner.tsx
  modified:
    - src/app/expertise/page.tsx
decisions:
  - "AreaDeepSection uses list items with explicit span for arrow rather than CSS before: pseudo-element to avoid Tailwind v4 content utility conflicts"
  - "ExpertiseCtaBanner is a standalone section element (not using the Section layout component) to allow border-y styling without the Section padding override"
metrics:
  duration: "~8 min"
  completed: "2026-04-13"
  tasks: 2
  files: 5
---

# Phase 3 Plan 03: Expertise Page Summary

**One-liner:** Full /expertise page with 8 deep-dive area blocks, hero, intro CTA, and bottom CTA banner — all wired from inner-pages.ts content module.

## What Was Built

The /expertise placeholder page was replaced with a complete inner page assembled from 4 section components:

- **PageHeroSection** — Page hero with bg-ink, above-fold animation (initial/animate), eyebrow, h1 using `font-display`, subheadline, and primary CTA to /contato
- **ExpertiseIntroSection** — Light bg-mist section using SectionHeading, intro body paragraph, and secondary CTA button to /contato (first CTA in conversion flow)
- **AreaDeepSection** — Core section rendering all 8 areas from `areas[]` merged with `expertisePage.areaDetails[area.id]` — each block shows label (h3), challenge title (gold uppercase), depth paragraph, and examples list; area blocks separated by `<hr className="border-slate/20">` with stagger-animated whileInView
- **ExpertiseCtaBanner** — Reusable CTA strip with `border-y border-gold/30 bg-gold/10`, title as `font-display text-h3`, and primary Button; used at page bottom (second CTA in conversion flow)

The `/expertise` page.tsx is a Server Component importing and rendering all four sections plus passing `expertisePage.ctaBanner` props to the banner.

## Verification

- `npm run build` — passed, 9/9 static pages generated, TypeScript clean
- All 8 areas render in AreaDeepSection — confirmed via areas[] (8 entries)
- 2 CTA buttons present: ExpertiseIntroSection (secondary) + ExpertiseCtaBanner (primary)
- All 4 components use `import * as m from 'motion/react-m'`
- All motion uses `whileInView + viewport={{ once: true }}` (except PageHeroSection which uses initial/animate for above-fold)
- No hex values — all design tokens used (bg-ink, bg-mist, text-gold, text-silver, text-slate, border-slate/20, bg-gold/10, border-gold/30)

## Commits

| Task | Commit | Description |
|------|--------|-------------|
| Task 1 | ad72856 | feat(03-03): build /expertise section components |
| Task 2 | a67c32f | feat(03-03): assemble /expertise page.tsx wiring all section components |

## Deviations from Plan

**1. [Rule 2 - Minor] Arrow icons in area examples use explicit span elements**

- **Found during:** Task 1 (AreaDeepSection implementation)
- **Issue:** Plan spec used CSS `before:content-['→']` but Tailwind v4 arbitrary content values require escaping that can be fragile
- **Fix:** Used explicit `<span className="text-gold mr-2">→</span>` before each `<li>` inner text span instead
- **Files modified:** src/components/sections/expertise/AreaDeepSection.tsx
- **Commit:** ad72856

**2. [Note] Two hardcoded Portuguese strings in AreaDeepSection**

- The eyebrow "Áreas de atuação" and title "Oito frentes de especialização aplicada." are hardcoded as specified in the plan ("a simple eyebrow... and title sourced from expertisePage or a simple '...' heading"). These are section labels, not body copy.

## Known Stubs

None — all 8 areas fully rendered from real content in inner-pages.ts.

## Self-Check: PASSED
