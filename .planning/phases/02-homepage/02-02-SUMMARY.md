---
phase: 02-homepage
plan: "02"
subsystem: homepage
tags: [components, ui-primitives, hero, audience, motion, tailwind]
dependency_graph:
  requires:
    - 02-01  # homepage content constants
  provides:
    - Button component (primary/secondary/ghost)
    - SectionHeading component
    - HeroSection (full-viewport hero)
    - AudienceSection (6-block responsive grid)
    - Wired page.tsx
  affects:
    - src/app/page.tsx
    - All future section components (consume Button, SectionHeading)
tech_stack:
  added: []
  patterns:
    - "Client components with 'use client' + motion/react-m for animations"
    - "Content-first: components import from @/content/homepage, no strings in JSX"
    - "Token-only colors: all colors via Tailwind utilities — zero hardcoded hex"
key_files:
  created:
    - src/components/ui/Button.tsx
    - src/components/ui/SectionHeading.tsx
    - src/components/sections/HeroSection.tsx
    - src/components/sections/AudienceSection.tsx
  modified:
    - src/app/page.tsx
decisions:
  - "Button renders as Next.js Link when href is provided, falls back to <button> — single component for both use cases"
  - "HeroSection uses animate (not whileInView) — above the fold, always visible on load"
  - "AudienceSection stagger uses whileInView with once:true — cards animate in on scroll"
metrics:
  duration: "~6 minutes"
  completed_date: "2026-04-12"
  tasks_completed: 2
  files_changed: 5
---

# Phase 2 Plan 2: UI Primitives + Hero & Audience Sections Summary

**One-liner:** Button/SectionHeading primitives and full-viewport HeroSection + AudienceSection grid wired into page.tsx using Framer Motion and Kolabore design tokens.

---

## What Was Built

### Task 1 — Button and SectionHeading UI Primitives

**Button** (`src/components/ui/Button.tsx`):
- Three variants: `primary` (gold background), `secondary` (gold border + transparent), `ghost` (slate border + silver text)
- Two sizes: `sm` and `md` (default)
- Polymorphic: renders as `<Link>` when `href` is provided, `<button>` otherwise
- All colors via Tailwind token utilities — no hardcoded hex values

**SectionHeading** (`src/components/ui/SectionHeading.tsx`):
- Optional eyebrow label (small gold uppercase tag)
- Title rendered as `<h2>` with `font-display text-h2 lg:text-h1`
- Optional subtitle, with auto-centering when `align="center"`
- `light` prop toggles between dark-background (`text-mist`) and light-background (`text-ink`) palettes

### Task 2 — HeroSection, AudienceSection, page.tsx

**HeroSection** (`src/components/sections/HeroSection.tsx`):
- Full-viewport (`min-h-screen bg-ink`) dark section — does NOT use `<Section>` wrapper (needs full viewport control)
- `m.div` with `animate` (above-fold fade + slide-up, 0.7s easeOut)
- Headline from `hero.headline`, subheadline from `hero.subheadline`
- Primary CTA "Converse com a Kolabore" → `/contato` (gold Button)
- Secondary CTA "Conheça nossa atuação" → `/engajamento` (ghost Button)

**AudienceSection** (`src/components/sections/AudienceSection.tsx`):
- Light background (`bg-mist`) section using `<Section>` wrapper
- 6 audience blocks from `audience.blocks` in a `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` grid
- Staggered entrance animation via `whileInView` with `staggerChildren: 0.08`
- Each card: gold top border, ink label, slate description

**page.tsx** (`src/app/page.tsx`):
- Replaced placeholder with `<HeroSection />` + `<AudienceSection />`
- No wrapping `<main>` — root layout already provides it

---

## Verification

- `npx tsc --noEmit` exits 0
- `npm run build` exits 0 — all 9 static pages generated
- `npm run lint` exits 0
- No hardcoded hex values in `src/components/ui/` or `src/components/sections/`
- All motion imports use `motion/react-m` (not bare `motion/react`)
- `<HeroSection>` and `<AudienceSection>` present in `src/app/page.tsx`

---

## Commits

| Task | Commit | Description |
|------|--------|-------------|
| 1 | b4a7ff8 | feat(02-02): add Button and SectionHeading UI primitives |
| 2 | 5132571 | feat(02-02): build HeroSection, AudienceSection and wire into page.tsx |

---

## Deviations from Plan

None — plan executed exactly as written.

---

## Known Stubs

None — both sections consume real copy from `src/content/homepage.ts` (written in plan 02-01). All 6 audience blocks render real content.

---

## Self-Check: PASSED

- `src/components/ui/Button.tsx` — FOUND
- `src/components/ui/SectionHeading.tsx` — FOUND
- `src/components/sections/HeroSection.tsx` — FOUND
- `src/components/sections/AudienceSection.tsx` — FOUND
- `src/app/page.tsx` — FOUND (modified)
- Commit b4a7ff8 — FOUND
- Commit 5132571 — FOUND
