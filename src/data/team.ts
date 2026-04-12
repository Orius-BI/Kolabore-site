// src/data/team.ts
// Populated in Phase 4 when portraits are processed and placed in public/images/team/
// Do NOT add executives without real portrait photos — placeholder images contradict the trust goal

export interface Executive {
  id: string;
  name: string;
  title: string;          // "Sócio", "Consultora Sênior", "Especialista", etc.
  photo: string;          // path from public/ root — e.g. "/images/team/nome.webp"
  specialties: string[];  // 3–5 short labels rendered as tag chips
  credential: string;     // single strongest career proof line
  bio: string;            // 2–3 sentences; used on /executivos page
}

export const executives: Executive[] = [];
// Populated in Phase 4 — see ROADMAP.md Phase 4 content gate
