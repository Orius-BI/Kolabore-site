# Phase 5: Contact, SEO & Deploy — Research

**Researched:** 2026-04-13
**Domain:** Next.js static export — SEO metadata, Formspree forms, sitemap/robots generation, Lighthouse optimization, Hostinger FTP deploy
**Confidence:** HIGH (core stack already in use; patterns verified against official Next.js 16.2.3 docs)

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| CONT-01 | Página `/contato` — Formspree form with fields, email, phone, CTA executivo | Formspree `@formspree/react` v3 already installed; ContactSection component already exists and reusable |
| CONT-02 | `title` e `meta description` únicos por página (all 6 pages) | Next.js `metadata` export per page.tsx; template pattern in root layout already set up |
| CONT-03 | Open Graph tags in all pages (static OG image 1200x630px) | `opengraph-image.jpg` file convention in `app/` auto-generates all og:image meta tags; `metadataBase` already configured |
| CONT-04 | `sitemap.xml` e `robots.txt` generated at build | `app/sitemap.ts` + `app/robots.ts` with `export const dynamic = 'force-static'` required for `output: 'export'` |
| CONT-05 | Hierarchical headings (H1/H2/H3) well-structured across all pages | Audit pass — each page must have exactly one H1; H2/H3 must be in sequence |
| CONT-06 | Clean SEO-friendly URLs for all routes | `trailingSlash: true` already set; routes are `/kolabore/`, `/expertise/`, etc. — no action needed |
| CONT-07 | Deploy validated on Hostinger — all routes tested with hard refresh | Upload `out/` contents to `public_html/`; `.htaccess` already in `public/` and copied at build |
| CONT-08 | Formspree deliverability test with client's real email address | Human checkpoint — requires `NEXT_PUBLIC_FORMSPREE_ID` env var and actual submission test |
</phase_requirements>

---

## Summary

Phase 5 completes the Kolabore site by wiring the dedicated `/contato` page, adding SEO metadata to all 6 routes, generating sitemap and robots files, achieving Lighthouse mobile ≥ 90, and executing a validated deploy to Hostinger.

The critical infrastructure for all of this is already in place from Phases 1–4: `@formspree/react` is installed, `ContactSection` is built and working, `metadataBase` is set in root layout, `.htaccess` SPA fallback is present in `public/`, the `out/` build pipeline is operational, and `trailingSlash: true` is locked. Phase 5 is primarily composition and wiring work, not new infrastructure.

The two highest-risk items are (1) sitemap/robots generation, which has a known `output: 'export'` bug requiring `export const dynamic = 'force-static'` in both files, and (2) Formspree deliverability to Microsoft 365/Outlook, which changed enforcement in May 2025 and now requires real-inbox testing before the phase can close.

**Primary recommendation:** Use native Next.js file conventions for all SEO artifacts (metadata export, `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.jpg`). Do not install `next-sitemap` or any third-party SEO package — the built-in approach is simpler and already supported by the installed Next.js 16.2.3.

---

## Standard Stack

### Core (already installed — no new packages needed)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `next` | 16.2.3 | Metadata API, sitemap/robots generation, static export | Already installed; official App Router APIs handle all SEO |
| `@formspree/react` | 3.0.0 | Contact form submission handling | Already installed and wired in `ContactSection` |
| `next-image-export-optimizer` | 1.20.1 | Image optimization for static export | Already installed; required for all `<Image>` usage |

### Supporting (no new installs required)

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Native `app/sitemap.ts` | built-in | Generates `sitemap.xml` in `out/` | 6 static URLs — no package needed |
| Native `app/robots.ts` | built-in | Generates `robots.txt` in `out/` | Simple allow-all with sitemap pointer |
| `app/opengraph-image.jpg` | file convention | Auto-generates all OG image meta tags | Place 1200x630 JPG in `app/` root |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Native `app/sitemap.ts` | `next-sitemap` (v4.2.3) | `next-sitemap` adds a post-build step and config file; overkill for 6 static URLs |
| Static OG JPG in `app/` | `next/og` dynamic generation | Dynamic OG requires Edge runtime — incompatible with `output: 'export'` |
| Native `metadata` export | Custom `<Head>` component | Custom head is the old Pages Router pattern; App Router metadata is the canonical approach |

