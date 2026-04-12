// src/data/areas.ts
// Source: PRD section 11.7 — Áreas de atuação

export interface Area {
  id: string;
  label: string;        // Display name — used in cards and nav
  description: string;  // 1–2 sentences for card body and /expertise page
  icon?: string;        // Optional icon identifier (Heroicons name or path)
}

export const areas: Area[] = [
  {
    id: "supply-chain",
    label: "Supply Chain",
    description:
      "Redesenho e otimização de cadeias de suprimento para aumentar resiliência, reduzir custo total e melhorar o nível de serviço em contextos de alta complexidade.",
  },
  {
    id: "operacoes",
    label: "Manufatura e Operações",
    description:
      "Melhoria de desempenho operacional em plantas industriais e operações complexas, com foco em produtividade, qualidade e sustentabilidade dos resultados.",
  },
  {
    id: "procurement",
    label: "Procurement",
    description:
      "Estruturação e transformação de áreas de compras — de operacional a estratégico — com captura de valor, gestão de fornecedores e governança de categoria.",
  },
  {
    id: "governanca",
    label: "Governança",
    description:
      "Apoio à alta administração e conselhos na estruturação de modelos de governança corporativa, gestão de risco e alinhamento entre estratégia e execução.",
  },
  {
    id: "qualidade",
    label: "Qualidade e Food Safety",
    description:
      "Implantação e evolução de sistemas de qualidade e segurança de alimentos em operações industriais e cadeias de fornecimento reguladas.",
  },
  {
    id: "projetos",
    label: "Projetos e Transformação",
    description:
      "Gestão de projetos estratégicos e programas de transformação organizacional, com metodologia robusta e foco em entrega sustentável de valor.",
  },
  {
    id: "inovacao",
    label: "Inovação",
    description:
      "Estruturação de capacidades de inovação em operações e cadeia de valor, conectando visão estratégica a iniciativas práticas com retorno mensurável.",
  },
  {
    id: "conselho",
    label: "Conselho e Comitês",
    description:
      "Participação e suporte a conselhos de administração e comitês executivos — contribuindo com visão independente, experiência prática e construção de agenda.",
  },
];
