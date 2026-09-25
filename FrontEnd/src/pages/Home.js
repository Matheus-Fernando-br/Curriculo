import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../context/LangContext";
import curriculo from "../editar/curriculo";

function Home() {
  const { lang } = useContext(LangContext);
  const dados = curriculo();
  const copy = {
    pt: {
      eyebrow: "Analista de TI · Desenvolvedor",
      title: "Tecnologia com clareza, impacto e cuidado nos detalhes.",
      intro: dados.textoInicialHome.pt,
      about: "Conheça minha trajetória",
      resume: "Baixar currículo",
      skills: "Competências principais",
      projects: "Projetos em destaque",
      testimonials: "Recomendações",
      ctaTitle: "Vamos construir algo relevante?",
      ctaText:
        "Estou aberto a projetos, desafios técnicos e oportunidades de colaboração.",
      cta: "Falar comigo",
    },
    en: {
      eyebrow: "IT Analyst · Developer",
      title: "Technology with clarity, impact and care for every detail.",
      intro: dados.textoInicialHome.en,
      about: "Explore my journey",
      resume: "Download resume",
      skills: "Core competencies",
      projects: "Featured projects",
      testimonials: "Recommendations",
      ctaTitle: "Shall we build something meaningful?",
      ctaText:
        "I am open to projects, technical challenges and collaboration opportunities.",
      cta: "Get in touch",
    },
  }[lang];
  const imagePath = (path) =>
    path?.startsWith("../") ? path.replace("../", "/") : path;

  return (
    <main
      className="page page-home"
      itemScope
      itemType="https://schema.org/Person"
    >
      <section className="hero section-shell" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> {copy.eyebrow}
          </p>
          <h1 id="home-title" itemProp="name">
            {dados.nome}
          </h1>
          <h2>{copy.title}</h2>
          <p className="hero-intro" itemProp="description">
            {copy.intro}
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/sobre">
              {copy.about}{" "}
              <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </Link>
            <a
              className="button button-secondary"
              href={dados.contatos.curriculoPT}
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-download" aria-hidden="true" /> {copy.resume}
            </a>
          </div>
          <div
            className="hero-meta"
            aria-label={
              lang === "pt"
                ? "Informações profissionais"
                : "Professional information"
            }
          >
            <span>
              <i className="bi bi-geo-alt" aria-hidden="true" />{" "}
              {dados.regiao[lang]}
            </span>
            <span>
              <i className="bi bi-briefcase" aria-hidden="true" />{" "}
              {dados.cargo[lang]}
            </span>
          </div>
        </div>
        <aside
          className="hero-profile glass-card"
          aria-label={
            lang === "pt" ? "Perfil profissional" : "Professional profile"
          }
        >
          <div className="profile-image-wrap">
            <img
              src="/Images/Foto-Usuario.jpg"
              alt={`Retrato profissional de ${dados.nome}`}
              itemProp="image"
            />
          </div>
          <p className="profile-label">
            {lang === "pt"
              ? "Disponível para oportunidades"
              : "Available for opportunities"}
          </p>
          <h3>{dados.cargo[lang]}</h3>
          <div className="profile-tags">
            {dados.competencias.slice(0, 4).map((skill) => (
              <span key={skill.nome.pt}>{skill.nome[lang]}</span>
            ))}
          </div>
        </aside>
      </section>

      <section
        className="section-shell section-block"
        aria-labelledby="skills-title"
      >
        <div className="section-heading">
          <p className="eyebrow">
            01 · {lang === "pt" ? "Especialização" : "Expertise"}
          </p>
          <h2 id="skills-title">{copy.skills}</h2>
        </div>
        <div className="skill-grid">
          {dados.habilidades.map((skill) => (
            <article className="skill-card glass-card" key={skill.name}>
              <div className="skill-card-top">
                <span>{skill.name}</span>
                <strong>{skill.nivel}%</strong>
              </div>
              <div
                className="skill-track"
                aria-label={`${skill.name}: ${skill.nivel}%`}
              >
                <span style={{ width: `${skill.nivel}%` }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section-shell section-block"
        aria-labelledby="projects-title"
      >
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">
              02 · {lang === "pt" ? "Seleção" : "Selection"}
            </p>
            <h2 id="projects-title">{copy.projects}</h2>
          </div>
          <Link className="text-link" to="/projeto">
            {lang === "pt" ? "Ver todos" : "View all"}{" "}
            <i className="bi bi-arrow-up-right" aria-hidden="true" />
          </Link>
        </div>
        <div className="featured-grid">
          {dados.projetos.slice(0, 3).map((project) => (
            <a
              className="featured-project glass-card"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={project.title.pt}
            >
              <img src={imagePath(project.image)} alt={project.title[lang]} />
              <div className="featured-project-content">
                <span>{project.title[lang]}</span>
                <i className="bi bi-arrow-up-right" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section
        className="section-shell section-block"
        aria-labelledby="testimonials-title"
      >
        <div className="section-heading">
          <p className="eyebrow">
            03 · {lang === "pt" ? "Confiança" : "Trust"}
          </p>
          <h2 id="testimonials-title">{copy.testimonials}</h2>
        </div>
        <div className="testimonial-grid">
          {dados.oqueDizemSobreMim[lang].map((quote, index) => (
            <blockquote className="quote-card glass-card" key={index}>
              <i className="bi bi-quote" aria-hidden="true" />
              <p>{quote}</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section
        className="section-shell cta-section"
        aria-labelledby="cta-title"
      >
        <div>
          <p className="eyebrow">
            04 · {lang === "pt" ? "Próximo passo" : "Next step"}
          </p>
          <h2 id="cta-title">{copy.ctaTitle}</h2>
          <p>{copy.ctaText}</p>
        </div>
        <Link className="button button-primary" to="/contato">
          {copy.cta} <i className="bi bi-arrow-up-right" aria-hidden="true" />
        </Link>
      </section>
      <footer className="site-footer section-shell">
        <span>
          © {new Date().getFullYear()} {dados.nome}
        </span>
        <span>{dados.cargo[lang]}</span>
      </footer>
    </main>
  );
}

export default Home;