**No new packages to install.** Everything needed is already available.

---

## Architecture Patterns

### Recommended Project Structure (Phase 5 additions)

```
src/app/
├── sitemap.ts              # NEW — generates sitemap.xml in out/
├── robots.ts               # NEW — generates robots.txt in out/
├── opengraph-image.jpg     # NEW — 1200x630 static OG image (file convention)
├── opengraph-image.alt.txt # NEW — alt text for OG image
├── page.tsx                # Add: metadata export with Organization JSON-LD
├── contato/
│   └── page.tsx            # REPLACE stub — full Formspree form page
├── kolabore/page.tsx       # Has metadata — audit title length and add OG fields
├── expertise/page.tsx      # ADD metadata export
├── engajamento/page.tsx    # ADD metadata export
└── executivos/page.tsx     # ADD metadata export
```

### Pattern 1: Per-page static metadata export

**What:** Export a `metadata` const from each `page.tsx` (Server Component). The root layout template `"%s | Kolabore"` auto-appends.
**When to use:** All 6 pages — static metadata is sufficient since no data fetching needed.

```typescript
// Source: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato',   // renders as "Contato | Kolabore" via root template
  description: '150–160 char description unique to this page.',
  openGraph: {
    title: 'Contato | Kolabore',
    description: '150–160 char description.',
    url: 'https://kolabore.com.br/contato',
    // og:image inherited from root layout's metadataBase + opengraph-image.jpg
  },
}
```

**Important:** `/kolabore/page.tsx` already has a `metadata` export — audit its `title` length (target 50–60 chars) and add `openGraph` fields. `/expertise/page.tsx` and `/engajamento/page.tsx` have no metadata export yet — add them.

### Pattern 2: OG image via file convention (recommended over metadata config)

**What:** Place `opengraph-image.jpg` (1200x630) directly in `app/`. Next.js auto-generates `og:image`, `og:image:width`, `og:image:height` meta tags.
**When to use:** This is the simplest approach for a single static OG image shared across all pages.

```
app/
├── opengraph-image.jpg        # 1200×630 JPG, committed to repo
├── opengraph-image.alt.txt    # one line: "Kolabore — Consultoria Executiva"
```

No metadata config needed for the image — Next.js reads the file and sets all tags automatically. The `metadataBase: new URL("https://kolabore.com.br")` in root layout ensures absolute URLs.

**LinkedIn Post Inspector** requires minimum 1200x627 at 1.91:1 ratio. 1200x630 meets this.

### Pattern 3: sitemap.ts with force-static (critical)

**What:** App Router sitemap file convention generates `sitemap.xml`. With `output: 'export'`, the file MUST include `export const dynamic = 'force-static'` — otherwise build silently skips it.
**Known issue:** GitHub issue #68667 — still open as of Aug 2025, not fixed in Next.js 16.2.3.

```typescript
// Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
// app/sitemap.ts
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'  // REQUIRED for output: 'export'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kolabore.com.br'
  return [
    { url: `${base}/`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/kolabore/`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/expertise/`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/engajamento/`,lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/executivos/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contato/`,    lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },
  ]
}
```

URLs use trailing slash because `trailingSlash: true` is set in `next.config.ts`.

### Pattern 4: robots.ts with force-static

```typescript
// app/robots.ts
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'  // REQUIRED for output: 'export'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://kolabore.com.br/sitemap.xml',
  }
}
```

### Pattern 5: Organization JSON-LD on homepage

