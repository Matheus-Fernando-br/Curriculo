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
    regiao: {
      pt: "Timóteo - MG",
      en: "Timóteo - MG, Brazil",
    },
    mapa: "https://maps.app.goo.gl/t3nXogCsHYnPRYVFA",
    cargo: {
      pt: "Analista de TI",
      en: "IT Analyst",
    },
    cnh: "AB",
    idioma: {
      pt: "Inglês - Básico",
      en: "English - Basic",
    },

    telegramBot: {
      chatId: "987654321"
    },

    // ------------------ TEXTOS ------------------
    textoInicialHome: {
      pt: "Aqui você pode conhecer mais sobre minha formação, habilidades e projetos.",
      en: "Here you can learn more about my background, skills, and projects.",
    },

    textoSobreMim: {
      pt: `Sou Analista de TI e atuo profissionalmente na empresa Genoma / Colégio Genoma, além de trabalhar como freelancer em projetos de tecnologia.
Meu interesse pela área de tecnologia despertou ainda na adolescência, motivado pela curiosidade em entender como sistemas, equipamentos e soluções digitais funcionam e como podem facilitar a vida das pessoas.<br><br>

Atualmente, curso Engenharia de Software pela UniLeste, buscando fortalecer minha formação acadêmica e técnica.<br><br>

A cada dia procuro evoluir, adquirir novos conhecimentos e desenvolver habilidades que me permitam contribuir de forma significativa para a área de tecnologia.<br><br>

Sou movido por aprendizado contínuo, desafios e pela busca constante por excelência no que faço.`,
      en: `I am an IT Analyst working professionally at Genoma / Colégio Genoma, as well as freelancing on technology projects.
My interest in technology began during my teenage years, driven by curiosity to understand how systems, equipment, and digital solutions work and how they can improve people's lives.<br><br>

I am currently studying Software Engineering at UniLeste, seeking to strengthen my academic and technical background.<br><br>

Every day I strive to grow, acquire new knowledge, and develop skills that allow me to contribute meaningfully to the technology field.<br><br>

I am driven by continuous learning, challenges, and the constant pursuit of excellence in what I do.`,
    },

    // ------------------ HABILIDADES ------------------
    habilidades: [
      { name: "JavaScript", nivel: 65 },
      { name: "React", nivel: 85 },
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
        periodo: {
          pt: "Jul/2025 – Presente",
          en: "Jul/2025 – Present",
        },
        descricao: {
          pt: [
            "Especialista em infraestrutura de rede robusta (LAN/WLAN) e administração de sistemas escaláveis.",
            "Proficiente em troubleshooting avançado e otimização de hardware/software.",
            "Operação e manutenção de sistemas audiovisuais complexos (som, iluminação, projeção).",
            "Identificação de oportunidades de melhoria contínua para eficiência operacional e educacional.",
          ],
          en: [
            "Specialist in robust network infrastructure (LAN/WLAN) and scalable systems administration.",
            "Advanced troubleshooting and hardware/software optimization expertise.",
            "Operation and maintenance of complex audiovisual systems (sound, lighting, projection).",
            "Identification of continuous improvement opportunities for operational and educational efficiency.",
          ],
        },
        link: "https://colegiogenoma.com.br",
      },
      {
        empresa: "NM Engenharia",
        periodo: {
          pt: "Fev/2024 – Jul/2025",
          en: "Feb/2024 – Jul/2025",
        },
        descricao: {
          pt: [
            "Experiência em Business Intelligence (BI), relatórios e análise de dados.",
            "Administração de sistemas: instalação, atualizações e resolução de incidentes críticos.",
            "Manutenção de hardware e software garantindo alto desempenho.",
            "Suporte técnico corporativo eficiente.",
          ],
          en: [
            "Experience in Business Intelligence (BI), reporting, and data analysis.",
            "System administration: installation, updates, and critical incident resolution.",
            "Hardware and software maintenance ensuring high performance.",
            "Efficient corporate technical support.",
          ],
        },
        link: "https://nmengenharia.com.br",
      },
      {
        empresa: "CENIBRA - Celulose Nipo Brasileira",
        periodo: {
          pt: "Jul/2023 – Dez/2023",
          en: "Jul/2023 – Dec/2023",
        },
        descricao: {
          pt: [
            "Participação em reuniões semanais de planejamento e relatórios preventivos.",
            "Supervisão de pintura industrial e medições em peças jateadas.",
            "Conhecimento em isolamento térmico, montagem e desmontagem.",
          ],
          en: [
            "Participation in weekly planning meetings and preventive reports.",
            "Supervision of industrial painting and measurements on blasted parts.",
            "Knowledge of thermal insulation, assembly, and disassembly.",
          ],
        },
        link: "https://www.cenibra.com.br",
      },
    ],

    // ------------------ EDUCAÇÃO ------------------
    educacao: [
      {
        instituicao: "Unileste",
        periodo: {
          pt: "2024 – 2027 (Em andamento)",
          en: "2024 – 2027 (In progress)",
        },
        curso: {
          pt: "Engenharia de Software",
          en: "Software Engineering",
        },
        link: "https://www.unileste.catolica.edu.br/portal/curso/engenharia-de-software",
      },
      {
        instituicao: "CEFET-MG",
        periodo: {
          pt: "2022 – 2023",
          en: "2022 – 2023",
        },
        curso: {
          pt: "Curso Técnico em Edificações",
          en: "Technical Course in Construction",
        },
        link: "https://www.cefetmg.br/cursos/educacao-profissional-e-tecnologica/edificacoes",
      },
    ],

    // ------------------ COMPETÊNCIAS ------------------
    competencias: [
      { nome: { pt: "ANÁLISE DE DADOS", en: "DATA ANALYSIS" }, icon: "bi-bar-chart-line" },
      { nome: { pt: "JAVA", en: "JAVA" }, icon: "bi-cup-hot" },
      { nome: { pt: "JAVASCRIPT", en: "JAVASCRIPT" }, icon: "bi-braces" },
      { nome: { pt: "REACT", en: "REACT" }, icon: "bi-lightbulb" },
      { nome: { pt: "NODE.JS/EXPRESS", en: "NODE.JS/EXPRESS" }, icon: "bi-diagram-3" },
      { nome: { pt: "HTML", en: "HTML" }, icon: "bi-filetype-html" },
      { nome: { pt: "CSS", en: "CSS" }, icon: "bi-filetype-css" },
      { nome: { pt: "PYTHON", en: "PYTHON" }, icon: "bi-filetype-py" },
      { nome: { pt: "MYSQL", en: "MYSQL" }, icon: "bi-database" },
      { nome: { pt: "GIT & GITHUB", en: "GIT & GITHUB" }, icon: "bi-git" },
      { nome: { pt: "NETWORKING", en: "NETWORKING" }, icon: "bi-hdd-network" },
      { nome: { pt: "MICROSOFT OFFICE", en: "MICROSOFT OFFICE" }, icon: "bi-microsoft" },
      { nome: { pt: "E-SUPPLIERS", en: "E-SUPPLIERS" }, icon: "bi-cart-check" },
      { nome: { pt: "SAP", en: "SAP" }, icon: "bi-building" },
    ],

    // ------------------ PROJETOS ------------------
    projetos: [
      {
        title: {
          pt: "Sistema de Emissão de Notas em REACT",
          en: "Invoice Issuance System in REACT",
        },
        link: "https://finc-seven.vercel.app/",
        icon: "bi-code-slash",
        details: {
          pt: "Sistema completo para emissão de notas eletrônicas (NFe).",
          en: "Complete system for issuing electronic invoices (NFe).",
        },
        image: "../Projects/PROJETO FINC.png",
      },
      {
        title: {
          pt: "Gerador de Currículo Online",
          en: "Online Resume Generator",
        },
        link: "https://geradorcurriculoonline.vercel.app",
        icon: "bi-file-earmark-break",
        details: {
          pt: "Sistema gratuito que gera currículo formatado.",
          en: "Free system that generates a formatted resume.",
        },
        image: "../Projects/Gerador de Currículo Online.png",
      },
      {
        title: {
          pt: "Site para Igreja em REACT",
          en: "Church Website in REACT",
        },
        link: "https://cia-primavera.vercel.app",
        icon: "bi-house-door",
        details: {
          pt: "Site institucional para igreja com informações e eventos.",
          en: "Institutional church website with information and events.",
        },
        image: "../Projects/Centro Internacional de Avivamento Primavera.png",
      },
      {
        title: {
          pt: "Conversor de Video para Audio",
          en: "Video to Audio Converter",
        },
        link: "https://conversordevideo.vercel.app/",
        icon: "bi-arrow-down-square-fill",
        details: {
          pt: "Aplicação para converter vídeos em MP3 básica e funcional.",
          en: "Application to convert videos to MP3 basic and functional.",
        },
        image: "../Projects/DownYT.png",
      },
      {
        title: {
          pt: "Jogo Mario Jump Simples",
          en: "Simple Mario Jump Game",
        },
        link: "https://mario-game-plum.vercel.app",
        icon: "bi-controller",
        details: {
          pt: "Jogo simples do Mario feito em Java com Swing.",
          en: "Simple Mario game made in Java using Swing.",
        },
        image: "../Projects/Mario Game.png",
      },
      {
        title: {
          pt: "Sistema de Reservas de Restaurante em JAVA",
          en: "Restaurant Reservation System in JAVA",
        },
        link: "https://github.com/Matheus-Fernando-br/Reserva-Restaurante",
        icon: "bi-laptop",
        details: {
          pt: "Sistema desktop de reservas de restaurante feito com Swing.",
          en: "Desktop restaurant reservation system built with Swing.",
        },
         image: "../Projects/Restaurante.jpg",
      },
      {
        title: {
          pt: "Projeto Calculadora Simples",
          en: "Simple Calculator Project",
        },
        link: "https://github.com/Matheus-Fernando-br/Simple-Calculator-Project",
        icon: "bi-calculator",
        details: {
          pt: "Calculadora simples feita em Java usando Swing.",
          en: "Simple calculator made in Java using Swing.",
        },
        image: "../Projects/Calculadora.png",
      },
    ],


    // ------------------ CURSOS ------------------
    cursos: [
      {
        icon: "bi-mortarboard",
        title: { pt: "FIGMA", en: "FIGMA" },
        text: { pt: "Trilha de aprendizagem TIC", en: "ICT learning track" },
        link: "https://drive.google.com/file/d/17tR9gtGYlh6YXZrpw9oFsmyx8H4RsEAQ/view?usp=sharing",
      },
      {
        icon: "bi-book",
        title: {
          pt: "Liderança: Como Desenvolver Equipes de Alta Performance",
          en: "Leadership: How to Develop High-Performance Teams",
        },
        text: { pt: "SEBRAE", en: "SEBRAE" },
        link: "https://drive.google.com/file/d/1rDPw8Qgs-lFQHzpqmrBx6iSHSnjJNDor/view?usp=sharing",
      },
      {
        icon: "bi-book",
        title: {
          pt: "A liderança na gestão de equipes",
          en: "Leadership in Team Management",
        },
        text: { pt: "SEBRAE", en: "SEBRAE" },
        link: "https://drive.google.com/file/d/1PKdnCw04zL8FdO02iCh_47X5GvYcVefW/view?usp=sharing",
      },
      {
        icon: "bi-book",
        title: {
          pt: "Python do Zero ao Avançado",
          en: "Python from Zero to Advanced",
        },
        text: { pt: "Udemy", en: "Udemy" },
        link: "https://www.udemy.com/course/programacao-python-do-basico-ao-avancado/?couponCode=UDEAFFHP22025",
      },
    ],

    // ------------------ CONQUISTAS ------------------
    minhasConquistas: [
      { numero: 3, descricao: { pt: "Projeto Concluído", en: "Completed Project" } },
      { numero: 2, descricao: { pt: "Anos de Experiência", en: "Years of Experience" } },
      { numero: 3, descricao: { pt: "Certificações", en: "Certifications" } },
    ],

    // ------------------ O QUE DIZEM SOBRE MIM ------------------
    oqueDizemSobreMim: {
      pt: [
        "Profissional dedicado e sempre ávido por aprender! – Equipe NM Engenharia",
        "Entrega sempre no prazo e com qualidade. – Equipe CENIBRA",
      ],
      en: [
        "Dedicated professional always eager to learn! – NM Engenharia Team",
        "Always delivers on time and with quality. – CENIBRA Team",
      ],
    },

    // ------------------ CONTATOS ------------------
    contatos: {
      telefone: "31986763652",
      whatsapp: "31986763652",
      email: "matheus1030br@gmail.com",
      linkedin: "https://www.linkedin.com/in/matheus-ribeiro-7b4a9822b/",
      github: "https://github.com/Matheus-Fernando-br",
      instagram: "https://www.instagram.com/matheus_marthins_",
      telegram: "https://t.me/+5531986763652",
      curriculoPT: "../CurriculoPT.pdf",
      curriculoEN: "../CurriculoEN.pdf",
    },
  };
}

export default curriculo;
