---
phase: 02-homepage
plan: "03"
subsystem: homepage-sections
tags: [react, motion, sections, tailwind]
dependency_graph:
  requires: [02-02]
  provides: [ChallengesSection, FormatsSection, SenioritySection]
  affects: [src/app/page.tsx]
tech_stack:
  added: []
  patterns: [whileInView stagger animation, motion/react-m namespace import, Tailwind token utilities]
key_files:
  created:
    - src/components/sections/ChallengesSection.tsx
    - src/components/sections/FormatsSection.tsx
    - src/components/sections/SenioritySection.tsx
  modified:
    - src/app/page.tsx
    - src/components/sections/HeroSection.tsx
    - src/components/sections/AudienceSection.tsx
decisions:
  - Use `import * as m from 'motion/react-m'` (namespace import) — named import `{ m }` does not exist and causes TS error
  - Define variant objects as module-level constants with `ease: 'easeOut' as const` to satisfy Motion's Easing type
metrics:
  duration: "~3 min"
  completed_date: "2026-04-12"
  tasks_completed: 2
  files_created: 3
  files_modified: 3
requirements: [HOME-03, HOME-04, HOME-05, DESIGN-01]
---

# Phase 02 Plan 03: Trust-Building Middle Sections Summary

Three middle-layer sections — ChallengesSection, FormatsSection, SenioritySection — built with whileInView stagger animations on dark/light/carbon backgrounds and wired into page.tsx alongside HeroSection and AudienceSection.

## What Was Built

### ChallengesSection (`src/components/sections/ChallengesSection.tsx`)
- Dark `bg-ink` background, `light={true}` heading (mist title)
- 6 executive challenge questions from `challenges.items` in a 2-column grid
- Each question in a card with gold left-border accent (`border-l-2 border-gold`)
- `whileInView` stagger animation with `containerVariants` / `itemVariants`

### FormatsSection (`src/components/sections/FormatsSection.tsx`)
- Light `bg-mist` background, `light={false}` heading (ink title)
- All 8 engagement format cards sourced from `src/data/formats.ts`
- Section heading copy (title + subtitle) from `src/content/homepage.ts` `formats` constant
- White cards with slate border in 4-column desktop grid
- `whileInView` stagger animation

### SenioritySection (`src/components/sections/SenioritySection.tsx`)
- Carbon `bg-carbon` background, `light={true}` heading (mist title)
- 3 metric proof points: display-size value in `text-gold`, label in `text-mist`, detail in `text-silver`
- Separated by `border-t border-slate` top divider per item
- `whileInView` stagger animation with `viewport.amount: 0.2`

### page.tsx
- Updated to compose all 5 sections: HeroSection → AudienceSection → ChallengesSection → FormatsSection → SenioritySection

## Commits

| Task | Commit | Description |
|------|--------|-------------|
| Task 1 | e64adff | ChallengesSection + FormatsSection + motion import bug fix |
| Task 2 | ec6b37f | SenioritySection + page.tsx wiring |

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed wrong `motion/react-m` import in existing sections**
- **Found during:** Task 1 TypeScript verification
- **Issue:** `HeroSection.tsx` and `AudienceSection.tsx` (from plan 02-02) used `import { m } from 'motion/react-m'` — a named export that does not exist in the module. TypeScript error: `Module '"motion/react-m"' has no exported member 'm'`.
- **Fix:** Changed to `import * as m from 'motion/react-m'` (namespace import) in both pre-existing sections and all new sections in this plan.
- **Files modified:** `src/components/sections/HeroSection.tsx`, `src/components/sections/AudienceSection.tsx`
- **Commit:** e64adff

**2. [Rule 1 - Bug] `ease: 'easeOut' as const` required for TypeScript Variants type**
- **Found during:** Task 1 TypeScript verification
- **Issue:** When `itemVariants` is defined as a module-level constant (as specified in plan), TypeScript infers `ease` as `string` which is incompatible with Motion's `Easing` type. Inline object literals in AudienceSection bypass this via contextual narrowing.
- **Fix:** Added `as const` assertion to ease value: `ease: 'easeOut' as const`.
- **Files modified:** `src/components/sections/ChallengesSection.tsx`, `src/components/sections/FormatsSection.tsx`, `src/components/sections/SenioritySection.tsx`
- **Commit:** e64adff

## Known Stubs

None — all sections render real data from `src/content/homepage.ts` and `src/data/formats.ts`.

## Self-Check: PASSED

- [x] `src/components/sections/ChallengesSection.tsx` — created
- [x] `src/components/sections/FormatsSection.tsx` — created
- [x] `src/components/sections/SenioritySection.tsx` — created
- [x] `src/app/page.tsx` — updated with 5 sections
- [x] Commit e64adff — verified in git log
- [x] Commit ec6b37f — verified in git log
- [x] `npm run build` — exits 0
- [x] `npm run lint` — exits 0
- [x] `npx tsc --noEmit` — exits 0
- [x] No hardcoded hex colors in sections
- [x] All sections use `motion/react-m` namespace import
