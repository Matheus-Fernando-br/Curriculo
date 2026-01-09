// src/editar/curriculo.js
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
    textoInicialHome:
      "Aqui você pode conhecer mais sobre minha formação, habilidades e projetos.",
    textoSobreMim: `Sou Analista de TI e atuo profissionalmente na empresa Genoma / Colégio Genoma, além de trabalhar como freelancer em projetos de tecnologia
    . Meu interesse pela área de tecnologia despertou ainda na adolescência, motivado pela curiosidade em entender como sistemas, equipamentos e soluções digitais funcionam e como podem facilitar a vida das pessoas.<br><br>

Atualmente, curso Engenharia de Software pela UniLeste, buscando fortalecer minha formação acadêmica e técnica.<br><br>

A cada dia procuro evoluir, adquirir novos conhecimentos e desenvolver habilidades que me permitam contribuir de forma significativa para a área de tecnologia.<br><br>


Sou movido por aprendizado contínuo, desafios e pela busca constante por excelência no que faço.
`,

    // ------------------ HABILIDADES ------------------
    habilidades: [
      { name: "JavaScript", nivel: 85 },
      { name: "React", nivel: 65 },
      { name: "Node.js", nivel: 60 },
      { name: "Python", nivel: 50 },
      { name: "HTML", nivel: 90 },
      { name: "CSS", nivel: 80 },
      { name: "Git/GitHub", nivel: 70 },
    ],

    // ------------------ EXPERIÊNCIA PROFISSIONAL ------------------
    experiencia: [
      {
        empresa: "Colégio Genoma",
        periodo: "Jul/2025 – Presente",
        descricao: [
          "Especialista em infraestrutura de rede robusta (LAN/WLAN) e administração de sistemas escaláveis.",
          "Proficiente em troubleshooting avançado e otimização de hardware/software.",
          "Operação e manutenção de sistemas audiovisuais complexos (som, iluminação, projeção).",
          "Identificação de oportunidades de melhoria contínua para eficiência operacional e educacional.",
        ],
      },
      {
        empresa: "NM Engenharia",
        periodo: "Fev/2024 – Jul/2025",
        descricao: [
          "Experiência em Business Intelligence (BI), relatórios e análise de dados.",
          "Administração de sistemas: instalação, atualizações e resolução de incidentes críticos.",
          "Manutenção de hardware e software garantindo alto desempenho.",
          "Suporte técnico corporativo eficiente.",
        ],
      },
      {
        empresa: "CENIBRA - Celulose Nipo Brasileira",
        periodo: "Jul/2023 – Dez/2023",
        descricao: [
          "Participação em reuniões semanais de planejamento e relatórios preventivos.",
          "Supervisão de pintura industrial e medições em peças jateadas.",
          "Conhecimento em isolamento térmico, montagem e desmontagem.",
        ],
      },
    ],

    // ------------------ EDUCAÇÃO ------------------
    educacao: [
      {
        instituicao: "Unileste",
        periodo: "2024 – 2027 (Em andamento)",
        curso: "Engenharia de Software",
      },
      {
        instituicao: "CEFET-MG",
        periodo: "2022 – 2023",
        curso: "Curso Técnico em Edificações",
      },
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
      { nome: "GIT & GITHUB", icon: "bi-git" },
      { nome: "NETWORKING", icon: "bi-hdd-network" },
      { nome: "MICROSOFT OFFICE", icon: "bi-microsoft" },
      { nome: "E-SUPPLIERS", icon: "bi-cart-check" },
      { nome: "SAP", icon: "bi-building" },
    ],

    // ------------------ PROJETOS ------------------
    projetos: [
      {
        title: "Sistema de Emissão de Notas em REACT",
        link: "https://finc-seven.vercel.app/",
        icon: "bi-code-slash",
        details: "Sistema completo para emissão de notas eletrônicas (NFe).",
      },
      {
        title: "Jogo Mario Jump Simples",
        link: "https://mario-game-plum.vercel.app",
        icon: "bi-laptop",
        details: "Jogo simples do Mario feito em Java com Swing.",
      },
      {
        title: "Gerador de Currículo Online",
        link: "https://geradorcurriculoonline.vercel.app",
        icon: "bi-file-earmark-break",
        details: "Sistema gratuito que gera currículo formatado.",
      },
      {
        title: "Sistema de Reservas de Restaurante em JAVA",
        link: "https://github.com/Matheus-Fernando-br/Reserva-Restaurante",
        icon: "bi-laptop",
        details: "Sistema desktop de reservas de restaurante feito com Swing.",
      },
      {
        title: "Projeto Calculadora Simples",
        link: "https://github.com/Matheus-Fernando-br/Simple-Calculator-Project",
        icon: "bi-laptop",
        details: "Calculadora simples feita em Java usando Swing.",
      },
    ],

    // ------------------ CURSOS ------------------
    cursos: [
      { icon: "bi-mortarboard", title: "FIGMA", text: "Trilha de aprendizagem TIC" },
      { icon: "bi-book", title: "Liderança: Como Desenvolver Equipes de Alta Performance", text: "SEBRAE" },
      { icon: "bi-book", title: "Python do Zero ao Avançado", text: "Udemy" },
    ],

    // ------------------ TESTEMUNHOS ------------------
    oqueDizemSobreMim: [
      `Profissional dedicado e sempre ávido por aprender! – Equipe NM Engenharia`,
      `Entrega sempre no prazo e com qualidade. – Equipe CENIBRA`,
    ],

    // ------------------ CONQUISTAS ------------------
    minhasConquistas: [
      { numero: 1, descricao: "Projeto Concluído" },
      { numero: 2, descricao: "Anos de Experiência" },
      { numero: 3, descricao: "Certificações" },
    ],

    // ------------------ CONTATOS ------------------
    contatos: {
      telefone: "31986763652",
      whatsapp: "31986763652",
      email: "matheus1030br@gmail.com",
      linkedin: "https://www.linkedin.com/in/matheus-ribeiro-7b4a9822b/",
      github: "https://github.com/Matheus-Fernando-br",
      instagram: "https://www.instagram.com/matheus_marthins_?igsh=MXM0YW1qam5lMm8xeA%3D%3D&utm_source=qr",
      telegram: "https://t.me/+5531986763652",
      curriculo: "../Curriculo.pdf",
    },
  };
}

export default curriculo;
