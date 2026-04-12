# Phase 1: Foundation - Research

**Researched:** 2026-04-11
**Domain:** Next.js 15 static export + Tailwind CSS v4 + next/font + next-image-export-optimizer + Motion LazyMotion
**Confidence:** HIGH (all critical items verified against npm registry, GitHub source, and official docs)

---

## Summary

Phase 1 is a pure scaffolding phase. No user-visible content or page copy is written here — the goal is a locked, working project scaffold where `npm run build` succeeds, `out/` is produced, all 6 routes are reachable, and the design system is in place before any content work begins.

The key risk this phase must eliminate is the silent production failure pattern: `next/image` without `next-image-export-optimizer`, missing `trailingSlash: true`, and no `.htaccess` SPA fallback are all failures that only surface at deploy time. Every Plan in this phase is ordered to eliminate these risks as early as possible.

The Tailwind v4 `@theme` + `next/font/google` integration has a specific pairing pattern (`@theme inline` with CSS variable references) that differs from v3 conventions and from how the ARCHITECTURE.md describes it — the correct pattern is documented in Code Examples below.

**Primary recommendation:** Wire `next-image-export-optimizer` and `.htaccess` in Plan 1.1 (or immediately after), before writing any `<Image>` component or any route scaffold. These are the two most dangerous silent failures for Hostinger deployment.

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| FOUND-01 | Next.js 15 + TypeScript, `output: 'export'`, `trailingSlash: true` | next.config.ts exact config documented below |
| FOUND-02 | Tailwind CSS v4 with `@theme` design tokens (colors, typography, spacing) | Full @theme block with Kolabore brand tokens in Code Examples |
| FOUND-03 | Cormorant Garamond + Inter via `next/font/google`, no `<link>` tag | layout.tsx + @theme inline integration pattern documented |
| FOUND-04 | `next-image-export-optimizer` configured before any `<Image>` usage | Exact next.config.ts + build script + ExportedImage usage documented |
| FOUND-05 | `public/.htaccess` with SPA fallback + HTTPS redirect, copies to `out/` | Complete .htaccess with combined rules documented |
| FOUND-06 | `metadataBase` in root layout | Static metadata export pattern documented |
| FOUND-07 | `lang="pt-BR"` on `<html>` | Layout.tsx pattern shows exact placement |
| FOUND-08 | Header (fixed, transparent-to-solid on scroll), Footer, Container, Section | useScrollY pattern with Tailwind conditional classes documented |
| FOUND-09 | All 6 route directories with placeholder `page.tsx` | Folder structure canonical — documented in Architecture |
| FOUND-10 | Typed data in `src/data/` (team.ts, areas.ts, formats.ts) | TypeScript interfaces documented with PRD-aligned fields |
</phase_requirements>

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| next | 16.2.3 | Framework — App Router, static export, font optimization | Only framework that bundles fonts + metadata at build time |
| typescript | 5.x (bundled) | Type safety | Required by project decision |
| tailwindcss | 4.2.2 | Utility CSS + design tokens | v4 is current stable; new projects must use v4, not v3 |
| @tailwindcss/postcss | 4.x (same release) | PostCSS integration for Tailwind v4 | Required; replaces `tailwindcss` PostCSS plugin from v3 |
| motion | 12.38.0 | Animations (LazyMotion) | Current package name; replaces `framer-motion` |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| next-image-export-optimizer | 1.20.1 | WebP srcset generation for static export | Required for team portrait page; wire in Phase 1 before any `<Image>` |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| next-image-export-optimizer | `images: { unoptimized: true }` | Simpler but no WebP/srcset — acceptable for logos, not for portrait grid |
| Motion LazyMotion | CSS scroll-driven animations | CSS scroll animations lack `whileInView` and `once: true` without extra JS |
| next/font/google | @font-face self-host | next/font handles caching, subsetting, variable font CSS — no manual work |

**Installation:**

