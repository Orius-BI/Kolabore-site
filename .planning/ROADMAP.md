# ROADMAP: v1 — Site Institucional Kolabore

**Milestone:** v1 — Site Institucional Kolabore
**Granularity:** Standard
**Coverage:** 38/38 v1 requirements mapped

---

## Phases

- [x] **Phase 1: Foundation** — Scaffold Next.js 15 static export with design system and all routes before any content work (completed 2026-04-12)
- [ ] **Phase 2: Homepage** — Full homepage communicating Kolabore's positioning in commercial journey order
- [ ] **Phase 3: Inner Pages** — Páginas internas expandindo cada tema introduzido na homepage
- [ ] **Phase 4: Executivos** — Página de executivos com fotos institucionais processadas — principal ativo de credibilidade
- [ ] **Phase 5: Contact, SEO & Deploy** — Site completo, otimizado e deployado no Hostinger com todos os requisitos validados

---

## Phase Details

### Phase 1: Foundation
**Goal**: Project scaffold is locked with correct static export configuration and design system before any content or UI work begins — build passes, all routes render, no silent production gotchas
**Depends on**: Nothing (first phase)
**Requirements**: FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05, FOUND-06, FOUND-07, FOUND-08, FOUND-09, FOUND-10

**Success Criteria** (what must be TRUE when this phase completes):
  1. `npm run build` completes without errors and produces an `out/` directory
  2. All 6 routes (`/`, `/kolabore`, `/expertise`, `/engajamento`, `/executivos`, `/contato`) render placeholder pages with no broken layout
  3. No `next/image` optimization warnings — `next-image-export-optimizer` is wired before any `<Image>` usage
  4. `out/.htaccess` is present with SPA fallback and HTTPS redirect rules
  5. Header scroll behavior (transparent → solid) works in browser; Footer renders on all pages

**Plans**: 5 plans

Plans:
- [x] 01-01-PLAN.md — Initialize Next.js project, configure static export, install next-image-export-optimizer
- [x] 01-02-PLAN.md — Configure Tailwind v4 design tokens in globals.css
- [x] 01-03-PLAN.md — Root layout fonts + lang + metadataBase + public/.htaccess
- [x] 01-04-PLAN.md — Layout components: Header, Footer, Container, Section
- [x] 01-05-PLAN.md — Route scaffold (all 6 pages) + typed data files (team, areas, formats)

**Notes**:
  - `next-image-export-optimizer` MUST be configured in Plan 1.1 before any `<Image>` component is written anywhere in the project. This is the highest-risk silent failure for static export.
  - Fonts must use `next/font/google` exclusively — never `<link>` to Google Fonts. Self-hosting via build time eliminates FOUT and the external network request.
  - Confirm deployment target is domain root (not subdirectory) before setting `basePath`.

**UI hint**: yes

---

### Phase 2: Homepage
**Goal**: Full homepage communicates Kolabore's positioning in commercial journey order — visitor understands who Kolabore is, why trust them, and how to engage within seconds
**Depends on**: Phase 1
**Requirements**: HOME-01, HOME-02, HOME-03, HOME-04, HOME-05, HOME-06, HOME-07, HOME-08, DESIGN-01, DESIGN-02, DESIGN-03, DESIGN-04, DESIGN-05

