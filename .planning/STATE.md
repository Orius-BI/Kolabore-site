# STATE: Kolabore — Website Institucional

**Last updated:** 2026-04-11
**Milestone:** v1 — Site Institucional Kolabore

---

## Project Reference

**Core value:** O visitante entende em segundos quem é a Kolabore, por que confiar, e como entrar em contato — com a sensação de estar falando com executivos seniores de verdade.

**Current focus:** Phase 1 — Foundation (project scaffold + static export config + design system)

---

## Current Position

**Current phase:** 1 — Foundation
**Current plan:** Not started
**Phase status:** Not started

```
Progress: [          ] 0%
Phase 1 ░░░░░  Phase 2 ░░░░░  Phase 3 ░░░░░  Phase 4 ░░░░░  Phase 5 ░░░░░
```

---

## Performance Metrics

| Metric | Target | Current |
|--------|--------|---------|
| Build output | `out/` directory produced | - |
| Lighthouse mobile | ≥ 90 | - |
| Homepage LCP | < 2.5s | - |
| CSS bundle | < 20KB | - |
| Portrait image weight | < 100KB per image | - |

---

## Accumulated Context

### Key Decisions Made

| Decision | Rationale | Phase |
|----------|-----------|-------|
| Next.js 15 + `output: 'export'` | Hostinger shared hosting has no Node.js SSR support | Phase 1 |
| `next-image-export-optimizer` | Default `next/image` breaks static export silently | Phase 1 |
| `trailingSlash: true` | Apache on Hostinger requires directory-style URLs to serve index.html | Phase 1 |
| `next/font/google` only | Eliminates FOUT, CLS, and external font network request at runtime | Phase 1 |
| Formspree via env var | Delay endpoint exposure until launch to reduce spam window | Phase 2 |
| Commercial journey homepage order | PPT chapter order is wrong for web; visitor orientation comes first | Phase 2 |
| Portraits blocking Phase 4 | Executivos without real photos directly contradicts trust goal | Phase 4 |

### Known Blockers

| Blocker | Affects | Resolution |
|---------|---------|------------|
| Portrait photos need processing | Phase 4, Plan 4.2 | Process from `docs/imagens clientes *` before Plan 4.3 |
| Formspree endpoint not yet created | Phase 2, Plan 2.4 | Create Formspree account, get form ID, set as `NEXT_PUBLIC_FORMSPREE_ID` |
| Client email provider unknown | Phase 5 pre-launch | Confirm before deliverability test — Microsoft 365 requires safe sender configuration |

### Pitfall Watchlist

Critical pitfalls to actively guard against (from research):

- **`next/image` in static export**: Configure `next-image-export-optimizer` in Phase 1 before writing any `<Image>` component. Silent failure in production.
- **Hostinger 404 on refresh**: `trailingSlash: true` + `.htaccess` SPA fallback. Test every route with hard refresh before marking Phase 5 done.
- **"Consultorês" copy**: Run substitution test on every heading and paragraph. If text could appear on a competitor site, rewrite it.
- **Phase 4 without real portraits**: Content gate is hard. Do not deploy Executivos page with placeholders.
- **Formspree + Outlook**: Test deliverability with client's actual email before calling Phase 5 complete.
- **Homepage text density**: Max 3–5 sentences per section. Deep content belongs in inner pages.

### Open Todos

- [ ] Confirm deployment URL — domain root vs. subdirectory (affects `basePath` config)
- [ ] Confirm client's email provider (Outlook/Microsoft 365 vs. Gmail) for Formspree deliverability test
- [ ] Create Formspree account and get `NEXT_PUBLIC_FORMSPREE_ID`
- [ ] Schedule portrait processing session before Phase 4 begins

---

## Session Continuity

**To resume work:** Start at Phase 1, Plan 1.1. Read `ROADMAP.md` Phase 1 details. The first action is initializing the Next.js 15 project with `output: 'export'` and `trailingSlash: true`.

**Handoff notes:** Phase 4 has a content gate — portrait processing must happen before Plan 4.3. This can be pre-empted by processing photos during Phase 3 so Phase 4 has no waiting.

---

*STATE initialized: 2026-04-11*