**What:** `<script type="application/ld+json">` tag in homepage page.tsx (Server Component).
**Important:** Use `.replace(/</g, '\\u003c')` to prevent XSS — official Next.js recommendation.

```typescript
// Source: https://nextjs.org/docs/app/guides/json-ld
// app/page.tsx (Server Component — add alongside existing section imports)
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kolabore',
  url: 'https://kolabore.com.br',
  logo: 'https://kolabore.com.br/og-image.jpg',
  description: 'Consultoria executiva de alto valor para líderes e organizações.',
}

// Inside the JSX return:
// <script
//   type="application/ld+json"
//   dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c') }}
// />
```

### Pattern 6: /contato page (reuses ContactSection)

The `/contato` page is currently a stub. The form component (`ContactSection`) is complete. The dedicated page needs:
- `metadata` export (title, description, OG)
- A page-level hero section (heading + context text)
- `ContactSection` reused directly
- Contact info display (email + phone alongside form)

```typescript
// src/app/contato/page.tsx pattern
import type { Metadata } from 'next'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contato',
  description: '150-160 char description.',
}

export default function ContatoPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Page hero: heading + brief context */}
      {/* ContactSection: reuses existing form component */}
      <ContactSection />
    </main>
  )
}
```

**Note:** `ContactSection` is `'use client'` — it can be imported into a Server Component page.tsx without issues. The `metadata` export and the client import are fully compatible.

### Anti-Patterns to Avoid

- **Installing `next-sitemap`:** Adds a post-build script, a config file, and a CI step. For 6 URLs, `app/sitemap.ts` is 10 lines.
- **Placing `opengraph-image.jpg` in `/public/`:** Social scrapers resolve OG images from the `<meta>` tag; placing the file in `/public/` and referencing it in metadata config works, but the file-convention approach in `app/` is more reliable for auto-generation.
- **Dynamic OG with `next/og` ImageResponse:** Requires Edge runtime — incompatible with `output: 'export'`.
- **Omitting `export const dynamic = 'force-static'` from sitemap/robots:** Build will succeed but `sitemap.xml` and `robots.txt` will be missing from `out/`.
- **Using `generateMetadata()` function** when static `metadata` const is sufficient — adds no value for these pages and introduces unnecessary async surface.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Sitemap generation | Custom build script | `app/sitemap.ts` native convention | Native convention outputs correct XML; handles `changeFrequency`, `priority`, `lastModified` |
| robots.txt | Manual file in `/public/` | `app/robots.ts` native convention | Programmatic generation is easier to maintain; handles multiple rule objects |
| Form spam protection | Custom validation | Formspree honeypot (`_gotcha`) already in `ContactSection` | Already implemented; Formspree handles bot detection server-side |
| OG image meta tags | Manual `<meta>` in layout | `app/opengraph-image.jpg` file convention | Zero configuration; Next.js sets `og:image`, width, height, type automatically |
| JSON-LD type safety | Inline objects | `schema-dts` types (optional, not required) | Small site — inline object is sufficient; `schema-dts` is dev-only if added |

**Key insight:** This stack is already at the correct abstraction level. The native Next.js metadata APIs handle every SEO requirement without third-party packages.

---

## Common Pitfalls

### Pitfall 1: sitemap.xml / robots.txt missing from out/

**What goes wrong:** Build completes without errors, but `out/sitemap.xml` and `out/robots.txt` are missing. Verified: GitHub issue #68667, still open in Next.js 16.2.3.
**Why it happens:** `output: 'export'` requires Route Handlers to be statically renderable. Without `export const dynamic = 'force-static'`, Next.js skips the metadata route.
**How to avoid:** Add `export const dynamic = 'force-static'` as the first export in both `app/sitemap.ts` and `app/robots.ts`.
**Warning signs:** Run `ls out/sitemap.xml out/robots.txt` after build — if either is missing, the export is absent.

### Pitfall 2: OG metadata overwrite by page-level metadata

