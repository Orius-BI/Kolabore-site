# Architecture: Kolabore Institutional Website

**Project:** Kolabore — consultoria executiva premium  
**Researched:** 2026-04-11  
**Stack:** Next.js 15, App Router, TypeScript, Tailwind CSS v4, static export  
**Confidence:** HIGH (official docs verified, patterns confirmed across multiple sources)

---

## Decision Summary

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Router | App Router | Current standard; Pages Router is in maintenance mode |
| Source layout | `src/` wrapper | Separates app code from root config files cleanly |
| Component model | Hybrid flat/feature | 5 pages don't justify deep feature folders; sections get own folder |
| Content layer | TypeScript constants in `src/data/` | No blog, no editors, no CMS needed; type safety for free |
| Image optimization | `next-image-export-optimizer` | Real WebP/srcset optimization without a server; worth the setup cost |
| Tailwind config | CSS-first `@theme` in `globals.css` | Tailwind v4 default; no `tailwind.config.js` needed |
| URL language | English slugs (`/expertise`, `/engajamento`) | Mixed — keep brand names in Portuguese, technical terms in English |
| Contact form | Formspree | Works with static export, no backend, free tier sufficient |

---

## Folder Structure

This is the canonical scaffold. Every folder and file has a specific reason to exist.

```
kolabore-site/
├── src/
│   ├── app/                          # Next.js App Router routes
│   │   ├── layout.tsx                # Root layout: <html>, fonts, Header, Footer
│   │   ├── page.tsx                  # Homepage (/)
│   │   ├── kolabore/
│   │   │   └── page.tsx              # /kolabore — About/institutional
│   │   ├── expertise/
│   │   │   └── page.tsx              # /expertise — What we solve
│   │   ├── engajamento/
│   │   │   └── page.tsx              # /engajamento — How we work
│   │   ├── executivos/
│   │   │   └── page.tsx              # /executivos — Team page
│   │   └── contato/
│   │       └── page.tsx              # /contato — Contact form
│   │
│   ├── components/
│   │   ├── layout/                   # Global structural components
│   │   │   ├── Header.tsx            # Fixed nav with logo + links
│   │   │   ├── Footer.tsx            # Footer with contact info
│   │   │   ├── Container.tsx         # Max-width centered wrapper
│   │   │   └── Section.tsx           # Section wrapper (padding, id anchor)
│   │   │
│   │   ├── ui/                       # Reusable design primitives
│   │   │   ├── Button.tsx            # CTA button variants (primary, ghost)
│   │   │   ├── Tag.tsx               # Specialty/label tag chip
│   │   │   ├── SectionHeading.tsx    # Eyebrow + h2 + optional subtitle
│   │   │   └── Divider.tsx           # Visual separator
│   │   │
│   │   ├── home/                     # Homepage-specific sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AudienceSection.tsx   # "Quem apoiamos"
│   │   │   ├── ChallengesSection.tsx # "O que resolvemos"
│   │   │   ├── FormatsSection.tsx    # "Como atuamos"
│   │   │   ├── SenioritySection.tsx  # Stats/credentials bar
│   │   │   ├── TeamPreviewSection.tsx # Short team grid
│   │   │   ├── ExpertiseSection.tsx  # Areas cards
│   │   │   ├── EngagementSection.tsx # Engagement models
│   │   │   └── ContactSection.tsx    # Homepage CTA + mini form
│   │   │
│   │   └── shared/                   # Components used on 2+ pages
│   │       ├── TeamCard.tsx          # Executive card (photo + bio)
│   │       ├── AreaCard.tsx          # Expertise area card
│   │       └── ContactForm.tsx       # Full contact form (reused on /contato)
│   │
│   ├── data/                         # All site content as typed TS constants
│   │   ├── team.ts                   # Executive bios, photos, specialties
│   │   ├── expertise.ts              # Areas of expertise
│   │   ├── engagement.ts             # Engagement models/formats
│   │   ├── challenges.ts             # Problem areas (homepage cards)
│   │   └── site.ts                   # Nav links, footer info, SEO defaults
│   │
│   ├── lib/                          # Utilities and helpers
│   │   └── metadata.ts               # generateMetadata helper for each page
│   │
│   └── styles/
│       └── globals.css               # Tailwind import + @theme design tokens
│
├── public/
│   ├── images/
│   │   ├── team/                     # Executive photos (pre-optimized JPG/WebP)
│   │   │   ├── executivo-1.jpg
│   │   │   └── executivo-2.jpg
│   │   ├── logos/                    # Client logos, brand marks
│   │   └── og/                       # Open Graph images per page
│   └── favicon.ico
│
├── next.config.ts                    # output: "export", image loader config
├── tsconfig.json
└── package.json
```

