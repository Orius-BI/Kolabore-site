# Feature Landscape: Kolabore Institutional Website

**Domain:** Premium executive consulting institutional site
**Researched:** 2026-04-11
**Reference firms analyzed:** Russell Reynolds Associates, BCG, Deloitte BR, Teneo (via PRD analysis + extracted HTML)

---

## 1. Homepage Hero Patterns

### What premium firms actually do

Russell Reynolds' hero is the clearest model: a single declarative line that names the problem, not the firm.
"Your Leadership Challenges, Solved."
One sentence. Period. No adjectives.

Teneo's positioning is categorical: "The Global CEO Advisory Firm." Not "a firm that provides advisory services to CEOs." The name of the category. This works because their audience does not need to be told what advisory means — they just need to know whether Teneo belongs in the same conversation as them.

McKinsey uses purposeful constraint. The hero is minimal headline + subheadline. No aggressive conversion mechanics. No pop-ups. The absence of desperation is itself a signal of market position.

BCG's CSS variables expose their color system: near-black (`--black`) primary with green accent (`--accent-200`). The CSS animation classes exist but hero text is set without transitions — it simply appears. No fade-ins, no typewriter effects.

### Patterns that work for Kolabore

**Pattern A — Problem-first, firm second**
Lead with what the executive already feels, not with who Kolabore is.
"Desafios críticos de negócio exigem senioridade real."
Then identify: "A Kolabore é uma consultoria executiva formada por executivos que já estiveram onde você está."

This earns trust before it asks for anything.

**Pattern B — Category declaration**
If Kolabore can own a category cleanly, name it:
"Consultoria executiva de alto valor para a alta gestão."
Short, unapologetic, zero qualifier. No "uma das maiores" or "referência em".

**Pattern C — Tension + resolution (two-line structure)**
Line 1: states the tension the executive lives with.
Line 2: names the resolution Kolabore offers.
"Transformação de negócio exige quem já operou de dentro. / Senioridade executiva aplicada a desafios críticos."

### Layout recommendation

Full-width hero, dark or very deep neutral background (charcoal, near-black, or deep ink blue), white text. Large serif or condensed sans-serif for headline. No image required in the hero — if an image is used, it should be a treated abstract texture or a serious environmental photograph (industrial, boardroom-level), never stock photography of smiling people.

The CTA sits below the subheadline. One primary, optionally one secondary. Both use text — no icons, no arrows.

### Anti-patterns to avoid

- Hero carousels / rotating slides: eliminate decision. None of the reference firms use them.
- "Welcome to [Company Name]" as headline: tells the visitor nothing, signals generic.
- Hero with floating cards, counter animations, or numbers ticking up: works for SaaS, signals wrong category for executive consulting.
- Background video loops: acceptable only if the footage is documentary-quality and silent. Otherwise, avoid.
- Stock photography in the hero: if a person appears in the hero, it must be someone real from Kolabore.

---

## 2. Team / People Section Patterns

### How premium firms present partners

Russell Reynolds names their section "Connect with Our Experts" — framing it as a service rather than a bio page. The alt text on every portrait follows a strict pattern: "Portrait of [Name], leadership advisor at Russell Reynolds Associates." This signals institutional weight: the person holds a defined role within a named firm, not just a headshot of someone who works there.

RR's people page shows 500+ advisors across 25 countries. Kolabore cannot match scale. What Kolabore can match is depth. The compensation is not quantity — it is individual gravity.

### Pattern that works for Kolabore

Each executive card on the homepage needs exactly:
- Professional portrait (real institutional photography, not a LinkedIn crop or conference photo)
- Name, in large type
- 3–5 areas of specialization as a compact list (not a paragraph)
- One credentializing anchor: previous employer at C-level, or notable company association

What is NOT on the card:
- Academic titles (unless they are an industry marker, e.g., MBB firm or INSEAD)
- Lengthy bio text
- Generic descriptors ("resultado", "liderança", "visão")

The photo treatment matters more than most teams expect. Reference firms use:
- Consistent background (white, off-white, or dark — pick one and hold it across all)
- Consistent framing (head and shoulders, same crop ratio)
- Consistent lighting (neither flash-flat nor dramatic shadows)
- Business casual to formal dress — not "professional casual" that reads as a startup

