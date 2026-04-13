---
phase: 03-inner-pages
plan: 01
subsystem: content
tags: [copywriting, inner-pages, typescript, content-layer]
dependency_graph:
  requires: [02-01-SUMMARY]
  provides: [inner-pages-copy]
  affects: [03-02-PLAN, 03-03-PLAN, 03-04-PLAN]
tech_stack:
  added: []
  patterns: [content-as-typed-constants, as-const, substitution-test]
key_files:
  created:
    - src/content/inner-pages.ts
  modified: []
decisions:
  - "Eyebrow labels (e.g. 'O que resolvemos', 'Agende uma conversa') reuse homepage section identifiers — acceptable because they are UI navigation labels, not substantive copy sentences"
  - "CTA labels are intentionally consistent across pages for UX continuity — not copy duplication"
metrics:
  duration: "4 min"
  completed_date: "2026-04-13"
  tasks_completed: 1
  files_created: 1
  files_modified: 0
---

# Phase 03 Plan 01: Inner Pages Copy Summary

## One-liner

Three inner pages (Kolabore, Expertise, Engajamento) fully copywritten as typed TypeScript constants — 354 lines, 16 sections total, substitution-tested, zero homepage sentence duplication.

## What Was Built

`src/content/inner-pages.ts` exports three named `as const` objects, following the exact pattern established in `src/content/homepage.ts`:

**`kolaborePage`** (5 sections):
- `pageHero` — identity declaration framed around who is behind the firm, not just what it does
- `vision` — the firm's orienting conviction: decisions over reports, senior executive model vs. large generic consultancy
- `valueProposition` — 4 items (Senioridade real, Arranjos sob medida, Visão transversal, Orientação a valor)
- `positioning` — where Kolabore sits between large generalist firms and narrow boutiques
- `seniority` — the human capital argument framed as the client's problem, not Kolabore's biography

**`expertisePage`** (4 sections):
- `pageHero` — challenge framing, not capability list
- `intro` — explicit statement that Kolabore does NOT do all things for all clients
- `areaDetails` — 8 entries keyed exactly to `src/data/areas.ts` ids (`supply-chain`, `operacoes`, `procurement`, `governanca`, `qualidade`, `projetos`, `inovacao`, `conselho`), each with `challengeTitle`, `depth` (2–4 sentences), and `examples` (2–3 items)
- `ctaBanner` — section-level CTA for cross-functional problems

**`engajamentoPage`** (6 sections):
- `pageHero` — flexibility framing, format-follows-problem philosophy
- `philosophy` — working model: proximity, no overhead, stays through implementation
- `formatDetails` — 8 entries keyed exactly to `src/data/formats.ts` ids (`consultoria`, `assessment`, `benchmark`, `quick-win`, `workshop`, `mentoring`, `comites`, `custom`), each with `whenToUse`, `howItWorks`, `typicalDuration`
- `customArrangements` — the cross-functional team assembly differentiator
- `workingRelationship` — 3 items (Acesso direto, Foco em implementação, Sem overhead desnecessário)
- `ctaClose` — closing invitation framed as a conversation, not a sales pitch

## Verification Passed

- `tsc --noEmit` exit 0 — no TypeScript errors
- All 8 area keys match `src/data/areas.ts` ids exactly
- All 8 format keys match `src/data/formats.ts` ids exactly
- Zero exact sentence duplication with `src/content/homepage.ts` substantive copy
- Substitution test applied: each heading references the senior executive model, practical orientation, or specific focus areas — replacing "Kolabore" with "McKinsey" or "Deloitte" would break or change the meaning

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None — all 16 sections are fully populated with substantive copy. No placeholder text, no TODOs, no "coming soon" entries.

## Self-Check: PASSED

- [x] `src/content/inner-pages.ts` exists (354 lines)
- [x] Commit `7b686ab` exists in git log
- [x] Three named exports: `kolaborePage`, `expertisePage`, `engajamentoPage`
- [x] TypeScript compiles clean
