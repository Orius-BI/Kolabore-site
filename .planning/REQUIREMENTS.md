# Requirements: Kolabore — Website Institucional

**Defined:** 2026-04-11
**Core Value:** O visitante entende em segundos quem é a Kolabore, por que confiar, e como entrar em contato — com a sensação de estar falando com executivos seniores de verdade.

## v1 Requirements

### Foundation

- [x] **FOUND-01**: Projeto Next.js 15 com TypeScript inicializado com `output: 'export'` e `trailingSlash: true`
- [x] **FOUND-02**: Tailwind CSS v4 configurado com tokens de design em `@theme` (cores, tipografia, espaçamento)
- [ ] **FOUND-03**: Fontes `Cormorant Garamond` (headings) + `Inter` (body) via `next/font/google` — sem `<link>` para Google Fonts
- [x] **FOUND-04**: `next-image-export-optimizer` configurado antes de qualquer uso de `<Image>`
- [ ] **FOUND-05**: `public/.htaccess` com rewrite SPA fallback + redirect HTTPS (copiado para `out/` no build)
- [ ] **FOUND-06**: `metadataBase` configurado no root layout para resolução de URLs de OG image
- [ ] **FOUND-07**: `lang="pt-BR"` no `<html>` do root layout
- [ ] **FOUND-08**: Componentes de layout: `Header` (fixo, transparente-para-sólido no scroll), `Footer`, `Container`, `Section`
- [ ] **FOUND-09**: Rotas vazias criadas para todas as 6 páginas: `/`, `/kolabore`, `/expertise`, `/engajamento`, `/executivos`, `/contato`
- [ ] **FOUND-10**: Estrutura de dados tipada em `src/data/` (team.ts, areas.ts, formats.ts) — TypeScript constants sem CMS

### Homepage

- [ ] **HOME-01**: `HeroSection` — headline orientada a problema, subheadline, CTA primário "Converse com a Kolabore", CTA secundário "Conheça nossa atuação"
- [ ] **HOME-02**: `AudienceSection` — blocos de público-alvo: CEOs, diretores, acionistas, conselhos, empresas em transformação
- [ ] **HOME-03**: `ChallengesSection` — desafios em formato de perguntas executivas (ex: "Como fortalecer a governança em momentos de mudança?"), sem lista de serviços
- [ ] **HOME-04**: `FormatsSection` — formatos de atuação (consultoria completa, assessments, workshops, mentoring, advisory)
- [ ] **HOME-05**: `SenioritySection` — métricas de senioridade (~35 anos, experiência nacional/internacional, grandes empresas), sem exagero visual
- [ ] **HOME-06**: `TeamPreviewSection` — preview do time com fotos institucionais, 3-5 especialidades, 1 credencial por executivo
- [ ] **HOME-07**: `AreasSection` — cards de áreas de atuação: Supply Chain, Operações, Procurement, Governança, Qualidade, Projetos/Transformação, Inovação, Conselho
- [ ] **HOME-08**: `ContactSection` — formulário de contato via Formspree na homepage, com CTA "Agende uma conversa"

### Páginas Internas

- [ ] **PAGE-01**: Página `/kolabore` — quem somos, visão institucional, proposta de valor, posicionamento, senioridade do grupo
- [ ] **PAGE-02**: Página `/expertise` — o que resolvemos, áreas de atuação expandidas, desafios mais comuns, temas críticos por frente
- [ ] **PAGE-03**: Página `/engajamento` — como atuamos, formatos de projeto expandidos, arranjos customizados, forma de trabalho com clientes

### Executivos

- [ ] **EXEC-01**: Página `/executivos` — grid de executivos com foto institucional processada, nome, mini bio, especialidades (tags), 1 credencial forte
- [ ] **EXEC-02**: Hover state nos cards revelando especialidades adicionais
- [ ] **EXEC-03**: Schema JSON-LD `Person` por executivo para SEO

### Contato e SEO

- [ ] **CONT-01**: Página `/contato` — formulário Formspree com campos essenciais, e-mail, telefone, CTA executivo
- [ ] **CONT-02**: `title` e `meta description` únicos por página (todas as 6 páginas)
- [ ] **CONT-03**: Open Graph tags em todas as páginas (OG image estática 1200x630px)
- [ ] **CONT-04**: `sitemap.xml` e `robots.txt` gerados no build
- [ ] **CONT-05**: Headings hierárquicos (H1/H2/H3) bem estruturados em todas as páginas
- [ ] **CONT-06**: URLs limpas e SEO-friendly para todas as rotas
- [ ] **CONT-07**: Deploy validado no Hostinger — todas as rotas testadas com refresh direto no navegador
- [ ] **CONT-08**: Teste de entregabilidade do formulário Formspree com e-mail real do cliente

### Design e Performance

- [ ] **DESIGN-01**: Design premium e sóbrio — near-black `#0d0d0d`, warm mist `#f5f5f4`, accent gold `#b8933f` aplicado com parcimônia
- [ ] **DESIGN-02**: Site responsivo — mobile e desktop com performance boa
- [ ] **DESIGN-03**: CTA visível ao longo da navegação (header e seções estratégicas)
- [ ] **DESIGN-04**: Animações discretas via Motion com `LazyMotion` — apenas scroll-entry fades, nada decorativo
- [ ] **DESIGN-05**: Todos os textos redigidos pelo Claude: headline, manifesto, desafios, formatos, bios do time — aplicando "substitution test" (texto deve soar único para a Kolabore)

## v2 Requirements

### Expansão

- **V2-01**: Página individual por executivo com bio completa e trajetória
- **V2-02**: Seção de artigos / insights / blog
- **V2-03**: CMS simples (Sanity ou Contentful) para edição de conteúdo sem código
- **V2-04**: Integração com WhatsApp comercial
- **V2-05**: Integração com analytics (Google Analytics 4 ou Plausible)
- **V2-06**: Automação comercial (CRM ou sequências de e-mail)

## Out of Scope

| Feature | Reason |
|---------|--------|
| Área logada / portal de cliente | Complexidade desnecessária para objetivo v1 |
| Blog ou portal de conteúdo | Não é foco desta fase; adicionaria complexidade sem retorno imediato |
| CMS de edição de conteúdo | Textos hard-coded; edição via arquivos é suficiente para v1 |
| Multiple conversion flows | Foco em um único funil: posicionamento → credibilidade → contato |
| OAuth / autenticação | Não se aplica |
| Automação comercial | Fora do escopo desta fase |
| Server-side rendering | Incompatível com Hostinger shared hosting; static export é obrigatório |
| Página individual por executivo | Desejável, adiada para v2 |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 a FOUND-10 | Phase 1 | Pending |
| HOME-01 a HOME-08 | Phase 2 | Pending |
| PAGE-01 | Phase 3 | Pending |
| PAGE-02 | Phase 3 | Pending |
| PAGE-03 | Phase 3 | Pending |
| EXEC-01 a EXEC-03 | Phase 4 | Pending |
| CONT-01 a CONT-08 | Phase 5 | Pending |
| DESIGN-01 a DESIGN-05 | Phases 1-5 (transversal) | Pending |

**Coverage:**
- v1 requirements: 38 total
- Mapped to phases: 38
- Unmapped: 0 ✓

---
*Requirements defined: 2026-04-11*
*Last updated: 2026-04-11 after initial definition*
