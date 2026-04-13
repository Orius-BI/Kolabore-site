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

export const executives: Executive[] = [
  {
    id: "alexandre-guedes",
    name: "Alexandre Guedes",
    title: "Sócio",
    photo: "/images/team/alexandre-guedes.webp",
    specialties: ["Supply Chain", "S&OP", "Lean Manufacturing", "E-commerce", "Inovação"],
    credential: "Liderança de Supply Chain comercial e industrial em grandes empresas de bens de consumo",
    bio: "Especialista em planejamento de Supply Chain, infraestrutura e produtividade. Tem experiência em OKRs, S&OP, Customer Service e agile lean manufacturing. Atuou em estratégias de e-commerce, melhoria de OoS e lançamentos de novos produtos."
  },
  {
    id: "eduardo-araujo",
    name: "Eduardo Araújo",
    title: "Sócio",
    photo: "/images/team/eduardo-araujo.webp",
    specialties: ["Operações Industriais", "Supply Chain", "M&A", "Governança", "Inovação"],
    credential: "Liderança em operações fabris e processos de fusões e aquisições",
    bio: "Especialista em operação fabril e implementação de novos processos e tecnologias. Atua em planejamento de Supply Chain, governança de gestão e fusões e aquisições, com foco em inovação em bebidas não-carbonatadas."
  },
  {
    id: "leonardo-moreira",
    name: "Leonardo Moreira",
    title: "Sócio",
    photo: "/images/team/leonardo-moreira.webp",
    specialties: ["Qualidade", "Food Safety", "Gestão de Riscos", "Manufatura Lean", "ESG"],
    credential: "Expertise em qualidade, food safety e governança técnica em indústria de alimentos e bebidas",
    bio: "Especialista em Qualidade, Food Safety e Governança Técnica. Atua em segurança do trabalho, meio ambiente, gestão de riscos e gerenciamento de projetos. Referência em manufatura lean e metodologia Agile aplicada à indústria."
  },
  {
    id: "mario-sergio-gomes",
    name: "Mário Sergio Gomes",
    title: "Sócio",
    photo: "/images/team/mario-sergio-gomes.webp",
    specialties: ["Procurement", "Finanças", "Conselho", "Gestão de Fornecedores", "Supply Chain"],
    credential: "32 anos de experiência, +20 em Procurement e Finanças — 17 deles na Coca-Cola; CFO e membro de Conselho do Grupo EBX",
    bio: "Com 32 anos de experiência, sendo mais de 20 em liderança de Procurement e Finanças — dos quais 17 na Coca-Cola —, atuou como CFO de grandes empresas e membro do Conselho de Administração do Grupo EBX. Especialista em negociação estratégica, gestão de fornecedores e otimização da cadeia de suprimentos."
  },
  {
    id: "paulo-villas",
    name: "Paulo Villas",
    title: "Sócio",
    photo: "/images/team/paulo-villas.webp",
    specialties: ["Embalagens & Envase", "Procurement Estratégico", "Manufatura", "Board Advisor", "Supply Chain"],
    credential: "+35 anos em Embalagens e Envase; Conselheiro certificado (Board Advisor); Professor Coppe/UFRJ por 26 anos",
    bio: "Expert em Embalagens e Envase com mais de 35 anos de experiência em produtividade, manufatura e procurement estratégico. Engenheiro Mecânico com MBA em Business e extensão em Supply Chain Excellence. Professor convidado da especialização em Polímeros da Coppe por 26 anos e Conselheiro certificado (Board Advisor)."
  },
  {
    id: "rino-abbondi",
    name: "Rino Abbondi",
    title: "Sócio",
    photo: "/images/team/rino-abbondi.webp",
    specialties: ["Cadeia de Abastecimento", "M&A", "Conselho", "Geração de Valor", "Tech Advisor"],
    credential: "Conselho Administrativo da Joint Venture do Sistema Coca-Cola; investidor anjo e advisor em startups de tecnologia",
    bio: "Especialista em gestão integrada da Cadeia de Abastecimento, com foco em implementação de projetos de alto impacto, fusões e aquisições. Membro do Conselho Administrativo da Joint Venture do Sistema Coca-Cola, investidor anjo e conselheiro em startups de tecnologia digital."
  }
];