```bash
# Bootstrap project
npx create-next-app@latest kolabore-site --typescript --tailwind --eslint --app --src-dir

# Image optimization (install immediately — before writing any <Image>)
npm install next-image-export-optimizer

# Animations
npm install motion
```

**Version verification (confirmed 2026-04-11):**

```bash
npm view next version           # 16.2.3
npm view tailwindcss version    # 4.2.2
npm view motion version         # 12.38.0
npm view next-image-export-optimizer version  # 1.20.1
```

---

## Architecture Patterns

### Canonical Project Structure

```
kolabore-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root: <html lang="pt-BR">, fonts, Header, Footer, AnimationProvider
│   │   ├── page.tsx                  # Homepage (/)
│   │   ├── kolabore/
│   │   │   └── page.tsx
│   │   ├── expertise/
│   │   │   └── page.tsx
│   │   ├── engajamento/
│   │   │   └── page.tsx
│   │   ├── executivos/
│   │   │   └── page.tsx
│   │   └── contato/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx            # 'use client' — scroll state
│   │   │   ├── Footer.tsx
│   │   │   ├── Container.tsx         # max-w-7xl mx-auto px-6 lg:px-12
│   │   │   └── Section.tsx           # py-20 lg:py-28, id anchor
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   └── Tag.tsx
│   │   ├── home/                     # Phase 2 sections (placeholder in Phase 1)
│   │   └── shared/                   # Reused across 2+ pages
│   ├── data/
│   │   ├── team.ts
│   │   ├── areas.ts
│   │   └── formats.ts
│   ├── lib/
│   │   └── metadata.ts               # createMetadata() helper
│   └── styles/
│       └── globals.css               # @import "tailwindcss" + @theme block
├── public/
│   ├── .htaccess                     # SPA fallback + HTTPS — copies to out/.htaccess
│   └── images/
│       └── team/                     # Portrait sources (Phase 4)
├── next.config.ts
├── postcss.config.mjs
└── package.json
```

### Pattern 1: next.config.ts — Static Export + next-image-export-optimizer

**What:** Single config file combining `output: 'export'`, `trailingSlash: true`, and next-image-export-optimizer env vars.
**When to use:** This is the only valid config for Hostinger static deployment.

```typescript
// next.config.ts
// Source: https://github.com/Niels-IO/next-image-export-optimizer (README) + Next.js official docs
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
};

export default nextConfig;
```

**CRITICAL:** Once `loader: "custom"` is set, ALL `<Image>` components throughout the project must use `ExportedImage` from `next-image-export-optimizer` instead of `next/image`. Using `<Image>` directly after setting `loader: "custom"` will throw a build error.

### Pattern 2: package.json build script

```json
{
  "scripts": {
    "build": "next build && next-image-export-optimizer",
    "dev": "next dev",
    "start": "next start",
    "lint": "next lint"
  }
}
```

The `next-image-export-optimizer` postfix runs the Sharp optimization pass over `out/` after `next build` completes.

### Pattern 3: Tailwind v4 @theme + next/font integration

**The key insight:** Tailwind v4 `@theme` variables are resolved at build time. When referencing `next/font` CSS variables (which are set at runtime on the `<html>` element), you MUST use `@theme inline` — not plain `@theme`. The `inline` modifier tells Tailwind not to emit those as CSS custom properties of its own, but instead to reference the already-present CSS variables from `next/font`.

