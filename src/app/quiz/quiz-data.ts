// Interface para a estrutura de dados das respostas
export interface AnswerOption {
    text: string;
    rationale: string;
    isCorrect: boolean;
  }
  
  // Interface para a estrutura de dados da pergunta
  export interface Question {
    questionNumber: number;
    question: string;
    answerOptions: AnswerOption[];
    hint: string;
  }
  
  // Array com todas as perguntas e respostas
  export const QUIZ_QUESTIONS: Question[] = [
    {
      questionNumber: 1,
      question: "De acordo com o resumo, qual é o papel central da Inclusão Digital e Acessibilidade na sociedade moderna?",
      answerOptions: [
        {
          text: "Fomentar o uso de redes sociais por jovens.",
          rationale: "Embora o uso de redes sociais seja uma atividade digital, o papel central é muito mais abrangente, focando em direitos e participação plena.",
          isCorrect: false
        },
        {
          text: "Serem pilares da cidadania, combatendo a exclusão de pessoas da tecnologia.",
          rationale: "O texto define explicitamente a Inclusão Digital e Acessibilidade como essenciais para a cidadania plena e para combater a exclusão.",
          isCorrect: true
        },
        {
          text: "Diminuir apenas a desigualdade de renda entre as classes.",
          rationale: "O impacto da exclusão é amplo, afetando a participação social, cívica e econômica, não se limitando à renda.",
          isCorrect: false
        },
        {
          text: "Garantir que apenas empresas de tecnologia lucrem mais.",
          rationale: "O foco é social e cívico, garantindo direitos para os usuários, e não primariamente o lucro empresarial.",
          isCorrect: false
        }
      ],
      hint: "Pense no termo que define a participação plena e igualitária na sociedade."
    },
    {
      questionNumber: 2,
      question: "Quais grupos específicos são mencionados como sendo os mais afetados pela exclusão digital no Brasil, segundo o texto?",
      answerOptions: [
        {
          text: "Estudantes universitários, empresários de pequeno porte e programadores.",
          rationale: "Estes grupos não são listados como os mais vulneráveis à exclusão digital no contexto do resumo.",
          isCorrect: false
        },
        {
          text: "Jovens, profissionais liberais e pessoas que moram em capitais.",
          rationale: "O texto foca em grupos por idade, renda e condição de deficiência.",
          isCorrect: false
        },
        {
          text: "Idosos, pessoas de baixa renda e pessoas com deficiência.",
          rationale: "Estes são os três grupos que o resumo identifica como os mais impactados.",
          isCorrect: true
        },
        {
          text: "Trabalhadores rurais, professores e políticos.",
          rationale: "O texto lista especificamente idosos, baixa renda e pessoas com deficiência.",
          isCorrect: false
        }
      ],
      hint: "Lembre-se das categorias de vulnerabilidade social e demográfica mencionadas."
    },
    {
      questionNumber: 3,
      question: "Qual é o principal objetivo da Acessibilidade Digital?",
      answerOptions: [
        {
          text: "Tornar os softwares mais rápidos e eficientes para todos os usuários.",
          rationale: "A eficiência é um benefício, mas o objetivo central é a remoção de barreiras para um grupo específico.",
          isCorrect: false
        },
        {
          text: "Promover a distribuição gratuita de computadores e smartphones.",
          rationale: "Essa é uma ação de inclusão, mas a acessibilidade digital lida com a usabilidade do conteúdo e da interface.",
          isCorrect: false
        },
        {
          text: "Remover as barreiras para usuários com deficiência, garantindo acesso pleno.",
          rationale: "A acessibilidade digital concentra-se em garantir que usuários com deficiência possam perceber, operar e compreender o conteúdo.",
          isCorrect: true
        },
        {
          text: "Oferecer cursos de programação para pessoas de baixa renda.",
          rationale: "Isso é um aspecto da inclusão digital, mas não o objetivo primário da acessibilidade digital de interfaces e conteúdos.",
          isCorrect: false
        }
      ],
      hint: "O foco da acessibilidade está na eliminação de obstáculos para um grupo específico de usuários."
    },
    {
      questionNumber: 4,
      question: "O texto menciona que a exclusão digital aprofunda quais tipos de problemas na sociedade brasileira?",
      answerOptions: [
        {
          text: "Dificuldades na exportação de produtos e atrasos tecnológicos.",
          rationale: "Embora possa haver impactos econômicos, o texto foca no impacto humano e social da exclusão.",
          isCorrect: false
        },
        {
          text: "Desigualdades sociais.",
          rationale: "O resumo afirma que a exclusão digital 'aprofundando desigualdades sociais', sendo este o impacto mais crítico mencionado.",
          isCorrect: true
        },
        {
          text: "Aumento na produção de conteúdo digital.",
          rationale: "O aumento na produção é uma característica do mundo digital, não um problema aprofundado pela exclusão.",
          isCorrect: false
        },
        {
          text: "Crises políticas e instabilidade financeira global.",
          rationale: "Apesar de serem questões importantes, o texto não liga a exclusão digital a estes problemas diretamente.",
          isCorrect: false
        }
      ],
      hint: "A exclusão de grupos específicos tem um impacto direto na justiça e equidade na sociedade."
    },
    {
      questionNumber: 5,
      question: "Para garantir a Acessibilidade Digital, interfaces e conteúdos devem ser, primariamente, quais dos seguintes atributos (sigla P.O.C.R.)?",
      answerOptions: [
        {
          text: "Promocionais, Otimizados, Colaborativos e Rastreáveis.",
          rationale: "Estes termos não correspondem aos quatro princípios fundamentais da acessibilidade digital (WCAG) citados no resumo.",
          isCorrect: false
        },
        {
          text: "Percebíveis, Operáveis, Compreensíveis e Robustos.",
          rationale: "Estes são os quatro princípios essenciais da acessibilidade digital (WCAG) que o texto garante que interfaces e conteúdos devem possuir.",
          isCorrect: true
        },
        {
          text: "Ponderados, Ordenados, Criptografados e Registrados.",
          rationale: "Embora importantes para a segurança ou organização, não são os pilares da acessibilidade para remoção de barreiras.",
          isCorrect: false
        },
        {
          text: "Públicos, Originais, Claros e Rápidos.",
          rationale: "Claros e Rápidos são desejáveis, mas não representam os termos técnicos que definem a acessibilidade digital de acordo com o texto.",
          isCorrect: false
        }
      ],
      hint: "Os quatro atributos são os pilares que garantem que um usuário com deficiência consiga interagir com o conteúdo."
    }
  ];