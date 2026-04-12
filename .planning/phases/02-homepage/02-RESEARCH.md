# Phase 2: Homepage — Research

**Researched:** 2026-04-11
**Domain:** Next.js 16 App Router · Tailwind CSS v4 · Motion 12 · Formspree · Portuguese executive copywriting
**Confidence:** HIGH

---

## Summary

Phase 2 builds the complete homepage for the Kolabore institutional site on top of a finished Phase 1 foundation. The scaffold is fully operational: Next.js 16 with `output: 'export'`, Tailwind v4 tokens in `src/styles/globals.css`, `AnimationProvider` with `LazyMotion` + `domAnimation` already wired in `layout.tsx`, `Container` and `Section` layout primitives, `Header` with scroll-transparent-to-solid behavior, and typed data in `src/data/`. The homepage placeholder (`src/app/page.tsx`) is ready to receive 8 section components.

The technical complexity of this phase is LOW to MEDIUM — the infrastructure decisions are locked, the data is populated, and the patterns are well-established. The actual difficulty is **copywriting quality**: every section heading must pass the substitution test (text that could appear unchanged on a competitor site must be rewritten), and the commercial journey order (hook → orient → trust → act) must be enforced against the temptation to follow the PPT chapter order.

The one structural decision that requires a judgment call before writing: `TeamPreviewSection` renders against `src/data/team.ts`, which is intentionally empty until Phase 4 (portrait content gate). This section must degrade gracefully or be conditionally hidden rather than rendering empty card shells.

**Primary recommendation:** Write all copy (Plan 2.1) before building any component that depends on it. Substitution-test every heading. Build sections in parallel pairs (2.2 + 2.3), then compose (2.4), then animate (2.5). Never render the TeamPreview section if `executives.length === 0`.

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| HOME-01 | `HeroSection` — problem-first headline, subheadline, CTA primário "Converse com a Kolabore", CTA secundário "Conheça nossa atuação" | Hero patterns, dual-CTA layout, Cormorant Garamond at display scale |
| HOME-02 | `AudienceSection` — blocos: CEOs, diretores, acionistas, conselhos, empresas em transformação | Short-label block pattern, no prose, quick scan format |
| HOME-03 | `ChallengesSection` — desafios como perguntas executivas, não lista de serviços | Challenge-framing copy patterns, Russell Reynolds reference, card grid |
| HOME-04 | `FormatsSection` — formatos de atuação como cards escanáveis | `formats` data already typed; card component pattern |
| HOME-05 | `SenioritySection` — métricas de senioridade (~35 anos, nacional/internacional), sem exagero visual | Aggregate metric block, stat display pattern |
| HOME-06 | `TeamPreviewSection` — preview do time com fotos, especialidades, credencial | Empty-state handling for `executives: []`; Phase 4 gate |
| HOME-07 | `AreasSection` — cards de 8 áreas de atuação | `areas` data already typed; 4-col grid pattern |
| HOME-08 | `ContactSection` — formulário Formspree na homepage, CTA "Agende uma conversa" | Formspree native fetch pattern, honeypot, success state |
| DESIGN-01 | Design premium e sóbrio — ink/mist/gold tokens aplicados com parcimônia | Token system fully in place in globals.css |
| DESIGN-02 | Site responsivo — mobile e desktop | Mobile-first Tailwind grid patterns per section type |
| DESIGN-03 | CTA visível ao longo da navegação | Header CTA already present; mid-page placement after TeamPreview |
| DESIGN-04 | Animações discretas via Motion LazyMotion — apenas scroll-entry fades | `m` from `motion/react-m`, `whileInView`, `viewport={{ once: true }}` |
| DESIGN-05 | Todos os textos redigidos pelo Claude aplicando o substitution test | Copy patterns, register guide, PRD examples |
</phase_requirements>

---

## Standard Stack

### Core (already installed — no new installs required for Plans 2.1–2.5)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 16.2.3 | App Router, static export | Already locked — `output: 'export'` |
| React | 19.2.4 | Component model | Already locked |
| Tailwind CSS | v4 (via `@tailwindcss/postcss`) | Utility styling with design tokens | Already locked — tokens in globals.css |
| motion | 12.38.0 | LazyMotion scroll animations | Already installed and wired |
| next-image-export-optimizer | 1.20.1 | Static image optimization | Already installed and configured |