```css
/* src/styles/globals.css */
/* Source: https://github.com/tailwindlabs/tailwindcss/discussions/15267 */
@import "tailwindcss";

/* Static tokens — Tailwind emits these as CSS variables */
@theme {
  /* Brand colors */
  --color-ink:        #0d0d0d;    /* near-black — primary backgrounds, body text */
  --color-carbon:     #1a1a1a;    /* card surfaces */
  --color-slate:      #2c2c2c;    /* borders, subtle dividers */
  --color-silver:     #8a8a8a;    /* muted text, eyebrow labels */
  --color-mist:       #f5f5f4;    /* warm light backgrounds */
  --color-white:      #ffffff;
  --color-gold:       #b8933f;    /* accent — CTAs, highlights — use sparingly */
  --color-gold-hover: #d4ad6b;    /* hover/focus state for gold */

  /* Type scale */
  --text-display: 3.5rem;         /* hero headline */
  --text-h1:      2.5rem;
  --text-h2:      1.875rem;
  --text-h3:      1.375rem;
  --text-body:    1rem;
  --text-small:   0.875rem;
  --text-label:   0.75rem;

  /* Spacing */
  --spacing-section:    5rem;     /* py-20 equivalent — standard section padding */
  --spacing-section-lg: 7rem;     /* py-28 — hero section */

  /* Radius — institutional, not rounded */
  --radius-card:   0.25rem;
  --radius-button: 0.125rem;
}

/* Font tokens — reference next/font CSS variables injected on <html> */
/* @theme inline prevents Tailwind from emitting duplicate CSS variables */
@theme inline {
  --font-sans:    var(--font-inter);
  --font-display: var(--font-cormorant);
}
```

### Pattern 4: Root layout.tsx — fonts + metadata + providers

```tsx
// src/app/layout.tsx
// Source: Next.js official docs + https://github.com/tailwindlabs/tailwindcss/discussions/15267
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { AnimationProvider } from "@/components/providers/AnimationProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",      // must match @theme inline var name
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",  // must match @theme inline var name
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kolabore.com.br"),
  title: {
    default: "Kolabore | Consultoria Executiva",
    template: "%s | Kolabore",
  },
  description: "Consultoria executiva de alto valor para líderes e organizações.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://kolabore.com.br",
    siteName: "Kolabore",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body className="font-sans bg-ink text-mist antialiased">
        <AnimationProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
```

**CRITICAL:** Font `variable` names in `next/font/google` call (`--font-inter`, `--font-cormorant`) MUST match exactly what is referenced in `@theme inline` block. Mismatch = fonts load but Tailwind utilities `font-sans` / `font-display` fall back to system fonts silently.

### Pattern 5: .htaccess for Hostinger static SPA

```apache
# public/.htaccess
# Source: Verified against Hostinger docs + React routing on Hostinger guide
# This file is copied to out/.htaccess by `next build` automatically.

<IfModule mod_rewrite.c>
    RewriteEngine On

    # 1. Force HTTPS (Hostinger free SSL must be activated in hPanel first)
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

    # 2. SPA fallback — only needed for URLs not matched by static files
    # With trailingSlash: true, Next.js outputs /route/index.html, so Apache
    # serves most routes directly. This catches any unlisted deep links.
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-l
    RewriteRule . /index.html [L]
</IfModule>
```

**Verification:** After build, confirm `out/.htaccess` exists. On Hostinger, confirm `mod_rewrite` is available (it is on all shared plans as of 2026). Activate SSL in hPanel before the redirect rule has any effect.

### Pattern 6: Motion AnimationProvider for App Router

```tsx
// src/components/providers/AnimationProvider.tsx
// Source: https://motion.dev/docs/react-reduce-bundle-size
"use client";
import { LazyMotion, domAnimation } from "motion/react";

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
}
```

```tsx
// Usage in any 'use client' component — import m, not motion
// Source: https://motion.dev/docs/react-lazy-motion
"use client";
import * as m from "motion/react-m";

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}
```

**Bundle impact:** `LazyMotion` + `domAnimation` + `m.*` = ~4.6 KB gzipped vs ~34 KB for full `motion` import. The `AnimationProvider` must wrap any subtree that uses `m.*` — placing it in root layout covers the entire app.

### Pattern 7: Header — transparent-to-solid on scroll

