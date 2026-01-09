import React, { useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid
} from "recharts";
import curriculo from "../editar/curriculo";

function Home({ darkMode = true, lang = "pt" }) {
  const dados = curriculo();

  const t = {
    pt: {
      homeTitle: "Bem-vindo ao meu perfil!",
      hardSkills: "Minhas Habilidades",
      profEvol: "Evolução Profissional",
      featuredProjects: "Projetos em Destaque",
      testimonials: "O que dizem sobre mim",
      achievements: "Minhas Conquistas"
    },
    en: {
      homeTitle: "Welcome to my profile!",
      hardSkills: "My Hard Skills",
      profEvol: "Professional Evolution",
      featuredProjects: "Featured Projects",
      testimonials: "What they say about me",
      achievements: "My achievements"
    }
  };

  const experiencia = [
    { ano: "2021", conquistas: 1 },
    { ano: "2022", conquistas: 1.5 },
    { ano: "2023", conquistas: 3 },
    { ano: "2024", conquistas: 6 },
    { ano: "2025", conquistas: 9 },
  ];

  /* ========= Dark Mode ========= */
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <main className={`Content page-home ${darkMode ? "dark" : "light"}`}>
      <section className="cards">
        <div className="Welcome-card">
          {/* LADO ESQUERDO */}
          <div className="lado-esquerdo">
            <h2 className="Welcome">
              <i className="bi bi-house-door"></i> {t[lang].homeTitle}
            </h2>
            <h1>{dados.nome}</h1>
            <p>{dados.textoInicialHome}</p>
          </div>

          {/* LADO DIREITO */}
          <div className="lado-direito">
            <div className="foto-container">
              <img src={"/Images/Foto-Usuario.jpg"} alt="Foto de Perfil" />
            </div>
            <h2>{dados.cargo}</h2>
            <h3>{dados.cidade} - {dados.estado}</h3>
          </div>
        </div>

        <div className="grafico-container">
          <h3>{t[lang].hardSkills}</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dados.habilidades}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="nivel" fill="#00c3ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grafico-container">
          <h3>{t[lang].profEvol}</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={experiencia}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ano" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="conquistas" stroke="#0046c7" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="destaques">
          <h3>{t[lang].featuredProjects}</h3>
          <div className="projetos-grid">
            {dados.projetos.slice(0, 3).map((p, index) => (
              <a key={index} href={p.link} target="_blank" className="projeto-card">
                <i className={`bi ${p.icon}`}></i> {p.title}
              </a>
            ))}
          </div>
        </div>

        <div className="testemunhos">
          <h3>{t[lang].testimonials}</h3>
          {dados.oqueDizemSobreMim.map((texto, index) => (
            <blockquote key={index}>
              <span className="Cor-Primaria">"</span> {texto} <span className="Cor-Primaria">"</span>
            </blockquote>
          ))}
        </div>

        <div className="estatisticas">
          <h3>{t[lang].achievements}</h3>
          <div className="estatisticas-grid">
            {dados.minhasConquistas.map((c, index) => (
              <div key={index}>
                <strong>{c.numero}</strong>
                <p>{c.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
