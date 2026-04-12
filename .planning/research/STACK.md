# Technology Stack: Kolabore Institutional Site

**Project:** Kolabore — Brazilian executive consulting firm institutional website
**Researched:** 2026-04-11
**Overall confidence:** HIGH (all major decisions verified against official docs and multiple sources)

---

## 1. Next.js Static Export (`output: 'export'`)

### Configuration

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Required: static export produces no trailing slash by default
  // Set true if your hosting serves /about/ instead of /about.html
  trailingSlash: true,
  images: {
    unoptimized: true, // Required — no image optimization server available
  },
};

module.exports = nextConfig;
```

### What is NOT available in static export (App Router)

| Feature | Status | Notes |
|---------|--------|-------|
| API Routes (`/app/api/*`) | Blocked | Requires Node.js server |
| Server Components with dynamic data | Blocked | Must be static or use `generateStaticParams` |
| `getServerSideProps` / server actions with mutations | Blocked | Pages router equivalent also blocked |
| Incremental Static Regeneration (ISR) | Blocked | No revalidation at runtime |
| `next/image` auto-optimization | Blocked | See workaround below |
| Middleware | Blocked | Requires Edge runtime |
| Cookies / Headers reading at runtime | Blocked | No server context |
| Streaming / Suspense with async server components | Partial | Static async components work; streaming does not |
| `next/headers` | Blocked | |

### What DOES work

- App Router with `generateStaticParams` for dynamic routes
- All Client Components (`'use client'`)
- `next/font` (fonts are bundled at build time — works perfectly)
- `next/link` and client-side routing (SPA behavior once loaded)
- Static metadata export (`export const metadata = {}`)
- `generateMetadata` for static pages
- Sitemap and robots file conventions

### Image workaround

For a static export, choose one of:

**Option A — `unoptimized: true` (recommended for this project)**
Serve original images. Works fine if images are pre-optimized at source (use tools like Squoosh, Sharp CLI, or export from Figma at correct resolution). Suitable for institutional sites where the image count is low and you control all assets.

```js
images: { unoptimized: true }
```

**Option B — `next-image-export-optimizer` (if image count is high)**
Post-build step that runs Sharp on all local images, converts to WebP, and generates multiple sizes. Requires replacing `<Image>` with its wrapper component.

```bash
npm install next-image-export-optimizer
```

**Recommendation:** Use Option A + pre-optimize all images manually. The image count on an institutional site is small enough that this is not a bottleneck.

---

## 2. Hostinger Shared Hosting Deployment

### Build and upload process

```bash
npm run build
# produces: out/
```

Upload the contents of `out/` to `public_html/` via Hostinger's File Manager or FTP (Filezilla with SFTP credentials from hPanel).

Do NOT upload the `out/` folder itself — upload its **contents** directly into `public_html/`.

### `.htaccess` for SPA client-side routing

Create `public/htaccess` (will be output to `out/.htaccess` automatically) or add it manually after upload:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]
```

With `trailingSlash: true` in next.config.js, Next.js generates `/about/index.html` for each route — the server will find the file directly without needing the rewrite rule for those pages. The rewrite rule is still needed as a safety net for any 404 fallback.

**Alternative with `trailingSlash: true` (simpler):** Since each route outputs a real directory + `index.html`, Apache finds files directly. The `.htaccess` rule only matters if someone deep-links to a URL that wasn't pre-rendered.

### Gotcha: `public/` vs `out/` locations

Anything placed in `public/` is copied to `out/` by the build. Place `.htaccess` there:

```
public/
  .htaccess   ← will appear in out/.htaccess after build
```

### HTTPS / SSL

Hostinger provides free Let's Encrypt SSL via hPanel. Activate it before going live. Add this to `.htaccess` to force HTTPS:

```apache
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 3. Tailwind CSS

### Use v4. It is stable and actively recommended for new projects.

Tailwind CSS v4.0 was released January 22, 2025. It is the current stable version. All official Next.js documentation now points to v4 setup. Do not start a new project on v3.

### Key changes from v3

- `tailwind.config.js` is gone. Configuration lives in CSS using `@theme` directives.
- Auto-detects content files — no `content: []` array needed.
- Replaces the PostCSS plugin with `@tailwindcss/postcss`.
- CSS entry point uses `@import "tailwindcss"` instead of `@tailwind base/components/utilities`.
- Build output is ~70% smaller than v3 in production.

### Setup with Next.js App Router

```bash
npm install tailwindcss @tailwindcss/postcss
```

```js
// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --font-sans: 'Inter', sans-serif;
  --font-serif: 'Playfair Display', serif;
  --color-primary: #1a1a2e;
  /* Add brand tokens here */
}
```

```tsx
// app/layout.tsx
import './globals.css';
```

---

## 4. Typography & Fonts

### Strategy: next/font (not `<link>` to Google Fonts)

Use `next/font/google`. It downloads fonts at build time, self-hosts them in the static output, and eliminates the Google Fonts network request entirely. This gives zero layout shift (CLS = 0) and works correctly with `output: 'export'` since fonts are just static files.

Do NOT use `<link rel="preconnect" href="https://fonts.googleapis.com">` in the HTML. The `next/font` approach replaces this completely.

### Recommended pairing for a sober, premium executive brand

**Heading font:** `Cormorant Garamond` (serif) — high-contrast old-style serif, closer to a custom luxury typeface than Playfair Display. Used by premium brands that want editorial gravitas without looking like a newspaper. Comes with optical sizes and italic.

**Body / UI font:** `Inter` (sans-serif) — the industry standard for clean, legible UI text. Pairs perfectly with high-contrast serifs. Used by Stripe, Linear, Vercel. Available via `next/font/google`.

**Fallback pairing (safer, more neutral):** `Libre Baskerville` (heading) + `Source Sans 3` (body) — both designed for screen legibility.

Avoid: Playfair Display (overused on template sites), Raleway (looks dated), Montserrat (too generic).

McKinsey uses a custom serif (Bower) paired with a custom sans (McKinsey Sans). BCG uses Henderson Serif + Henderson Sans. The closest free approximations are `Cormorant` + `Inter`.

### Implementation

```tsx
// app/layout.tsx
import { Inter, Cormorant_Garamond } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

