import React, { useContext } from "react";
import curriculo from "../editar/curriculo";
import { LangContext } from "../context/LangContext";

function Sobre() {
  const dados = curriculo();
  const { lang } = useContext(LangContext);
  const copy = {
    pt: {
      eyebrow: "Sobre mim",
      title: "Construo soluções úteis e evoluo continuamente.",
      achievements: "Conquistas",
      specialties: "Especialidades",
      age: "Idade",
      license: "CNH",
      language: "Idioma",
      region: "Região",
      years: "anos",
    },
    en: {
      eyebrow: "About me",
      title: "I build useful solutions and keep evolving.",
      achievements: "Achievements",
      specialties: "Specialties",
      age: "Age",
      license: "Driver's license",
      language: "Language",
      region: "Region",
      years: "years",
    },
  }[lang];
  const info = [
    ["bi-calendar3", copy.age, `${dados.idade} ${copy.years}`],
    ["bi-car-front", copy.license, dados.cnh],
    ["bi-translate", copy.language, dados.idioma[lang]],
    ["bi-geo-alt", copy.region, dados.regiao[lang]],
  ];

  return (
    <main
      className="page page-inner"
      itemScope
      itemType="https://schema.org/Person"
    >
      <section className="section-shell inner-hero">
        <p className="eyebrow">01 · {copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <div className="about-layout">
          <article className="about-copy glass-card">
            <p
              dangerouslySetInnerHTML={{ __html: dados.textoSobreMim[lang] }}
              itemProp="description"
            />
          </article>
          <aside className="about-aside">
            <img
              src="/Images/Foto-2-Usuario.JPG"
              alt={`Foto de ${dados.nome}`}
            />
            <div className="info-grid">
              {info.map(([icon, label, value]) => (
                <div className="info-item glass-card" key={label}>
                  <i className={`bi ${icon}`} aria-hidden="true" />
                  <div>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <section
        className="section-shell section-block"
        aria-labelledby="specialties-title"
      >
        <div className="section-heading">
          <p className="eyebrow">
            02 · {lang === "pt" ? "Como posso ajudar" : "How I can help"}
          </p>
          <h2 id="specialties-title">{copy.specialties}</h2>
        </div>
        <div className="specialty-grid">
          {dados.especialidades.map((item) => (
            <article className="specialty-card glass-card" key={item.titulo.pt}>
              <span className="icon-badge">
                <i className={`bi ${item.icon}`} aria-hidden="true" />
              </span>
              <h3>{item.titulo[lang]}</h3>
              <p>{item.descricao[lang]}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        className="section-shell section-block"
        aria-labelledby="achievements-title"
      >
        <div className="section-heading">
          <p className="eyebrow">
            03 · {lang === "pt" ? "Resultados" : "Results"}
          </p>
          <h2 id="achievements-title">{copy.achievements}</h2>
        </div>
        <div className="achievement-grid">
          {dados.minhasConquistas.map((item) => (
            <article className="achievement-card glass-card" key={item.numero}>
              <strong>{item.numero}</strong>
              <p>{item.descricao[lang]}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Sobre;
