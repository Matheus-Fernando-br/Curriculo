
// src/editar/curriculo.js
/* 
Arquivo único de edição: altere apenas aqui e todo o site será atualizado.
Bem dividido em seções para fácil manutenção.
*/

function curriculo() {
  return {
    // ------------------ INFORMAÇÕES PESSOAIS ------------------
    nome: "Matheus Fernando Ribeiro Martins",
    apelido: "Matheus Fernando",
    dataNascimento: "27-08-2004",
    idade: new Date().getFullYear() - 2004,
    cidade: "Minas Gerais",
    estado: "MG",
    regiao: "Timóteo - MG",
    cargo: "Analista de TI",
    cnh: "AB",
    idioma: "Inglês - Básico",

    // ------------------ TEXTOS ------------------
    textoInicialHome: "Aqui você pode conhecer um pouco mais sobre minha trajetória, minhas habilidades e projetos.",
    textoSobreMim: `Sou Analista de TI e também atuo como freelancer em projetos de tecnologia. 
    Tenho experiência em suporte técnico, manutenção de equipamentos, otimização de sistemas 
    e atendimento interno, sempre buscando soluções práticas e eficientes. 
    🚀 Vamos conversar? Tenho certeza de que minhas habilidades podem contribuir 
    para o sucesso do seu projeto ou empresa.`,

    // ------------------ HABILIDADES ------------------
    habilidades: [
      { name: "JavaScript", nivel: 85 },
      { name: "React", nivel: 65 },
      { name: "Node.js", nivel: 60 },
      { name: "HTML", nivel: 90 },
      { name: "CSS", nivel: 80 },
      { name: "Git/GitHub", nivel: 70 },
    ],

    // ------------------ EXPERIÊNCIA PROFISSIONAL ------------------
    experiencia: [
      {
        empresa: "Colégio Genoma",
        periodo: "Jul/2025 – Atual",
        descricao: [
          "Expertise em infraestrutura de rede robusta (LAN/WLAN) e administração de sistemas escaláveis.",
          "Proficiente em troubleshooting avançado e otimização de performance de hardware/software.",
          "Habilidade em operar e manter sistemas audiovisuais complexos (som, iluminação, projeção).",
          "Identificação de oportunidades de melhoria contínua de processos para eficiência operacional e pedagógica.",
        ],
      },
      {
        empresa: "NM Engenharia",
        periodo: "Fev/2024 – Jul/2025",
        descricao: [
          "Experiência em Business Intelligence (BI), relatórios e análise de dados.",
          "Administração de sistemas: instalação, atualização e resolução de incidentes críticos.",
          "Manutenção de hardware e software, garantindo alta performance.",
          "Suporte técnico corporativo eficiente.",
        ],
      },
      {
        empresa: "CENIBRA - Celulose Nipo Brasileira",
        periodo: "Jul/2023 – Dez/2023",
        descricao: [
          "Participação em reuniões de planejamento semanal e relatórios preventivos.",
          "Fiscalização de pintura industrial e medições em peças jateadas.",
          "Conhecimento em isolamento térmico, montagem e desmontagem.",
        ],
      },
    ],

    // ------------------ EDUCAÇÃO ------------------
    educacao: [
      { instituicao: "Unileste", periodo: "2024 – 2027 (Cursando)", curso: "Engenharia de Software" },
      { instituicao: "CEFET-MG", periodo: "2022 – 2023", curso: "Técnico em Edificações" },
    ],

    // ------------------ COMPETÊNCIAS ------------------
    competencias: [
      { nome: "ANÁLISE DE DADOS", icon: "bi-bar-chart-line" },
      { nome: "JAVA", icon: "bi-cup-hot" },
      { nome: "JAVASCRIPT", icon: "bi-braces" },
      { nome: "REACT", icon: "bi-lightbulb" },
      { nome: "NODE.JS/EXPRESS", icon: "bi-diagram-3" },
      { nome: "HTML", icon: "bi-filetype-html" },
      { nome: "CSS", icon: "bi-filetype-css" },
      { nome: "PYTHON", icon: "bi-filetype-py" },
      { nome: "MYSQL", icon: "bi-database" },
      { nome: "GIT E GITHUB", icon: "bi-git" },
      { nome: "REDES", icon: "bi-hdd-network" },
      { nome: "PACOTE OFFICE", icon: "bi-microsoft" },
      { nome: "E-FORNECEDORES", icon: "bi-cart-check" },
      { nome: "SAP", icon: "bi-building" },
    ],

    // ------------------ PROJETOS ------------------
    projetos: [
      {
        title: "Site de Emissão de Nota Fiscal em REACT",
        link: "https://finc-seven.vercel.app/",
        icon: "bi-code-slash",
        details: "Sistema completo para emissão de notas fiscais eletrônicas (NFe).",
      },
      {
        title: "Reserva de Restaurante em JAVA",
        link: "https://github.com/Matheus-Fernando-br/Reserva-Restaurante",
        icon: "bi-laptop",
        details: "Sistema desktop para reservas de restaurante com Swing.",
      },
      {
        title: "Simple Calculator Project",
        link: "https://github.com/Matheus-Fernando-br/Simple-Calculator-Project",
        icon: "bi-laptop",
        details: "Calculadora simples feita em Java com Swing.",
      },
      {
        title: "Simple Mario Jump Game",
        link: "https://github.com/Matheus-Fernando-br/Mario-Game",
        icon: "bi-laptop",
        details: "Jogo simples do Mario feito em Java com Swing.",
      },
    ],

    // ------------------ CURSOS ------------------
    cursos: [
      { icon: "bi-mortarboard", title: "FIGMA", text: "TIC em trilhas" },
      { icon: "bi-book", title: "Liderança: como desenvolver times de alta performance", text: "SEBRAE" },
      { icon: "bi-book", title: "Python do zero ao avançado", text: "Udemy" },
    ],

    // ------------------ TESTEMUNHOS ------------------
    oqueDizemSobreMim: [
      `"Profissional dedicado e sempre pronto para aprender!" – Funcionários NM Engenharia`,
      `"Entrega sempre no prazo e com qualidade." – Funcionários Cenibra`,
    ],

    // ------------------ CONQUISTAS ------------------
    minhasConquistas: [
      { numero: 1, descricao: "Projeto concluído" },
      { numero: 2, descricao: "Anos de experiência" },
      { numero: 3, descricao: "Certificações" },
    ],

    // ------------------ CONTATOS ------------------
    contatos: {
      telefone: "31986763652",
      whatsapp: "31986763652",
      email: "matheus1030br@gmail.com",
      linkedin: "https://www.linkedin.com/in/matheus-ribeiro-7b4a9822b/",
      github: "https://github.com/Matheus-Fernando-br",
      telegram: "https://t.me/+5531986763652",
      curriculo: "../Curriculo.pdf",
    },
  };
}

export default curriculo;