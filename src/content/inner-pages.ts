// src/content/inner-pages.ts
// All copy for the three inner pages: /kolabore, /expertise, /engajamento.
// Components import from here — do not embed strings in components.
// All copy passes substitution test: replacing "Kolabore" with a competitor name
// must break or change the sentence meaning.
// Zero sentence duplication with src/content/homepage.ts.

// ─────────────────────────────────────────────────────────────────────────────
// /kolabore — Quem somos, visão, proposta de valor, posicionamento, senioridade
// ─────────────────────────────────────────────────────────────────────────────

export const kolaborePage = {
  pageHero: {
    eyebrow: "Kolabore",
    headline: "Uma firma de executivos seniores para os desafios que realmente importam.",
    subheadline:
      "A Kolabore foi constituída por profissionais que já ocuparam cadeiras de liderança e sabem o que é estar do lado de quem decide — não do lado de quem vende uma solução pronta.",
    ctaLabel: "Converse com a Kolabore",
    ctaHref: "/contato",
  },

  vision: {
    eyebrow: "Visão",
    title: "Negócios relevantes são construídos com decisão boa, não com relatório bonito.",
    body:
      "A Kolabore existe porque há uma lacuna entre o que as grandes consultorias entregam e o que a alta liderança de fato precisa: senioridade real, comprometida com o problema, presente na implementação. " +
      "O modelo Kolabore é diferente: os próprios executivos do grupo — pessoas que dirigiram operações, ocuparam cadeiras de C-level e responderam por resultado — são quem conduz o trabalho. " +
      "Nenhuma delegação para equipe júnior. Nenhum produto de prateleira reembalado com o nome do cliente.",
  },

  valueProposition: {
    eyebrow: "Proposta de valor",
    title: "O cliente ganha acesso a décadas de experiência executiva aplicada ao seu problema específico.",
    items: [
      {
        label: "Senioridade real",
        detail:
          "Os executivos da Kolabore já ocuparam as posições que você ocupa hoje — operaram plantas industriais, dirigiram cadeias de suprimento, responderam a conselhos. Eles entendem o problema porque já viveram o cargo.",
      },
      {
        label: "Arranjos sob medida",
        detail:
          "Nenhum engajamento começa com um produto ou metodologia. Começamos com o desafio real — e desenhamos equipe, escopo e formato em função dele, não do contrário.",
      },
      {
        label: "Visão transversal",
        detail:
          "A Kolabore atua em frentes complementares: supply chain, operações, procurement, governança, qualidade e transformação. Isso permite enxergar o problema inteiro, não apenas a fatia que o consultor de turno conhece.",
      },
      {
        label: "Orientação a valor",
        detail:
          "O trabalho é medido por resultado — aumento de lucratividade, redução de risco, ganho de execução. Não por horas entregues ou slides produzidos.",
      },
    ],
  },

  positioning: {
    eyebrow: "Posicionamento",
    title: "Entre a grande consultoria genérica e o especialista sem profundidade, a Kolabore ocupa outro lugar.",
    body:
      "As grandes firmas cobram por marca e tamanho de equipe, mas entregam o problema para analistas e gerentes sem bagagem executiva real. " +
      "As boutiques especializadas têm profundidade em uma frente, mas não enxergam os efeitos cruzados entre supply chain, operações e governança. " +
      "A Kolabore combina seniority genuína com breadth de temas e com a disposição de trabalhar do problema ao resultado — sem overhead e sem intermediários.",
    ctaLabel: "Saiba como atuamos",
    ctaHref: "/engajamento",
  },

  seniority: {
    eyebrow: "Senioridade",
    title: "O principal ativo da Kolabore é o acúmulo de decisão de quem já esteve onde você está.",
    body:
      "Quando um CEO ou diretor enfrenta uma crise de supply chain ou precisa reestruturar procurement, o que ele precisa não é de um framework — é de alguém que já resolveu esse problema num negócio real, com as mesmas pressões de prazo, capital e organização. " +
      "A Kolabore foi construída exatamente para isso: cada executivo do grupo carrega trajetória sólida em grandes organizações, com responsabilidade de resultado, não apenas de entrega técnica. " +
      "Essa diferença — entre ter estudado o problema e ter sido responsável por ele — define quem é capaz de ajudar de verdade.",
    ctaLabel: "Conheça nossa equipe",
    ctaHref: "/executivos",
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// /expertise — O que resolvemos, áreas de atuação, desafios críticos
// ─────────────────────────────────────────────────────────────────────────────

export const expertisePage = {
  pageHero: {
    eyebrow: "Expertise",
    headline: "Oito frentes críticas. Dezenas de anos de decisão acumulada em cada uma.",
    subheadline:
      "A Kolabore não resolve tudo para todos. Resolve com profundidade real os temas em que seus executivos construíram trajetória — e pode conectar frentes que outras firmas tratam de forma isolada.",
    ctaLabel: "Converse com a Kolabore",
    ctaHref: "/contato",
  },

  intro: {
    eyebrow: "O que resolvemos",
    title: "Profundidade temática a serviço do problema real do cliente — não um catálogo de competências.",
    body:
      "A Kolabore não atua em todas as frentes do negócio. Atua profundamente naquelas em que tem seniority construída na prática — supply chain, operações, procurement, governança, qualidade, projetos, inovação e conselhos. " +
      "Em cada uma dessas frentes, o que a Kolabore traz não é um framework genérico: é a capacidade de reconhecer o padrão do problema, identificar onde está o risco real e construir uma solução que a organização consegue implementar. " +
      "Para problemas que cruzam múltiplas frentes — e a maioria dos problemas críticos cruzam — a Kolabore monta equipes complementares dentro do próprio grupo.",
  },

  areaDetails: {
    "supply-chain": {
      challengeTitle: "Quando a cadeia de suprimento vira um problema de negócio",
      depth:
        "Supply chain para a Kolabore não é tema de logística — é tema de CEO. Quando a cadeia falha, o impacto aparece no resultado financeiro, na satisfação do cliente e na reputação da empresa. " +
        "A Kolabore atua nos momentos em que a cadeia precisa ser redesenhada por completo — rede de distribuição, modelo de abastecimento, estrutura de fornecedores — ou quando uma ruptura operacional exige resposta rápida com olho no custo total. " +
        "O diferencial é a combinação entre visão estratégica de rede e capacidade de descer ao detalhe operacional: entender onde está o gargalo real, não apenas onde o KPI aponta. " +
        "Resultado: cadeias mais resilientes, com menor custo total e maior nível de serviço — mesmo em ambientes de alta variabilidade.",
      examples: [
        "Redesenho de rede de distribuição em contextos de crescimento ou reestruturação",
        "Gestão de ruptura e contingência em picos de demanda ou crises de fornecimento",
        "Redução de custo total da cadeia sem sacrifício de nível de serviço",
      ],
    },
    operacoes: {
      challengeTitle: "Quando a operação não entrega o que o negócio precisa",
      depth:
        "Plantas industriais e operações complexas têm uma característica: disfunções estruturais ficam ocultas sob anos de adaptações pontuais. " +
        "A Kolabore entra nesse contexto com a visão de quem já dirigiu operação grande — sabe distinguir problema de gestão de problema de processo, e sabe que a maioria dos projetos de melhoria falham na implementação, não no diagnóstico. " +
        "O foco é sustentabilidade do resultado: não basta capturar ganho de produtividade em seis semanas se a organização não sustenta depois. " +
        "Por isso a Kolabore trabalha com o time de operações, não apenas entrega recomendações de fora.",
      examples: [
        "Melhoria de produtividade em plantas industriais com operação complexa",
        "Redesenho de fluxo produtivo e gestão de capacidade",
        "Implantação de sistemas de gestão de desempenho operacional",
      ],
    },
    procurement: {
      challengeTitle: "Quando compras ainda é operacional e o negócio já precisava de procurement estratégico",
      depth:
        "Procurement é uma das frentes com maior potencial de criação de valor que as organizações deixam na mesa. " +
        "A maioria das áreas de compras ainda opera de forma transacional — processando pedidos, negociando pontualmente, reagindo às demandas do negócio. " +
        "A Kolabore estrutura a transformação de procurement do nível operacional ao estratégico: gestão por categoria, desenvolvimento de fornecedores críticos, governança de contratos e integração com supply chain e operações. " +
        "O resultado é uma área que captura valor de forma sistemática — não apenas quando o mercado ajuda — e que gera visibilidade sobre risco de fornecimento antes que ele vire problema.",
      examples: [
        "Estruturação de gestão por categoria em compras diretas e indiretas",
        "Desenvolvimento de fornecedores críticos e redução de dependência concentrada",
        "Implantação de governança de contratos e captura sistemática de valor",
      ],
    },
    governanca: {
      challengeTitle: "Quando a estrutura de governança não acompanha o crescimento ou a complexidade do negócio",
      depth:
        "Governança fraca se manifesta de formas diferentes: conselhos sem agenda real de valor, conflitos entre sócios sem mecanismo de resolução, risco operacional sem responsável claro, alinhamento precário entre estratégia e execução. " +
        "A Kolabore apoia a alta administração na construção de modelos de governança que funcionam na prática — com papéis claros, comitês que decidem, e mecanismos de accountability que a organização respeita. " +
        "O trabalho parte sempre do contexto do cliente: empresa familiar, corporação aberta, empresa sob reestruturação ou organização em transição de controle. Cada um tem um problema de governança diferente. " +
        "A Kolabore também atua em conselhos — não apenas como conselheiros, mas como quem estrutura a agenda e o funcionamento do conselho para que ele cumpra seu papel de verdade.",
      examples: [
        "Estruturação de modelo de governança corporativa em empresas familiares ou em transição",
        "Definição de papéis e funcionamento de conselho de administração e comitês",
        "Implantação de gestão de risco integrada à governança executiva",
      ],
    },
    qualidade: {
      challengeTitle: "Quando qualidade e segurança de alimentos são risco real de negócio, não apenas conformidade",
      depth:
        "Em operações industriais e cadeias de suprimento reguladas, qualidade e food safety deixaram de ser funções de suporte para se tornarem condicionantes do negócio: um incidente pode derrubar um contrato, fechar uma planta ou destruir uma marca. " +
        "A Kolabore atua na implantação e evolução de sistemas de qualidade que funcionam sob pressão — não apenas na auditoria ou na certificação, mas na construção da cultura e dos processos que sustentam o resultado no dia a dia. " +
        "Isso inclui desde o desenho do sistema de gestão da qualidade até a preparação para auditorias de clientes exigentes, passando pela gestão de fornecedores críticos sob protocolo. " +
        "O foco é sempre operação real: o que é necessário para que qualidade e food safety sejam sustentáveis na cadeia inteira, não apenas no site certificado.",
      examples: [
        "Implantação ou evolução de sistemas de gestão de qualidade e food safety (FSSC, BRC, SQF)",
        "Preparação para auditorias de grandes redes varejistas e clientes exigentes",
        "Gestão de qualidade em cadeia de fornecimento regulada — do campo à prateleira",
      ],
    },
    projetos: {
      challengeTitle: "Quando projetos estratégicos não entregam o que prometeram",
      depth:
        "Projetos de transformação falham por razões previsíveis: escopo mal definido, sponsor sem tempo para patrocinar de verdade, equipe sem seniority para tomar decisão, e nenhum mecanismo real de accountability. " +
        "A Kolabore apoia programas de transformação que precisam de PMO sênior — alguém que entenda de negócio, não apenas de gestão de projeto — e que tenha credibilidade para cobrar resultado da organização. " +
        "Isso vale para transformações operacionais, reestruturações, integrações pós-M&A e projetos críticos que precisam ser entregues num prazo que o mercado não vai esperar. " +
        "O diferencial da Kolabore aqui é a combinação: metodologia robusta de gestão de projeto com visão executiva do negócio e capacidade de escalar ou desescalar a equipe conforme o projeto evolui.",
      examples: [
        "PMO sênior para programas de transformação operacional ou reestruturação",
        "Integração pós-M&A — operações, processos e cultura",
        "Gestão de projetos críticos com sponsor executivo e accountability estruturado",
      ],
    },
    inovacao: {
      challengeTitle: "Quando inovação fica no discurso e não chega à operação",
      depth:
        "A maioria das iniciativas de inovação em operações e supply chain falham por dois motivos opostos: ou são muito abstratas para criar valor concreto, ou são muito pontuais para gerar aprendizado e escala. " +
        "A Kolabore estrutura capacidades de inovação que conectam visão estratégica a projetos práticos com retorno mensurável — não hubs de inovação decorativos, mas iniciativas com sponsor executivo, escopo definido e métrica de sucesso. " +
        "O foco está em operações e cadeia de valor: automação, digitalização de processos, novos modelos de parceria com fornecedores, ou redefinição de como a operação usa dado para decidir. " +
        "Resultado: inovação que aparece no resultado operacional, não apenas no relatório de sustentabilidade.",
      examples: [
        "Estruturação de portfólio de inovação em operações com foco em impacto real",
        "Digitalização de processos operacionais e supply chain",
        "Desenvolvimento de novos modelos de parceria e colaboração com fornecedores críticos",
      ],
    },
    conselho: {
      challengeTitle: "Quando o conselho precisa ir além de aprovar o que a diretoria já decidiu",
      depth:
        "Conselhos de administração e comitês executivos têm um papel crítico — mas muitos não cumprem esse papel de forma efetiva: a agenda é operacional demais, as informações chegam sem análise crítica, os membros não têm profundidade para questionar temas técnicos complexos. " +
        "A Kolabore participa de conselhos e comitês com dois objetivos: trazer visão independente e especializada nos temas críticos do negócio, e contribuir para que o conselho funcione como instância real de governança e orientação estratégica. " +
        "Isso significa não apenas ser membro — significa ajudar a construir a agenda certa, trazer a perspectiva de quem conhece supply chain, operações ou procurement de dentro, e criar o espaço para que decisões difíceis sejam tomadas com informação adequada. " +
        "Para organizações que ainda estão estruturando sua governança, a Kolabore também apoia a criação e o desenho dos comitês desde o início.",
      examples: [
        "Participação como membro independente em conselho de administração",
        "Suporte à agenda e funcionamento de comitês executivos de gestão",
        "Estruturação de comitês em organizações em fase de amadurecimento de governança",
      ],
    },
  },

  ctaBanner: {
    title: "Tem um desafio que se encaixa em mais de uma dessas frentes?",
    ctaLabel: "Agende uma conversa",
    ctaHref: "/contato",
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// /engajamento — Como trabalhamos, formatos, arranjos, relação de trabalho
// ─────────────────────────────────────────────────────────────────────────────

export const engajamentoPage = {
  pageHero: {
    eyebrow: "Engajamento",
    headline: "O formato de trabalho nasce do problema, não do portfólio de produtos.",
    subheadline:
      "A Kolabore não impõe metodologia. Começa pela conversa sobre o desafio real e constrói o arranjo — equipe, escopo, duração e formato — em função do que o problema exige.",
    ctaLabel: "Converse com a Kolabore",
    ctaHref: "/contato",
  },

  philosophy: {
    eyebrow: "Como trabalhamos",
    title: "Proximidade com o problema. Comprometimento com o resultado. Sem overhead desnecessário.",
    body:
      "A Kolabore não entrega diagnóstico e some. O trabalho começa na compreensão profunda do problema — não apenas do sintoma — e termina quando o resultado está sustentado na organização. " +
      "A equipe é montada em função do desafio: os executivos certos para aquele contexto específico, com a combinação de frentes que o problema exige, sem preencher horas com perfis desnecessários. " +
      "O relacionamento é direto: o cliente fala com os seniores que estão resolvendo o problema, não com um gerente de conta que faz relay entre o cliente e a equipe técnica.",
  },

  formatDetails: {
    consultoria: {
      whenToUse:
        "Para quando o desafio é complexo, cross-funcional e exige presença contínua — uma transformação operacional, uma reestruturação de supply chain, uma mudança de modelo de negócio que precisa de apoio do início ao fim.",
      howItWorks:
        "A Kolabore monta uma equipe dedicada com os executivos mais adequados ao escopo, define entregas claras em cada fase e acompanha a implementação — não apenas o diagnóstico. " +
        "O progresso é revisado em cadência regular com o sponsor executivo do cliente, e o escopo pode ser ajustado conforme o problema evolui. " +
        "A permanência na implementação é o que diferencia: o trabalho não termina quando o slide está pronto.",
      typicalDuration: "3 a 6 meses, com extensão conforme complexidade",
    },
    assessment: {
      whenToUse:
        "Para quando o executivo sabe que tem um problema — em operações, supply chain, governança ou procurement — mas precisa de diagnóstico independente e priorizado antes de decidir onde investir esforço.",
      howItWorks:
        "A Kolabore conduz o diagnóstico com metodologia estruturada e olhar de quem já operou o tipo de negócio em análise — não apenas fez análise sobre ele. " +
        "O resultado é um retrato honesto da situação atual, com priorização clara das iniciativas de maior impacto e um plano de ação que a organização consegue executar. " +
        "Sem suavização de achados para agradar o cliente: o valor está justamente na independência do olhar.",
      typicalDuration: "3 a 6 semanas",
    },
    benchmark: {
      whenToUse:
        "Para quando o executivo precisa saber onde a empresa está em relação ao mercado — em maturidade de processos, em métricas operacionais ou em práticas de gestão — antes de definir ambição e prioridades.",
      howItWorks:
        "A Kolabore estrutura a comparação com referências relevantes — não benchmarks de prateleira, mas empresas do setor com contexto comparável. " +
        "O resultado posiciona a empresa na curva de maturidade, identifica os gaps mais relevantes e contextualiza onde o esforço de melhoria tem maior retorno esperado. " +
        "A análise é sempre conectada às decisões que o executivo precisa tomar — não um relatório de dados sem ancoragem estratégica.",
      typicalDuration: "4 a 8 semanas",
    },
    "quick-win": {
      whenToUse:
        "Para quando há um gargalo operacional urgente, uma oportunidade de redução de custo que precisa ser capturada dentro do trimestre, ou uma pressão de curto prazo que não pode esperar um projeto completo.",
      howItWorks:
        "A Kolabore entra rápido, foca no que gera resultado em 30 a 90 dias e garante que a captura seja sustentável — não um ajuste que se desfaz quando o consultor sai. " +
        "O escopo é intencionalmente estreito: identificar, executar e entravar o resultado. " +
        "Quick wins frequentemente revelam problemas estruturais que viram escopo de projetos subsequentes — e a Kolabore é honesta sobre essa leitura.",
      typicalDuration: "4 a 8 semanas",
    },
    workshop: {
      whenToUse:
        "Para quando o time executivo precisa construir consenso sobre um problema difícil, alinhar visão antes de um projeto grande, ou desenvolver capacidade de forma aplicada — não teórica.",
      howItWorks:
        "A Kolabore facilita sessões de trabalho com times executivos e operacionais usando metodologia participativa — mas com olhar crítico de quem conhece o tema de dentro. " +
        "Não é treinamento: é um espaço onde o time usa o problema real como material de trabalho, com facilitação de quem já resolveu problemas parecidos. " +
        "O output é sempre concreto: alinhamento, decisão tomada, iniciativas priorizadas ou plano construído pelo próprio time.",
      typicalDuration: "1 a 3 dias (formato intensivo) ou em série ao longo de semanas",
    },
    mentoring: {
      whenToUse:
        "Para líderes e executivos em momentos de transição — assumindo uma nova posição, enfrentando um desafio complexo pela primeira vez, ou desenvolvendo capacidade de decisão em contexto de alta pressão.",
      howItWorks:
        "O acompanhamento é individual e confidencial, conduzido por um executivo da Kolabore com trajetória relevante para o desafio específico do mentorado. " +
        "Não é coaching motivacional: é orientação prática de quem já esteve na mesma posição ou resolveu o mesmo tipo de problema em escala. " +
        "A cadência é definida em função da necessidade — semanal em momentos críticos, quinzenal ou mensal para desenvolvimento contínuo.",
      typicalDuration: "Recorrente — mensal ou quinzenal, por 3 a 12 meses",
    },
    comites: {
      whenToUse:
        "Para quando a organização precisa de presença recorrente de um executivo experiente em comitês de gestão, comitês de risco, ou outras instâncias executivas que se beneficiam de visão externa especializada.",
      howItWorks:
        "A Kolabore designa o executivo mais adequado ao perfil do comitê — com expertise temática relevante e capacidade de contribuir com visão crítica independente. " +
        "A participação inclui preparação prévia das pautas, leitura dos materiais e contribuição substantiva nas sessões — não apenas presença formal. " +
        "A recorrência garante acúmulo de contexto sobre o negócio e evolução da qualidade da contribuição ao longo do tempo.",
      typicalDuration: "Recorrente — mensal ou bimestral",
    },
    custom: {
      whenToUse:
        "Para quando nenhum formato padrão se encaixa no desafio — problemas que cruzam múltiplas frentes, contextos que exigem combinação de perfis complementares, ou situações que mudam de natureza ao longo do engajamento.",
      howItWorks:
        "A Kolabore começa com uma conversa sobre o problema real e desenha um arranjo específico: quais executivos do grupo fazem sentido, que parceiros ad hoc podem ser trazidos, qual é a cadência e o modelo de entrega mais adequado. " +
        "O escopo pode combinar assessment com acompanhamento de implementação, mentoring com participação em comitê, ou qualquer outra composição que sirva ao cliente. " +
        "O que não muda: os seniores envolvidos, o compromisso com resultado e a ausência de overhead desnecessário.",
      typicalDuration: "Definido caso a caso",
    },
  },

  customArrangements: {
    eyebrow: "Arranjos customizados",
    title: "A capacidade de combinar perfis e formatos é, em si, um diferencial da Kolabore.",
    body:
      "O grupo Kolabore é formado por executivos com trajetórias complementares — supply chain, operações, procurement, governança, qualidade e transformação. " +
      "Isso permite montar equipes transversais para problemas que cruzam múltiplas frentes, ou acionar pontualmente o executivo certo para um tema específico sem precisar contratar toda uma estrutura. " +
      "Quando o problema exige competências além do grupo, a Kolabore traz parceiros ad hoc com o mesmo nível de seniority e orientação a resultado — curados caso a caso, não de um banco de consultores genérico.",
    ctaLabel: "Fale com a Kolabore",
    ctaHref: "/contato",
  },

  workingRelationship: {
    eyebrow: "Como é trabalhar com a Kolabore",
    title: "Direto, sênior, orientado a resultado — sem intermediários e sem overhead.",
    items: [
      {
        label: "Acesso direto",
        detail:
          "Você trabalha com os executivos seniores que estão resolvendo o problema — não com uma equipe júnior que faz relay entre você e quem sabe de fato.",
      },
      {
        label: "Foco em implementação",
        detail:
          "Não entregamos diagnóstico e saímos. Permanecemos enquanto o problema precisar de solução — do levantamento ao resultado sustentado na organização.",
      },
      {
        label: "Sem overhead desnecessário",
        detail:
          "Engajamentos dimensionados para o problema real, não para maximizar horas faturáveis. O escopo serve ao cliente, não à receita do projeto.",
      },
    ],
  },

  ctaClose: {
    title: "Tem um desafio que precisa do tipo certo de senioridade? Vamos conversar.",
    ctaLabel: "Agende uma conversa",
    ctaHref: "/contato",
  },
} as const;