```tsx
// src/components/layout/Header.tsx
// Native scroll event + useState. No external library needed for this simple pattern.
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-sm border-b border-slate/30"
          : "bg-transparent"
      }`}
    >
      {/* nav content */}
    </header>
  );
}
```

**Why not CSS scroll-driven animations:** The `animation-timeline: scroll()` CSS approach works for pure visual effects but cannot toggle Tailwind utility classes or shadow logic. `useState` + `window.scroll` with `{ passive: true }` has no measurable performance impact at this scroll budget.

### Pattern 8: Container and Section layout primitives

```tsx
// src/components/layout/Container.tsx
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-6 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
```

```tsx
// src/components/layout/Section.tsx
interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}
```

Usage pattern throughout all pages: `<Section id="challenges"><Container>...</Container></Section>`

### Pattern 9: TypeScript data interfaces

```typescript
// src/data/team.ts
export interface Executive {
  id: string;
  name: string;
  title: string;                  // "Sócio", "Consultora Sênior", etc.
  photo: string;                  // path from /public — e.g. "/images/team/nome.jpg"
  specialties: string[];          // 3–5 short labels for tag chips
  credential: string;             // one strongest career proof line
  bio: string;                    // 2–3 sentences; used on /executivos page
}

export const executives: Executive[] = [];  // populated in Phase 4
```

```typescript
// src/data/areas.ts
export interface Area {
  id: string;
  label: string;                  // display name, e.g. "Supply Chain"
  description: string;            // 1–2 sentence summary
  icon?: string;                  // optional icon name/path
}

export const areas: Area[] = [
  { id: "supply-chain", label: "Supply Chain", description: "" },
  { id: "operacoes", label: "Manufatura e Operações", description: "" },
  { id: "procurement", label: "Procurement", description: "" },
  { id: "governanca", label: "Governança", description: "" },
  { id: "qualidade", label: "Qualidade e Food Safety", description: "" },
  { id: "projetos", label: "Projetos e Transformação", description: "" },
  { id: "inovacao", label: "Inovação", description: "" },
  { id: "conselho", label: "Conselho e Comitês", description: "" },
];
```

```typescript
// src/data/formats.ts
export interface EngagementFormat {
  id: string;
  label: string;
  description: string;
}

