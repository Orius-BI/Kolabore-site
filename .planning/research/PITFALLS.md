# Domain Pitfalls: Institutional Website for Executive Consulting

**Project:** Kolabore institutional website
**Domain:** Premium executive consulting firm, Brazilian market
**Researched:** 2026-04-11

---

## 1. Design Pitfalls

### Pitfall 1.1: Stock Photos as the Visual Identity

**What goes wrong:** The site uses generic stock photography — handshakes, boardroom silhouettes, diverse teams pointing at whiteboards. These images are immediately recognized as stock and signal that the firm has no real identity of its own. For a firm selling executive credibility, this is fatal.

**Why it happens:** Stock photos are fast and cheap. Designers default to them when real photography is unavailable.

**Consequences:** Visitors lose trust within seconds. The firm looks like every other mid-tier consultancy on the web. Premium positioning collapses.

**Prevention:** Kolabore has real client photos available (`docs/imagens clientes *`). Use them everywhere. A slightly imperfect real photo of the actual team beats a perfect Unsplash boardroom every time. For backgrounds or abstract sections, use texture, typography, or geometric patterns — never staged stock.

**Detection:** If you could swap the images onto a competitor's site without them looking out of place, they are wrong.

---

### Pitfall 1.2: "Dark Blue + Gold = Consulting" Syndrome

**What goes wrong:** Defaulting to the standard consulting color palette (navy, dark grey, gold accent) produces a site indistinguishable from McKinsey derivatives. The site reads as a clone, not a distinct firm.

**Why it happens:** These colors "feel professional," so they become the gravitational default.

**Consequences:** Site looks dated before it launches. Premium positioning eroded by familiarity.

**Prevention:** Build the palette from the client's actual brand assets and identity. Commit to one differentiated primary decision — whether that's a warm off-white base, a specific shade of green or stone — and execute it with discipline. Contrast should come from typographic weight and spacing, not accent color.

---

### Pitfall 1.3: Layout That Screams "Template"

**What goes wrong:** Using stock Tailwind/UI kit layouts (full-width hero with centered heading + subtitle + two CTA buttons, then three-column icon cards, then testimonial strip, then CTA banner) produces a site that looks like it was assembled in 45 minutes from a theme store.

**Why it happens:** These patterns are easy to implement and "good enough." They are not good enough for a premium positioning.

**Consequences:** Institutional credibility undercut. The PRD specifically flags the risk of the site looking like a converted PowerPoint.

**Prevention:** Reorganize content by the commercial journey: Who comes here → What problem they have → How Kolabore addresses it → Who is Kolabore → How to engage. Do not follow the PPT chapter order. Break symmetry deliberately. Use full-bleed typography sections, not just icon grids.

---

### Pitfall 1.4: Excessive Animation and Motion Libraries

**What goes wrong:** Adding scroll-triggered animations via Framer Motion, AOS, or GSAP to make the site feel "premium." Large animation libraries bloat the JavaScript bundle significantly — Framer Motion is ~160KB gzipped.

**Why it happens:** Animations feel polished in demos. The performance cost is invisible until production.

**Consequences:** Poor LCP (Largest Contentful Paint) and TTI (Time to Interactive). Mobile users on 4G see jank. Core Web Vitals suffer, hurting SEO ranking.

**Prevention:** Use CSS transitions and Tailwind's `transition` utilities for anything that doesn't require JavaScript. If JS animation is needed, use targeted micro-animations only, and import only what is used. For a static institutional site, CSS is sufficient for 90% of motion requirements.

---

### Pitfall 1.5: Type Hierarchy That Flattens Everything

**What goes wrong:** Using one typeface at varying weights without a clear hierarchical system, or combining two display fonts that compete with each other. In Portuguese, long words already create visual density — bad typography makes it unreadable.

**Why it happens:** Designers pick "nice fonts" without system thinking.

**Consequences:** Fatiguing to read, especially on long pages like Expertise and Engajamento.

