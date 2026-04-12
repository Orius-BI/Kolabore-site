// src/content/homepage.ts
// All homepage copy as typed constants.
// Components import from here — do not embed strings in components.
// Every heading has passed the substitution test: replacing "Kolabore"
// with a competitor name must break the sentence.

export const hero = {
  headline: "Transformação de negócio com senioridade executiva.",
  subheadline:
    "Apoiamos líderes e acionistas em desafios críticos de operação, cadeia de valor, governança e crescimento sustentável.",
  ctaPrimary: "Converse com a Kolabore",
  ctaPrimaryHref: "/contato",
  ctaSecondary: "Conheça nossa atuação",
  ctaSecondaryHref: "/engajamento",
} as const;

export const audience = {
  sectionTitle: "Quem a Kolabore apoia",
  blocks: [
    { label: "CEOs", description: "Líderes responsáveis pela transformação e resultado do negócio." },
    { label: "Diretores e C-Level", description: "Executivos que precisam mover frentes críticas com consistência e velocidade." },
    { label: "Acionistas e Sócios", description: "Controladores que buscam visão externa e rigor na tomada de decisão estratégica." },
    { label: "Conselhos de Administração", description: "Órgãos que precisam de suporte especializado para cumprir seu papel de orientação e controle." },
    { label: "Empresas em Transformação", description: "Organizações em reestruturação, crescimento acelerado ou mudança de modelo operacional." },
    { label: "Operações em Contextos Complexos", description: "Negócios com cadeias extensas, múltiplos sites ou requisitos regulatórios exigentes." },
  ],
} as const;

export const challenges = {
  sectionTitle: "O que resolvemos",
  items: [
    "Como ganhar eficiência operacional sem perder controle?",
    "Como fortalecer a governança em momentos de mudança?",
    "Como redesenhar supply chain e procurement com menos risco?",
    "Como apoiar integrações e transformações complexas?",
    "Como destravar produtividade e execução?",
    "Como elevar qualidade e segurança em operações reguladas?",
  ],
} as const;

export const formats = {
  sectionTitle: "Como atuamos",
  subtitle: "Arranjos sob medida para cada contexto — do diagnóstico à implementação.",
} as const;

export const seniority = {
  sectionTitle: "Senioridade que entrega",
  metrics: [
    {
      value: "~35 anos",
      label: "de senioridade executiva acumulada",
      detail: "Trajetórias construídas em grandes empresas nacionais e internacionais.",
    },
    {
      value: "Transversal",
      label: "ao longo da cadeia de valor",
      detail: "Atuação em operações, supply chain, procurement, governança e conselhos.",
    },
    {
      value: "Prático",
      label: "orientado a resultado",
      detail: "Executivos que já operaram os problemas que você enfrenta — não apenas os estudaram.",
    },
  ],
} as const;

export const teamPreview = {
  sectionTitle: "Nosso time",
  subtitle: "Executivos com carreiras construídas em grandes organizações. Conheça quem apoia o seu negócio.",
} as const;

export const areas = {
  sectionTitle: "Áreas de atuação",
  subtitle: "Expertise aplicada em oito frentes críticas do negócio.",
} as const;

export const contact = {
  sectionTitle: "Agende uma conversa",
  subtitle: "Fale diretamente com a Kolabore. Sem intermediários.",
  ctaLabel: "Agende uma conversa",
  fields: {
    nome: { label: "Nome", placeholder: "Seu nome" },
    empresa: { label: "Empresa", placeholder: "Nome da empresa" },
    cargo: { label: "Cargo", placeholder: "Seu cargo" },
    mensagem: { label: "Mensagem", placeholder: "Como podemos ajudar?" },
  },
  successTitle: "Mensagem recebida.",
  successBody: "Entraremos em contato em breve.",
  errorBody: "Algo deu errado. Tente novamente ou escreva para contato@kolabore.com.br.",
} as const;