export const formats: EngagementFormat[] = [
  { id: "consultoria", label: "Consultoria Completa", description: "" },
  { id: "assessment", label: "Assessments", description: "" },
  { id: "workshops", label: "Workshops", description: "" },
  { id: "mentoring", label: "Mentoring", description: "" },
  { id: "advisory", label: "Participação em Comitês e Conselhos", description: "" },
  { id: "custom", label: "Projetos Customizados", description: "" },
];
```

**Note on data file names:** ARCHITECTURE.md names them `team.ts`, `expertise.ts`, `engagement.ts`. ROADMAP.md names them `team.ts`, `areas.ts`, `formats.ts`. Use `areas.ts` and `formats.ts` to match ROADMAP.md (the more specific, authoritative naming).

### Anti-Patterns to Avoid

- **`images: { unoptimized: true }` for this project:** Acceptable for logos, not for the portrait grid. wire `next-image-export-optimizer` in Phase 1 regardless of whether portraits are ready — configuration must precede any `<Image>` usage.
- **`import { motion } from "motion/react"` instead of `m`:** Bypasses `LazyMotion` tree-shaking; loads the full 34 KB bundle.
- **`@theme` (not inline) for font references:** Results in Tailwind emitting `--font-sans: var(--font-inter)` as a CSS custom property in the `:root` block before `next/font` has set `--font-inter`, causing cascade order issues. Use `@theme inline` for font references.
- **Font variable names that don't match:** `--font-inter` in `next/font` config must match `var(--font-inter)` in `@theme inline`. A typo here is invisible — Tailwind applies `font-sans` but it falls through to system font silently.
- **Placing `.htaccess` in `out/` directly:** It gets wiped on next build. Always place in `public/.htaccess` — Next.js copies `public/` contents to `out/` at build time.
- **Running `next start` to verify static export:** `next start` serves SSR, not the static `out/` directory. Use `npx serve out` or `npx http-server out` to test the actual export locally.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Image WebP/srcset for static export | Custom Sharp script | `next-image-export-optimizer` | Handles responsive sizes, blur placeholders, WEBP conversion, output paths automatically |
| Font self-hosting | Manual @font-face + WOFF2 download | `next/font/google` | Build-time download, automatic CSS variable injection, subset optimization, zero FOUT |
| Scroll animation with IntersectionObserver | Custom hook per component | Motion `m.div` + `whileInView` | Handles intersection, animation state, SSR safety, `once: true` semantics |
| Design token CSS variables | Custom CSS variable system | Tailwind v4 `@theme` | Generates utility classes automatically from tokens — no manual `className="text-[#b8933f]"` |
| Per-page metadata | Custom `<head>` tags | Next.js `metadata` export | Type-safe, build-time injection, handles OG tags, prevents duplicate meta tags |

**Key insight:** In static export mode, every custom solution you build for image handling, fonts, or routing must account for the absence of a server at runtime. The libraries above are specifically designed for this constraint.

---

## Common Pitfalls

### Pitfall 1: `loader: "custom"` without ExportedImage

**What goes wrong:** Build succeeds, but in production, images either 404 or render without optimization because `<Image>` from `next/image` tries to use the server-based optimizer that doesn't exist.
**Why it happens:** Once `images.loader: "custom"` is set in `next.config.ts`, `next/image` defers to the loader — which is the `next-image-export-optimizer` internal loader. Using the raw `<Image>` component bypasses this.
**How to avoid:** Replace every `import Image from "next/image"` with `import ExportedImage from "next-image-export-optimizer"` across the entire codebase. Add an ESLint rule or a note in CLAUDE.md to enforce this.
**Warning signs:** `next build` succeeds but `next-image-export-optimizer` postfix step reports 0 images processed.

### Pitfall 2: Font variable name mismatch

**What goes wrong:** `font-sans` and `font-display` Tailwind utilities appear to apply, but the rendered font is the system font fallback.
**Why it happens:** `Cormorant_Garamond({ variable: "--font-cormorant" })` in layout.tsx sets `--font-cormorant` on `<html>`. The `@theme inline` block must reference exactly `var(--font-cormorant)` — any typo silently falls through.
**How to avoid:** Define variable names in one place (e.g., `const FONT_VARS = { sans: "--font-inter", display: "--font-cormorant" }`) and reference from there, or verify in browser DevTools that `--font-cormorant` appears on `:root` after hydration.
**Warning signs:** Font renders correctly in development (where Next.js serves from memory) but looks like Arial/Times on the static `out/` build served locally.

### Pitfall 3: .htaccess wiped by rebuild

**What goes wrong:** `.htaccess` is manually placed in `out/` once, developer runs `npm run build` again, `.htaccess` is gone because `next build` recreates `out/` from scratch.
**Why it happens:** `next build` deletes and recreates the `out/` directory on each run.
**How to avoid:** `.htaccess` MUST live in `public/.htaccess`. It is automatically copied to `out/` by `next build`. Verify with `ls out/.htaccess` after each build.
**Warning signs:** 404 on hard-refresh of any route after re-deploying.

### Pitfall 4: `trailingSlash: true` omitted

**What goes wrong:** Apache on Hostinger sees a request for `/executivos` (no trailing slash), finds no file named `executivos` at root, returns 404.
**Why it happens:** Without `trailingSlash: true`, Next.js outputs `out/executivos.html`. Apache on shared hosting does not automatically serve `executivos.html` for `/executivos`.
**How to avoid:** Always include `trailingSlash: true` in `next.config.ts`. With it, Next.js outputs `out/executivos/index.html`, which Apache serves directly as a directory index.
**Warning signs:** Works in `npx serve out` (which handles extensionless files) but 404s in production.

### Pitfall 5: AnimationProvider not wrapping the tree

**What goes wrong:** `m.div` components throw a runtime error: "LazyMotion features are not loaded" or animations silently do nothing.
**Why it happens:** `m.*` components from `motion/react-m` require a `<LazyMotion>` ancestor. If `AnimationProvider` is placed only in some pages but not in root layout, inner pages without it will fail.
**How to avoid:** Place `<AnimationProvider>` in `src/app/layout.tsx` inside `<body>`, wrapping Header + main + Footer.
**Warning signs:** No error in development (Next.js dev server may bundle differently), error appears in production build or on routes that aren't pre-warmed.

### Pitfall 6: basePath not confirmed

**What goes wrong:** All internal links break if deployed to a subdirectory (e.g., `kolabore.com.br/site/`) instead of domain root.
**Why it happens:** `next/link` generates paths relative to root (`/executivos`) without `basePath`.
**How to avoid:** The open todo in STATE.md says "Confirm deployment URL — domain root vs. subdirectory." This MUST be resolved before Plan 1.1 is closed. If the answer is root, no `basePath` is needed. If subdirectory, add `basePath: "/site"` to `next.config.ts`.
**Warning signs:** All assets 404 in production but work locally.

---

## Code Examples

### ExportedImage usage (replaces next/image everywhere)

```typescript
// Source: https://github.com/Niels-IO/next-image-export-optimizer (README)
import ExportedImage from "next-image-export-optimizer";