### Needs Installation for Plan 2.4

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @formspree/react | 3.0.0 (current) | Contact form state management | Plan 2.4 `ContactSection` |

**Installation:**
```bash
npm install @formspree/react
```

**Version verification:** `@formspree/react@3.0.0` confirmed current via `npm view @formspree/react version`.

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| `@formspree/react` | Native `fetch` POST to Formspree | Native fetch works and avoids a dependency, but `@formspree/react` provides typed state (`state.succeeded`, `state.submitting`, `state.errors`) for free — worth the 3KB |
| `m` from `motion/react-m` | `motion` from `motion/react` | Full `motion` import loads ~25-30KB; `m` with existing `LazyMotion` loads ~5KB. Always use `m` |

---

## Architecture Patterns

### Homepage Component File Layout

```
src/
├── app/
│   └── page.tsx               ← imports and composes all 8 sections
├── components/
│   ├── layout/                ← Container, Section, Header, Footer (done)
│   ├── providers/
│   │   └── AnimationProvider.tsx  ← LazyMotion already wired (done)
│   ├── ui/                    ← NEW: shared primitives for Phase 2
│   │   ├── Button.tsx         ← primary (gold) + secondary (text link) variants
│   │   └── SectionHeading.tsx ← eyebrow label + h2 + optional subheadline
│   └── sections/              ← NEW: one file per homepage section
│       ├── HeroSection.tsx
│       ├── AudienceSection.tsx
│       ├── ChallengesSection.tsx
│       ├── FormatsSection.tsx
│       ├── SenioritySection.tsx
│       ├── TeamPreviewSection.tsx
│       └── AreasSection.tsx
│       └── ContactSection.tsx
```

### Pattern 1: Section with LazyMotion Scroll-Entry Fade

Every section component that uses scroll animation must:
1. Include `'use client'` directive at the top
2. Import `m` from `motion/react-m` (NOT from `motion/react`)
3. Wrap animating elements in `m.div` (or `m.section`, etc.) with `whileInView` + `viewport={{ once: true }}`

The `LazyMotion` context is already provided globally by `AnimationProvider` in `layout.tsx` — no need to add it in individual components.

```tsx
// Source: motion.dev/docs/react-reduce-bundle-size
'use client';
import * as m from 'motion/react-m';

export function FadeInSection({ children }: { children: React.ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </m.div>
  );
}
```

**Critical import note:** `m` must come from `"motion/react-m"`, confirmed by the motion 12.x package exports. The `AnimationProvider` correctly uses `LazyMotion` and `domAnimation` from `"motion/react"` — do not change that. Individual components use `m` from `"motion/react-m"`.

### Pattern 2: Staggered Children Animation

For grids of cards (AreasSection, FormatsSection, ChallengesSection), stagger the entrance:

```tsx
// Source: motion.dev/docs/react-motion-component (whileInView + variants)
'use client';
import * as m from 'motion/react-m';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Usage:
<m.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
>
  {items.map(item => (
    <m.div key={item.id} variants={itemVariants}>
      {/* card content */}
    </m.div>
  ))}
</m.div>
```

### Pattern 3: Reusing Container + Section Primitives

Every section uses the existing `Section` and `Container` components. The hero is the only exception — it must be full-viewport-height and handle the header overlap.

```tsx
// Standard section composition
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

export function AreasSection() {
  return (
    <Section id="areas" className="bg-carbon">
      <Container>
        <SectionHeading eyebrow="Expertise" title="Áreas de atuação" />
        {/* grid content */}
      </Container>
    </Section>
  );
}
```

`Section` provides `py-20 lg:py-28` by default. Override with `className` prop when needed.

### Pattern 4: Hero Section Layout

The hero requires special treatment — it does NOT use `Section`. It needs `min-h-screen`, `pt-16 lg:pt-20` to clear the fixed header (which is `h-16 lg:h-20`), and a dark background to blend with the header transparency.

```tsx
// Hero does not use Section — needs full-viewport control
export function HeroSection() {
  return (
    <div className="min-h-screen bg-ink flex items-center pt-16 lg:pt-20">
      <Container>
        <div className="max-w-4xl py-20 lg:py-28">
          {/* headline, subheadline, CTAs */}
        </div>
      </Container>
    </div>
  );
}
```