If Kolabore's current photos are inconsistent across executives, shooting on a consistent background is a higher priority than any other visual element on the site.

### Hover state pattern

Hover reveals secondary content without navigating away. On desktop:
- Default state: portrait + name + title
- Hover state: name persists, portrait dims slightly (not disappears), 3–4 specialty tags appear, optional link to full profile

This is the Russell Reynolds / Teneo model. The hover state is informational, not decorative.

### Anti-patterns to avoid

- Round-cropped avatars: work on LinkedIn, signal consumer-product aesthetic on institutional sites
- Equal-sized grid mixing photos with an "Add Team Member" placeholder: reveals that the team section was templated
- Bio paragraphs on the card itself: text heavy on hover state breaks the scan pattern executives use
- Stock "professional" photography mixed with real photos: immediately obvious, destroys consistency

---

## 3. Services / Expertise Section Patterns

### The structural problem with "services"

BCG's homepage text makes this tension visible: they list capabilities (strategy, operations, M&A, etc.) but never use the word "services." Their framing: "Leaders face an uncertain landscape... BCG can help." The entry point is the leader's situation, not BCG's offering.

Russell Reynolds goes further. Their navigation organizes entirely by client outcome:
- "Find leaders?" — not "Executive Search"
- "Plan for succession?" — not "Succession Planning"
- "Lead business transformation?" — not "Transformation Advisory"

This matters because senior executives scan differently. They are not browsing services — they are checking whether you understand their problem.

### Pattern that works for Kolabore

Replace the "Services" or "O que fazemos" section with "Desafios que ajudamos a enfrentar."

Frame each item as a tension or challenge, not a capability:
- "Como ganhar eficiência operacional sem perder controle?" (not: "Eficiência Operacional")
- "Como fortalecer a governança em momentos de mudança?" (not: "Governança")
- "Como redesenhar supply chain e procurement com menos risco?" (not: "Supply Chain")
- "Como apoiar integrações e transformações complexas?" (not: "M&A e Integração")
- "Como destravar produtividade e execução?" (not: "Produtividade")

This pattern directly mirrors the PRD's stated goal: "trocar a lógica de 'lista de serviços' por 'desafios relevantes'."

Each challenge item can expand or link to the Expertise page. On the homepage, they appear as a clean grid of cards — no icons, just the question text and a thin horizontal rule or colored accent.

### Engagement model section (separate from expertise)

The "Como atuamos" section should NOT be merged with expertise. It answers a different question: not "what do you solve" but "how do we work together."

Frame this as flexibility, not format:
- Projetos de escopo definido
- Advisory recorrente
- Participação em comitês e conselhos
- Especialistas acionados por demanda
- Arranjos customizados

This section reassures the executive that Kolabore will not impose a standardized engagement. That is differentiating in the Brazilian executive market, where "consultoria" often implies a long, expensive, template-driven project.

### Anti-patterns to avoid

- Icon + heading + 50-word description grid (standard consulting template): signals generic
- Services listed alphabetically: suggests a menu, not expertise
- "Nossa metodologia" section with a proprietary process diagram: without proof, this reads as invented. Only use methodology language if there is a named, defensible methodology backed by real case evidence
- "Mais de X clientes atendidos" as a headline stat without context: hollow

---

## 4. Contact / CTA Patterns

### How premium firms handle CTAs

McKinsey uses essentially no aggressive CTA mechanics. Their footer has a small newsletter subscribe, soft-positioned. Their contact page headline is simply "Contact us." Conversion at McKinsey happens through relationships, not website CTAs.

Russell Reynolds uses "Get in Touch" as the primary CTA. On the contact page: "Complete the contact form and we will get back to you shortly. We look forward to connecting with you." Warm, not urgent. Implies parity — "we look forward to it" positions both parties as equals.

Bain's contact page opens with "Thanks for your interest" and "How can we help?" — again, conversational framing, removes the transactional feel.

### CTA copy recommendations for Kolabore

Primary CTA (hero + header + contact section):
**"Converse com a Kolabore"**

This is better than:
- "Entre em contato" — too generic, same as a support form
- "Solicite uma proposta" — premature, suggests a sales pipeline
- "Agende uma reunião" — sounds like a calendar tool integration
- "Fale conosco" — weak, used by every utility company