**What goes wrong:** A page exports `openGraph: { title: '...' }` without including `images`, causing the root layout's inherited OG image to be dropped (shallow merge replaces the entire `openGraph` object).
**Why it happens:** Next.js metadata merging is shallow — if a page defines ANY `openGraph` key, the entire parent `openGraph` is replaced.
**How to avoid:** Either (a) use the `app/opengraph-image.jpg` file convention (immune to merge behavior — file-based metadata has higher priority than config exports), or (b) explicitly re-include the image in every page's `openGraph` config.
**Recommended approach:** Use `app/opengraph-image.jpg` file convention — it is unaffected by merge behavior.

### Pitfall 3: Formspree form not delivering to Microsoft 365 / Outlook

**What goes wrong:** Form submission succeeds (Formspree returns 200), but the notification email arrives in spam or is silently rejected.
**Why it happens:** Since May 2025, Microsoft enforces strict SPF/DKIM/DMARC authentication for all incoming email. Formspree sends from its own domain unless a custom sending domain is configured with DNS CNAME records. Default Formspree `noreply@formspree.io` sender can still land in spam for Outlook.
**How to avoid:** (a) Test with the client's actual email before calling the phase complete. (b) Check Formspree account settings for "Send notifications from your domain" — if the plan supports it, configure the DNS CNAME records. (c) Add the client's email address as a safe/allowed sender in their Outlook settings as a fallback.
**Warning signs:** Formspree dashboard shows submissions received, but inbox has no email. Check junk/quarantine first.

### Pitfall 4: Hard refresh returns 404 on Hostinger after deploy

**What goes wrong:** Client-side navigation works, but pasting `/executivos/` directly returns a 404.
**Why it happens:** Apache serves static files. Without an `.htaccess` SPA fallback, direct route access goes to the filesystem (which has `/executivos/index.html`) but Apache may not serve it without the rewrite rule.
**How to avoid:** The `.htaccess` is already in `public/` and gets copied to `out/` at build. Verify `out/.htaccess` exists after build before uploading. After upload, verify it's present in `public_html/`.
**Warning signs:** First page (homepage) loads but other routes 404 on direct access.

### Pitfall 5: Title template produces titles outside 50–60 char limit

**What goes wrong:** Root layout template is `"%s | Kolabore"` (adds 10 chars). A page title like "Agende uma conversa com a Kolabore" (35 chars) + " | Kolabore" = 46 chars — fine. But a verbose title like "Expertise — Áreas de Atuação e Desafios" + " | Kolabore" = 50 chars — acceptable but tight.
**Why it happens:** `title` in metadata refers to the `%s` part only. Full rendered title = `"${page_title} | Kolabore"`.
**How to avoid:** Keep page-level `title` values under 50 characters so the full rendered title stays within 60. Verify in browser tab after build.
**Warning signs:** SEO audit tools flag titles > 60 chars.

### Pitfall 6: Lighthouse score below 90 — CLS from portrait images

**What goes wrong:** Images without explicit `width`/`height` attributes cause layout shift (CLS), which heavily penalizes Lighthouse score.
**Why it happens:** Browser doesn't know image dimensions until after load — reserves no space, causing content to shift.
**How to avoid:** All portrait images use `next-image-export-optimizer` which handles width/height and generates blur placeholders. Verify `width` and `height` props are set on all `<ExportedImage>` components.

---

## Code Examples

### Per-page metadata with OG (minimal)

```typescript
// Source: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
import type { Metadata } from 'next'

// In app/contato/page.tsx
export const metadata: Metadata = {
  title: 'Contato',  // renders: "Contato | Kolabore" (50 chars — within limit)
  description: 'Entre em contato com a Kolabore. Formulário direto, sem intermediários — fale com consultores executivos seniores.',
  openGraph: {
    title: 'Contato | Kolabore',
    description: 'Entre em contato com a Kolabore. Formulário direto, sem intermediários — fale com consultores executivos seniores.',
    url: 'https://kolabore.com.br/contato',
  },
}
```

