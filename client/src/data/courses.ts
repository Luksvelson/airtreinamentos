export type Modality = "presencial" | "online";
export type Category = "normas" | "manutencao" | "gestao";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Course {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  duration: string;
  modality: Modality;
  categories: Category[];
  heroSubtitle: string;
  about: string;
  syllabus: string[];
  audience: string[];
  differentials: string[];
  investmentInfo: string;
  certification: string;
  faq: FaqItem[];
}

export const categoryLabels: Record<Category, string> = {
  normas: "Normas",
  manutencao: "Manutenção",
  gestao: "Gestão",
};

export const modalityLabels: Record<Modality, string> = {
  presencial: "Presencial",
  online: "Online",
};

export const courses: Course[] = [
  {
    id: 1,
    slug: "fundamentos-ar-comprimido",
    name: "Fundamentos de Ar Comprimido",
    shortDescription: "Curso completo sobre os princípios fundamentais de sistemas de ar comprimido industrial, incluindo tipos de compressores, dimensionamento e boas práticas.",
    duration: "16h",
    modality: "presencial",
    categories: ["gestao"],
    heroSubtitle: "Domine os princípios fundamentais dos sistemas de ar comprimido e eleve o desempenho da sua operação industrial.",
    about: "Este curso oferece uma base sólida sobre os conceitos essenciais de ar comprimido, desde os princípios físicos até a aplicação prática em ambientes industriais. Ideal para profissionais que desejam compreender o funcionamento completo de um sistema de ar comprimido, incluindo compressores, secadores, filtros, reservatórios e redes de distribuição.",
    syllabus: [
      "Princípios físicos do ar comprimido",
      "Tipos de compressores: pistão, parafuso, scroll e centrífugos",
      "Componentes do sistema: secadores, filtros e reservatórios",
      "Dimensionamento básico de instalações",
      "Qualidade do ar comprimido conforme ISO 8573",
      "Redes de distribuição: materiais e boas práticas",
      "Eficiência energética em sistemas de ar comprimido",
      "Análise de vazamentos e desperdícios",
    ],
    audience: [
      "Engenheiros mecânicos e de produção",
      "Gestores de manutenção industrial",
      "Técnicos de manutenção",
      "Profissionais de utilidades industriais",
    ],
    differentials: [
      "Aulas práticas em laboratório equipado com compressores reais",
      "Material didático exclusivo e atualizado",
      "Instrutores com mais de 20 anos de experiência no setor",
      "Certificado de conclusão reconhecido pelo mercado",
      "Turmas reduzidas para maior aproveitamento",
    ],
    investmentInfo: "Consulte valores e condições especiais para grupos. Inclui material didático, coffee break e certificado.",
    certification: "Ao concluir o curso com aproveitamento mínimo de 75%, o participante recebe o Certificado de Conclusão em Fundamentos de Ar Comprimido, emitido pela AirTreinamentos, reconhecido no mercado industrial.",
    faq: [
      { question: "Preciso ter experiência prévia?", answer: "Não é necessário. O curso foi desenvolvido para atender desde iniciantes até profissionais que desejam atualizar seus conhecimentos." },
      { question: "O curso inclui aulas práticas?", answer: "Sim. Aproximadamente 40% da carga horária é dedicada a atividades práticas em nosso laboratório." },
      { question: "Há estacionamento no local?", answer: "Sim, oferecemos estacionamento gratuito para todos os participantes." },
      { question: "Posso cancelar minha inscrição?", answer: "Sim, cancelamentos podem ser feitos em até 7 dias antes do início do curso, com reembolso integral." },
    ],
  },
  {
    id: 2,
    slug: "manutencao-compressores-parafuso",
    name: "Manutenção de Compressores Parafuso",
    shortDescription: "Treinamento técnico especializado em manutenção preventiva e corretiva de compressores do tipo parafuso, com práticas em equipamentos reais.",
    duration: "24h",
    modality: "presencial",
    categories: ["manutencao"],
    heroSubtitle: "Aprenda técnicas avançadas de manutenção para garantir máxima disponibilidade e vida útil dos seus compressores parafuso.",
    about: "Curso avançado focado em técnicas de manutenção preventiva, preditiva e corretiva para compressores do tipo parafuso. Os participantes terão acesso a equipamentos reais para prática de procedimentos de manutenção, diagnóstico de falhas e otimização de desempenho.",
    syllabus: [
      "Princípios de funcionamento do compressor parafuso",
      "Sistemas de lubrificação: óleos, filtros e separadores",
      "Manutenção preventiva: planos e procedimentos",
      "Análise de óleo e monitoramento de condição",
      "Diagnóstico de falhas comuns",
      "Sistema de controle e regulação de capacidade",
      "Válvulas de admissão, mínima pressão e termostática",
      "Procedimentos de parada e partida segura",
      "Troca de rolamentos e vedações",
      "Alinhamento e acoplamentos",
    ],
    audience: [
      "Técnicos de manutenção mecânica",
      "Mecânicos industriais",
      "Supervisores de manutenção",
      "Engenheiros de confiabilidade",
    ],
    differentials: [
      "Prática em compressores parafuso desmontados e em operação",
      "Kit de ferramentas disponível durante o treinamento",
      "Simulação de falhas reais para diagnóstico",
      "Instrutores com experiência em campo",
      "Manual técnico de referência incluso",
    ],
    investmentInfo: "Consulte valores e condições especiais para grupos. Inclui material didático, ferramentas para prática, coffee break e certificado.",
    certification: "Certificado de Conclusão em Manutenção de Compressores Parafuso, emitido pela AirTreinamentos, com detalhamento da carga horária prática e teórica.",
    faq: [
      { question: "Qual o nível técnico necessário?", answer: "Recomendamos conhecimento básico em manutenção mecânica industrial. O curso parte de conceitos intermediários." },
      { question: "Vou trabalhar com equipamentos reais?", answer: "Sim. O curso inclui atividades práticas em compressores parafuso reais, tanto desmontados quanto em operação." },
      { question: "Receberei ferramentas para levar?", answer: "As ferramentas são fornecidas para uso durante o treinamento. O participante recebe um manual técnico de referência para consulta posterior." },
      { question: "Há opção de treinamento in-company?", answer: "Sim. Este curso pode ser adaptado e ministrado nas instalações da sua empresa. Entre em contato para um orçamento personalizado." },
    ],
  },
  {
    id: 3,
    slug: "eficiencia-energetica-ar-comprimido",
    name: "Eficiência Energética em Ar Comprimido",
    shortDescription: "Aprenda a identificar e eliminar desperdícios energéticos em sistemas de ar comprimido, reduzindo custos operacionais de forma significativa.",
    duration: "12h",
    modality: "online",
    categories: ["gestao"],
    heroSubtitle: "Reduza custos e aumente a sustentabilidade da sua operação com estratégias comprovadas de eficiência energética.",
    about: "Sistemas de ar comprimido representam até 30% do consumo elétrico industrial. Este curso ensina a identificar oportunidades de economia, implementar programas de eficiência energética e calcular o retorno sobre investimento de melhorias no sistema.",
    syllabus: [
      "Panorama energético dos sistemas de ar comprimido",
      "Indicadores de desempenho energético (kW/m³)",
      "Detecção e quantificação de vazamentos",
      "Otimização da pressão de trabalho",
      "Recuperação de calor em compressores",
      "Controle de demanda e estratégias de operação",
      "Seleção e dimensionamento eficiente de equipamentos",
      "Elaboração de plano de eficiência energética",
    ],
    audience: [
      "Gestores de energia e utilidades",
      "Engenheiros de processo",
      "Responsáveis por sustentabilidade",
      "Diretores de operações industriais",
    ],
    differentials: [
      "Aulas ao vivo com interação direta com o instrutor",
      "Planilhas e ferramentas de cálculo exclusivas",
      "Estudos de caso reais com resultados comprovados",
      "Acesso à gravação por 30 dias após o curso",
      "Suporte técnico pós-curso por 15 dias",
    ],
    investmentInfo: "Consulte valores e condições especiais para grupos. Inclui material digital, planilhas de cálculo e certificado.",
    certification: "Certificado de Conclusão em Eficiência Energética em Sistemas de Ar Comprimido, emitido digitalmente pela AirTreinamentos.",
    faq: [
      { question: "O curso é ao vivo ou gravado?", answer: "O curso é ministrado ao vivo, com interação em tempo real com o instrutor. As gravações ficam disponíveis por 30 dias após o curso." },
      { question: "Que plataforma é utilizada?", answer: "Utilizamos plataformas profissionais de videoconferência com recursos de compartilhamento de tela e chat." },
      { question: "Preciso de software específico?", answer: "Não. As planilhas fornecidas funcionam no Excel ou Google Sheets. Você só precisa de um computador com acesso à internet." },
      { question: "Posso aplicar os conceitos na minha empresa durante o curso?", answer: "Sim! O curso é projetado para que você aplique imediatamente os conceitos no seu sistema de ar comprimido." },
    ],
  },
  {
    id: 4,
    slug: "nr13-vasos-pressao-compressores",
    name: "NR-13 Aplicada a Compressores",
    shortDescription: "Treinamento sobre a Norma Regulamentadora NR-13, com foco na aplicação prática em vasos de pressão e compressores industriais.",
    duration: "8h",
    modality: "online",
    categories: ["normas"],
    heroSubtitle: "Garanta a conformidade da sua operação com a NR-13 e evite autuações e acidentes em sistemas pressurizados.",
    about: "A NR-13 é a norma que regulamenta a segurança na operação de caldeiras, vasos de pressão e tubulações. Este curso foca na aplicação prática da norma em compressores e sistemas de ar comprimido, garantindo que profissionais compreendam suas responsabilidades e saibam implementar os requisitos legais.",
    syllabus: [
      "Introdução à NR-13: histórico e objetivos",
      "Classificação de vasos de pressão",
      "Requisitos de instalação e segurança",
      "Inspeções periódicas: prazos e procedimentos",
      "Documentação obrigatória (prontuário, registro de segurança)",
      "Dispositivos de segurança: válvulas e instrumentos",
      "Responsabilidades legais: empregador e operador",
      "Estudos de caso e análise de acidentes",
    ],
    audience: [
      "Operadores de compressores",
      "Técnicos de segurança do trabalho",
      "Engenheiros de segurança",
      "Gestores de manutenção e facilities",
    ],
    differentials: [
      "Conteúdo atualizado conforme última revisão da NR-13",
      "Instrutor com experiência em auditorias e inspeções",
      "Modelos de documentação prontos para uso",
      "Casos práticos de adequação e conformidade",
      "Acesso à gravação por 30 dias após o curso",
    ],
    investmentInfo: "Consulte valores e condições especiais para grupos. Inclui material digital, modelos de documentação e certificado.",
    certification: "Certificado de Conclusão em NR-13 Aplicada a Compressores, emitido digitalmente pela AirTreinamentos, válido para comprovação de capacitação conforme exigências da norma.",
    faq: [
      { question: "Este curso substitui o treinamento obrigatório da NR-13?", answer: "Este curso fornece capacitação complementar e aprofundada. A empresa deve avaliar se atende às exigências específicas do seu cenário conforme a norma." },
      { question: "Receberei modelos de documentação?", answer: "Sim. Fornecemos modelos editáveis de prontuário, registro de segurança e checklist de inspeção." },
      { question: "O certificado tem validade legal?", answer: "O certificado comprova a capacitação do profissional. A validade para fins legais depende da análise da empresa e do profissional habilitado responsável." },
      { question: "Qual a duração do acesso ao conteúdo?", answer: "O acesso às gravações e materiais fica disponível por 30 dias após a conclusão do curso." },
    ],
  },
  {
    id: 5,
    slug: "gestao-sala-compressores",
    name: "Gestão de Sala de Compressores",
    shortDescription: "Curso estratégico para gestores que desejam otimizar a operação, manutenção e custos da sala de compressores da sua planta industrial.",
    duration: "16h",
    modality: "presencial",
    categories: ["gestao", "manutencao"],
    heroSubtitle: "Transforme sua sala de compressores em um centro de excelência operacional com gestão inteligente e resultados mensuráveis.",
    about: "Este curso aborda a gestão completa de uma sala de compressores, desde o planejamento da operação até a análise de custos e indicadores de desempenho. Voltado para gestores e líderes técnicos que precisam tomar decisões estratégicas sobre investimentos, manutenção e operação de sistemas de ar comprimido.",
    syllabus: [
      "Planejamento e layout de salas de compressores",
      "Indicadores de desempenho (KPIs) para ar comprimido",
      "Gestão de manutenção: preventiva, preditiva e corretiva",
      "Análise de custo total de propriedade (TCO)",
      "Contratos de manutenção e locação de equipamentos",
      "Gestão de peças de reposição e estoque",
      "Monitoramento remoto e IoT aplicado a compressores",
      "Plano de contingência e redundância",
      "Sustentabilidade e redução de pegada de carbono",
    ],
    audience: [
      "Gerentes de manutenção e facilities",
      "Diretores de operações",
      "Coordenadores de utilidades industriais",
      "Engenheiros de planejamento",
    ],
    differentials: [
      "Abordagem estratégica e gerencial, além da técnica",
      "Ferramentas de análise financeira aplicadas",
      "Visita técnica a sala de compressores modelo",
      "Networking com profissionais do setor",
      "Material de referência para aplicação imediata",
    ],
    investmentInfo: "Consulte valores e condições especiais para grupos. Inclui material didático, visita técnica, coffee break e certificado.",
    certification: "Certificado de Conclusão em Gestão de Sala de Compressores, emitido pela AirTreinamentos, com detalhamento completo do conteúdo abordado.",
    faq: [
      { question: "Preciso ter conhecimento técnico em compressores?", answer: "Conhecimento básico é recomendado. O foco do curso é a gestão, mas conceitos técnicos essenciais são abordados." },
      { question: "O curso inclui visita técnica?", answer: "Sim. Está incluída uma visita a uma sala de compressores equipada e em operação." },
      { question: "Posso levar mais de um colaborador?", answer: "Sim! Oferecemos condições especiais para inscrições de equipes da mesma empresa." },
      { question: "Há opção online para este curso?", answer: "Atualmente este curso é oferecido apenas na modalidade presencial devido ao componente de visita técnica." },
    ],
  },
  {
    id: 6,
    slug: "qualidade-ar-comprimido-iso8573",
    name: "Qualidade do Ar Comprimido - ISO 8573",
    shortDescription: "Entenda os requisitos de qualidade do ar comprimido conforme a norma ISO 8573 e aprenda a implementar sistemas de tratamento adequados.",
    duration: "8h",
    modality: "online",
    categories: ["normas"],
    heroSubtitle: "Domine os padrões internacionais de qualidade do ar comprimido e garanta a conformidade e segurança dos seus processos.",
    about: "A qualidade do ar comprimido é crítica para diversos processos industriais, especialmente nas indústrias alimentícia, farmacêutica e eletrônica. Este curso detalha os requisitos da ISO 8573, métodos de medição e as tecnologias de tratamento de ar disponíveis no mercado.",
    syllabus: [
      "Introdução à ISO 8573: classes de pureza",
      "Contaminantes do ar comprimido: partículas, água e óleo",
      "Métodos de medição e monitoramento",
      "Tecnologias de secagem: refrigeração e adsorção",
      "Filtragem: tipos e seleção adequada",
      "Ponto de orvalho: conceito e importância",
      "Aplicações críticas e requisitos específicos",
      "Auditoria de qualidade do ar comprimido",
    ],
    audience: [
      "Engenheiros de qualidade",
      "Técnicos de manutenção",
      "Profissionais de indústrias farmacêutica e alimentícia",
      "Responsáveis por sistemas de ar comprimido",
    ],
    differentials: [
      "Conteúdo focado na aplicação prática da norma",
      "Tabelas de referência rápida inclusas",
      "Casos reais de adequação à norma",
      "Instrutor com experiência em auditorias de qualidade",
      "Acesso à gravação por 30 dias",
    ],
    investmentInfo: "Consulte valores e condições especiais para grupos. Inclui material digital, tabelas de referência e certificado.",
    certification: "Certificado de Conclusão em Qualidade do Ar Comprimido - ISO 8573, emitido digitalmente pela AirTreinamentos.",
    faq: [
      { question: "Preciso conhecer a norma previamente?", answer: "Não. O curso parte dos conceitos básicos e avança progressivamente até a aplicação prática completa." },
      { question: "O curso aborda equipamentos específicos?", answer: "Sim. Abordamos os principais tipos de secadores e filtros disponíveis no mercado, com análise comparativa." },
      { question: "É aplicável a qualquer segmento industrial?", answer: "Sim. A ISO 8573 é universal, e o curso aborda aplicações em diversos setores, com ênfase nos mais críticos." },
      { question: "Terei acesso a materiais de referência?", answer: "Sim. Você receberá tabelas de referência rápida e guias práticos para consulta no dia a dia." },
    ],
  },
  {
    id: 7,
    slug: "manutencao-redes-distribuicao",
    name: "Manutenção de Redes de Distribuição",
    shortDescription: "Curso sobre projeto, instalação e manutenção de redes de distribuição de ar comprimido, incluindo materiais, dimensionamento e detecção de vazamentos.",
    duration: "12h",
    modality: "presencial",
    categories: ["manutencao"],
    heroSubtitle: "Projete e mantenha redes de distribuição eficientes que minimizem perdas de carga e vazamentos.",
    about: "A rede de distribuição é um componente crítico do sistema de ar comprimido. Vazamentos e perda de carga inadequada podem representar desperdícios significativos de energia. Este curso aborda desde o projeto até a manutenção preventiva de redes, com foco em eficiência e confiabilidade.",
    syllabus: [
      "Fundamentos de redes de distribuição de ar comprimido",
      "Materiais para tubulações: aço, alumínio e plástico",
      "Dimensionamento e cálculo de perda de carga",
      "Layouts de rede: anel, espinha de peixe e misto",
      "Conexões, válvulas e acessórios",
      "Detecção e reparo de vazamentos",
      "Drenagem e eliminação de condensado",
      "Programa de manutenção preventiva de redes",
    ],
    audience: [
      "Técnicos de manutenção",
      "Projetistas industriais",
      "Instaladores de sistemas pneumáticos",
      "Engenheiros de facilities",
    ],
    differentials: [
      "Demonstrações práticas de instalação e reparo",
      "Uso de equipamentos de detecção de vazamentos ultrassônicos",
      "Cálculos de dimensionamento com software",
      "Amostras de materiais para análise comparativa",
      "Guia prático de manutenção incluso",
    ],
    investmentInfo: "Consulte valores e condições especiais para grupos. Inclui material didático, guia prático, coffee break e certificado.",
    certification: "Certificado de Conclusão em Manutenção de Redes de Distribuição de Ar Comprimido, emitido pela AirTreinamentos.",
    faq: [
      { question: "O curso inclui prática com equipamentos de detecção?", answer: "Sim. Os participantes terão oportunidade de utilizar detectores ultrassônicos de vazamento durante o treinamento." },
      { question: "Aborda redes existentes ou apenas projetos novos?", answer: "Ambos. O curso cobre tanto o projeto de novas redes quanto a avaliação e melhoria de redes existentes." },
      { question: "Há pré-requisitos técnicos?", answer: "Conhecimento básico em manutenção industrial é recomendado, mas não obrigatório." },
      { question: "Posso solicitar este treinamento na minha empresa?", answer: "Sim. Oferecemos a modalidade in-company para este curso. Entre em contato para personalização e orçamento." },
    ],
  },
  {
    id: 8,
    slug: "automacao-controle-compressores",
    name: "Automação e Controle de Compressores",
    shortDescription: "Treinamento sobre sistemas de automação, controle de capacidade e monitoramento inteligente de compressores industriais.",
    duration: "16h",
    modality: "online",
    categories: ["manutencao", "gestao"],
    heroSubtitle: "Domine as tecnologias de automação e controle para maximizar a eficiência e a confiabilidade dos seus compressores.",
    about: "Com a evolução da Indústria 4.0, a automação e o monitoramento inteligente de compressores tornaram-se essenciais. Este curso aborda desde os sistemas de controle básicos até soluções avançadas de IoT, análise de dados e manutenção preditiva aplicadas a sistemas de ar comprimido.",
    syllabus: [
      "Sistemas de controle de capacidade em compressores",
      "Controladores lógicos programáveis (CLP) aplicados",
      "Sequenciadores e gerenciadores de múltiplos compressores",
      "Sensores e instrumentação para ar comprimido",
      "Monitoramento remoto e IoT industrial",
      "Análise de dados e dashboards operacionais",
      "Manutenção preditiva baseada em dados",
      "Integração com sistemas SCADA e MES",
    ],
    audience: [
      "Técnicos de automação",
      "Engenheiros de automação e controle",
      "Gestores de manutenção",
      "Profissionais de TI industrial",
    ],
    differentials: [
      "Conteúdo atualizado com tendências de Indústria 4.0",
      "Demonstrações de plataformas de monitoramento reais",
      "Casos de implementação com resultados comprovados",
      "Instrutor com experiência em projetos de automação industrial",
      "Acesso à gravação por 30 dias",
    ],
    investmentInfo: "Consulte valores e condições especiais para grupos. Inclui material digital, acesso a demonstrações e certificado.",
    certification: "Certificado de Conclusão em Automação e Controle de Compressores, emitido digitalmente pela AirTreinamentos.",
    faq: [
      { question: "Preciso ter experiência com automação?", answer: "Conhecimento básico de automação industrial é recomendado, mas o curso parte dos fundamentos aplicados a compressores." },
      { question: "O curso aborda alguma marca específica?", answer: "O curso é agnóstico em relação a fabricantes, abordando conceitos aplicáveis a qualquer marca de compressor." },
      { question: "Terei acesso a softwares durante o curso?", answer: "Sim. Faremos demonstrações práticas em plataformas de monitoramento e análise de dados." },
      { question: "É possível adaptar o conteúdo para minha empresa?", answer: "Sim, na modalidade in-company podemos personalizar o conteúdo para os equipamentos e sistemas da sua planta." },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
