---
phase: "01-foundation"
plan: "03"
subsystem: "root-layout"
tags: ["fonts", "next/font", "htaccess", "metadata", "animation"]
dependency_graph:
  requires: ["01-01", "01-02"]
  provides: ["font-variables", "root-layout", "htaccess", "animation-provider"]
  affects: ["all-pages", "phase-2-components", "phase-5-seo"]
tech_stack:
  added: ["motion/react LazyMotion", "Inter next/font", "Cormorant_Garamond next/font"]
  patterns: ["next/font/google variable pattern", "@theme inline font reference", "AnimationProvider LazyMotion domAnimation"]
key_files:
  created:
    - "src/app/layout.tsx"
    - "src/components/providers/AnimationProvider.tsx"
    - "src/styles/globals.css"
    - "public/.htaccess"
  modified: []
decisions:
  - "globals.css created in this plan (src/styles/) because layout.tsx imports @/styles/globals.css and both plans are wave 2 parallel — full token parity with Plan 01-02 spec"
  - "AnimationProvider uses LazyMotion + domAnimation from motion/react for bundle-size optimization"
metrics:
  duration: "12 min"
  completed_date: "2026-04-11"
  tasks_completed: 2
  files_changed: 4
---

# Phase 01 Plan 03: Root Layout, Fonts, lang, Metadata, .htaccess Summary

**One-liner:** Root layout wired with Inter + Cormorant Garamond via next/font/google, lang=pt-BR, metadataBase, AnimationProvider, and Apache .htaccess with HTTPS redirect and SPA fallback.

---

## What Was Built

### Task 1: Root layout.tsx with fonts, lang, metadata, AnimationProvider

**Files created/modified:**
- `src/app/layout.tsx` — Replaced default create-next-app layout with Kolabore layout
- `src/components/providers/AnimationProvider.tsx` — LazyMotion wrapper for Motion bundle optimization
- `src/styles/globals.css` — Tailwind v4 design tokens + @theme inline font references

**Key implementation details:**
- `Inter({ variable: "--font-inter", subsets: ["latin", "latin-ext"], display: "swap" })`
- `Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["300","400","500","600"], style: ["normal","italic"], display: "swap" })`
- Font variables applied on `<html>` via `className={\`${inter.variable} ${cormorant.variable}\`}`
- `lang="pt-BR"` on the `<html>` element
- `metadataBase: new URL("https://kolabore.com.br")` for correct OG image URL resolution in Phase 5
- `AnimationProvider` wraps children with `LazyMotion features={domAnimation}` — tree-shakes unused Motion features

**Font variable contract (layout.tsx ↔ globals.css):**
- `--font-inter` → referenced as `var(--font-inter)` in `@theme inline { --font-sans: ... }`
- `--font-cormorant` → referenced as `var(--font-cormorant)` in `@theme inline { --font-display: ... }`

### Task 2: public/.htaccess with HTTPS redirect and SPA fallback

**File created:** `public/.htaccess`

**Rules implemented:**
- `Options -Indexes` — prevents directory listing
- HTTPS redirect: `RewriteCond %{HTTPS} off` → `RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]`
- SPA fallback: `RewriteCond %{REQUEST_FILENAME} !-f/!-d/!-l` → `RewriteRule . /index.html [L]`
- Source in `public/` — next build copies to `out/.htaccess` automatically on every rebuild

**Verified:** `out/.htaccess` present after `npm run build` with correct HTTPS and REQUEST_FILENAME rules.

---

## Verification Results

All success criteria passed:

| Criterion | Status |
|-----------|--------|
| `lang="pt-BR"` on `<html>` | PASS |
| `Inter({ variable: "--font-inter" })` | PASS |
| `Cormorant_Garamond({ variable: "--font-cormorant" })` | PASS |
| Font variable names match `@theme inline` in globals.css | PASS |
| `metadataBase: new URL("https://kolabore.com.br")` | PASS |
| `AnimationProvider` wrapping children | PASS |
| `public/.htaccess` has HTTPS redirect + SPA fallback | PASS |
| `out/.htaccess` present after `npm run build` | PASS |
| No `fonts.googleapis.com` in `out/` output | PASS |
| `npm run build` exits 0 | PASS |

---

## Deviations from Plan

### Auto-added: src/styles/globals.css (same content as Plan 01-02)

**Found during:** Task 1 setup

**Issue:** `src/app/layout.tsx` imports `@/styles/globals.css` but `src/styles/` directory did not exist. Plan 01-02 creates this file but runs in parallel (same wave 2). The build would fail without this file.

**Fix:** Created `src/styles/globals.css` with the same Tailwind v4 design tokens specified in Plan 01-02 (brand colors, type scale, spacing, radius, @theme inline font references). This is not duplication — both plans specify the same content. The orchestrator merge will produce a single clean file.

**Rule applied:** Rule 3 (auto-fix blocking issue — missing file prevents build)

**Files modified:** `src/styles/globals.css` (created)

**Commit:** 344c053

---

## Known Stubs

None. This plan delivers infrastructure (fonts, layout, .htaccess) with no UI content stubs.

---

## Self-Check: PASSED

- `src/app/layout.tsx` exists: FOUND
- `src/components/providers/AnimationProvider.tsx` exists: FOUND
- `src/styles/globals.css` exists: FOUND
- `public/.htaccess` exists: FOUND
- `out/.htaccess` exists after build: FOUND
- Commit 344c053 exists: FOUND
- Commit fc1444c exists: FOUND
