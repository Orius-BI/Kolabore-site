---
phase: 01-foundation
plan: 01
subsystem: infra
tags: [nextjs, typescript, tailwindcss, static-export, next-image-export-optimizer, motion]

requires: []
provides:
  - Next.js 16.2.3 project scaffold with App Router and TypeScript
  - Static export configuration (output: export, trailingSlash: true)
  - next-image-export-optimizer wired as custom image loader before any <Image> usage
  - Working npm run build that produces out/ directory
  - Tailwind CSS v4 with @tailwindcss/postcss PostCSS integration
  - motion 12.38.0 installed for Phase 2+ animations
affects: [all subsequent plans — every plan depends on this build pipeline]

tech-stack:
  added:
    - "next 16.2.3 (App Router, static export)"
    - "typescript 5.x (bundled with Next.js)"
    - "tailwindcss 4.2.2 + @tailwindcss/postcss (v4 PostCSS plugin)"
    - "next-image-export-optimizer 1.20.1 (WebP/srcset for static export)"
    - "motion 12.38.0 (LazyMotion animations)"
  patterns:
    - "loader: custom in next.config.ts — all <Image> usages must import from next-image-export-optimizer, never next/image"
    - "output: export + trailingSlash: true — canonical config for Hostinger shared hosting"
    - "next-image-export-optimizer postfix step runs after next build via && chaining in scripts.build"

key-files:
  created:
    - "next.config.ts — static export config with all 7 optimizer env vars"
    - "package.json — project manifest with build script postfix"
    - "postcss.config.mjs — Tailwind v4 PostCSS integration"
    - "tsconfig.json — TypeScript config with strict mode and @/* alias"
    - ".gitignore — excludes node_modules, out/, .next/"
    - "src/app/page.tsx — placeholder homepage (no next/image usage)"
    - "src/app/layout.tsx — root layout from create-next-app"
    - "public/images/ — image folder wired to next-image-export-optimizer"
  modified: []

key-decisions:
  - "Replaced default create-next-app page.tsx (which used next/image) with a plain placeholder — required because loader: custom is set and next/image breaks with custom loader"
  - "Used temporary directory workaround for create-next-app because Kolabore-site directory name has capital letters which npm rejects as a package name"
  - "Added .gitignore before first commit to exclude node_modules, out/, and .next/ from version control"

patterns-established:
  - "Pattern: All <Image> components in this project MUST import from next-image-export-optimizer, not next/image"
  - "Pattern: npm run build = next build && next-image-export-optimizer (postfix always runs)"
  - "Pattern: output: export is the project-wide constraint — no server-side features allowed"

requirements-completed: [FOUND-01, FOUND-04]

duration: 20min
completed: 2026-04-12
---

# Phase 1, Plan 01: Bootstrap + Static Export Configuration Summary

**Next.js 16.2.3 with output: export, trailingSlash: true, and next-image-export-optimizer 1.20.1 wired as custom image loader — npm run build produces out/ with index.html**

## Performance

- **Duration:** ~20 min
- **Started:** 2026-04-12T01:53:09Z
- **Completed:** 2026-04-12T02:13:00Z
- **Tasks:** 2
- **Files modified:** 10

## Accomplishments

- Bootstrapped Next.js 16.2.3 project with TypeScript, Tailwind CSS v4, ESLint, App Router, src-dir layout
- Installed next-image-export-optimizer 1.20.1 and motion 12.38.0
- Configured next.config.ts with output: export, trailingSlash: true, loader: custom, transpilePackages, and all 7 nextImageExportOptimizer_* env vars
- Updated package.json build script to run next-image-export-optimizer postfix step after next build
- Verified npm run build exits 0, produces out/, and next-image-export-optimizer postfix step confirms running in build log

## Task Commits

Each task was committed atomically:

1. **Task 1: Bootstrap Next.js project and install all dependencies** - `6d88265` (feat)
2. **Task 2: Configure next.config.ts for static export with next-image-export-optimizer** - `3eefb3a` (feat)