**Success Criteria** (what must be TRUE when this phase completes):
  1. Hero headline is problem-first (names the executive's situation, not Kolabore's capabilities) and passes the substitution test — it cannot be placed on a competitor's site unchanged
  2. Visitor scanning the page in 10 seconds can identify who Kolabore serves, what they solve, and how to contact them
  3. Contact form submits successfully and the submitter sees a styled confirmation message (not Formspree's default page)
  4. Page renders without layout breaks on 375px mobile and 1440px desktop
  5. All copy across all 8 sections is free of "consultorês" — no generic phrases that could apply to any consulting firm

**Plans**: 5 plans

Plans:
- [x] 02-01-PLAN.md — Write all homepage copy as TypeScript constants in src/content/homepage.ts (substitution-tested)
- [x] 02-02-PLAN.md — Build Button + SectionHeading UI primitives, HeroSection, AudienceSection; wire into page.tsx
- [ ] 02-03-PLAN.md — Build ChallengesSection, FormatsSection, SenioritySection; wire into page.tsx
- [ ] 02-04-PLAN.md — Build TeamPreviewSection (Phase 4 gate), AreasSection, ContactSection (Formspree); complete page.tsx
- [ ] 02-05-PLAN.md — Motion audit (motion/react-m imports), responsive layout passes at 375px and 1440px; build + lint

**Notes**:
  - Commercial journey order is mandatory: hook (hero) → orient (audience + challenges) → build trust (formats + seniority + team) → act (contact). Do not follow PPT chapter order.
  - Each section max 3–5 sentences. Homepage is a routing layer, not a content layer — deep content lives in inner pages.
  - Motion library: use `LazyMotion` + `domAnimation` from motion package to avoid loading the full bundle. Always import `m` from `motion/react-m`.
  - Formspree endpoint stays in `.env.local` as `NEXT_PUBLIC_FORMSPREE_ID`. Add to Hostinger environment at deploy time.
  - Plan 2.4 is not fully autonomous — includes a human checkpoint to verify contact form structure before Plan 2.5 proceeds.

**UI hint**: yes

---

### Phase 3: Inner Pages
**Goal**: Páginas /kolabore, /expertise e /engajamento expandem o que a homepage introduz — cada uma entrega profundidade suficiente para converter um visitante que quer entender antes de contatar
**Depends on**: Phase 2
**Requirements**: PAGE-01, PAGE-02, PAGE-03

**Success Criteria** (what must be TRUE when this phase completes):
  1. Each inner page adds substantive depth beyond its homepage introduction — a visitor who reads both does not see duplicate content
  2. Navigation between all 5 public pages (home + 3 inner + contato placeholder) works via header links with no broken routes
  3. Copy on all three pages passes the substitution test — none of the text could be lifted onto a generic consulting site unchanged
  4. Each page has a visible secondary CTA at the end of each major content section (not only at page bottom)

**Plans**:
  - **Plan 3.1** — Write copy for all three inner pages: `/kolabore` (quem somos, visão, proposta de valor, posicionamento, senioridade), `/expertise` (áreas expandidas, desafios por frente, temas críticos), `/engajamento` (formatos expandidos, arranjos customizados, forma de trabalho). Source from PRD and PPTs. Apply substitution test. *(should run before or parallel with component build)*
  - **Plan 3.2** — Build `/kolabore` page: vision statement, value proposition, positioning narrative, seniority proof, who-we-are section. *(after Plan 3.1 copy; parallel with 3.3)*
  - **Plan 3.3** — Build `/expertise` page: areas of focus expanded from homepage cards, critical challenge topics per area, framing as executive problems not service catalog. Uses `src/data/areas.ts`. *(parallel with 3.2)*
  - **Plan 3.4** — Build `/engajamento` page: engagement formats expanded from homepage, custom arrangement description, how the working relationship with client looks, project lifecycle. Uses `src/data/formats.ts`. Secondary CTA wired on each section. *(after 3.2 and 3.3)*

**Plans**: TBD
**UI hint**: yes

---

### Phase 4: Executivos
**Goal**: Página de executivos com fotos institucionais processadas — principal ativo de credibilidade do site; visitante deve sentir que conhece as pessoas antes de entrar em contato
**Depends on**: Phase 1 (layout system)

> **CONTENT GATE — BLOCKING DEPENDENCY**
>
> Phase 4 cannot begin until processed institutional portraits are available in `src/assets/team/`.
> Source photos exist in `docs/imagens clientes *` but must be:
> - Resized to display dimensions (minimum 400x400px for card view, 800x800px for full quality)
> - Exported as WebP at 75–80% quality (target <100KB per portrait)
> - Consistent color treatment applied across all portraits for visual unity
>
> Do not begin Plan 4.2 or 4.3 until portraits are processed and placed.
> A placeholder grid is acceptable for development layout work (Plan 4.1), but the page must not be deployed without real portraits.

**Requirements**: EXEC-01, EXEC-02, EXEC-03

**Success Criteria** (what must be TRUE when this phase completes):
  1. Page loads with real institutional portraits — no placeholders, silhouettes, or initials-in-circles
  2. Each executive card displays name, specialty tags (3–5), and one anchor credential
  3. Hover state on each card reveals additional information (additional specialties or credential detail) without layout shift
  4. JSON-LD `Person` schema for each executive validates cleanly in Google's Rich Results Test
  5. Executivos page loads in under 3 seconds on a mid-tier mobile device (portraits are WebP, lazy-loaded below the fold)

**Plans**:
  - **Plan 4.1** — Build the `/executivos` page layout: grid structure, card component shell (name, tags, credential, hover state), responsive layout for 2-col mobile / 3-col desktop. Use placeholder data from `src/data/team.ts`. *(can begin before portraits are ready)*
  - **Plan 4.2** — Process portraits from `docs/imagens clientes *`: resize, WebP export, color-grade for consistency. Place in `src/assets/team/`. *(CONTENT GATE — required before 4.3)*
  - **Plan 4.3** — Wire real portrait images into `src/data/team.ts`, populate full team data (name, bio, specialty tags, credentials). Replace placeholder data with real content. Verify `next-image-export-optimizer` produces WebP variants in `out/`. *(after 4.2)*
  - **Plan 4.4** — Implement `Person` JSON-LD schema per executive. Validate with Google Rich Results Test. *(after 4.3)*

**Plans**: TBD
**UI hint**: yes

---

### Phase 5: Contact, SEO & Deploy
**Goal**: Site completo, otimizado e deployado no Hostinger com formulário entregando no inbox do cliente e todas as rotas funcionando com refresh direto no navegador
**Depends on**: Phases 1–4 complete
**Requirements**: CONT-01, CONT-02, CONT-03, CONT-04, CONT-05, CONT-06, CONT-07, CONT-08

**Success Criteria** (what must be TRUE when this phase completes):
  1. Form submission from `/contato` is received in the client's actual inbox (tested with the client's real email address, not a test account) — including Microsoft 365 / Outlook if that is the client's email provider
  2. All 6 routes load correctly after a hard browser refresh on the live Hostinger domain (not just client-side navigation)
  3. Lighthouse mobile score ≥ 90 on the homepage
  4. OG image renders correctly when the homepage URL is pasted into LinkedIn's Post Inspector
  5. `sitemap.xml` and `robots.txt` are accessible at the domain root and `sitemap.xml` lists all 6 URLs