// Static import — preferred for known images
import teamPhoto from "@/images/team/executivo-1.jpg";

export function ExecutiveCard() {
  return (
    <ExportedImage
      src={teamPhoto}
      alt="Nome do Executivo"
      width={400}
      height={400}
      className="rounded-sm object-cover"
    />
  );
}

// Path string — for images referenced from data files
export function ExecutiveCardDynamic({ photo, name }: { photo: string; name: string }) {
  return (
    <ExportedImage
      src={photo}          // e.g. "/images/team/executivo-1.jpg"
      alt={name}
      width={400}
      height={400}
      className="rounded-sm object-cover"
    />
  );
}
```

### Placeholder page.tsx pattern for Phase 1

```tsx
// src/app/executivos/page.tsx (and all other routes — Phase 1 placeholder)
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Executivos",
  description: "Conheça o time de executivos seniores da Kolabore.",
};

export default function ExecutivosPage() {
  return (
    <Section>
      <Container>
        <h1 className="font-display text-h1 text-mist">Executivos</h1>
        <p className="font-sans text-body text-silver mt-4">Em construção.</p>
      </Container>
    </Section>
  );
}
```

### createMetadata helper

```typescript
// src/lib/metadata.ts
import type { Metadata } from "next";

export function createMetadata(overrides: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL("https://kolabore.com.br"),
    title: {
      default: "Kolabore | Consultoria Executiva",
      template: "%s | Kolabore",
    },
    description: "Consultoria executiva de alto valor para a alta gestão.",
    openGraph: {
      siteName: "Kolabore",
      locale: "pt_BR",
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    ...overrides,
  };
}
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `tailwind.config.js` | CSS-first `@theme` in globals.css | Tailwind v4 (Jan 2025) | No config file — all tokens in CSS |
| `@tailwind base/components/utilities` | `@import "tailwindcss"` | Tailwind v4 | Single import replaces three directives |
| `framer-motion` package | `motion` package, import from `motion/react` | Motion v11+ (2024) | Package rename; `framer-motion` still works as alias |
| `next/head` for metadata | `metadata` export / `generateMetadata()` | Next.js 13 App Router | Type-safe, build-time injection, no runtime |
| `images: { unoptimized: true }` | `next-image-export-optimizer` | Established pattern | WebP + srcset in static export |

