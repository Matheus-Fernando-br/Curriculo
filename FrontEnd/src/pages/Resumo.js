import React, { useContext } from "react";
import curriculo from "../editar/curriculo";
import { LangContext } from "../context/LangContext";

function Resumo() {
  const dados = curriculo();
  const { lang } = useContext(LangContext);
  const copy = {
    pt: {
      eyebrow: "Resumo profissional",
      title: "Experiência que combina tecnologia e resolução de problemas.",
      education: "Formação acadêmica",
      courses: "Cursos e certificações",
      experience: "Experiência profissional",
      view: "Abrir referência",
    },
    en: {
      eyebrow: "Professional summary",
      title: "Experience combining technology and problem solving.",
      education: "Academic background",
      courses: "Courses and certifications",
      experience: "Professional experience",
      view: "Open reference",
    },
  }[lang];
  return (
    <main className="page page-inner">
      <section className="section-shell inner-hero">
        <p className="eyebrow">01 · {copy.eyebrow}</p>
        <h1>{copy.title}</h1>
      </section>
      <section
        className="section-shell resume-section"
        aria-labelledby="education-title"
      >
        <div className="section-heading">
          <p className="eyebrow">02 · Formação</p>
          <h2 id="education-title">{copy.education}</h2>
        </div>
        <div className="resume-list">
          {dados.educacao.map((item) => (
            <article className="resume-item glass-card" key={item.instituicao}>
              <span className="timeline-dot" />
              <div>
                <div className="resume-item-top">
                  <h3>{item.curso[lang]}</h3>
                  <span>{item.periodo[lang]}</span>
                </div>
                <p>{item.instituicao}</p>
                <a
                  className="text-link"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.view}{" "}
                  <i className="bi bi-arrow-up-right" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        className="section-shell resume-section"
        aria-labelledby="courses-title"
      >
        <div className="section-heading">
          <p className="eyebrow">03 · Aprendizado contínuo</p>
          <h2 id="courses-title">{copy.courses}</h2>
        </div>
        <div className="resume-grid">
          {dados.cursos.map((item) => (
            <article className="resume-card glass-card" key={item.title.pt}>
              <span className="icon-badge">
                <i className={`bi ${item.icon}`} aria-hidden="true" />
              </span>
              <h3>{item.title[lang]}</h3>
              <p>{item.text[lang]}</p>
              <a
                className="text-link"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {copy.view}{" "}
                <i className="bi bi-arrow-up-right" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>
      <section
        className="section-shell resume-section"
        aria-labelledby="experience-title"
      >
        <div className="section-heading">
          <p className="eyebrow">04 · Trajetória</p>
          <h2 id="experience-title">{copy.experience}</h2>
        </div>
        <div className="resume-list">
          {dados.experiencia.map((item) => (
            <article className="resume-item glass-card" key={item.empresa}>
              <span className="timeline-dot" />
              <div>
                <div className="resume-item-top">
                  <h3>{item.empresa}</h3>
                  <span>{item.periodo[lang]}</span>
                </div>
                <ul>
                  {item.descricao[lang].map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <a
                  className="text-link"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.view}{" "}
                  <i className="bi bi-arrow-up-right" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Resumo;