**Plans**:
  - **Plan 5.1** — Build `/contato` page: Formspree form with all fields (name, company, role, message), honeypot, styled success state, e-mail and phone display, executive CTA. Reuses form component from homepage `ContactSection`. *(parallel with 5.2)*
  - **Plan 5.2** — Write and apply SEO metadata: unique `title` (50–60 chars) and `meta description` (150–160 chars) per page using `generateMetadata()`. Add OG tags (`og:title`, `og:description`, `og:image`) to all 6 pages. Create static 1200x630px OG image committed to `public/og-image.jpg`. Add `Organization` JSON-LD schema to homepage. Verify `H1/H2/H3` heading hierarchy on all pages. *(parallel with 5.1)*
  - **Plan 5.3** — Generate `sitemap.xml` and `robots.txt` as part of the static build output. Verify both are present in `out/` after `npm run build`. *(after 5.1 and 5.2; parallel with 5.4)*
  - **Plan 5.4** — Run Lighthouse audit on homepage (mobile). Address any score below 90: image optimization, font loading, JS bundle size, CLS. *(parallel with 5.3)*
  - **Plan 5.5** — Deploy to Hostinger: upload `out/` contents to `public_html/` via FTP or file manager. Execute pre-launch checklist (see below). *(after 5.3 and 5.4)*

**Pre-Launch Checklist** (all items must pass before marking Phase 5 complete):
  - [ ] Hard-refresh test: visit each of the 6 routes directly in the browser (paste URL, hit Enter) — none return 404
  - [ ] `.htaccess` present at domain root and SPA fallback is active
  - [ ] Form deliverability test: submit the contact form and confirm receipt in client's actual inbox
  - [ ] Microsoft 365 / Outlook test if client uses that email provider — check spam/quarantine
  - [ ] OG image test: paste homepage URL into LinkedIn Post Inspector (https://www.linkedin.com/post-inspector/)
  - [ ] `sitemap.xml` accessible at `[domain]/sitemap.xml`
  - [ ] All 6 page titles are unique (check browser tab on each page)
  - [ ] No `console.error` in browser DevTools on any page
  - [ ] Mobile layout tested at 375px on a real device or DevTools emulation

**Plans**: TBD

---

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 2/5 | Complete    | 2026-04-12 |
| 2. Homepage | 2/5 | In Progress|  |
| 3. Inner Pages | 0/4 | Not started | - |
| 4. Executivos | 0/4 | Not started | - |
| 5. Contact, SEO & Deploy | 0/5 | Not started | - |

---

## Requirement Coverage

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1 | Pending |
| FOUND-02 | Phase 1 | Pending |
| FOUND-03 | Phase 1 | Pending |
| FOUND-04 | Phase 1 | Pending |
| FOUND-05 | Phase 1 | Pending |
| FOUND-06 | Phase 1 | Pending |
| FOUND-07 | Phase 1 | Pending |
| FOUND-08 | Phase 1 | Pending |
| FOUND-09 | Phase 1 | Pending |
| FOUND-10 | Phase 1 | Pending |
| HOME-01 | Phase 2 | Pending |
| HOME-02 | Phase 2 | Pending |
| HOME-03 | Phase 2 | Pending |
| HOME-04 | Phase 2 | Pending |
| HOME-05 | Phase 2 | Pending |
| HOME-06 | Phase 2 | Pending |
| HOME-07 | Phase 2 | Pending |
| HOME-08 | Phase 2 | Pending |
| DESIGN-01 | Phase 2 | Pending |
| DESIGN-02 | Phase 2 | Pending |
| DESIGN-03 | Phase 2 | Pending |
| DESIGN-04 | Phase 2 | Pending |
| DESIGN-05 | Phase 2 | Pending |
| PAGE-01 | Phase 3 | Pending |
| PAGE-02 | Phase 3 | Pending |
| PAGE-03 | Phase 3 | Pending |
| EXEC-01 | Phase 4 | Pending |
| EXEC-02 | Phase 4 | Pending |
| EXEC-03 | Phase 4 | Pending |
| CONT-01 | Phase 5 | Pending |
| CONT-02 | Phase 5 | Pending |
| CONT-03 | Phase 5 | Pending |
| CONT-04 | Phase 5 | Pending |
| CONT-05 | Phase 5 | Pending |
| CONT-06 | Phase 5 | Pending |
| CONT-07 | Phase 5 | Pending |
| CONT-08 | Phase 5 | Pending |

**Total v1 requirements: 38 / 38 mapped**

---

*ROADMAP created: 2026-04-11*
*Milestone: v1 — Site Institucional Kolabore*
