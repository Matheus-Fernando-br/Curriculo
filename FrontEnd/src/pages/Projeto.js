import React, { useContext, useMemo, useState } from "react";
import curriculo from "../editar/curriculo";
import { LangContext } from "../context/LangContext";

function Projetos() {
  const dados = curriculo();
  const { lang } = useContext(LangContext);
  const [filter, setFilter] = useState("Todos");
  const copy = {
    pt: {
      eyebrow: "Projetos",
      title: "Trabalho aplicado em produtos reais.",
      intro:
        "Uma seleção de projetos que demonstra minha experiência em desenvolvimento, produto e solução de problemas.",
      all: "Todos",
      view: "Ver projeto",
      code: "Código",
    },
    en: {
      eyebrow: "Projects",
      title: "Applied work on real products.",
      intro:
        "A selection of projects showing my experience with development, product and problem solving.",
      all: "All",
      view: "View project",
      code: "Code",
    },
  }[lang];
  const filters = [
    copy.all,
    "React",
    "JavaScript",
    "Node.js",
    "Python",
    "HTML/CSS",
  ];
  const getTags = (project) => {
    const text = `${project.title.pt} ${project.details.pt}`.toLowerCase();
    return [
      text.includes("react") && "React",
      text.includes("javascript") && "JavaScript",
      (text.includes("node") || text.includes("api")) && "Node.js",
      text.includes("python") && "Python",
      (text.includes("site") ||
        text.includes("formulário") ||
        text.includes("landing")) &&
        "HTML/CSS",
    ].filter(Boolean);
  };
  const projects = useMemo(
    () =>
      dados.projetos.filter(
        (project) => filter === copy.all || getTags(project).includes(filter),
      ),
    [dados.projetos, filter, copy.all],
  );
  const imagePath = (path) =>
    path?.startsWith("../") ? path.replace("../", "/") : path;
  return (
    <main className="page page-inner">
      <section className="section-shell inner-hero">
        <p className="eyebrow">01 · {copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="page-lead">{copy.intro}</p>
        <div
          className="filter-list"
          role="group"
          aria-label={
            lang === "pt"
              ? "Filtrar projetos por tecnologia"
              : "Filter projects by technology"
          }
        >
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              className={filter === item ? "is-selected" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>
      <section className="section-shell project-grid" aria-live="polite">
        {projects.map((project) => (
          <article className="project-card glass-card" key={project.title.pt}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <div className="project-image">
                <img src={imagePath(project.image)} alt={project.title[lang]} />
                <span className="project-overlay">
                  {copy.view}{" "}
                  <i className="bi bi-arrow-up-right" aria-hidden="true" />
                </span>
              </div>
            </a>
            <div className="project-card-body">
              <div className="project-card-title">
                <span className="icon-badge small">
                  <i
                    className={`bi ${project.icon.replace("bi bi-", "bi-")}`}
                    aria-hidden="true"
                  />
                </span>
                <h2>{project.title[lang]}</h2>
              </div>
              <p>{project.details[lang]}</p>
              <div className="project-links">
                <a
                  className="text-link"
                  href={project.git}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github" aria-hidden="true" /> {copy.code}
                </a>
                <a
                  className="text-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo <i className="bi bi-arrow-up-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
      {projects.length === 0 && (
        <p className="empty-state section-shell">
          {lang === "pt"
            ? "Nenhum projeto encontrado para este filtro."
            : "No project found for this filter."}
        </p>
      )}
    </main>
  );
}

export default Projetos;