---

## Content Data Layer

### Decision: TypeScript constants in `src/data/`

**Rejected options:**

- **MDX + Contentlayer** — Contentlayer has been unmaintained since mid-2024 (archived repository). MDX is justified when content authors need to write markdown, or when you have blog posts. This site has neither.
- **JSON files** — Lose TypeScript types and IDE autocomplete. No benefit over `.ts` files for a static site.
- **Headless CMS (Sanity, Contentful)** — Overkill. The brief says Claude writes all copy. There are no editors who need a UI.

**Use TypeScript constants.** Define interfaces, export typed arrays. The executor writes content directly into `.ts` files.

```typescript
// src/data/team.ts
export interface Executive {
  id: string;
  name: string;
  title: string;
  photo: string;           // path relative to /public/images/team/
  specialties: string[];   // 3–5 short labels
  credential: string;      // one strong career line
  bio: string;             // 2–3 sentences for /executivos page
}

export const executives: Executive[] = [
  {
    id: "joao-silva",
    name: "João Silva",
    title: "Sócio",
    photo: "/images/team/joao-silva.jpg",
    specialties: ["Supply Chain", "Governança", "Transformação"],
    credential: "Ex-VP de Operações, Ambev",
    bio: "...",
  },
];
```

```typescript
// src/data/site.ts
export const siteConfig = {
  name: "Kolabore",
  tagline: "Transformação de negócio com senioridade executiva",
  description: "Apoiamos líderes e acionistas em desafios críticos...",
  email: "contato@kolabore.com.br",
  phone: "+55 11 9xxxx-xxxx",
  nav: [
    { label: "Kolabore", href: "/kolabore" },
    { label: "Expertise", href: "/expertise" },
    { label: "Engajamento", href: "/engajamento" },
    { label: "Executivos", href: "/executivos" },
    { label: "Contato", href: "/contato" },
  ],
};
```

---

## Component Granularity

### Homepage: One component per section

The homepage has 9 sections. Each gets its own file in `src/components/home/`. Rationale:

- Sections are visually and semantically independent.
- Each section reads from its own data source (`challenges.ts`, `team.ts`, etc.).
- File length stays under 150 lines per component.
- Easy to disable/reorder sections by editing `app/page.tsx`.

```typescript
// src/app/page.tsx
import HeroSection from "@/components/home/HeroSection";
import AudienceSection from "@/components/home/AudienceSection";
// ...

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AudienceSection />
      <ChallengesSection />
      <FormatsSection />
      <SenioritySection />
      <TeamPreviewSection />
      <ExpertiseSection />
      <EngagementSection />
      <ContactSection />
    </>
  );
}
```

### Shared vs page-specific

| Component | Location | Reason |
|-----------|----------|--------|
| `TeamCard` | `shared/` | Used on homepage preview + full `/executivos` page |
| `AreaCard` | `shared/` | Used on homepage + `/expertise` page |
| `ContactForm` | `shared/` | Used in homepage `ContactSection` + `/contato` page |
| `HeroSection` | `home/` | Only on homepage; no reason to generalize |
| `SenioritySection` | `home/` | Unique stats block, homepage only |

### Layout abstraction

Keep these two layout primitives. They prevent padding/width inconsistency across all pages.