Background: `bg-ink` (`#0d0d0d`) is the correct choice — it matches the body background and the header's post-scroll state. No gradient needed. The header's transparent state over the hero already creates the desired floating effect.

### Pattern 5: Dual CTA Layout

```tsx
// Primary: gold button. Secondary: text link with arrow or underline.
<div className="flex flex-col sm:flex-row gap-4 mt-8">
  <Link
    href="/contato"
    className="inline-flex items-center justify-center px-6 py-3 bg-gold text-ink text-sm font-medium hover:bg-gold-hover transition-colors duration-200 rounded-[var(--radius-button)]"
  >
    Converse com a Kolabore
  </Link>
  <Link
    href="/engajamento"
    className="inline-flex items-center justify-center px-6 py-3 text-silver text-sm hover:text-mist transition-colors duration-200 border border-slate/40 hover:border-slate/70 rounded-[var(--radius-button)]"
  >
    Conheça nossa atuação
  </Link>
</div>
```

### Pattern 6: ContactSection with Formspree

`@formspree/react@3.0.0` provides `useForm` hook. The `NEXT_PUBLIC_FORMSPREE_ID` env var is read at build time.

```tsx
// Source: formspree.io/react docs — @formspree/react@3.0.0
'use client';
import { useForm, ValidationError } from '@formspree/react';

export function ContactSection() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? '';
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <Section id="contato">
        <Container>
          <p className="font-display text-h2 text-mist">Mensagem recebida.</p>
          <p className="text-silver mt-4">
            Entraremos em contato em breve.
          </p>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="contato" className="bg-carbon">
      <Container>
        <form onSubmit={handleSubmit} className="max-w-xl">
          {/* Honeypot — hidden from real users, visible to bots */}
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            aria-hidden="true"
            tabIndex={-1}
            autoComplete="off"
          />
          {/* form fields */}
          <button
            type="submit"
            disabled={state.submitting}
            className="..."
          >
            {state.submitting ? 'Enviando...' : 'Agende uma conversa'}
          </button>
        </form>
      </Container>
    </Section>
  );
}
```

**Honeypot field:** Formspree recognizes `name="_gotcha"`. When filled by bots, the submission is silently discarded. Style it with `className="hidden"` rather than `display:none` inline style — Tailwind's `hidden` class uses `display: none` in the stylesheet, which is harder for bots to detect than inline style.

**NEXT_PUBLIC_FORMSPREE_ID:** Defined in `.env.local` (not committed). Must also be set in Hostinger hosting environment at Phase 5 deploy. If the variable is missing, the form renders but submissions go nowhere — log a console warning in development mode.

### Pattern 7: TeamPreviewSection Empty-State Handling

`executives` array in `src/data/team.ts` is intentionally empty until Phase 4. The component must handle this gracefully.

**Decision: Conditionally omit the section entirely when executives is empty.**

Rationale from FEATURES.md: "An empty section destroys credibility faster than no section." A team section with no team members directly contradicts the trust goal.

```tsx
// src/components/sections/TeamPreviewSection.tsx
import { executives } from '@/data/team';

export function TeamPreviewSection() {
  // Phase 4 gate: do not render with empty team data
  if (executives.length === 0) return null;

  return (
    <Section id="time">
      {/* team cards */}
    </Section>
  );
}
```

This is the correct approach over placeholder/skeleton cards. The homepage composition in `page.tsx` includes `<TeamPreviewSection />` — it simply renders nothing until Phase 4 populates the data.

### Anti-Patterns to Avoid

