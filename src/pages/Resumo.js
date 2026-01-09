import React, { useContext } from "react";
import curriculo from "../editar/curriculo";
import { LangContext } from "../context/LangContext";

function Resumo() {
  const dados = curriculo();
  const { lang } = useContext(LangContext);

  const t = {
    pt: {
      title: "Resumo",
      education: "Formação Acadêmica",
      projects: "Projetos",
      courses: "Cursos",
      experience: "Experiências Profissionais",
    },
    en: {
      title: "Summary",
      education: "Academic Training",
      projects: "Projects",
      courses: "Courses",
      experience: "Professional Experience",
    },
  };

  return (
    <main className="Content page-resumo">
      <section className="cards resumo-container">

        <header className="resumo-header">
          <h1 className="Title-Pag">
            <i className="bi bi-journal-text"></i> {t[lang].title}
          </h1>
        </header>

        {/* EDUCAÇÃO */}
        <section className="resumo-section">
          <h3><i className="bi bi-mortarboard"></i> {t[lang].education}</h3>

          <div className="grid-cards">
            {dados.educacao.map((edu, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <i className="bi bi-mortarboard"></i>
                  <h4>{edu.instituicao}</h4>
                </div>
                <span className="periodo">{edu.periodo}</span>
                <p>{edu.curso}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CURSOS */}
        <section className="resumo-section">
          <h3><i className="bi bi-award"></i> {t[lang].courses}</h3>

          <div className="grid-cards">
            {dados.cursos.map((curso, index) => (
              <div key={index} className="card">
                <div className="card-header-inline">
                  <i className={`bi ${curso.icon}`}></i>
                  <h4>{curso.title}</h4>
                </div>
                <p>{curso.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section className="resumo-section">
          <h3><i className="bi bi-briefcase"></i> {t[lang].experience}</h3>

          <div className="grid-cards">
            {dados.experiencia.map((exp, index) => (
              <div key={index} className="card experiencia-card">
                <div className="card-header">
                  <i className="bi bi-building"></i>
                  <h4>{exp.empresa}</h4>
                </div>
                <span className="periodo">{exp.periodo}</span>
                <ul>
                  {exp.descricao.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </section>
    </main>
  );
}

export default Resumo;