```typescript
// src/components/layout/Container.tsx
// Applies: max-w-7xl mx-auto px-6 lg:px-12
export function Container({ children, className }: ContainerProps) { ... }

// src/components/layout/Section.tsx
// Applies: py-20 lg:py-28, accepts an id prop for anchor links
export function Section({ id, children, className }: SectionProps) { ... }
```

Every page section uses: `<Section id="challenges"><Container>...</Container></Section>`

---

## Image Handling

### Static export constraint

With `output: "export"`, Next.js built-in image optimization (which relies on a server) is unavailable. Two valid approaches:

**Option A — `unoptimized: true` (simple, lower performance)**
Add `images: { unoptimized: true }` to `next.config.ts`. Images served as-is. No WebP, no srcset. Acceptable if team photos are pre-optimized manually before adding to the repo.

**Option B — `next-image-export-optimizer` (recommended)**
Adds a post-build step that generates responsive WebP srcsets from source images. Requires replacing `<Image>` with `<ExportedImage>` from the package. Worth it for team photo pages where 6–10 high-res portraits will load.

**Recommendation: Use `next-image-export-optimizer`** for the `/executivos` page. Use `unoptimized: true` as the global fallback for logos and small assets.

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
  },
};

export default nextConfig;
```

```bash
# package.json build script
"build": "next build && next-image-export-optimizer"
```

**Team photo pipeline:**
1. Place originals in `public/images/team/` as high-quality JPG (min 800x800px, square crop).
2. `next-image-export-optimizer` generates WebP variants at 640/750/828/1080px widths.
3. Use `fill` layout or explicit `width={400} height={400}` on `<ExportedImage>`.

---

## Tailwind Configuration (v4, CSS-first)

Tailwind v4 removes `tailwind.config.js`. All design tokens live in `globals.css` under the `@theme` directive.

```css
/* src/styles/globals.css */
@import "tailwindcss";

@theme {
  /* Brand colors — dark, premium, institutional */
  --color-ink: #0d0d0d;          /* near-black for backgrounds */
  --color-carbon: #1a1a1a;       /* card backgrounds */
  --color-slate: #2c2c2c;        /* borders, subtle dividers */
  --color-silver: #8a8a8a;       /* muted text, labels */
  --color-mist: #f5f5f4;         /* light section backgrounds */
  --color-white: #ffffff;
  --color-gold: #b8933f;         /* accent: CTAs, highlights — use sparingly */
  --color-gold-light: #d4ad6b;   /* hover state for gold */

  /* Typography */
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Playfair Display", Georgia, serif;  /* headlines only */

  /* Type scale */
  --text-display: 3.5rem;    /* hero headline */
  --text-h1: 2.5rem;
  --text-h2: 1.875rem;
  --text-h3: 1.375rem;
  --text-body: 1rem;
  --text-small: 0.875rem;
  --text-label: 0.75rem;

  /* Spacing */
  --spacing-section: 5rem;       /* py-20 equivalent */
  --spacing-section-lg: 7rem;    /* py-28 for hero */

  /* Radius */
  --radius-card: 0.25rem;        /* subtle, not rounded — institutional feel */
  --radius-button: 0.125rem;     /* nearly square CTAs */
}
```

**Font loading:** Use `next/font/google` to load Inter and Playfair Display. Apply as CSS variables to `<html>` via `layout.tsx`. Reference in `@theme inline` block.

---

## URL Slugs: English vs Portuguese

### Recommendation: Mixed — brand terms in Portuguese, categories in English

| Route | Slug | Rationale |
|-------|------|-----------|
| About | `/kolabore` | "Kolabore" is the brand name — keep as-is |
| Services/areas | `/expertise` | English term well understood; maps to SEO keyword "consultoria expertise" |
| How we work | `/engajamento` | Portuguese — "engajamento" is a specific business term the audience uses |
| Team | `/executivos` | Portuguese — the audience understands and searches this term |
| Contact | `/contato` | Portuguese — standard and correct for Brazilian institutional sites |

**SEO rationale:**

- Target audience is Brazilian (PT-BR). Portuguese slugs match what they type.
- Google treats URL language as a weak signal; `hreflang` and page content matter more.
- `/executivos` is more searchable in Brazil than `/executives`.
- `/expertise` is acceptable because it appears in Brazilian Portuguese business vocabulary.

**Never do:** `/sobre`, `/especialidades`, `/como-atuamos`, `/equipe`, `/fale-conosco`. These are generic and lose the brand voice. Use the PRD's own naming.

---

## Header and Navigation

The header must be:
- Fixed on scroll (`position: sticky top-0`)
- Transparent on hero, solid on scroll (use `useScroll` or `IntersectionObserver`)
- Logo left, nav links right, CTA button rightmost
- Mobile: hamburger menu, full-screen overlay or slide-down

```typescript
// src/components/layout/Header.tsx
"use client"; // needed for scroll state