- **`motion` from `motion/react` in section components:** Load the full bundle instead of using `m` from `motion/react-m` + the existing LazyMotion context
- **Skeleton/placeholder cards for the team section:** Renders empty card shells that signal "this team section was templated" and directly contradicts the trust goal
- **Hero with gradient overlay:** Not needed — `bg-ink` is already near-black; a gradient adds visual noise with no benefit
- **`Section` wrapper on the hero:** The `Section` component adds `py-20` which conflicts with the hero's `min-h-screen` + header-clearing approach
- **`display:none` inline on honeypot field:** Use Tailwind's `hidden` class instead — more robust against bot detection of inline styles
- **CTAs after every section:** The PRD and FEATURES.md are explicit — executive audience reads this as desperation. Place CTAs at hero and after TeamPreview only

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Form state (submitting, success, errors) | Custom `useState` + `fetch` form handler | `useForm` from `@formspree/react` | Handles optimistic state, validation errors, submission status — 10 lines vs. 60+ |
| Scroll-triggered visibility | `IntersectionObserver` hook from scratch | `whileInView` + `viewport` on `m.*` components | Motion handles SSR safety, threshold config, and cleanup |
| Stagger animation timing | Manual `setTimeout` delays | `staggerChildren` in container `variants` | Declarative, no timing bugs, respects reduced-motion |
| Design token color values | Hardcoded `#b8933f` inline | `bg-gold`, `text-gold`, `text-mist`, `bg-ink` Tailwind utilities | Tokens already in globals.css — use utilities everywhere |

**Key insight:** The animation and form infrastructure is fully provided. Phase 2's hand-rolled complexity is zero on the tech side. All complexity is in copy quality and component composition.

---

## Copy Patterns

### The Substitution Test

Before finalizing any heading or paragraph: copy the text, mentally replace "Kolabore" with a competitor's name. If the text still works unchanged, rewrite it. This test is non-negotiable per DESIGN-05 and the PRD.

Examples that fail the test:
- "Resultados extraordinários para empresas que buscam crescimento" — could appear on any consulting site
- "Nossa expertise em gestão e estratégia" — completely interchangeable
- "Soluções inovadoras para o seu negócio" — fails instantly

Examples that pass:
- "Consultoria executiva de alto valor para a alta gestão" — anchored to Kolabore's specific positioning
- "Executivos seniores que já operaram os problemas que você enfrenta" — specific claim
- "Senioridade executiva acumulada de ~35 anos em grandes empresas" — a specific, attributable metric

### Hero Headline Structure

The PRD provides the validated example: "Transformação de negócio com senioridade executiva"

Structure options (all problem-first, tested against FEATURES.md analysis):

**Option A — Noun phrase, dense:**
"Transformação de negócio com senioridade executiva."
*Subheadline:* "Apoiamos líderes e acionistas em desafios críticos de operação, cadeia de valor, governança e crescimento sustentável."

**Option B — Tension + resolution (two-line):**
Line 1: "Desafios críticos de negócio exigem senioridade real."
Line 2: "A Kolabore é formada por executivos que já estiveram onde você está."

**Option C — Category declaration (Teneo model):**
"Consultoria executiva de alto valor para a alta gestão."
*Subheadline:* identifies the specific domains.

The Russell Reynolds model ("Your Leadership Challenges, Solved") adapted to Portuguese most naturally becomes the tension + resolution form. All three options pass the substitution test — pick one and commit. Do not combine.

### Challenge Question Format (HOME-03)

Challenges must be framed as executive questions, not service labels. The questions should name a situation the visitor already lives with.

From FEATURES.md (validated against PRD):
- "Como ganhar eficiência operacional sem perder controle?"
- "Como fortalecer a governança em momentos de mudança?"
- "Como redesenhar supply chain e procurement com menos risco?"
- "Como apoiar integrações e transformações complexas?"
- "Como destravar produtividade e execução?"

Additional challenges aligned to Kolabore's 8 areas:
- "Como elevar a qualidade e a segurança em operações reguladas?" (aligns to Qualidade e Food Safety)
- "Como estruturar procurement que capture valor real?" (aligns to Procurement)
- "Como ancorar inovação em resultado operacional?" (aligns to Inovação)

Select 5–6 for the homepage. All others belong on the `/expertise` inner page.

### Audience Block Format (HOME-02)

Short labels, not prose. The scan pattern is: visitor looks for their own role/situation, not a paragraph about who Kolabore serves.

```
CEOs                          Conselhos de Administração
Diretores e C-Level           Empresas em transformação
Acionistas e sócios           Operações em contextos complexos
```

Two-column grid on desktop, single column on mobile. No descriptions. No icons. Just the label, optionally with a thin gold rule above.

### Seniority Section Format (HOME-05)

Metric-driven, not adjective-driven. Specificity is the proof.