### sitemap.ts (production-ready)

```typescript
// Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
// app/sitemap.ts
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kolabore.com.br'
  const lastMod = new Date('2026-04-13')
  return [
    { url: `${base}/`,             lastModified: lastMod, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/kolabore/`,    lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/expertise/`,   lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/engajamento/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/executivos/`,  lastModified: lastMod, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contato/`,     lastModified: lastMod, changeFrequency: 'yearly',  priority: 0.6 },
  ]
}
```

### robots.ts (production-ready)

```typescript
// Source: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
// app/robots.ts
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://kolabore.com.br/sitemap.xml',
  }
}
```

### Organization JSON-LD on homepage

```typescript
// Source: https://nextjs.org/docs/app/guides/json-ld
// app/page.tsx — add inside the default export JSX return

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kolabore',
  url: 'https://kolabore.com.br',
  logo: 'https://kolabore.com.br/og-image.jpg',
  description: 'Consultoria executiva de alto valor para líderes e organizações em transformação.',
  address: { '@type': 'PostalAddress', addressCountry: 'BR' },
}
// In JSX:
// <script
//   type="application/ld+json"
//   dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema).replace(/</g, '\\u003c') }}
// />
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `<Head>` from `next/head` | `metadata` export in page.tsx | Next.js 13 (App Router) | Pages Router approach no longer needed in App Router |
| `next-sitemap` post-build | `app/sitemap.ts` native convention | Next.js 13.3 | No config file or post-build step needed |
| `<link rel="preconnect" href="fonts.googleapis.com">` | `next/font/google` (already used) | Next.js 13 | Already implemented — font pre-connects not needed |
| `next/og` dynamic image | Static `opengraph-image.jpg` in `app/` | Next.js 13 | Dynamic OG breaks static export; static file is correct approach |

**Deprecated / not applicable:**
- `_document.tsx` custom Head: Pages Router only — not relevant to this App Router project
- `react-helmet`: Pre-App Router solution — do not use

---

## Open Questions

1. **Formspree plan level**
   - What we know: `@formspree/react` v3 is installed; a form ID must be set as `NEXT_PUBLIC_FORMSPREE_ID`
   - What's unclear: Whether the client's Formspree account supports "Send from your domain" (requires Gold/Business plan) — this affects Outlook deliverability
   - Recommendation: Plan 5.1 should include a human checkpoint to confirm plan level and whether custom domain sending is configured

2. **Client's confirmed email provider**
   - What we know: STATE.md flags "Client email provider unknown — confirm before deliverability test"
   - What's unclear: Whether the client uses Microsoft 365 / Outlook (requiring special deliverability attention) or Gmail
   - Recommendation: Resolve in Plan 5.5 pre-launch checklist; treat as blocking gate before marking phase complete

3. **Hostinger domain confirmation**
   - What we know: `metadataBase` is set to `https://kolabore.com.br` in root layout
   - What's unclear: STATE.md open todo "Confirm deployment URL — domain root vs. subdirectory (affects basePath)"
   - Recommendation: Confirm with client before Plan 5.5; if subdomain (e.g., `www.kolabore.com.br`), update `metadataBase` and sitemap URLs

4. **OG image creation**
   - What we know: A static 1200x630 JPG must be committed to `app/opengraph-image.jpg`
   - What's unclear: Who creates it — needs design input (Kolabore brand colors: `#0d0d0d`, `#b8933f`, `#f5f5f4`)
   - Recommendation: Plan 5.2 should include explicit task for human to create or approve the OG image; Claude can generate text-based design

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| Node.js | `npm run build` | ✓ | v24.14.1 | — |
| Next.js | All plans | ✓ | 16.2.3 | — |
| `@formspree/react` | Plan 5.1 | ✓ | 3.0.0 | — |
| `NEXT_PUBLIC_FORMSPREE_ID` env var | Plan 5.1, CONT-08 | ✗ | — | Build works with placeholder; form submissions blocked until set |
| Hostinger FTP access | Plan 5.5 | Unknown | — | File manager upload via hPanel as fallback |
| Client email inbox for test | CONT-08 | Unknown | — | Blocking — phase cannot close without real-inbox confirmation |