**Prevention:** One serif or humanist display font for headings, one clean sans-serif for body. Use `next/font` (see Technical section) to load fonts at build time. Set a modular type scale (e.g., 16/24/32/48/64px) and stick to it. White space does more work than font choices.

---

## 2. Copy Pitfalls (Portuguese/Brazilian Corporate)

### Pitfall 2.1: "Consultorês" — The Brazilian Corporate Buzzword Trap

**What goes wrong:** Copy fills up with the following phrase patterns that are meaningless to a senior executive reading them:

- *"Soluções de ponta a ponta"*
- *"Abordagem holística"*
- *"Agregamos valor ao seu negócio"*
- *"Transformação sustentável"*
- *"Parceria estratégica de longo prazo"*
- *"Ecossistema de inovação"*
- *"Excelência operacional com foco em resultado"*
- *"Time de especialistas com expertise comprovada"*

These phrases appear on every consulting website in Brazil. They communicate nothing specific about Kolabore.

**Why it happens:** Corporate copy defaults to safe, elevated-sounding language. It feels professional to the writer. It reads as noise to the reader.

**Consequences:** The site fails the "same firm substitution test" — you could replace "Kolabore" with any competitor name and the text would still read correctly. The PRD's Risk 1 (becoming too generic) is triggered.

**Prevention:** Every claim must be specific, verifiable, or illustrated by example. Instead of "expertise comprovada," name the type of situation handled: "reestruturação de procurement em operações de R$2B+." Instead of "parceiros estratégicos," describe the actual dynamic: "trabalhamos junto ao CEO e ao conselho, não apenas ao gestor intermediário." Claude should refuse to write sentences that pass the substitution test.

---

### Pitfall 2.2: Excess Formalism That Creates Distance

**What goes wrong:** Institutional copy in Brazil overcorrects toward formalism — long subordinate clauses, passive voice, impersonal constructions, third-person self-references. "A Kolabore se posiciona como..." instead of "Somos..." PRD's Risk 2 (too corporate, not human) applies here.

**Why it happens:** Portuguese written convention in business contexts pulls toward formal register. Copywriters equate formality with credibility.

**Consequences:** The site reads as a corporate brochure, not as communication from executives who have operated large businesses. The target reader — a CEO or board member — wants to feel they are talking to a peer, not reading a legal document.

**Prevention:** Use direct voice. Prefer "nós" over passive constructions. Short sentences. Declarative claims. The tone should be: secure, direct, senior — not effusive, not deferential, not academic.

---

### Pitfall 2.3: Too Much Institutional Text on the Homepage

**What goes wrong:** The homepage becomes a manifesto — 600+ words of positioning text, mission/vision/values blocks, company history paragraph, methodology explanation. PRD's Risk 4 applies here.

**Why it happens:** The PPT has comprehensive content. It is tempting to surface all of it on the homepage.

**Consequences:** Visitors do not read. Scroll depth analytics on institutional sites consistently show drop-off after the hero section when text density is high. The commercial journey is blocked before it starts.

**Prevention:** Homepage is a routing layer, not a content layer. Each section should have one job: hook, orient, build trust, direct to the right inner page. Detailed positioning text belongs in `/kolabore`. Methodology belongs in `/engajamento`. Capability detail belongs in `/expertise`. Keep homepage sections to 3–5 sentences maximum each.

---

### Pitfall 2.4: Overusing English in a Portuguese-language Site

**What goes wrong:** Mixing English terms unnecessarily: "supply chain", "stakeholders", "accountability", "compliance", "mindset", "approach", "framework" scattered throughout Portuguese copy without need.

**Why it happens:** Brazilian executive culture uses English terms in internal communication. Copy mirrors that habit.

**Consequences:** Can read as trying too hard, or as inaccessible to board members and executives who are senior enough to prefer clean Portuguese. Also creates consistency issues (some terms in PT, others in EN).