Stats to surface (from PRD section 7, validated):
- "~35 anos de senioridade executiva acumulada" (aggregate, not individual)
- "Carreiras construídas em grandes empresas nacionais e internacionais"
- "Experiência em contextos de transformação, crescimento e reestruturação"
- "Atuação transversal ao longo da cadeia de valor"

Format: 2–3 stat blocks with a supporting sentence each. No large counter animations (the PRD explicitly says "sem exagero visual").

### Portuguese Register Rules

From FEATURES.md (MEDIUM confidence, validated against PRD examples):

**Use:**
- Active verbs: "Apoiamos", "Atuamos", "Resolvemos" — not "Buscamos", "Acreditamos"
- Noun phrases as headings: "Nossa Atuação" not "Como nós atuamos"
- "Você" for direct address
- Short sentences: subject + verb + complement, no embedded subclauses

**Never use:**
- "Potencializar" (startup/coaching register)
- "Soluções inovadoras" (empty)
- "Resultados extraordinários" (inflation)
- "Parceria estratégica" (overused)
- "Expertise" as a standalone noun
- "Entregar valor" without specifying what value
- Gerunds as headline verbs: "Transformando negócios..."
- Exclamation marks anywhere on the site

---

## Common Pitfalls

### Pitfall 1: Wrong `m` Import Path

**What goes wrong:** Importing `m` from `motion/react` instead of `motion/react-m` loads the full motion bundle (~25KB) rather than the lazy-loaded fragment (~5KB), defeating `LazyMotion`.

**Why it happens:** Documentation examples often show `import { motion } from 'motion/react'`, and developers substitute `m` there habitually.

**How to avoid:** Always import `m` from `"motion/react-m"`. The AnimationProvider (already built) handles the `LazyMotion` context. Every section component that animates imports `m` like this:
```tsx
import * as m from 'motion/react-m';
```

**Warning signs:** Build output JS chunk for the homepage section larger than expected; `motion.js` appears separately in the bundle analysis.

### Pitfall 2: `use client` Boundary on Section Components

**What goes wrong:** Section components using `m.*` or `useForm` are Server Components by default in App Router. Forgetting `'use client'` causes a runtime error: "You're importing a component that needs createContext."

**Why it happens:** Next.js App Router defaults to Server Components. `m.*`, `useForm`, and any hook require a client boundary.

**How to avoid:** Any component file that imports from `motion/react-m` or `@formspree/react` MUST start with `'use client'`. The data files (`areas.ts`, `formats.ts`) are plain TypeScript — they can be imported in both server and client components.

**Warning signs:** Next.js error at build: "Error: ... must be a Client Component."

### Pitfall 3: Hero Overlap with Fixed Header

**What goes wrong:** The hero content is hidden behind the fixed `Header` (height `h-16` / 64px mobile, `lg:h-20` / 80px desktop). The heading appears clipped.

**Why it happens:** Adding `pt-20` to `page.tsx` (the placeholder does this) is correct for inner pages but the hero needs `min-h-screen` + padding to place the headline in the visual center.

**How to avoid:** The `HeroSection` must include `pt-16 lg:pt-20` minimum padding-top (matching header height) AND use `min-h-screen flex items-center` to vertically center content. Do not rely on the `<main className="pt-20">` from the placeholder — remove that wrapper or move it to inner pages only.

**Warning signs:** Hero headline is visually cut off at the top on first render; the headline starts at the very top edge of the viewport.

### Pitfall 4: Formspree ID Missing at Build Time

**What goes wrong:** `process.env.NEXT_PUBLIC_FORMSPREE_ID` is undefined in the static export — the form renders but submissions return a 404 or go to Formspree's default error page.

**Why it happens:** Static export reads `NEXT_PUBLIC_*` env vars at build time. If `.env.local` doesn't exist or the var is missing, the value is `undefined` at runtime.

**How to avoid:** In `ContactSection`, guard against the missing ID:
```tsx
const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? '';
if (!formId && process.env.NODE_ENV === 'development') {
  console.warn('[ContactSection] NEXT_PUBLIC_FORMSPREE_ID is not set');
}
```
In production, a missing ID means the form silently fails — flag this as a pre-launch checklist item.