**Missing with no fallback:**
- Client's real email inbox access for deliverability test (CONT-08) — phase success criterion 1 requires this

**Missing with fallback / workaround:**
- `NEXT_PUBLIC_FORMSPREE_ID`: Build proceeds with `'placeholder'`; set at deploy time in Hostinger environment or `.env.local` — plan must include explicit step

---

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Manual verification + Lighthouse CLI |
| Config file | None — static export, no jest/vitest configured |
| Quick run command | `npm run build && ls out/sitemap.xml out/robots.txt` |
| Full suite command | Pre-launch checklist in ROADMAP.md Phase 5 |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|--------------|
| CONT-01 | `/contato` page renders form | Smoke | `npm run build` — check `out/contato/index.html` exists | ❌ Plan 5.1 |
| CONT-02 | Each page has unique title/description | Build check | `grep -h "<title>" out/*/index.html out/index.html` | ❌ Plan 5.2 |
| CONT-03 | OG image meta tag present | Build check | `grep og:image out/index.html` | ❌ Plan 5.2 |
| CONT-04 | sitemap.xml and robots.txt in out/ | Build check | `ls out/sitemap.xml out/robots.txt` | ❌ Plan 5.3 |
| CONT-05 | H1/H2/H3 hierarchy valid | Manual audit | Dev tools heading inspector on each page | Manual only |
| CONT-06 | URLs are clean (trailing slash) | Build check | Verify `trailingSlash: true` in next.config.ts | ✅ Already set |
| CONT-07 | Routes survive hard refresh | Manual | Hard refresh each of 6 URLs on live Hostinger | Manual only |
| CONT-08 | Form email reaches inbox | Manual | Submit form; check client's inbox + spam | Manual only |

### Sampling Rate
- **Per plan commit:** `npm run build` — verify no build errors, check plan-specific output files
- **Phase gate:** Full pre-launch checklist from ROADMAP.md before marking Phase 5 complete

### Wave 0 Gaps
- No automated test infrastructure needed — this phase is validated through build output inspection and manual checklists
- `npm run build` is the primary automated gate; post-build file checks confirm artifact presence

---

## Sources

### Primary (HIGH confidence)
- Next.js 16.2.3 official docs — `generateMetadata` API: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- Next.js 16.2.3 official docs — sitemap.xml: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- Next.js 16.2.3 official docs — JSON-LD: https://nextjs.org/docs/app/guides/json-ld
- GitHub vercel/next.js issue #68667 — `output: export` + sitemap/robots bug + `force-static` workaround

### Secondary (MEDIUM confidence)
- franciscomoretti.com — static OG image in App Router (file convention approach verified)
- WebSearch — LinkedIn Post Inspector minimum OG image size: 1200x627 at 1.91:1 ratio
- WebSearch — Microsoft 365 May 2025 email deliverability enforcement (SPF/DKIM/DMARC)

### Tertiary (LOW confidence)
- WebSearch — Formspree sending domain DNS CNAME configuration (couldn't access help.formspree.io docs directly — 403)

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — packages already installed; verified against official docs
- Architecture: HIGH — patterns from official Next.js 16.2.3 docs, verified against installed version
- Pitfalls: HIGH — sitemap force-static bug verified via GitHub issue; OG merge behavior verified in docs; Outlook deliverability from official Microsoft sources
- Formspree deliverability details: MEDIUM — Formspree help docs inaccessible (403); general email auth context from Microsoft official docs

**Research date:** 2026-04-13
**Valid until:** 2026-07-13 (stable stack; Next.js metadata API changes infrequently)
