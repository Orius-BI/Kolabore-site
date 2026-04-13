# Kolabore — Website Institucional

## What This Is

Site institucional e comercial da Kolabore, uma consultoria executiva de alto valor. O site posiciona a Kolabore como parceira de decisão da alta liderança — CEOs, diretores, acionistas e conselhos — e converte interesse em contato comercial qualificado. É uma vitrine institucional que transforma o posicionamento atual (hoje em PPT) em presença digital clara, elegante e convincente.

## Core Value

O visitante deve entender em segundos quem é a Kolabore, por que confiar, e como entrar em contato — tudo com a sensação de estar falando com executivos seniores de verdade.

## Requirements

### Validated

- ✓ Next.js 16 static export scaffold (`output: 'export'`, `trailingSlash: true`) — Phase 1
- ✓ Tailwind CSS v4 design system com tokens da marca Kolabore (#0d0d0d, #f5f5f4, #b8933f) — Phase 1
- ✓ Fontes Cormorant Garamond + Inter via `next/font/google` (sem CDN externo) — Phase 1
- ✓ `next-image-export-optimizer` configurado como loader de imagens — Phase 1
- ✓ `public/.htaccess` com HTTPS redirect + SPA fallback para Hostinger — Phase 1
- ✓ Root layout com `lang="pt-BR"`, `metadataBase`, `AnimationProvider` — Phase 1
- ✓ Componentes de layout: Header (scroll-aware), Footer, Container, Section — Phase 1
- ✓ 6 rotas placeholder (`/`, `/kolabore`, `/expertise`, `/engajamento`, `/executivos`, `/contato`) — Phase 1
- ✓ Camada de dados tipada: `team.ts`, `areas.ts` (8 áreas), `formats.ts` (8 formatos) — Phase 1
- ✓ Homepage com 8 seções em ordem de jornada comercial (hero → público → desafios → formatos → senioridade → áreas → contato) — Phase 2
- ✓ Primitivos UI: Button (3 variantes), SectionHeading — Phase 2
- ✓ ContactSection com Formspree, honeypot e confirmação inline — aguarda `NEXT_PUBLIC_FORMSPREE_ID` — Phase 2
- ✓ /kolabore — 5 seções: hero, visão, proposta de valor, posicionamento, senioridade — Phase 3
- ✓ /expertise — 8 áreas expandidas com framing de problema executivo, merge `areaDetails[area.id]` — Phase 3
- ✓ /engajamento — 8 formatos em profundidade, arranjos customizados, 3 CTAs posicionadas — Phase 3

### Active

- [ ] Página Kolabore — quem somos, visão institucional, proposta de valor, posicionamento
- [ ] Página Expertise — o que resolvemos, áreas de atuação, desafios mais comuns
- [ ] Página Engajamento — como atuamos, formatos de projeto, arranjos customizados
- [ ] Página Executivos — fotos, mini bios, especialidades, experiências relevantes
- [ ] Página Contato — formulário, e-mail, telefone, CTA executivo
- [ ] Design premium e sóbrio: tipografia elegante, espaço em branco, sem estética tech neon
- [ ] Site responsivo — performance boa em mobile e desktop
- [ ] Menu fixo com CTA visível ao longo da navegação
- [ ] Formulário de contato funcional
- [ ] SEO básico — title, meta description, headings, URLs limpas por página
- [ ] Todos os textos redigidos pelo Claude com base no PRD e nos materiais das apresentações

### Out of Scope

- Blog ou área de insights — não é foco do v1, pode vir depois
- Área logada ou portal de cliente — complexidade desnecessária para o objetivo
- CMS de edição de conteúdo — textos hard-coded no código, edição via arquivos
- Automação comercial (CRM, sequências de e-mail) — fora do escopo desta fase
- Múltiplos fluxos de conversão — foco em posicionamento + credibilidade + contato
- OAuth ou autenticação — não se aplica
- Página individual por executivo — desejável, mas adiada para v2
- Integração com WhatsApp/e-mail comercial — desejável, adiada para v2
- Analytics além de estrutura básica — integração em v2

## Context

A Kolabore já possui narrativa forte em formato de apresentação PPT. O site existe para transformar esse conteúdo em presença digital. O grupo é formado por executivos com ~35 anos de experiência acumulada, atuação transversal na cadeia de valor, foco em supply chain, operações, procurement, governança e transformação.

Materiais base disponíveis em `docs/`:
- `previa_do_prd.md` — PRD detalhado com posicionamento, arquitetura, tom, visual e requisitos
- Apresentações PPT (Kolabore.pptx e variantes em PT/EN) — fonte do conteúdo real
- Imagens dos clientes (com e sem fundo) disponíveis em `docs/imagens clientes *`
- Sites de referência em HTML: Teneo, Russell Reynolds, BCG, Deloitte

Tom de voz: sóbrio, executivo, seguro, objetivo, institucional mas humano. Alguém que já operou negócio grande e fala de igual para igual com presidentes, diretores e acionistas.

O site **não deve parecer**: agência de marketing, consultoria genérica, empresa de tecnologia ou escritório frio e burocrático.

## Constraints

- **Tech Stack**: Next.js com static export (`next export` / `output: 'export'`) — necessário para compatibilidade com Hostinger shared hosting que não suporta Node.js SSR
- **Hosting**: Hostinger — hospedagem shared; o build gera arquivos estáticos para upload via FTP/painel
- **CMS**: Nenhum em v1 — conteúdo hard-coded nos componentes/arquivos de dados
- **Conteúdo**: Claude redige todos os textos com base no PRD (`docs/previa_do_prd.md`) e nas apresentações PPT
- **Design**: Sem estética "tech neon", sem landing page agressiva, sem efeitos excessivos — premium, sóbrio, executivo

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js sobre Astro/HTML puro | Melhor ecosistema React, SEO nativo, fácil de evoluir para SSR ou CMS depois | — Pending |
| Static export para Hostinger | Hostinger shared não suporta SSR; static export garante compatibilidade total | — Pending |
| Sem CMS no v1 | Reduz complexidade, acelera entrega; conteúdo pode ser editado direto nos arquivos | — Pending |
| Claude redige todos os textos | PRD e PPTs têm contexto suficiente; reduz dependência de aprovação de copy antes do dev | — Pending |
| Arquitetura de 5 páginas | Kolabore / Expertise / Engajamento / Executivos / Contato — traduz conteúdo em navegação comercial | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-13 after Phase 3 (Inner Pages) complete*