**Warning signs:** Formspree submission results in a redirect to `formspree.io/error`; browser console shows `useForm` warning about empty form ID.

### Pitfall 5: "Consultorês" Copy Slipping Through

**What goes wrong:** Copy that sounds authoritative in isolation but contains phrases that could appear on any consulting site. Passes a first-read test, fails the substitution test.

**Why it happens:** AI-generated institutional copy defaults to safe, generic phrasing. The baseline for "sounds professional" is too low.

**How to avoid:** Run the substitution test mechanically on every heading and subheadline in Plan 2.1 before any component is built. If text could appear unchanged on BCG.com, Deloitte.com, or any random BR consultoria, rewrite it with more specific language: name the industries, name the challenges, name the conditions (transformação, reestruturação, alta complexidade).

**Warning signs:** Section heading contains any of: "soluções", "inovação" (standalone), "expertise" (standalone), "resultados", "transformação" without context, "parceria".

### Pitfall 6: Team Section with Empty State Visible

**What goes wrong:** `TeamPreviewSection` renders placeholder skeletons or empty card grid with "Conteúdo em breve" labels.

**Why it happens:** Default "build it and fill it later" approach.

**How to avoid:** `if (executives.length === 0) return null;` — the section is invisible until Phase 4 data is available. Homepage remains visually complete without it; the commercial journey still works: hero → audience → challenges → formats → seniority → areas → contact.

**Warning signs:** Team section renders with dashed borders, initials-in-circles, or "em breve" text.

---

## Code Examples

### Section Heading Component (shared UI)

