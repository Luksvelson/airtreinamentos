import coursePistao from "../assets/images/course-pistao.png";
import courseParafusoManutencao from "../assets/images/course-parafuso-manutencao.png";
import courseParafusoReparo from "../assets/images/course-parafuso-reparo.png";
import courseRefrigeracao from "../assets/images/course-refrigeracao.png";
import courseComandoEletrico from "../assets/images/course-comando-eletrico.png";
import courseMontagem from "../assets/images/course-montagem-centrais.png";
import courseGerenciamento from "../assets/images/course-gerenciamento.png";
import courseNr13 from "../assets/images/course-nr13.png";
import courseSeguranca from "../assets/images/course-seguranca.png";
import courseRevolucao from "../assets/images/course-revolucao.png";

export type Modality = "presencial" | "online";
export type Category = "manutencao" | "normas" | "gestao" | "eletrica";

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
  image: string;
  heroSubtitle: string;
  about: string;
  syllabus: string[];
  audience: string[];
  differentials: string[];
  certification: string;
  faq: FaqItem[];
}

export const categoryLabels: Record<Category, string> = {
  manutencao: "Manutenção",
  normas: "Normas",
  gestao: "Gestão",
  eletrica: "Elétrica",
};

export const modalityLabels: Record<Modality, string> = {
  presencial: "Presencial",
  online: "Online",
};