// Behavior:
// - bg-transparent + text-white when at top of page
// - bg-ink/95 backdrop-blur text-white when scrolled
// - Active link gets a bottom border or color change
// - CTA: "Converse com a Kolabore" → /contato
```

---

## SEO Metadata Pattern

Each page exports a static `metadata` object. Use a helper to avoid repetition.

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
    description: "Apoiamos a alta gestão na transformação do negócio...",
    openGraph: {
      siteName: "Kolabore",
      locale: "pt_BR",
      type: "website",
    },
    ...overrides,
  };
}
```

```typescript
// src/app/executivos/page.tsx
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Executivos",
  description: "Conheça o time de executivos seniores da Kolabore.",
});
```

---

## Contact Form

With static export, there is no Next.js API route. Use **Formspree**.

```typescript
// src/components/shared/ContactForm.tsx
"use client";
// Form fields: Nome, Empresa, E-mail, Mensagem
// Submit to: https://formspree.io/f/{form_id}
// On success: show confirmation message inline (no page redirect)
// No external JS libraries needed — plain fetch() POST with JSON body
```

Free tier: 50 submissions/month. Sufficient for this use case. If the client needs more, upgrade or switch to EmailJS.

---

## next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // static HTML/CSS/JS, no server needed
  trailingSlash: true,        // /executivos/ — important for static hosting
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
  },
};

export default nextConfig;
```

---

## What NOT to Build in the First Version

Based on PRD section 19 ("Não objetivos"):

- No blog or articles section (no `/blog` route, no MDX pipeline)
- No CMS integration (no Sanity, no Contentful)
- No authentication
- No individual executive sub-pages (`/executivos/[slug]`) — full bios on the team page itself
- No analytics integration in code (add Google Tag Manager snippet later via `<Script>`)
- No i18n setup (site is PT-BR only)

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Folder structure | HIGH | Based on official Next.js docs + 2025 community consensus |
| Content layer (TS constants) | HIGH | Contentlayer deprecated; JSON/MDX overkill for this scope |
| Image handling | HIGH | next-image-export-optimizer is the established solution; official docs confirm `unoptimized` limitation |
| Tailwind v4 @theme | HIGH | Fetched from official Tailwind docs |
| URL slugs | MEDIUM | SEO best practice reasoning is sound; final call is a business decision |
| Contact form (Formspree) | HIGH | Standard solution, works with static export, well-documented |

---

## Sources

- [Next.js App Router Project Structure — Official Docs](https://nextjs.org/docs/app/getting-started/project-structure)
- [Next.js Static Exports — Official Docs](https://nextjs.org/docs/pages/guides/static-exports)
- [next-image-export-optimizer — GitHub](https://github.com/Niels-IO/next-image-export-optimizer)
- [Tailwind CSS v4 @theme — Official Docs](https://tailwindcss.com/docs/theme)
- [Next.js generateMetadata — Official Docs](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Next.js 15 Project Structure Guide — Wisp Blog](https://www.wisp.blog/blog/the-ultimate-guide-to-organizing-your-nextjs-15-project-structure)
- [Formspree + Next.js — Netlify Blog](https://www.netlify.com/blog/nextjs-react-forms-formspree/)