## Files Created/Modified

- `next.config.ts` — Static export config: output: export, trailingSlash: true, loader: custom, transpilePackages, 7 env vars for next-image-export-optimizer
- `package.json` — Project manifest; build script: "next build && next-image-export-optimizer"
- `postcss.config.mjs` — Tailwind v4 PostCSS integration using @tailwindcss/postcss
- `tsconfig.json` — TypeScript config with strict: true and "@/*": ["./src/*"] path alias
- `.gitignore` — Excludes node_modules/, out/, .next/, next-env.d.ts
- `src/app/page.tsx` — Simplified placeholder homepage (no next/image — respects loader: custom constraint)
- `src/app/layout.tsx` — Root App Router layout from create-next-app scaffold
- `src/app/globals.css` — Tailwind v4 base styles
- `public/images/` — Image source folder wired to next-image-export-optimizer
- `eslint.config.mjs` — ESLint config from create-next-app

## Decisions Made

- **Workaround for capital letters in directory name:** create-next-app rejected "Kolabore-site" as a package name (npm naming restriction). Solution: ran create-next-app in a temp directory then copied all files into the project root.
- **Replaced default page.tsx with plain placeholder:** The default create-next-app page.tsx imports from next/image, which breaks when loader: "custom" is set in next.config.ts. The fix (Rule 1 - Bug) was to replace the default page with a minimal placeholder that uses no images. This is correct behavior for this scaffold plan — real homepage content comes in Phase 2.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed next/image usage in default page.tsx breaking custom loader build**
- **Found during:** Task 2 (Configure next.config.ts)
- **Issue:** Default create-next-app page.tsx imports Image from "next/image" and uses it to render next.svg and vercel.svg. Once `images.loader: "custom"` is set in next.config.ts, this causes a prerender error: "Image with src /next.svg is missing loader prop" — build exits code 1.
- **Fix:** Replaced default page.tsx with a minimal placeholder component containing only an h1 and paragraph — no image components. Real homepage content is out of scope for this scaffold plan.
- **Files modified:** src/app/page.tsx
- **Verification:** npm run build exits 0, out/index.html present
- **Committed in:** 3eefb3a (Task 2 commit)

**2. [Rule 3 - Blocking] create-next-app capital letter workaround**
- **Found during:** Task 1 (Bootstrap)
- **Issue:** create-next-app refuses to initialize in a directory whose name contains capital letters ("Kolabore-site"), citing npm naming restrictions.
- **Fix:** Bootstrapped project in /tmp/kolabore-site, then copied all scaffold files to /c/GitOrius/Kolabore-site. Package name in package.json is "kolabore-site" (lowercase, valid).
- **Files modified:** package.json (name: "kolabore-site")
- **Verification:** All files present in project root, npm install runs cleanly
- **Committed in:** 6d88265 (Task 1 commit)

---

**Total deviations:** 2 auto-fixed (1 bug, 1 blocking)
**Impact on plan:** Both fixes necessary for the plan's primary goal (working build). No scope creep.

## Issues Encountered

- create-next-app npm naming restriction blocked in-place initialization — resolved via temp directory copy workaround
- Default scaffold page used next/image which conflicts with loader: "custom" — resolved by replacing with placeholder

## User Setup Required

None - no external service configuration required for this plan.

## Next Phase Readiness

- Build pipeline is fully operational: npm run build exits 0, produces out/, and next-image-export-optimizer postfix confirmed running
- next.config.ts is locked — output: export, trailingSlash: true, loader: custom are in place before any <Image> component is written
- All packages installed: next 16.2.3, tailwindcss 4.2.2, motion 12.38.0, next-image-export-optimizer 1.20.1
- Phase 1, Plan 02 (design system tokens + Tailwind @theme) can begin immediately
- CONSTRAINT: Any developer writing <Image> must import from 'next-image-export-optimizer', not 'next/image'

---
*Phase: 01-foundation*
*Completed: 2026-04-12*
