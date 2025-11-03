// src/editar/curriculo.js
/* 
Single edit file: make changes only here and the entire site will be updated.
Well divided into sections for easy maintenance.
*/

function curriculo() {
  return {
    // ------------------ PERSONAL INFORMATION ------------------
    nome: "Matheus Fernando Ribeiro Martins",
    apelido: "Matheus Fernando",
    dataNascimento: "27-08-2004",
    idade: new Date().getFullYear() - 2004,
    cidade: "Minas Gerais",
    estado: "MG",
    regiao: "Timóteo - MG",
    cargo: "IT Analyst",
    cnh: "AB",
    idioma: "English - Basic",

    // ------------------ TEXTS ------------------
    textoInicialHome:
      "Here you can learn more about my background, skills, and projects.",
    textoSobreMim: `I am an IT Analyst and also work as a freelancer on technology projects. 
    I have experience in technical support, equipment maintenance, system optimization, 
    and internal assistance, always seeking practical and efficient solutions. 
    🚀 Shall we talk? I’m confident that my skills can contribute 
    to the success of your project or company.`,

    // ------------------ SKILLS ------------------
    habilidades: [
      { name: "JavaScript", nivel: 85 },
      { name: "React", nivel: 65 },
      { name: "Node.js", nivel: 60 },
      { name: "Python", nivel: 50 },
      { name: "HTML", nivel: 90 },
      { name: "CSS", nivel: 80 },
      { name: "Git/GitHub", nivel: 70 },
    ],

    // ------------------ PROFESSIONAL EXPERIENCE ------------------
    experiencia: [
      {
        empresa: "Colégio Genoma",
        periodo: "Jul/2025 – Present",
        descricao: [
          "Expertise in robust network infrastructure (LAN/WLAN) and scalable systems administration.",
          "Proficient in advanced troubleshooting and hardware/software performance optimization.",
          "Skilled in operating and maintaining complex audiovisual systems (sound, lighting, projection).",
          "Identifying continuous process improvement opportunities for operational and educational efficiency.",
        ],
      },
      {
        empresa: "NM Engenharia",
        periodo: "Feb/2024 – Jul/2025",
        descricao: [
          "Experience in Business Intelligence (BI), reporting, and data analysis.",
          "Systems administration: installation, updates, and resolution of critical incidents.",
          "Hardware and software maintenance ensuring high performance.",
          "Efficient corporate technical support.",
        ],
      },
      {
        empresa: "CENIBRA - Celulose Nipo Brasileira",
        periodo: "Jul/2023 – Dec/2023",
        descricao: [
          "Participation in weekly planning meetings and preventive reports.",
          "Supervision of industrial painting and measurements on blasted parts.",
          "Knowledge in thermal insulation, assembly, and disassembly.",
        ],
      },
    ],

    // ------------------ EDUCATION ------------------
    educacao: [
      {
        instituicao: "Unileste",
        periodo: "2024 – 2027 (In progress)",
        curso: "Software Engineering",
      },
      {
        instituicao: "CEFET-MG",
        periodo: "2022 – 2023",
        curso: "Technical Degree in Building Construction",
      },
    ],

    // ------------------ COMPETENCIES ------------------
    competencias: [
      { nome: "DATA ANALYSIS", icon: "bi-bar-chart-line" },
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

    // ------------------ PROJECTS ------------------
    projetos: [
      {
        title: "Invoice Issuing Website in REACT",
        link: "https://finc-seven.vercel.app/",
        icon: "bi-code-slash",
        details: "Complete system for issuing electronic invoices (NFe).",
      },
      {
        title: "Simple Mario Jump Game",
        link: "https://mario-game-plum.vercel.app",
        icon: "bi-laptop",
        details: "Simple Mario game built in Java with Swing.",
      },
      {
        title: "Online Resume Generator",
        link: "https://geradorcurriculoonline.vercel.app",
        icon: "bi-file-earmark-break",
        details: "Free system that generates a formatted resume.",
      },
      {
        title: "Restaurant Reservation System in JAVA",
        link: "https://github.com/Matheus-Fernando-br/Reserva-Restaurante",
        icon: "bi-laptop",
        details: "Desktop system for restaurant reservations built with Swing.",
      },
      {
        title: "Simple Calculator Project",
        link: "https://github.com/Matheus-Fernando-br/Simple-Calculator-Project",
        icon: "bi-laptop",
        details: "Simple calculator built in Java using Swing.",
      },
    ],

    // ------------------ COURSES ------------------
    cursos: [
      { icon: "bi-mortarboard", title: "FIGMA", text: "TIC learning path" },
      {
        icon: "bi-book",
        title: "Leadership: How to Develop High-Performance Teams",
        text: "SEBRAE",
      },
      { icon: "bi-book", title: "Python From Zero to Advanced", text: "Udemy" },
    ],

    // ------------------ TESTIMONIALS ------------------
    oqueDizemSobreMim: [
      `A dedicated professional always eager to learn!" – NM Engenharia Staff`,
      `Always delivers on time and with quality." – CENIBRA Staff`,
    ],

    // ------------------ ACHIEVEMENTS ------------------
    minhasConquistas: [
      { numero: 1, descricao: "Project Completed" },
      { numero: 2, descricao: "Years of Experience" },
      { numero: 3, descricao: "Certifications" },
    ],

    // ------------------ CONTACTS ------------------
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
