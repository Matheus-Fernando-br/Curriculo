import React, { useContext } from "react";
import curriculo from "../editar/curriculo";
import { LangContext } from "../context/LangContext";

function Projetos() {
  const dados = curriculo();
  const { lang } = useContext(LangContext);

  const t = {
    pt: {
      projects: "Projetos",
      msg: "Uma coleção dos projetos que desenvolvi, demonstrando minhas habilidades e experiência.",
    },
    en: {
     
      projects: "Projects",
      msg: "A collection of projects I've developed, showcasing my skills and experience.",
    },
  };

    return (
        <main className="Content page-project">
        {/* PROJETOS */}
        <section className="resumo-section">
          <h1 className="Title-Pag"><i className="bi bi-diagram-3"></i> {t[lang].projects}</h1>
            <p className="projetos-intro">{t[lang].msg}</p>
          <div className="grid-cards-project">
            {dados.projetos.map((p, index) => (
              <a
                key={index}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="card link-card"
              >
                <div className="card-header-inline">
                  <i className={`bi ${p.icon}`}></i>
                  <h4>{p.title}</h4>
                </div>
                <p>{p.details}</p>
              </a>
            ))}
          </div>
        </section>
        </main>
    );
}
export default Projetos;