```css
/* globals.css — reference CSS variables set by next/font */
@theme {
  --font-sans: var(--font-sans);
  --font-serif: var(--font-serif);
}
```

---

## 5. Animation Library

### Recommendation: Motion (Framer Motion) with `LazyMotion`

**Do not use AOS.** It is a jQuery-era library with no React integration, no TypeScript support, and requires DOM manipulation on mount. Outdated for 2025.

**Do not rely solely on CSS transitions** for scroll-triggered animations. CSS has no native scroll-trigger without `IntersectionObserver`, and hand-rolling that in every component creates inconsistency.

**Use Motion (formerly Framer Motion)** — the React animation standard. Fully compatible with static exports (it is a client-side library, renders in the browser, no server needed). Version 12.x is current.

### Bundle size mitigation

Default `motion` import is ~25-30 KB gzipped. Use `LazyMotion` + `m` to reduce to ~5 KB:

```tsx
// components/AnimationProvider.tsx
'use client';
import { LazyMotion, domAnimation } from 'motion/react';

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
```

```tsx
// In any component
'use client';
import { m } from 'motion/react';

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </m.div>
  );
}
```

Add `AnimationProvider` once in `app/layout.tsx` inside the body. All `m.*` components under it share the lazy-loaded feature set.

### Install

```bash
npm install motion
```

Note: The package is now `motion` (not `framer-motion`), though `framer-motion` still works as an alias. Import from `motion/react`.

---

## 6. Contact Form (no backend)

### Recommendation: Formspree

Formspree is the correct choice for this project. Reasons:

- Zero infrastructure — POST to `https://formspree.io/f/{formId}`, Formspree handles delivery.
- Free tier: 50 submissions/month. An institutional consulting firm will not exceed this.
- Submissions are stored in the Formspree dashboard (unlike EmailJS, which delivers email only and stores nothing).
- React package available: `@formspree/react` provides form state, validation states, and loading state.
- No API keys exposed in client code — the form ID is public by design (Formspree validates against the domain).

Do not use Netlify Forms — only works on Netlify hosting.
Do not use EmailJS as the primary solution — no submission storage, harder to audit leads.
Do not use `mailto:` — unreliable, depends on user's email client, poor UX.

### Implementation

```bash
npm install @formspree/react
```