```tsx
// src/components/ui/SectionHeading.tsx
interface SectionHeadingProps {
  eyebrow?: string;  // small label above title, e.g. "Expertise"
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-12 lg:mb-16 ${className}`}>
      {eyebrow && (
        <p className="text-gold text-label font-sans tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-h1 text-mist leading-tight">{title}</h2>
      {subtitle && (
        <p className="text-silver text-body mt-4 max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
```

### Button Component (shared UI)

```tsx
// src/components/ui/Button.tsx
import Link from 'next/link';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export function Button({ href, variant = 'primary', children, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 rounded-[var(--radius-button)]';
  const variants = {
    primary: 'bg-gold text-ink hover:bg-gold-hover',
    secondary: 'text-silver hover:text-mist border border-slate/40 hover:border-slate/70',
  };
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
```

### Area Card (for AreasSection)

```tsx
// Pattern: minimal card, no icon, description text, subtle border
// Token reference: bg-carbon, border-slate/30, text-mist, text-silver
<div className="bg-carbon border border-slate/30 rounded-[var(--radius-card)] p-6 hover:border-gold/40 transition-colors duration-200">
  <h3 className="font-display text-h3 text-mist mb-2">{area.label}</h3>
  <p className="text-silver text-small leading-relaxed">{area.description}</p>
</div>
```

### Responsive Grid Patterns

```tsx
// 4-column grid (AreasSection — 8 items)
// Mobile: 1 col, tablet: 2 col, desktop: 4 col
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"

// 3-column grid (FormatsSection, ChallengesSection)
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// 2-column grid (AudienceSection labels, SenioritySection stats)
className="grid grid-cols-2 md:grid-cols-3 gap-4"
```

### Minimal Section Scroll Animation (complete working pattern)

```tsx
// src/components/sections/AreasSection.tsx
// Source: motion.dev/docs/react-reduce-bundle-size + motion.dev/docs/react-motion-component
'use client';
import * as m from 'motion/react-m';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { areas } from '@/data/areas';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function AreasSection() {
  return (
    <Section id="areas" className="bg-ink">
      <Container>
        <SectionHeading eyebrow="Expertise" title="Áreas de atuação" />
        <m.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {areas.map((area) => (
            <m.div
              key={area.id}
              variants={itemVariants}
              className="bg-carbon border border-slate/30 rounded-[var(--radius-card)] p-6 hover:border-gold/40 transition-colors duration-200"
            >
              <h3 className="font-display text-h3 text-mist mb-2">{area.label}</h3>
              <p className="text-silver text-small leading-relaxed">{area.description}</p>
            </m.div>
          ))}
        </m.div>
      </Container>
    </Section>
  );
}
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `import { motion }` for all animated components | `import * as m from 'motion/react-m'` with `LazyMotion` wrapper | Motion 10+ (stable in 12.x) | Bundle: ~25KB → ~5KB gzipped |
| `tailwind.config.js` for custom tokens | `@theme` block in CSS (`globals.css`) | Tailwind v4 (Jan 2025) | No config file; tokens are native CSS vars |
| `@formspree/react` v2 `useForm(formId)` | v3.0.0 — same API, updated types | 2024 | No breaking changes in API surface |
| `framer-motion` package name | `motion` package (same code, renamed) | 2024 | Import from `motion/react` not `framer-motion/react` |
| `next/head` for metadata | `export const metadata` in `layout.tsx` / `page.tsx` | Next.js 13+ | Metadata injected at build time; no runtime script |

**Deprecated/outdated:**
- `framer-motion`: Still works as an alias but the canonical package is now `motion`. Already using `motion` in this project.
- `import { m } from 'motion/react'`: The `m` named export from `motion/react` may be available in some versions, but the official pattern per current docs is `import * as m from 'motion/react-m'`. Use the `motion/react-m` subpath.

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Build pipeline | Yes | (existing project) | — |
| npm | Package install | Yes | (existing project) | — |
| motion | Plans 2.2–2.5 | Yes | 12.38.0 | — |
| @formspree/react | Plan 2.4 | No (not yet installed) | 3.0.0 available | Native fetch (more code) |
| NEXT_PUBLIC_FORMSPREE_ID | Plan 2.4 | No (account not created) | n/a | Form renders, submissions fail silently |

**Missing dependencies with no fallback:**
- `NEXT_PUBLIC_FORMSPREE_ID`: Formspree account must be created and form ID set in `.env.local` before Plan 2.4 can be fully tested. The component can be built and rendered without it, but form submissions cannot be end-to-end tested.

**Missing dependencies with fallback:**
- `@formspree/react`: Can use native `fetch` + manual state management as a fallback, but `@formspree/react` is strongly preferred for the typed error/success state.

---

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | None installed — no test runner in `package.json` |
| Config file | None |
| Quick run command | `npm run build` (type-check + static export as proxy for correctness) |
| Full suite command | `npm run build && npm run lint` |

No unit test framework is installed. Phase 2 validation is build-based + manual visual inspection.

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | Notes |
|--------|----------|-----------|-------------------|-------|
| HOME-01 | HeroSection renders headline + 2 CTAs | visual | `npm run build` (no TS error) | Manual: check at 375px + 1440px |
| HOME-02 | AudienceSection renders 6 audience blocks | visual | `npm run build` | Manual scan |
| HOME-03 | ChallengesSection shows question-form text (not service labels) | copy review | `npm run build` | Manual substitution test |
| HOME-04 | FormatsSection renders all 8 formats from data | visual | `npm run build` | Data-driven — verify count |
| HOME-05 | SenioritySection shows metric blocks without animation excess | visual | `npm run build` | Manual |
| HOME-06 | TeamPreviewSection renders `null` when `executives.length === 0` | behavior | `npm run build` | Manual: confirm section absent from DOM |
| HOME-07 | AreasSection renders all 8 areas from `src/data/areas.ts` | visual | `npm run build` | Data-driven — verify count |
| HOME-08 | ContactSection submits form, shows success state | integration | manual only | Requires Formspree account + `.env.local` |
| DESIGN-01 | No hardcoded color values in components — all tokens | code review | `npm run lint` | Grep for `#b8933f`, `#0d0d0d`, etc. |
| DESIGN-02 | No layout breaks at 375px and 1440px | visual | manual | Chrome DevTools emulation |
| DESIGN-03 | CTA visible in hero + mid-page after trust sections | visual | manual | |
| DESIGN-04 | Scroll animations use `m.*` from `motion/react-m` | code review | `npm run build` | Grep for `motion/react-m` in sections |
| DESIGN-05 | No "consultorês" phrases survive in final copy | copy review | manual substitution test | |

### Sampling Rate
- **Per task commit:** `npm run build` — confirms TypeScript passes, static export produces `out/`
- **Per plan completion:** `npm run build && npm run lint` — full check
- **Phase gate:** Build clean + manual visual check at 375px and 1440px + substitution test on all headings + Formspree end-to-end test

### Wave 0 Gaps

No test framework is installed and none is required for this phase. Validation is build + visual + copy review:

- [ ] Create `.env.local` with `NEXT_PUBLIC_FORMSPREE_ID=<real id>` before Plan 2.4 testing
- [ ] Create `src/components/ui/` directory for `Button.tsx` and `SectionHeading.tsx` (Wave 0 of Plan 2.2)
- [ ] Create `src/components/sections/` directory (Wave 0 of Plan 2.2)
- [ ] Confirm `@formspree/react` is installed before Plan 2.4: `npm install @formspree/react`

---

## Open Questions

1. **Formspree account creation timing**
   - What we know: `NEXT_PUBLIC_FORMSPREE_ID` env var is required; account not yet created (STATE.md blocker)
   - What's unclear: Whether the client wants to own the Formspree account or have the developer create it
   - Recommendation: Build the ContactSection component without the real ID; use a development placeholder. Create the real account before Phase 5 end-to-end testing.

2. **Hero background: pure ink vs. subtle texture**
   - What we know: PRD says "fundo claro ou escuro, desde que muito sóbrio"; FEATURES.md says "no image required" and "abstract texture" is acceptable
   - What's unclear: Whether a very subtle grain texture over `#0d0d0d` would elevate the premium feel without complexity
   - Recommendation: Start with flat `bg-ink`. Add texture only if the hero feels too sparse after copy and layout are in place. Keep the decision reversible — one CSS background-image addition.

3. **AudienceSection visual treatment**
   - What we know: PRD lists 6 audience blocks as short labels; no description prose
   - What's unclear: Whether blocks should be just text labels, or labeled boxes with thin border, or items with gold accent rule
   - Recommendation: Start with thin-border boxes (`bg-carbon border border-slate/30`) as small label chips. Reassess visually when the section is in context.

---

## Sources

### Primary (HIGH confidence)
- `src/styles/globals.css` — all design tokens verified in project source
- `src/components/providers/AnimationProvider.tsx` — LazyMotion pattern verified from project source
- `src/data/areas.ts`, `src/data/formats.ts`, `src/data/team.ts` — data structures verified from project source
- `src/components/layout/{Container,Section,Header,Footer}.tsx` — layout primitives verified from project source
- `package.json` — all installed package versions verified from project source
- `node_modules/motion/package.json` exports — `motion/react-m` subpath confirmed present in motion 12.38.0
- [motion.dev — React Motion Component (whileInView, viewport)](https://motion.dev/docs/react-motion-component) — verified
- [motion.dev — Reduce Bundle Size (LazyMotion, m, domAnimation)](https://motion.dev/docs/react-reduce-bundle-size) — verified
- [formspree.io — Honeypot spam filtering](https://help.formspree.io/hc/en-us/articles/360013580813-Honeypot-spam-filtering) — `_gotcha` field name confirmed
- `.planning/research/FEATURES.md` — hero/team/CTA patterns, Portuguese copy register, challenge framing
- `.planning/research/STACK.md` — animation library rationale, Formspree setup, Tailwind v4 patterns
- `docs/previa_do_prd.md` — copy direction, section content, visual guidelines, substitution test requirement

### Secondary (MEDIUM confidence)
- [motion.dev — useInView](https://motion.dev/docs/react-use-in-view) — viewport.once confirmed; stagger pattern inferred from motion docs
- @formspree/react@3.0.0 API — `useForm`, `ValidationError`, `state.succeeded`, `state.submitting`, `state.errors` confirmed via npm version check and STACK.md documentation

### Tertiary (LOW confidence)
- None — all critical claims verified against project source or official docs

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — all packages are already installed or confirmed current via npm registry
- Architecture patterns: HIGH — verified against existing project layout primitives and motion/react-m package exports
- Copy patterns: HIGH (substitution test mechanics) / MEDIUM (specific copy options) — validated against PRD and FEATURES.md analysis, not against live A/B data
- Pitfalls: HIGH — most are verified against actual code in the project (import paths, header heights, env var behavior)

**Research date:** 2026-04-11
**Valid until:** 2026-10-01 (Tailwind v4 and motion 12.x are stable; Formspree API is stable)