**Prevention:** For terms with no natural Portuguese equivalent in executive context (supply chain, procurement, compliance, governance), use the English term consistently. For everything else, write in clean Portuguese. Never use English purely for stylistic elevation — it reads as insecurity, not sophistication.

---

## 3. UX Pitfalls

### Pitfall 3.1: CTA Only at the End of Each Page

**What goes wrong:** Contact CTAs appear only at the bottom footer of each page. On a long-form page like Expertise, a visitor who is convinced at the midpoint has no path to contact.

**Prevention:** The PRD already specifies a fixed menu with visible CTA. Additionally: place a secondary CTA at the bottom of each major content section on inner pages. The CTA does not need to be loud — a simple "Vamos conversar" link in the section footer is enough.

---

### Pitfall 3.2: Navigation That Hides the Commercial Path

**What goes wrong:** Navigation labels are firm-centric ("Quem Somos", "O Que Fazemos", "Nossa Metodologia") rather than visitor-centric. A CEO scanning the nav cannot tell which section answers their actual question.

**Prevention:** Map nav labels to the visitor's question, not the firm's org chart. Suggested labels for this project: Kolabore (who we are), Expertise (what we solve), Engajamento (how we work), Executivos (who does the work), Contato. These match the PRD architecture and are readable as a complete sentence of the commercial pitch.

---

### Pitfall 3.3: Mobile Typography Too Small on Long Pages

**What goes wrong:** Body font set at 14px or 15px on desktop looks fine, but at equivalent mobile scaling the line length becomes too narrow (20–25 characters per line), breaking readability on the detailed inner pages.

**Prevention:** Set body font at minimum 16px (Tailwind `text-base`). Test line length on 375px viewport — aim for 45–75 characters per line. Use `max-w-prose` or explicit `max-w-2xl` on content columns to prevent over-wide lines on large screens as well.

---

### Pitfall 3.4: The Executivos Page Without Real Portraits

**What goes wrong:** The Executivos page launches with placeholder avatars, grey silhouettes, or initials-in-circles, promising "photos coming soon." The PRD's Risk 2 (not human) is directly triggered by this.

**Prevention:** Do not launch without real portraits. The project already has real client photos in `docs/imagens clientes *`. These must be processed and placed before launch — not added in a "v1.1." Portrait quality (framing, lighting consistency) matters. If photos exist but vary in quality, apply consistent post-processing (color grade, background treatment) to unify them.

---

## 4. Technical Pitfalls (Next.js Static Export + Hostinger)

### Pitfall 4.1: Page Refresh Returns 404 on Hostinger

**What goes wrong:** When `trailingSlash` is not configured, Next.js generates `/about.html` but Hostinger's Apache server does not know to serve `about.html` when the browser requests `/about`. Direct navigation to any route other than `/` returns 404. Client-side navigation via `<Link>` works — which makes this easy to miss during development.

**Why it happens:** Hostinger's shared hosting runs Apache without the `try_files` directive set for `.html` fallbacks. The static export generates `.html` files but the web server does not map URL paths to them automatically.