"Converse com a Kolabore" names the firm, implies a human conversation (not a form submission), and matches the register of the audience. C-level executives do not submit support tickets. They have conversations.

Secondary CTA (hero, used for users not ready to contact):
**"Conheça nossa atuação"**
Directs to the Expertise or Engajamento page. Gives a path for discovery without pressure.

### Contact form design

The form should be minimal: name, company, role, message, and optionally phone. Five fields maximum. No dropdowns for "what service are you interested in" — that forces premature categorization before a conversation.

The contact section text should be short and confident:
"Para desafios que exigem senioridade executiva real, comece com uma conversa."

### CTA placement strategy

- In the header: persistent "Contato" as a nav item, no button styling required in mobile — a simple link
- In the hero: primary CTA button
- Mid-page: after the team section (natural credibility peak)
- In the footer: repeated simply

Do NOT place CTAs after every single section. This is the pattern of landing pages built for volume conversion. The executive audience reads it as desperation.

### Anti-patterns to avoid

- "Solicite um orçamento" — positions Kolabore as a vendor
- "Comece agora" — sounds like a SaaS free trial
- Countdown timers, "limited availability" language, or any urgency mechanism
- Email capture for a "free resource" — inappropriate for this audience
- Chat widgets with auto-open — disqualifying for premium positioning

---

## 5. Navigation Patterns

### What premium firms use