```tsx
// components/ContactForm.tsx
'use client';
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm('YOUR_FORM_ID');

  if (state.succeeded) {
    return <p>Mensagem enviada com sucesso. Entraremos em contato em breve.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome</label>
      <input id="name" type="text" name="name" required />

      <label htmlFor="email">E-mail</label>
      <input id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Mensagem</label>
      <textarea id="message" name="message" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}
```

Get the form ID by creating a free account at formspree.io and registering a form for the production domain.

---

## 7. SEO with Static Export

### App Router metadata API (no `next/head` needed)

The App Router replaces `next/head` with a typed `metadata` export. Works fully with static export — metadata is injected into the HTML at build time.

```tsx
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://kolabore.com.br'),
  title: {
    default: 'Kolabore | Consultoria Executiva',
    template: '%s | Kolabore',
  },
  description: 'Consultoria executiva especializada em [área]. Soluções estratégicas para líderes e organizações.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://kolabore.com.br',
    siteName: 'Kolabore',
    images: [
      {
        url: '/og-image.jpg', // 1200x630px, place in /public
        width: 1200,
        height: 630,
        alt: 'Kolabore — Consultoria Executiva',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### Schema.org for institutional consulting firm

Inject JSON-LD in the root layout as a `<script>` tag. Use `Organization` type:

```tsx
// app/layout.tsx — inside <body>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Kolabore',
      url: 'https://kolabore.com.br',
      logo: 'https://kolabore.com.br/logo.png',
      description: 'Consultoria executiva especializada em ...',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'BR',
        addressLocality: 'São Paulo', // adjust
      },
      sameAs: [
        'https://www.linkedin.com/company/kolabore',
        // other profiles
      ],
    }),
  }}
/>
```

For individual service pages, add `Service` schema. For team/bio pages, add `Person` schema.

### Sitemap

Create `app/sitemap.ts` — it generates `sitemap.xml` at build time:

```ts
// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://kolabore.com.br', lastModified: new Date(), priority: 1 },
    { url: 'https://kolabore.com.br/sobre', lastModified: new Date() },
    { url: 'https://kolabore.com.br/servicos', lastModified: new Date() },
    { url: 'https://kolabore.com.br/contato', lastModified: new Date() },
  ];
}
```

### Robots

```ts
// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://kolabore.com.br/sitemap.xml',
  };
}
```

### Gotchas specific to static export + SEO

1. `metadataBase` is required. Without it, relative Open Graph image URLs will generate a warning and may not resolve correctly on social crawlers.
2. Do not use `generateMetadata` with async data fetching unless you cache the result at build time. For a static site with no CMS, use the static `metadata` object export — it's simpler and has no runtime cost.
3. `robots.ts` and `sitemap.ts` work correctly in static export — they output `robots.txt` and `sitemap.xml` files into `out/`.

---

## Final Stack Summary

| Layer | Choice | Version | Rationale |
|-------|--------|---------|-----------|
| Framework | Next.js | 15.x | Static export, App Router, built-in font/SEO optimization |
| Language | TypeScript | 5.x | Type safety, enforced by project decision |
| Styling | Tailwind CSS | v4.x | New projects: v4 is stable, smaller output, no config file |
| Fonts | next/font/google | built-in | Self-hosts fonts at build time, zero FOUT, works in static export |
| Heading font | Cormorant Garamond | — | Premium serif, editorial authority, free on Google Fonts |
| Body font | Inter | — | Industry standard, legible, neutral |
| Animation | Motion (Framer Motion) | 12.x | LazyMotion + m components for minimal bundle (~5KB) |
| Contact form | Formspree + @formspree/react | — | Zero backend, 50 submissions/month free, has dashboard |
| SEO | Next.js Metadata API + JSON-LD | built-in | Static injection at build time, no runtime overhead |
| Images | next/image with `unoptimized: true` | built-in | Pre-optimize manually; no server needed |
| Hosting | Hostinger shared hosting | — | Upload `out/` to `public_html/`, `.htaccess` for SPA routing |

---

## Dependencies to install

```bash
# Create project
npx create-next-app@latest kolabore-site --typescript --tailwind --eslint --app --src-dir

# Animation
npm install motion

# Contact form
npm install @formspree/react

# Optional: image optimization at build time (only if image count grows)
npm install next-image-export-optimizer
```

```js
// next.config.js — final configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```