export const courses: Course[] = [
  {
    id: 1,
    slug: "compressor-pistao",
    name: "Compressor de Pistão",
    shortDescription: "Curso de formação de técnico de manutenção preventiva, corretiva e reparo dos compressores alternativos de pistão.",
    duration: "36h",
    modality: "presencial",
    categories: ["manutencao"],
    image: coursePistao,
    heroSubtitle: "Torne-se um técnico especialista em manutenção preventiva, corretiva e reparo de compressores alternativos de pistão.",
    about: "Este curso forma profissionais completos na manutenção de compressores de pistão, abordando desde os fundamentos de funcionamento até procedimentos avançados de reparo. O aluno aprenderá a realizar diagnósticos precisos, executar manutenções preventivas e corretivas, e dominar técnicas de reparo que garantem a longevidade e eficiência dos equipamentos.",
    syllabus: [
      "Princípios de funcionamento do compressor de pistão",
      "Componentes e sistemas do compressor alternativo",
      "Planos de manutenção preventiva",
      "Diagnóstico e correção de falhas",
      "Técnicas de reparo de cabeçotes e válvulas",
      "Sistema de lubrificação e refrigeração",
      "Ajuste e calibração de pressostatos",
      "Análise de desempenho e rendimento",
      "Procedimentos de segurança na manutenção",
      "Práticas em equipamentos reais",
    ],
    audience: [
      "Técnicos de manutenção mecânica",
      "Mecânicos industriais",
      "Profissionais que desejam se especializar em compressores de pistão",
      "Auxiliares de manutenção buscando qualificação",
    ],
    differentials: [
      "Formação completa com 36 horas de conteúdo",
      "Prática em compressores de pistão reais",
      "Instrutores com experiência de campo comprovada",
      "Material didático exclusivo e atualizado",
      "Certificado reconhecido pelo mercado",
    ],
    certification: "Certificado de Conclusão em Manutenção de Compressores de Pistão, emitido pela AirTreinamentos, reconhecido pelo mercado industrial.",
    faq: [
      { question: "Preciso ter experiência prévia?", answer: "Conhecimento básico em mecânica industrial é recomendado, mas o curso parte dos fundamentos." },
      { question: "O curso inclui aulas práticas?", answer: "Sim. A modalidade presencial inclui atividades práticas em compressores de pistão reais." },
      { question: "Posso fazer o curso online?", answer: "Sim. Oferecemos a versão online com conteúdo teórico completo e videoaulas. Entre em contato para mais informações." },
      { question: "Há opção de pagamento parcelado?", answer: "Sim, entre em contato conosco para conhecer as condições de parcelamento disponíveis." },
    ],
  },
  {
    id: 2,
    slug: "manutencao-compressores-parafuso",
    name: "Manutenção de Compressores Parafuso",
    shortDescription: "Curso de manutenção preventiva, corretiva e reparo de compressores rotativos de parafuso.",
    duration: "42h",
    modality: "presencial",
    categories: ["manutencao"],
    image: courseParafusoManutencao,
    heroSubtitle: "Domine as técnicas de manutenção preventiva, corretiva e reparo de compressores rotativos de parafuso.",
    about: "Curso completo e aprofundado em manutenção de compressores rotativos de parafuso, o tipo mais utilizado na indústria moderna. Com 42 horas de conteúdo, o profissional será capacitado a realizar todos os procedimentos de manutenção preventiva, corretiva e reparo, garantindo máxima disponibilidade e vida útil dos equipamentos.",
    syllabus: [
      "Princípios de funcionamento do compressor parafuso",
      "Sistemas de lubrificação: óleos, filtros e separadores",
      "Manutenção preventiva: planos e procedimentos",
      "Análise de óleo e monitoramento de condição",
      "Diagnóstico de falhas comuns e avançadas",
      "Sistema de controle e regulação de capacidade",
      "Válvulas de admissão, mínima pressão e termostática",
      "Procedimentos de parada e partida segura",
      "Troca de rolamentos e vedações",
      "Alinhamento e acoplamentos",
      "Manutenção corretiva e técnicas de reparo",
      "Práticas em equipamentos reais",
    ],
    audience: [
      "Técnicos de manutenção mecânica",
      "Mecânicos industriais",
      "Supervisores de manutenção",
      "Engenheiros de confiabilidade",
    ],
    differentials: [
      "Curso mais completo do mercado com 42 horas",
      "Prática em compressores parafuso desmontados e em operação",
      "Simulação de falhas reais para diagnóstico",
      "Instrutores com vasta experiência em campo",
      "Manual técnico de referência incluso",
    ],
    certification: "Certificado de Conclusão em Manutenção de Compressores Rotativos de Parafuso, emitido pela AirTreinamentos, com detalhamento da carga horária prática e teórica.",
    faq: [
      { question: "Qual o nível técnico necessário?", answer: "Recomendamos conhecimento básico em manutenção mecânica industrial. O curso parte de conceitos intermediários." },
      { question: "Vou trabalhar com equipamentos reais?", answer: "Sim, na modalidade presencial. O curso inclui atividades práticas em compressores parafuso reais." },
      { question: "Qual a diferença entre o presencial e online?", answer: "O presencial inclui práticas em equipamentos reais. O online oferece todo o conteúdo teórico com videoaulas detalhadas." },
      { question: "Há opção de treinamento in-company?", answer: "Sim. Este curso pode ser adaptado e ministrado nas instalações da sua empresa. Entre em contato para um orçamento personalizado." },
    ],
  },
  {
    id: 3,
    slug: "reparo-unidades-compressoras-parafuso",
    name: "Reparo de Unidades Compressoras de Parafuso",
    shortDescription: "Curso especializado em reparo de unidades compressoras rotativas de parafuso, com foco em procedimentos avançados.",
    duration: "28h",
    modality: "presencial",
    categories: ["manutencao"],
    image: courseParafusoReparo,
    heroSubtitle: "Especialize-se no reparo avançado de unidades compressoras rotativas de parafuso com técnicas profissionais.",
    about: "Curso avançado e especializado focado exclusivamente no reparo de unidades compressoras de parafuso. Este treinamento capacita o profissional a realizar intervenções complexas nas unidades compressoras, incluindo desmontagem, inspeção, substituição de componentes internos e remontagem com precisão. Ideal para quem já possui experiência em manutenção e deseja se aprofundar no reparo.",
    syllabus: [
      "Anatomia da unidade compressora de parafuso",
      "Ferramentas e equipamentos especiais para reparo",
      "Procedimentos de desmontagem da unidade compressora",
      "Inspeção e medição de rotores",
      "Análise de desgaste e danos em componentes",
      "Substituição de rolamentos e vedações",
      "Ajustes de folgas e tolerâncias",
      "Procedimentos de remontagem",
      "Testes e validação pós-reparo",
      "Práticas avançadas em unidades reais",
    ],
    audience: [
      "Técnicos de manutenção experientes",
      "Especialistas em compressores",
      "Profissionais de assistência técnica",
      "Engenheiros de manutenção",
    ],
    differentials: [
      "Curso altamente especializado e avançado",
      "Prática intensiva em unidades compressoras reais",
      "Ferramentas especiais disponíveis durante o treinamento",
      "Instrutores com experiência em reparos de fábrica",
      "Conteúdo exclusivo não encontrado em outros cursos",
    ],
    certification: "Certificado de Conclusão em Reparo de Unidades Compressoras Rotativas de Parafuso, emitido pela AirTreinamentos.",
    faq: [
      { question: "Preciso ter feito o curso de manutenção antes?", answer: "Recomendamos experiência prévia em manutenção de compressores parafuso. O curso parte de um nível avançado." },
      { question: "Quais ferramentas são utilizadas?", answer: "Todas as ferramentas especiais são fornecidas durante o treinamento presencial, incluindo equipamentos de medição de precisão." },
      { question: "O curso online é tão completo quanto o presencial?", answer: "O online oferece todo o conteúdo teórico e videoaulas detalhadas dos procedimentos. O presencial agrega a prática hands-on." },
      { question: "Posso solicitar este curso para minha equipe?", answer: "Sim, oferecemos treinamentos in-company personalizados. Entre em contato para orçamento." },
    ],
  },
  {
    id: 4,
    slug: "refrigeracao-tratamento-ar-comprimido",
    name: "Refrigeração e Tratamento do Ar Comprimido",
    shortDescription: "Curso completo sobre sistemas de refrigeração e tratamento do ar comprimido, incluindo secadores, filtros e qualidade do ar.",
    duration: "60h",
    modality: "presencial",
    categories: ["manutencao"],
    image: courseRefrigeracao,
    heroSubtitle: "Domine os sistemas de refrigeração e tratamento do ar comprimido com o curso mais completo do mercado.",
    about: "Com 60 horas de conteúdo, este é o curso mais abrangente sobre tratamento do ar comprimido. Aborda desde os princípios de refrigeração até as tecnologias mais avançadas de secagem e filtragem, capacitando o profissional a projetar, instalar e manter sistemas de tratamento que garantem a qualidade do ar conforme as exigências de cada aplicação industrial.",
    syllabus: [
      "Fundamentos de refrigeração aplicada ao ar comprimido",
      "Ciclo de refrigeração e componentes",
      "Secadores por refrigeração: operação e manutenção",
      "Secadores por adsorção: tipos e aplicações",
      "Filtragem do ar comprimido: coalescente, particulado e carvão ativado",
      "Ponto de orvalho: conceito, medição e controle",
      "Drenagem e eliminação de condensado",
      "Qualidade do ar conforme ISO 8573",
      "Dimensionamento de sistemas de tratamento",
      "Diagnóstico e solução de problemas",
      "Manutenção preventiva de equipamentos de tratamento",
      "Práticas em equipamentos reais",
    ],
    audience: [
      "Técnicos de manutenção mecânica e de refrigeração",
      "Engenheiros de processo e utilidades",
      "Profissionais de indústrias alimentícia e farmacêutica",
      "Responsáveis por qualidade do ar comprimido",
    ],
    differentials: [
      "Curso mais completo do segmento com 60 horas",
      "Abordagem integrada de refrigeração e tratamento",
      "Prática em diversos tipos de secadores e filtros",
      "Conteúdo alinhado com normas ISO 8573",
      "Material didático completo e atualizado",
    ],
    certification: "Certificado de Conclusão em Refrigeração e Tratamento do Ar Comprimido, emitido pela AirTreinamentos, com 60 horas de carga horária.",
    faq: [
      { question: "Preciso ter experiência em refrigeração?", answer: "Não é obrigatório. O curso parte dos fundamentos de refrigeração e avança progressivamente." },
      { question: "O curso aborda a norma ISO 8573?", answer: "Sim. Abordamos os requisitos de qualidade do ar comprimido conforme a ISO 8573 e como atendê-los." },
      { question: "Qual a diferença para o curso presencial?", answer: "O presencial inclui práticas hands-on em equipamentos reais. O online oferece todo o conteúdo teórico com videoaulas." },
      { question: "É possível parcelar o investimento?", answer: "Sim, entre em contato conosco para conhecer as opções de parcelamento disponíveis." },
    ],
  },
  {
    id: 5,
    slug: "comando-eletrico-compressores",
    name: "Comando Elétrico dos Compressores",
    shortDescription: "Curso sobre comandos elétricos de compressores: partida direta, estrela-triângulo, soft start, inversor de frequência, motores de indução e ímã permanente.",
    duration: "50h",
    modality: "presencial",
    categories: ["eletrica", "manutencao"],
    image: courseComandoEletrico,
    heroSubtitle: "Domine os sistemas de comando elétrico de compressores de pistão e parafuso, da partida direta ao inversor de frequência.",
    about: "Curso abrangente sobre os sistemas de comando elétrico utilizados em compressores de pistão e parafuso. O profissional aprenderá desde os métodos de partida convencionais até as tecnologias mais modernas como soft start, inversores de frequência e motores de ímã permanente. Com 50 horas de conteúdo, o curso forma especialistas preparados para instalar, manter e diagnosticar problemas em qualquer sistema de comando elétrico de compressores.",
    syllabus: [
      "Fundamentos de eletricidade aplicada a compressores",
      "Chave de partida direta: projeto e aplicação",
      "Partida estrela-triângulo: dimensionamento e operação",
      "Soft start: princípios, configuração e aplicação",
      "Inversores de frequência: programação e integração",
      "Motores de indução: características e manutenção",
      "Motores de ímã permanente: tecnologia e vantagens",
      "Painéis elétricos: leitura de diagramas e montagem",
      "Proteções elétricas e sistemas de segurança",
      "Diagnóstico de falhas elétricas em compressores",
      "Eficiência energética em comandos elétricos",
      "Práticas em painéis e equipamentos reais",
    ],
    audience: [
      "Eletricistas industriais",
      "Técnicos de manutenção elétrica",
      "Engenheiros eletricistas",
      "Técnicos de automação",
      "Profissionais de compressores que desejam conhecer a parte elétrica",
    ],
    differentials: [
      "Curso completo com 50 horas cobrindo todas as tecnologias de partida",
      "Prática em painéis elétricos reais de compressores",
      "Conteúdo atualizado com motores de ímã permanente",
      "Abordagem comparativa entre tecnologias de partida",
      "Instrutores com experiência em elétrica e compressores",
    ],
    certification: "Certificado de Conclusão em Comando Elétrico dos Compressores, emitido pela AirTreinamentos, com detalhamento das tecnologias abordadas.",
    faq: [
      { question: "Preciso ser eletricista para fazer o curso?", answer: "Conhecimento básico em eletricidade industrial é recomendado, mas o curso parte dos fundamentos aplicados a compressores." },
      { question: "O curso aborda todas as marcas de inversores?", answer: "O curso é agnóstico em relação a fabricantes, abordando conceitos aplicáveis a qualquer marca." },
      { question: "A versão online inclui simulações?", answer: "Sim, a versão online inclui videoaulas detalhadas e material de apoio com diagramas e simulações." },
      { question: "Há pré-requisitos?", answer: "Recomendamos conhecimento básico em eletricidade. NR-10 é um diferencial, mas não obrigatório." },
    ],
  },
  {
    id: 6,
    slug: "montagem-centrais-rede-ar",
    name: "Montagem de Centrais e Rede de Ar Comprimido",
    shortDescription: "Curso sobre montagem de centrais de ar comprimido (geração, tratamento, armazenamento), redes de distribuição e dimensionamento de equipamentos.",
    duration: "24h",
    modality: "presencial",
    categories: ["manutencao", "gestao"],
    image: courseMontagem,
    heroSubtitle: "Aprenda a projetar e montar centrais completas de ar comprimido com geração, tratamento, armazenamento e rede de distribuição.",
    about: "Este curso capacita o profissional a projetar e montar centrais completas de ar comprimido, abrangendo os três pilares fundamentais: geração, tratamento e armazenamento. Além disso, aborda o dimensionamento e instalação de redes de distribuição, garantindo que o sistema opere com máxima eficiência e atenda às demandas da planta industrial.",
    syllabus: [
      "Planejamento e layout de centrais de ar comprimido",
      "Dimensionamento de compressores para a demanda",
      "Sistemas de tratamento: secadores e filtros",
      "Reservatórios: dimensionamento e normas de segurança",
      "Redes de distribuição: materiais e tipos de layout",
      "Cálculo de perda de carga e dimensionamento de tubulações",
      "Conexões, válvulas e pontos de uso",
      "Drenagem e eliminação de condensado na rede",
      "Projeto integrado: da geração ao ponto de uso",
      "Boas práticas de instalação e comissionamento",
    ],
    audience: [
      "Projetistas e instaladores industriais",
      "Engenheiros de facilities e utilidades",
      "Gestores de manutenção",
      "Técnicos de manutenção",
      "Profissionais que planejam ou ampliam sistemas de ar comprimido",
    ],
    differentials: [
      "Visão completa do sistema: geração, tratamento e distribuição",
      "Ferramentas práticas de dimensionamento",
      "Estudos de caso de projetos reais",
      "Instrutores com experiência em projetos industriais",
      "Material de referência para aplicação imediata",
    ],
    certification: "Certificado de Conclusão em Montagem de Centrais e Rede de Ar Comprimido, emitido pela AirTreinamentos.",
    faq: [
      { question: "Preciso ser engenheiro para fazer este curso?", answer: "Não. O curso é acessível a técnicos e profissionais com interesse em projetos de ar comprimido." },
      { question: "O curso inclui ferramentas de cálculo?", answer: "Sim, fornecemos planilhas e métodos práticos de dimensionamento para uso no dia a dia." },
      { question: "Posso aplicar o conteúdo em projetos de ampliação?", answer: "Sim. O curso aborda tanto projetos novos quanto ampliações e melhorias em sistemas existentes." },
      { question: "O curso online é tão completo quanto o presencial?", answer: "Sim, o conteúdo teórico é o mesmo. O presencial agrega visitas e demonstrações práticas." },
    ],
  },
  {
    id: 7,
    slug: "gerenciamento-producao-ar",
    name: "Gerenciamento da Produção e Utilização do Ar",
    shortDescription: "Curso de gerenciamento da produção e utilização do ar comprimido com foco na Indústria 4.0.",
    duration: "16h",
    modality: "presencial",
    categories: ["gestao"],
    image: courseGerenciamento,
    heroSubtitle: "Gerencie a produção e utilização do ar comprimido com inteligência, conectando sua operação à Indústria 4.0.",
    about: "Curso estratégico voltado para gestores e líderes técnicos que precisam otimizar a produção e utilização do ar comprimido em suas plantas industriais. Com foco na Indústria 4.0, aborda as tecnologias de monitoramento, análise de dados e gestão inteligente que permitem reduzir custos, aumentar a eficiência e tomar decisões baseadas em dados.",
    syllabus: [
      "Indicadores de desempenho (KPIs) para ar comprimido",
      "Análise de custo total de propriedade (TCO)",
      "Monitoramento em tempo real e IoT aplicado",
      "Gestão de demanda e otimização de consumo",
      "Eficiência energética e redução de desperdícios",
      "Indústria 4.0 aplicada a sistemas de ar comprimido",
      "Análise de dados e tomada de decisão",
      "Planos de contingência e redundância",
    ],
    audience: [
      "Gerentes de manutenção e operações",
      "Diretores industriais",
      "Coordenadores de utilidades",
      "Engenheiros de planejamento e processo",
    ],
    differentials: [
      "Foco em gestão estratégica e Indústria 4.0",
      "Ferramentas de análise financeira aplicadas",
      "Estudos de caso com resultados mensuráveis",
      "Networking com profissionais do setor",
      "Material de referência para aplicação imediata",
    ],
    certification: "Certificado de Conclusão em Gerenciamento da Produção e Utilização do Ar Comprimido, emitido pela AirTreinamentos.",
    faq: [
      { question: "Preciso ter conhecimento técnico em compressores?", answer: "Conhecimento básico é recomendado. O foco do curso é a gestão, mas conceitos técnicos essenciais são abordados." },
      { question: "O que é abordado sobre Indústria 4.0?", answer: "Abordamos IoT, monitoramento remoto, análise de dados e como essas tecnologias se aplicam à gestão do ar comprimido." },
      { question: "Posso levar mais de um colaborador?", answer: "Sim. Oferecemos condições especiais para inscrições de equipes da mesma empresa." },
      { question: "O curso online tem o mesmo conteúdo?", answer: "Sim, o conteúdo teórico é idêntico. O presencial agrega interação e networking." },
    ],
  },
  {
    id: 8,
    slug: "nr13-vasos-pressao-compressores",
    name: "NR-13 - Vasos de Pressão e Compressores",
    shortDescription: "Curso sobre a Norma Regulamentadora NR-13 do Ministério do Trabalho e Emprego, aplicada a vasos de pressão e compressores.",
    duration: "30h",
    modality: "presencial",
    categories: ["normas"],
    image: courseNr13,
    heroSubtitle: "Garanta a conformidade da sua operação com a NR-13 e capacite sua equipe conforme as exigências do Ministério do Trabalho.",
    about: "A NR-13 é a norma do Ministério do Trabalho e Emprego que regulamenta a segurança na operação de caldeiras, vasos de pressão e tubulações. Com 30 horas de conteúdo, este curso aprofunda a aplicação prática da norma em compressores e sistemas de ar comprimido, garantindo que profissionais compreendam suas responsabilidades e saibam implementar todos os requisitos legais.",
    syllabus: [
      "Introdução à NR-13: histórico, objetivos e abrangência",
      "Classificação de vasos de pressão",
      "Requisitos de instalação e segurança",
      "Inspeções periódicas: prazos e procedimentos",
      "Documentação obrigatória: prontuário e registro de segurança",
      "Dispositivos de segurança: válvulas e instrumentos",
      "Responsabilidades legais: empregador, operador e profissional habilitado",
      "Procedimentos de emergência",
      "Estudos de caso e análise de acidentes",
      "Atualização normativa e tendências",
    ],
    audience: [
      "Operadores de compressores e vasos de pressão",
      "Técnicos de segurança do trabalho",
      "Engenheiros de segurança",
      "Gestores de manutenção e facilities",
    ],
    differentials: [
      "Conteúdo completo com 30 horas de formação",
      "Atualizado conforme última revisão da NR-13",
      "Instrutor com experiência em auditorias e inspeções",
      "Modelos de documentação prontos para uso",
      "Casos práticos de adequação e conformidade",
    ],
    certification: "Certificado de Conclusão em NR-13 Aplicada a Vasos de Pressão e Compressores, emitido pela AirTreinamentos, válido para comprovação de capacitação.",
    faq: [
      { question: "Este curso substitui o treinamento obrigatório da NR-13?", answer: "Este curso fornece capacitação completa conforme os requisitos da norma. A empresa deve avaliar a aplicabilidade ao seu cenário específico." },
      { question: "Receberei modelos de documentação?", answer: "Sim. Fornecemos modelos editáveis de prontuário, registro de segurança e checklist de inspeção." },
      { question: "O curso online tem o mesmo valor legal?", answer: "Sim, o conteúdo e o certificado são equivalentes. A empresa é responsável por validar a modalidade conforme suas exigências internas." },
      { question: "Qual a duração do acesso online?", answer: "O acesso ao conteúdo online fica disponível por 30 dias após a conclusão do curso." },
    ],
  },
  {
    id: 9,
    slug: "seguranca-normas-tecnicas",
    name: "Segurança e Normas Técnicas de Ar Comprimido",
    shortDescription: "Curso rápido sobre segurança e normas técnicas aplicadas a sistemas de ar comprimido.",
    duration: "2h",
    modality: "online",
    categories: ["normas"],
    image: courseSeguranca,
    heroSubtitle: "Conheça as principais normas de segurança aplicadas a sistemas de ar comprimido de forma rápida e objetiva.",
    about: "Curso 100% online e objetivo que apresenta as principais normas de segurança aplicáveis a sistemas de ar comprimido. Em apenas 2 horas, o profissional terá uma visão clara das exigências normativas, boas práticas de segurança e responsabilidades legais relacionadas à operação e manutenção de sistemas pressurizados.",
    syllabus: [
      "Panorama das normas técnicas para ar comprimido",
      "Riscos associados a sistemas pressurizados",
      "Boas práticas de segurança na operação",
      "Equipamentos de proteção e dispositivos de segurança",
      "Responsabilidades legais do operador e da empresa",
      "Procedimentos de emergência",
    ],
    audience: [
      "Operadores de compressores",
      "Técnicos de manutenção",
      "Profissionais de segurança do trabalho",
      "Gestores que precisam de uma visão geral sobre normas",
    ],
    differentials: [
      "Curso rápido e objetivo de apenas 2 horas",
      "100% online com acesso imediato",
      "Investimento acessível",
      "Conteúdo direto ao ponto sem enrolação",
      "Certificado de conclusão incluso",
    ],
    certification: "Certificado de Conclusão em Segurança e Normas Técnicas de Ar Comprimido, emitido digitalmente pela AirTreinamentos.",
    faq: [
      { question: "O curso é ao vivo ou gravado?", answer: "O curso é gravado, permitindo que você assista no seu ritmo e horário." },
      { question: "Por quanto tempo terei acesso?", answer: "O acesso fica disponível por 30 dias após a compra." },
      { question: "É indicado para quem não tem experiência?", answer: "Sim. O curso é introdutório e acessível para qualquer profissional da área industrial." },
      { question: "Posso usar o certificado para comprovar capacitação?", answer: "O certificado comprova a participação no treinamento. Consulte sua empresa sobre a validade para fins específicos." },
    ],
  },
  {
    id: 10,
    slug: "revolucao-industrial",
    name: "Revolução Industrial: da 1ª à 5ª",
    shortDescription: "Curso sobre a evolução da revolução industrial, da 1ª à 4ª, conectando-se com a 5ª revolução industrial.",
    duration: "12h",
    modality: "online",
    categories: ["gestao"],
    image: courseRevolucao,
    heroSubtitle: "Entenda a evolução industrial da 1ª à 4ª revolução e descubra como se conectar com a 5ª revolução industrial.",
    about: "Este curso oferece uma jornada pela história e evolução da indústria, desde a primeira revolução industrial até a Indústria 4.0 atual, e projeta o futuro com a 5ª revolução industrial. O profissional entenderá como cada revolução transformou os processos produtivos, quais tecnologias foram determinantes e como se preparar para as mudanças que estão por vir, com foco especial na aplicação ao setor de ar comprimido e manufatura.",
    syllabus: [
      "1ª Revolução Industrial: mecanização e energia a vapor",
      "2ª Revolução Industrial: eletricidade e produção em massa",
      "3ª Revolução Industrial: automação e computadores",
      "4ª Revolução Industrial: IoT, IA e sistemas cyber-físicos",
      "5ª Revolução Industrial: colaboração humano-máquina",
      "Impacto das revoluções no setor de ar comprimido",
      "Tecnologias emergentes e tendências",
      "Como preparar sua empresa para o futuro",
    ],
    audience: [
      "Gestores e líderes industriais",
      "Profissionais de todas as áreas que desejam entender a evolução industrial",
      "Estudantes e profissionais em início de carreira",
      "Interessados em Indústria 4.0 e 5.0",
    ],
    differentials: [
      "Visão ampla e conectada da evolução industrial",
      "Conteúdo acessível e didático",
      "100% online com flexibilidade de horário",
      "Investimento acessível",
      "Aplicação prática ao setor de ar comprimido",
    ],
    certification: "Certificado de Conclusão em Revolução Industrial: da 1ª à 5ª, emitido digitalmente pela AirTreinamentos.",
    faq: [
      { question: "Preciso ter conhecimento prévio?", answer: "Não. O curso é acessível para qualquer profissional interessado em entender a evolução da indústria." },
      { question: "O curso é ao vivo ou gravado?", answer: "O curso é gravado, permitindo que você assista no seu ritmo." },
      { question: "Há aplicação prática para o setor de ar comprimido?", answer: "Sim. Contextualizamos cada revolução com seu impacto nos processos de ar comprimido e manufatura." },
      { question: "Por quanto tempo terei acesso?", answer: "O acesso ao conteúdo fica disponível por 30 dias após a compra." },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