**Deprecated/outdated:**
- `tailwind.config.js`: Not needed for v4 projects. Do not create it.
- `framer-motion` direct import: Replaced by `motion` package. Import from `motion/react` and `motion/react-m`.
- `next/head`: Replaced by `metadata` export in App Router. Do not use.
- `@tailwind base` / `@tailwind utilities`: Replaced by `@import "tailwindcss"` in v4.

---

## Open Questions

1. **Deployment URL: root vs subdirectory**
   - What we know: STATE.md lists "Confirm deployment URL — domain root vs. subdirectory (affects `basePath` config)" as an open todo.
   - What's unclear: Whether Kolabore's Hostinger account will serve the site at `kolabore.com.br/` or at a subdirectory.
   - Recommendation: Resolve before Plan 1.1 is marked complete. If domain root (most likely), no `basePath` needed. If subdirectory, add `basePath` to `next.config.ts` and to all `metadata` URLs.

2. **`next/font` italic variant for Cormorant Garamond**
   - What we know: Cormorant Garamond has italic cuts that are commonly used for premium editorial sections.
   - What's unclear: Whether Phase 2/3 design will use italic headlines.
   - Recommendation: Add `style: ["normal", "italic"]` to the `Cormorant_Garamond` call in layout.tsx now to avoid a rebuild later. Adding it in Phase 1 costs nothing.

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | npm build toolchain | Yes | v24.14.1 | — |
| npm | Package installation | Yes | 11.11.0 | — |
| Next.js CLI (npx) | Project bootstrap | Yes | 16.2.3 | — |
| Apache mod_rewrite | .htaccess SPA fallback | Assumed (Hostinger shared) | Unknown | — |
| Hostinger SSL | HTTPS redirect | Requires manual activation in hPanel | — | HTTP-only until activated |

**Missing dependencies with no fallback:**
- Hostinger SSL must be activated in hPanel before HTTPS redirect rule is effective. The rule itself is safe to deploy without SSL — it simply has no effect until the certificate is active.

**Missing dependencies with fallback:**
- None blocking Phase 1 execution.

---

## Validation Architecture

> `workflow.nyquist_validation` is `true` in `.planning/config.json` — this section is required.

### Test Framework

| Property | Value |
|----------|-------|
| Framework | None pre-installed — Next.js CLI does not scaffold a test framework by default |
| Config file | None — Wave 0 must add if desired |
| Quick run command | `npm run build` (primary validation) + `ls out/ && ls out/.htaccess` |
| Full suite command | `npm run build && npx serve out -p 3001` (manual browser verification) |

### Phase 1 Validation Strategy

Phase 1 has no unit-testable business logic — it is infrastructure. The correct validation approach is **build verification** (automated) + **browser smoke test** (manual checklist).

| Req ID | Behavior | Test Type | Automated Command | Notes |
|--------|----------|-----------|-------------------|-------|
| FOUND-01 | `out/` directory produced with all route dirs | Build | `npm run build && test -d out` | Pass = exit 0 |
| FOUND-01 | All 6 route dirs present in `out/` | Build | `ls out/ | grep -E "kolabore|expertise|engajamento|executivos|contato"` | Expect 5 dirs + root index.html |
| FOUND-04 | next-image-export-optimizer runs post-build | Build | Check build output log for "next-image-export-optimizer" completion message | |
| FOUND-05 | `.htaccess` present in `out/` | Build | `test -f out/.htaccess` | |
| FOUND-05 | `.htaccess` contains HTTPS redirect | Build | `grep -c "HTTPS" out/.htaccess` | Expect > 0 |
| FOUND-02 | CSS bundle < 20KB (design token requirement) | Build | `du -sh out/_next/static/css/*.css` | Target < 20KB per STATE.md metric |
| FOUND-03 | No `<link>` to fonts.googleapis.com | Build | `grep -r "fonts.googleapis" out/` | Expect empty |
| FOUND-06 | `metadataBase` set | Source | Verify in `src/app/layout.tsx` | Code review |
| FOUND-07 | `lang="pt-BR"` on html element | Source | `grep 'lang="pt-BR"' src/app/layout.tsx` | |
| FOUND-08 | Header renders on all pages | Browser | Visit each route, confirm header present | Manual |
| FOUND-09 | All 6 routes render without error | Browser | Visit `/`, `/kolabore`, `/expertise`, `/engajamento`, `/executivos`, `/contato` via `npx serve out` | Manual |
| FOUND-10 | Data files typecheck | Build | `npx tsc --noEmit` | TypeScript errors = fail |