Russell Reynolds navigation (from HTML): Search, Succession, Performance, Accelerators, Transformation, Board.
Six items. All outcome-oriented, not department-named. No "About" in the primary nav (that's in the footer or a sub-nav). No "Blog."

BCG's navigation structure from the extracted HTML shows a fully capability/industry organized nav, but BCG is a global firm with hundreds of practices. At Kolabore's scale, this level of taxonomy is counterproductive.

### Recommendation for Kolabore

The PRD's proposed navigation is sound:
**Kolabore | Expertise | Engajamento | Executivos | Contato**

Five items. Each names a conceptual category, not a department. This maps to the user's mental model: who is this firm, what do they know, how do they work, who are they, how do I reach them.

Navigation behavior:
- Fixed/sticky header on scroll: yes, standard for this type of site. Reduces bounce from users who want to navigate after reading mid-page content.
- Header background on scroll: transparent over hero, solid (white or very dark) once scrolled past hero section. This is the current best practice across all reference firms.
- Mobile: hamburger menu is acceptable. The menu should be full-screen overlay (not a sidebar slide), with items in large type. No nested submenus on mobile.
- Active state: subtle underline or color change on current page. Not a filled button.

The word "Kolabore" as a nav item (linking to the About/Company page) is intentional and smart: it signals that the firm is the content, not a product category.

### Anti-patterns to avoid

- Dropdown mega-menus: only appropriate at BCG/McKinsey scale
- "Início" or "Home" as a nav item — redundant, the logo handles that
- "Soluções" as a nav item — generic term that could mean anything
- Mobile nav that hides under small hamburger with tiny text
- Nav CTA button in "startup green" or contrasting color that breaks the sobriety

---

## 6. Social Proof Without Published Case Studies

### How firms with confidential client work establish credibility

This is the central challenge for Kolabore and for most executive advisory firms: clients are CEOs and boards who do not give public testimonials or appear in case studies. The engagement is confidential by nature.

The reference firms solve this differently based on scale:
- McKinsey: pure authority through published thought leadership (reports, frameworks, data). Volume of publication signals capability.
- Russell Reynolds: quantitative scale ("500+ advisors, 25 countries, 47 offices") plus named proprietary data products (CEO Turnover Index, CHRO Turnover Index). These reports are the social proof.
- Teneo: category ownership ("The Global CEO Advisory Firm"). The name of the category is itself the claim.

At Kolabore's scale, none of these are directly replicable. But the underlying logic is transferable.

### What works for Kolabore

**The team is the proof.** This is stated directly in the PRD and confirmed by how reference firms operate. The executive's name, prior C-level role, and company association is a credential, not a testimonial. It does not require client consent. It signals: "This person has operated at the level you operate."

Specific credibility anchors to surface:
- ~35 anos de senioridade executiva acumulada (aggregate, not individual)
- Carreiras em [Name recognizable companies without requiring client disclosure]
- Experiência nacional e internacional
- Atuação em contextos de transformação, crescimento e reestruturação

**Aggregate metrics that do not require case study disclosure:**
- Number of executives in the team
- Combined years of C-level/director experience
- Industries touched (supply chain, manufacturing, procurement, governance)
- Engagement types completed (if trackable and defensible)

**Named methodology or framework:** If Kolabore has a repeatable way it diagnoses or engages, naming it creates proprietary credibility. Not required for launch, but a future investment worth making.

**Sector/challenge specificity:** The more specifically Kolabore names the type of problem it solves, the more credible it appears without case studies. Saying "ajudamos empresas com supply chain" is weaker than "Atuamos em reestruturações de cadeia de fornecimento em contextos de alta variabilidade de demanda, com foco em redução de custo e manutenção de nível de serviço." Specificity implies experience.

### Anti-patterns to avoid

- Client logo section with logos the firm has NOT worked with (category: common, and disqualifying when discovered)
- Generic testimonials ("A Kolabore superou nossas expectativas" — Name, Company) without specific role, specific outcome, or specific context
- "Mais de X projetos entregues" without supporting specificity
- "Parceiros estratégicos" section listing large firms to imply association that doesn't exist
- Star ratings or review aggregator badges (Clutch, Google Reviews) — incompatible with premium executive positioning

---

## 7. Portuguese-Language Executive Copy Patterns

### The register problem

Brazilian executive Portuguese in formal institutional contexts occupies a specific register that is neither the inflated "consultorês" (vague jargon) nor the casual startup tone ("a gente acredita que"). Getting this right is harder than it looks.

**What the register sounds like:**
- Subject-verb-complement, short. No embedded subclauses.
- No exclamation marks anywhere on the site.
- Verbs in the affirmative, active voice: "Apoiamos", "Atuamos", "Entregamos", "Resolvemos" — not "Buscamos", "Acreditamos", "Apostamos"
- The first person plural (nós) used consistently for Kolabore, never "a empresa" in running copy
- Titles used sparingly: don't repeat "CEO", "diretor" in every sentence

**Phrases that work (from PRD examples, validated against reference firms' style):**
- "Apoiamos a alta gestão na transformação do negócio." — clear, direct, authority-forward
- "Senioridade executiva aplicada a desafios críticos." — noun phrase, dense, no verb needed
- "Atuação transversal na cadeia de valor." — technical but accessible
- "Mais lucratividade, menos risco, melhor execução." — tricolon, factual, zero adjective inflation
- "Projetos sob medida para contextos complexos." — "sob medida" carries weight in the B2B executive market

**Phrases to avoid:**
- "Soluções inovadoras" — empty
- "Resultados extraordinários" — inflation without proof
- "Parceria estratégica" — overused to the point of meaningless
- "Expertise" as a standalone noun without what follows — especially if used repeatedly
- "Potencializar" — startup/coaching register
- "Entregar valor" without specifying what value — says nothing
- Gerunds as headline verbs: "Transformando negócios..." — this is a brochure, not a press release
- "Estado da arte" — corporate-speak, not executive-speak

**On formality level:**
The appropriate formality for this audience is the equivalent of how a senior partner at a major Brazilian firm would write an executive summary or board memo. Formal enough to be taken seriously, clear enough to be understood without re-reading. Not stiff. Not warm. Precise.

"Você" is acceptable and preferred over the old "o senhor/a senhora" formalism, which now reads as awkward outside of specific sectors. "Você" is standard in high-level business communication in Brazil.

**Section header conventions:**
- Prefer noun phrases over complete sentences: "Nossa Atuação" not "Como nós atuamos"
- Avoid "Bem-vindo à" anything — this is 2010 web copy
- Avoid rhetorical questions as section headers unless they are genuinely challenge-framing: "Como entrar em contato?" is bad; "Qual o seu desafio?" is acceptable if the section delivers on it

---

## Table Stakes (Must Have at Launch)

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Full-screen hero with headline + subheadline + CTA | Establishes positioning in under 5 seconds | Low | Content is the hard part, not the tech |
| Fixed/sticky header with 5 nav items | Standard expectation for any institutional site | Low | Transparent-to-solid scroll behavior |
| Team section with real portraits and specialties | This is Kolabore's core differentiator — the people | Medium | Depends on photo quality; reshoot if needed |
| Challenge-framed expertise section | Communicates without listing services | Low | Copywriting is the work here |
| Short contact form (max 5 fields) | Conversion mechanism | Low | No complex CRM integration needed at launch |
| Responsive mobile layout | ~50%+ of institutional visitors use mobile | Medium | Premium sites do not have broken mobile layouts |
| Engagement model section | Answers "how do we work together" before it's asked | Low | Can be a simple list block |
| SEO metadata per page | Title, meta description, clean URLs | Low | Must be done at build time, not retrofit |

## Differentiators (High Value, Not Expected)

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Individual executive profile pages | Enables direct Google search for each partner's name | Medium | Schema markup matters here |
| Proprietary metrics/data section | "35 anos de senioridade executiva acumulada" as visual block | Low | Copywriting + design only, no data infrastructure |
| Challenge-question navigation (RR pattern) | Turns nav into a sales tool, not an index | Medium | Requires commitment to this framing system |
| WhatsApp or direct contact link | Matches how Brazilian executives actually communicate | Low | One line of integration |

## Anti-Features (Do Not Build at Launch)

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| Blog / Insights section | Requires ongoing content investment; empty section destroys credibility faster than no section | Add only when content pipeline exists |
| Client logo wall | Cannot be shown without client consent for this level of engagement; risks misrepresentation | Use aggregate experience metrics instead |
| "Our methodology" diagram | Appears invented without case evidence; the audience has seen too many 3-circle Venn diagrams | Name the approach in prose, not a graphic |
| Chatbot or live chat widget | Breaks premium positioning; says "we handle volume" | Real contact form + email/phone is correct |
| Cookie consent banner in aggressive style | Does not change legal requirement, but implementation can be minimal/elegant | Minimal, text-only consent bar at bottom |
| Multilingual toggle (PT/EN) | Distracts from the Brazilian market focus; adds maintenance overhead | Build PT-only at launch |
| Social media feed embeds | LinkedIn/Instagram feeds on the site pull the register down | Link to LinkedIn in footer only |
| Testimonials carousel | The content doesn't exist yet and the format is consumer-facing | Use team credentials instead |

---

## Feature Dependencies

```
Real institutional photography → Team section → Individual profiles
Challenge framing copy → Expertise section → Expertise page depth
Defined engagement model → Engajamento page → Contact form context
Strong hero copy → First-impression positioning → All downstream conversion
```

---

## MVP Scope

**Build at launch:**
1. Hero section with strong copy (problem-first + identity + two CTAs)
2. "Quem apoiamos" — quick audience identification blocks
3. Challenge-framed expertise section (6–8 challenges, cards)
4. Team section with real photos, specialties, one anchor credential per person
5. Engagement model section (4–5 formats, list or minimal cards)
6. Credibility block (aggregate metrics: years, industries, experience level)
7. Contact section (short form + phone + email)
8. Fixed navigation, footer with secondary links

**Defer post-launch:**
- Individual executive profile pages (blocked on content/photos being ready)
- Insights/blog section (blocked on content pipeline)
- CMS editing layer (can be added once site is stable)
- WhatsApp integration (quick to add but lower priority than core structure)

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Hero patterns | HIGH | Russell Reynolds HTML directly analyzed + McKinsey pattern confirmed via multiple sources |
| Team section patterns | HIGH | RR portrait structure extracted directly from HTML; reinforced by multiple B2B sources |
| Services framing | HIGH | BCG and RR copy patterns confirmed from HTML + web sources; challenge-framing is established practice |
| CTA patterns | HIGH | RR and Bain contact copy directly analyzed; confirmed by CTA research source |
| Navigation patterns | HIGH | RR HTML structure directly extracted; sticky header behavior is industry standard |
| Social proof alternatives | MEDIUM | No case study from Kolabore specifically; patterns extrapolated from analogous firms |
| Portuguese copy patterns | MEDIUM | No direct competitor in the same niche analyzed; based on PRD examples + B2B copywriting research in BR |