**Prevention:**
1. Set `trailingSlash: true` in `next.config.js`. This causes Next.js to generate `/about/index.html` instead of `/about.html`, which Apache can serve when a request hits `/about/` because it looks for `index.html` in the directory.
2. Add an `.htaccess` file at the project root that handles fallback for SPA-style routes:

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]
```

3. Test every route with a hard browser refresh before marking the deployment complete.

---

### Pitfall 4.2: `next/image` Breaks the Static Export

**What goes wrong:** The default `next/image` component requires a server-side image optimization API (`/_next/image?url=...`). When you use `output: 'export'`, this API does not exist. The result is broken images in production, even though they render fine in `next dev`.

**Why it happens:** Next.js documentation does not prominently warn about this. The error is silent during dev and breaks in production.

**Prevention:**
Option A (recommended for this project): Use `next-image-export-optimizer`. It runs at build time and generates optimized WebP/AVIF variants of all local images, replacing the server-side optimization. Install and configure in `next.config.js` before writing any `<Image>` usage.

Option B: Use standard HTML `<img>` tags with manual sizing for images that don't need optimization (e.g., portraits where exact dimensions are known). This removes the abstraction but avoids the build configuration.

Never ship with unconfigured `next/image` in a static export without verifying production output.

---

### Pitfall 4.3: Missing `basePath` or `assetPrefix` When Deploying to a Subdirectory

**What goes wrong:** If the site is deployed to a subdirectory (e.g., `hostinger.com/kolabore/`) instead of the domain root, all asset paths (`/_next/static/...`) break because they still point to `/`.

**Prevention:** If deployment is to the domain root (most likely for this project), this is a non-issue. Confirm the target URL structure with the client before configuring `basePath`. If a subdirectory is used, set both `basePath` and `assetPrefix` in `next.config.js` to the subdirectory path.

---

### Pitfall 4.4: `output: 'export'` Silently Drops Unsupported Features

**What goes wrong:** Using App Router features that are incompatible with static export — Server Actions, Route Handlers, API routes, dynamic rendering with cookies/headers — causes the build to fail or silently produce broken pages.

**Why it happens:** Some Next.js documentation examples assume a Node.js server. Static export mode is more restrictive and the restrictions are scattered across the docs.

**Prevention:** For this project, all pages are static and content is hard-coded. The only dynamic behavior is the contact form (handled by a third-party service, not an API route). Avoid any use of `cookies()`, `headers()`, `fetch` inside Server Components at request time, or Route Handlers. If a feature requires a server, it is out of scope for this deployment target.

---

## 5. Performance Pitfalls

### Pitfall 5.1: Hero Image Not Optimized — Kills LCP

**What goes wrong:** A 3–5MB hero image uploaded directly from a camera or design tool. Even with fast internet, this causes LCP (Largest Contentful Paint) to fail the Core Web Vitals threshold (should be under 2.5s).

**Prevention:**
- Export hero images at 1920px width maximum, saved as WebP at 75–80% quality. Target under 200KB.
- Use `next-image-export-optimizer` to automate this at build time.
- Provide a `priority` prop on the hero `<Image>` component so the browser preloads it immediately.
- On mobile, serve a smaller crop (750px wide). Use `srcset` or the `sizes` prop.

---

### Pitfall 5.2: Google Fonts Loaded via `<link>` in `_document.js`

**What goes wrong:** Loading Google Fonts via an external `<link rel="stylesheet">` tag causes a render-blocking external network request. On slow mobile connections, text is invisible (FOIT) or swaps visually (FOUT) after the font arrives.

**Why it happens:** This is the approach shown in most older Next.js tutorials. The modern `next/font` API did not exist until Next.js 13.

**Prevention:** Use `next/font/google` exclusively. This downloads the font at build time, self-hosts it with the static files, and automatically injects `font-display: swap` and the correct `size-adjust` fallback to eliminate CLS. No external font network request at runtime.

---

### Pitfall 5.3: Tailwind CSS Purge Not Configured — Bloated CSS

**What goes wrong:** In development, Tailwind loads ~3MB of CSS. If the production build does not properly tree-shake unused classes, this bloat ships to users.

**Prevention:** In Next.js 13+ with Tailwind CSS v3+, configure `content` in `tailwind.config.js` to include all component files:

```js
content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
```

Run `next build` and check the output CSS size in `.next/static/css/`. A well-configured Tailwind build for a 6-page site should produce under 20KB of CSS.

---

### Pitfall 5.4: Executive Portrait Photos Not Optimized

**What goes wrong:** Portrait photos from `docs/imagens clientes *` are likely high-resolution source files (JPEG, possibly 2–5MB each). The Executivos page, with multiple portraits, can easily load 20–30MB of images if they are used without optimization.

**Prevention:** Resize portraits to the display dimensions (e.g., 400x400px for card view) before or during build. Use `next-image-export-optimizer`. Provide WebP format. Lazy-load all portraits below the fold (Next.js `<Image>` does this by default for non-`priority` images).

---

## 6. Contact Form Pitfalls

### Pitfall 6.1: Formspree Emails Landing in Spam (Outlook/Microsoft 365)

**What goes wrong:** Formspree sends emails from its own domain. Microsoft 365 / Outlook quarantines Formspree's domain aggressively, and emails do not even appear in the Junk folder — they disappear silently. The client thinks no one is contacting them.

**Prevention:**
- Confirm with the client which email client they use. If it is Microsoft 365 or Outlook, test the full flow (form submission → received email) before launch.
- Add Formspree's sending domain to the Microsoft 365 safe senders list.
- As a secondary measure, configure Formspree to CC a Gmail address as a backup mailbox.
- Consider using Formspree's paid plan (Basic: $10/month) which enables a custom reply-to address and higher deliverability controls.

---

### Pitfall 6.2: No Honeypot — Bot Spam Overwhelms the Inbox

**What goes wrong:** An unprotected contact form receives dozens of automated spam submissions per day within weeks of the site being indexed. The client dismisses the form as useless.

**Prevention:** Formspree provides a built-in `_gotcha` honeypot field. Enable it by adding a hidden field to the form. Also use Formspree's spam filtering rules (available on free tier) to block submissions with certain patterns (e.g., URLs in the message body, non-PT content). For a premium site where form traffic is low but quality is critical, recaptcha v3 (invisible) is also an option via Formspree's integration.

---

### Pitfall 6.3: No Confirmation — Submitter Unsure if Form Worked

**What goes wrong:** Form submits and... nothing visible happens. The user submits again, creating duplicates. Or they assume the form is broken and don't follow up.

**Prevention:** Implement a visible success state on submit (replace form with a confirmation message). Formspree supports redirect to a custom thank-you URL — use this to show a properly styled "Mensagem enviada. Entraremos em contato em breve." state within the site layout rather than Formspree's default page.

---

### Pitfall 6.4: Form Endpoint Exposed, Attracting Spam Before Launch

**What goes wrong:** Formspree endpoint is committed to the repository and the site is indexed by bots before official launch. Endpoint starts receiving spam.

**Prevention:** Keep the Formspree endpoint in an environment variable (`NEXT_PUBLIC_FORMSPREE_ID`). For a static export, `NEXT_PUBLIC_` variables are inlined at build time, which is acceptable. The form ID is still exposed in the HTML source on production — this is unavoidable with client-side forms — but delaying exposure until the actual launch reduces the window for early spam ingestion.

---

## 7. SEO Pitfalls

### Pitfall 7.1: All Pages Share the Same Title and Meta Description

**What goes wrong:** Every page has `<title>Kolabore | Consultoria Executiva</title>` and a single generic meta description. Search engines see 6 pages competing against each other with identical signals, and cannot understand what each page covers.

**Prevention:** Each page needs a unique `<title>` (50–60 characters) and unique `<meta name="description">` (150–160 characters). In Next.js App Router, use `generateMetadata()` per page. Suggested pattern:

- Homepage: "Kolabore — Consultoria Executiva para Alta Liderança"
- Expertise: "Expertise Kolabore — Supply Chain, Procurement e Governança"
- Executivos: "Executivos Kolabore — Time Sênior com 35 Anos de Experiência"

---

### Pitfall 7.2: Missing `og:image` — Ugly Share Previews

**What goes wrong:** When the URL is shared on LinkedIn (the primary channel for this audience), the preview card shows no image or a broken icon. For a firm whose target users are sharing links with board members and CEOs, a broken link preview signals carelessness.

**Prevention:** Create a 1200x630px Open Graph image for the homepage (and ideally one per major page). Set `og:image`, `og:title`, `og:description` in the metadata. Next.js supports dynamic OG image generation via `next/og`, but for a static export the simplest approach is a static image file committed to `public/og-image.jpg`.

---

### Pitfall 7.3: No `Organization` Schema Markup

**What goes wrong:** Google cannot easily extract structured information (company name, address, URL, contact info) from the site. Rich results in search — which increase click-through rate — are unavailable.

**Prevention:** Add a `<script type="application/ld+json">` block with `Organization` schema to the homepage layout. Minimum required fields: `name`, `url`, `logo`, `contactPoint`. This is a 15-minute implementation with significant long-term SEO benefit.

---

### Pitfall 7.4: Portuguese-language Site Without Explicit Language Declaration

**What goes wrong:** The HTML `<html>` tag does not declare `lang="pt-BR"`. Screen readers default to wrong language pronunciation. Search engines may mis-classify the language of the page content.

**Prevention:** Set `lang="pt-BR"` on the root `<html>` element. In Next.js App Router, this is done in `app/layout.tsx`:

```tsx
<html lang="pt-BR">
```

Also set `<meta charset="UTF-8">` to handle Portuguese accented characters correctly — Next.js includes this by default but verify it is not being overridden.

---

### Pitfall 7.5: Clean URLs Not Configured

**What goes wrong:** Routes render as `/expertise.html` or `/about/index.html` in the browser address bar due to improper static export configuration. These URLs are less shareable, harder to read, and the `.html` extension reduces perceived quality for a premium brand.

**Prevention:** Use `trailingSlash: true` in `next.config.js` (see Technical Pitfall 4.1). Combined with Hostinger's Apache serving `index.html` from directories, this produces clean URLs like `kolabore.com.br/expertise/` in the browser without exposing the `.html` extension.

---

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Homepage build | Too much copy, PPT ordering | Enforce per-section word limits; map by commercial journey |
| Executivos page | Launching without portraits | Treat portraits as blocking dependency, not decoration |
| Contact form | Spam and Outlook deliverability | Test with client's actual email client before launch |
| Image processing | Source photos from docs/ unoptimized | Batch-process portraits before component work begins |
| Static export build | `next/image` breaking in production | Configure `next-image-export-optimizer` before first image usage |
| Hostinger deployment | Route 404s on refresh | Test `.htaccess` + `trailingSlash` before marking deployment done |
| Copy review | Defaulting to "consultorês" | Run substitution test on every heading and paragraph |

---

## Sources

- Next.js static export official docs: https://nextjs.org/docs/pages/guides/static-exports
- Next.js `trailingSlash` config: https://nextjs.org/docs/app/api-reference/config/next-config-js/trailingSlash
- GitHub issue — static export 404 on refresh: https://github.com/vercel/next.js/discussions/10522
- GitHub issue — `trailingSlash: true` with `output: 'export'`: https://github.com/vercel/next.js/issues/68215
- `next-image-export-optimizer`: https://github.com/Niels-IO/next-image-export-optimizer
- Hostinger `.htaccess` fix for React routing: https://sujayrajboregouda.in/blogs/fixing-react-routing-issue-on-hostinger-a-simple-htaccess-solution
- Formspree spam prevention: https://help.formspree.io/hc/en-us/articles/360017735154-How-to-prevent-spam
- Formspree deliverability issues: https://help.formspree.io/hc/en-us/articles/115008379388-I-m-not-receiving-emails
- Next.js `next/font` eliminating FOUT/CLS: https://vercel.com/blog/nextjs-next-font
- Core Web Vitals optimization for Next.js: https://makersden.io/blog/optimize-web-vitals-in-nextjs-2025
- Stock photos vs. real photography trust signals: https://groupm7.com/blog/post/do-customers-distrust-websites-with-stock-photos/
- Consulting website failure modes: https://www.consultingsuccess.com/consulting-website
- Brazilian corporate jargon: http://escreverbem.com.br/corporatives-conheca-35-termos-de-gestao-empresarial/
- SEO errors in Brazilian professional sites: https://incuca.net/erros-de-seo-tecnico/