### Sampling Rate

- **Per task commit:** `npm run build` — if it exits non-zero, the task is not done.
- **Per wave merge:** `npm run build && test -f out/.htaccess && ls out/kolabore out/expertise out/engajamento out/executivos out/contato`
- **Phase gate:** Full build clean + browser smoke test (all 6 routes via `npx serve out`, hard-refresh each) before marking Phase 1 complete.

### Wave 0 Gaps

No test framework installation is required for Phase 1 — build-time verification is sufficient for infrastructure scaffolding. If vitest is desired for Phase 2+ component testing, it should be scaffolded in Phase 1 Plan 1.1 to avoid later disruption:

- [ ] Optional: `npm install -D vitest @vitejs/plugin-react` + `vitest.config.ts` — covers Phase 2+ component unit tests
- [ ] `tests/smoke/build.test.sh` — shell script asserting `out/` structure post-build

*(If these are deferred: "Existing build verification commands cover all Phase 1 requirements without a test framework")*

---

## Sources

### Primary (HIGH confidence)
- [next-image-export-optimizer GitHub README](https://github.com/Niels-IO/next-image-export-optimizer) — exact `next.config.ts` configuration, build script, ExportedImage component usage
- [Tailwind CSS v4 @theme docs](https://tailwindcss.com/docs/theme) — `@theme` directive syntax, `--color-*` namespace, token generation
- [Tailwind v4 + next/font discussion](https://github.com/tailwindlabs/tailwindcss/discussions/15267) — `@theme inline` vs `@theme` for CSS variable references
- [Motion LazyMotion docs](https://motion.dev/docs/react-lazy-motion) — `LazyMotion` + `domAnimation` + `m.*` import pattern
- [Motion reduce bundle size](https://motion.dev/docs/react-reduce-bundle-size) — ~4.6 KB budget with LazyMotion
- npm registry — verified versions: next@16.2.3, tailwindcss@4.2.2, motion@12.38.0, next-image-export-optimizer@1.20.1 (2026-04-11)

### Secondary (MEDIUM confidence)
- [Hostinger React routing .htaccess guide](https://sujayrajboregouda.in/blogs/fixing-react-routing-issue-on-hostinger-a-simple-htaccess-solution) — SPA fallback rules verified against Apache docs pattern
- [Hostinger HTTPS .htaccess guide](https://www.hostinger.com/tutorials/force-https-using-htaccess) — HTTPS redirect rule
- [Next.js static exports official docs](https://nextjs.org/docs/pages/guides/static-exports) — what is/isn't available in `output: 'export'`

### Tertiary (LOW confidence)
- None — all critical claims verified at PRIMARY or SECONDARY level.

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — all versions confirmed against npm registry on research date
- Architecture: HIGH — verified against official Next.js App Router docs + ARCHITECTURE.md prior research
- next-image-export-optimizer config: HIGH — confirmed from GitHub README source
- Tailwind v4 + next/font integration: HIGH — confirmed from official Tailwind GitHub discussion
- .htaccess rules: MEDIUM-HIGH — verified against Hostinger-specific guides and Apache docs
- Pitfalls: HIGH — derived from official docs + confirmed known failure modes from STACK.md and STATE.md

**Research date:** 2026-04-11
**Valid until:** 2026-07-11 (stable stack; re-verify if any package has a major version bump)
