import React, { useEffect, useContext } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid
} from "recharts";
import curriculo from "../editar/curriculo";
import { LangContext } from "../context/LangContext";

function Home({ darkMode = true }) {
  const { lang } = useContext(LangContext);
  const dados = curriculo();

  const t = {
    pt: {
      homeTitle: "Bem-vindo ao meu perfil!",
      hardSkills: "Minhas Habilidades",
      profEvol: "Evolução Profissional",
      featuredProjects: "Projetos em Destaque",
      testimonials: "O que dizem sobre mim",
      curriculoDownloadPT: "Baixar Currículo em PT-BR",
      curriculoDownloadEN: "Baixar Currículo em EN-US",
      titleFinal: "Pronto para colaborar?",
      msgFinal:
        "Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte de sua visão.",
      btnFinal: "Entre em Contato",
    },
    en: {
      homeTitle: "Welcome to my profile!",
      hardSkills: "My Hard Skills",
      profEvol: "Professional Evolution",
      featuredProjects: "Featured Projects",
      testimonials: "What they say about me",
      curriculoDownloadPT: "Download Resume in PT-BR",
      curriculoDownloadEN: "Download Resume in EN-US",
      titleFinal: "Ready to collaborate?",
      msgFinal:
        "I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      btnFinal: "Contact Me",
    },
  };

  const experiencia = [
    { ano: "2021", conquistas: 1 },
    { ano: "2022", conquistas: 1.5 },
    { ano: "2023", conquistas: 3 },
    { ano: "2024", conquistas: 6 },
    { ano: "2025", conquistas: 9 },
  ];

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
            <p>{dados.textoInicialHome[lang]}</p>

            <div className="btns-download">
              <a
                href={dados.contatos.curriculoPT}
                className="btn-download"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-download"></i>{" "}
                {t[lang].curriculoDownloadPT}
              </a>
              <a
                href={dados.contatos.curriculoEN}
                className="btn-download curriculo-en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-download"></i>{" "}
                {t[lang].curriculoDownloadEN}
              </a>
            </div>
          </div>

          {/* LADO DIREITO */}
          <div className="lado-direito">
            <div className="foto-container">
              <img src="/Images/Foto-Usuario.jpg" alt="Foto de Perfil" />
            </div>
            <h2>{dados.cargo[lang]}</h2>
            <h4>
              {dados.cidade} - {dados.estado}
            </h4>
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
              <Line
                type="monotone"
                dataKey="conquistas"
                stroke="#0046c7"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="destaques">
          <h3>{t[lang].featuredProjects}</h3>
          <div className="projetos-grid">
            {dados.projetos.slice(0, 3).map((p, index) => (
              <a
                key={index}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="projeto-card"
              >
                <i className={`bi ${p.icon}`}></i> {p.title[lang]}
              </a>
            ))}
          </div>
        </div>

        <div className="testemunhos">
          <h3>{t[lang].testimonials}</h3>
          {dados.oqueDizemSobreMim[lang].map((texto, index) => (
            <blockquote key={index}>
              <span className="Cor-Primaria">"</span> {texto}{" "}
              <span className="Cor-Primaria">"</span>
            </blockquote>
          ))}
        </div>

        <div className="espaco-final">
          <h2>{t[lang].titleFinal}</h2>
          <p>{t[lang].msgFinal}</p>
          <div className="btns-download">
            <a href="/contato" className="btn-download">
              <i className="bi bi-envelope"></i> {t[lang].btnFinal}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
