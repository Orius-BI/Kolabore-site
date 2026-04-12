---
phase: 02-homepage
plan: "04"
subsystem: ui
tags: [react, formspree, motion, tailwind, next.js, typescript]

# Dependency graph
requires:
  - phase: 02-02
    provides: Button and SectionHeading UI primitives, HeroSection, AudienceSection
  - phase: 02-03
    provides: ChallengesSection, FormatsSection, SenioritySection
provides:
  - TeamPreviewSection with Phase 4 empty-state gate (returns null when executives is empty)
  - AreasSection with staggered motion card grid rendering all 8 areas from areas.ts
  - ContactSection with Formspree integration, honeypot, success state, field-level errors
  - page.tsx fully composed with all 8 sections in commercial journey order
affects:
  - 02-05-animations
  - phase-04-executivos
  - phase-05-launch

# Tech tracking
tech-stack:
  added:
    - "@formspree/react@^3.0.0 — contact form state management (useForm, ValidationError)"
  patterns:
    - "Phase gate pattern: components return null when data is empty rather than rendering empty shells"
    - "Formspree formId: use placeholder fallback so static prerender does not throw"
    - "motion/react-m: import as * as m (not named export) — matches existing section pattern"
    - "SubmissionError type: check state.errors !== null, not state.errors.length (no .length property)"

key-files:
  created:
    - src/components/sections/TeamPreviewSection.tsx
    - src/components/sections/AreasSection.tsx
    - src/components/sections/ContactSection.tsx
  modified:
    - src/app/page.tsx
    - package.json
    - package-lock.json

key-decisions:
  - "ContactSection uses placeholder formId fallback to survive static prerender when NEXT_PUBLIC_FORMSPREE_ID is unset"
  - "TeamPreviewSection returns null for empty executives — credibility over empty placeholder cards"

patterns-established:
  - "Phase gate: return null early when data array is empty (prevents empty UI from shipping)"
  - "Formspree formId graceful fallback for static builds without env vars"

requirements-completed:
  - HOME-07
  - HOME-08
  - DESIGN-01
  - DESIGN-03

# Metrics
duration: 5min
completed: 2026-04-12
---

# Phase 2 Plan 04: Homepage Sections 6-8 + Full Page Composition Summary

**Formspree contact form with honeypot/success state + 8-area card grid + Phase 4 gated team preview, composing the complete homepage with all 8 sections in commercial journey order.**

## Performance

- **Duration:** ~5 min
- **Started:** 2026-04-12T19:32:24Z
- **Completed:** 2026-04-12T19:37:16Z
- **Tasks:** 2
- **Files modified:** 6

## Accomplishments

- TeamPreviewSection returns null when executives.length === 0 (Phase 4 content gate prevents empty credibility-destroying shell)
- AreasSection renders all 8 areas from areas.ts in a staggered 4-col card grid using motion/react-m
- ContactSection integrates @formspree/react with honeypot, inline success confirmation, field-level ValidationError components, and Portuguese labels from homepage.ts
- page.tsx composes all 8 sections in commercial journey order; build and lint pass

## Task Commits

1. **Task 1: Install @formspree/react, build TeamPreviewSection and AreasSection** - `4fb68d9` (feat)
2. **Task 2: Build ContactSection and complete page.tsx with all 8 sections** - `033c206` (feat)

## Files Created/Modified

- `src/components/sections/TeamPreviewSection.tsx` — Empty-state gated team preview; renders null until Phase 4 adds executives
- `src/components/sections/AreasSection.tsx` — Staggered motion card grid for 8 areas from areas.ts
- `src/components/sections/ContactSection.tsx` — Formspree form with honeypot, success inline state, field errors
- `src/app/page.tsx` — Full homepage composition: HeroSection → AudienceSection → ChallengesSection → FormatsSection → SenioritySection → TeamPreviewSection → AreasSection → ContactSection
- `package.json` / `package-lock.json` — Added @formspree/react@^3.0.0

## Decisions Made

- **ContactSection formId fallback**: Static prerender with empty NEXT_PUBLIC_FORMSPREE_ID caused `useForm("")` to throw. Fix: `process.env.NEXT_PUBLIC_FORMSPREE_ID ?? 'placeholder'` — the form will simply fail to submit at runtime until the real ID is set, which is the correct behavior (Formspree endpoint is a known blocker listed in STATE.md).
- **TeamPreviewSection phase gate**: Returning null is the right behavior per RESEARCH.md Pattern 7. An empty team section actively harms trust; invisible is better than empty.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed motion import — named export `m` doesn't exist in motion/react-m**
- **Found during:** Task 1 (AreasSection)
- **Issue:** Plan specified `import { m } from 'motion/react-m'` but the module only supports `import * as m from 'motion/react-m'` (matches all existing section components)
- **Fix:** Changed to `import * as m from 'motion/react-m'` (namespace import)
- **Files modified:** src/components/sections/AreasSection.tsx
- **Verification:** TypeScript type check passed
- **Committed in:** 4fb68d9 (Task 1 commit)

**2. [Rule 1 - Bug] Fixed `state.errors.length` — SubmissionError has no `.length` property**
- **Found during:** Task 2 (ContactSection)
- **Issue:** Plan specified `state.errors && state.errors.length > 0` but `state.errors` is a `SubmissionError` class instance, not an array — no `.length` property exists
- **Fix:** Changed condition to `state.errors !== null`
- **Files modified:** src/components/sections/ContactSection.tsx
- **Verification:** TypeScript type check passed
- **Committed in:** 033c206 (Task 2 commit)

**3. [Rule 1 - Bug] Fixed `useForm("")` throwing during static prerender**
- **Found during:** Task 2 (ContactSection build)
- **Issue:** When NEXT_PUBLIC_FORMSPREE_ID is unset, `formId` was `''` which caused `useForm` to throw synchronously during Next.js static generation of `/`
- **Fix:** Changed fallback from `''` to `'placeholder'` so useForm initializes without error; form will submit to invalid endpoint at runtime (expected — env var must be set before launch)
- **Files modified:** src/components/sections/ContactSection.tsx
- **Verification:** `npm run build` exits 0
- **Committed in:** 033c206 (Task 2 commit)

---

**Total deviations:** 3 auto-fixed (3 Rule 1 bugs)
**Impact on plan:** All fixes required for TypeScript correctness and successful build. No scope creep. Plan intent preserved exactly.

## Issues Encountered

- `@formspree/react` v3 uses a class-based `SubmissionError` type rather than the array the plan assumed. The ValidationError component API is unchanged; only the general error display logic required adjustment.

## User Setup Required

**External services require manual configuration before the contact form will function:**

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form in the Formspree dashboard → set notification email to the client's address
3. Copy the form ID (e.g. `xpwzabcd`)
4. Set `NEXT_PUBLIC_FORMSPREE_ID=xpwzabcd` in your `.env.local` (dev) and in the build environment (production)

Until the env var is set, the form renders correctly but submissions will fail with a 404.

## Known Stubs

None. All data is wired from live sources (areas.ts, team.ts, homepage.ts). ContactSection reads from NEXT_PUBLIC_FORMSPREE_ID which is a known external dependency blocker, not a stub.

## Next Phase Readiness

- All 8 homepage sections are composed and the full page builds cleanly
- Plan 2.5 (scroll animations) can proceed immediately — all components are client-side and motion-ready
- Formspree endpoint must be created before Phase 5 launch testing
- TeamPreviewSection is ready for Phase 4 population — the gate logic is in place

---
*Phase: 02-homepage*
*Completed: 2026-04-12*
