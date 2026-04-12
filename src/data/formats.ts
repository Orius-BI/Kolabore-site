// src/data/formats.ts
// Source: PRD sections 11.4 and 11.8 — Formatos de engajamento

export interface EngagementFormat {
  id: string;
  label: string;
  description: string;
}

export const formats: EngagementFormat[] = [
  {
    id: "consultoria",
    label: "Consultoria Completa",
    description:
      "Engajamento estruturado com escopo, equipe dedicada e entregas definidas — da diagnose à implementação, com acompanhamento de resultados.",
  },
  {
    id: "assessment",
    label: "Assessments",
    description:
      "Diagnóstico independente de uma frente específica — operação, supply chain, governança ou procurement — com recomendações priorizadas e plano de ação.",
  },
  {
    id: "benchmark",
    label: "Benchmarks",
    description:
      "Comparação estruturada de práticas e métricas com referências de mercado, gerando visibilidade sobre posicionamento competitivo e gaps de maturidade.",
  },
  {
    id: "quick-win",
    label: "Quick Wins",
    description:
      "Intervenções de curto prazo com foco em captura rápida de valor — redução de custo, ganho de eficiência ou resolução de gargalo operacional urgente.",
  },
  {
    id: "workshop",
    label: "Workshops",
    description:
      "Sessões facilitadas para times executivos e operacionais — diagnose participativa, construção de consenso, planejamento de iniciativas ou capacitação aplicada.",
  },
  {
    id: "mentoring",
    label: "Mentoring",
    description:
      "Acompanhamento individualizado de líderes e executivos em momentos de transição, desenvolvimento de competências ou tomada de decisão em contextos complexos.",
  },
  {
    id: "comites",
    label: "Participação em Comitês",
    description:
      "Presença recorrente em comitês executivos ou de gestão — contribuindo com visão externa, expertise temática e suporte à agenda estratégica da organização.",
  },
  {
    id: "custom",
    label: "Projetos Customizados",
    description:
      "Arranjos sob medida para contextos específicos — combinando perfis complementares do grupo Kolabore ou parceiros ad hoc conforme a demanda do cliente.",
  },
];
