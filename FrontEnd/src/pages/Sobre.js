import React, { useContext } from "react";
import curriculo from "../editar/curriculo";
import { LangContext } from "../context/LangContext";

function Sobre() {
  const dados = curriculo();
  const { lang } = useContext(LangContext);

  const t = {
    pt: {
      aboutTitle: "Sobre Mim",
      achievements: "Minhas Conquistas",
      idade: "Idade",
      cnh: "CNH",
      idioma: "Idioma",
      regiao: "Região",
      years: "anos",
      skills: "Especialidades",
    },
    en: {
      aboutTitle: "About Me",
      achievements: "My Achievements",
      idade: "Age",
      cnh: "Driver's License",
      idioma: "Language",
      regiao: "Region",
      years: "years",
      skills: "Specialties",
    },
  };

  return (
    <main id="scroll-container" className="Content page-sobre">
      <section className="cards">
        {/* ===== PRIMEIRA SEÇÃO ===== */}
        <div className="sobre-top">
          {/* ESQUERDA */}
          <div className="sobre-texto">
            <h1>
              <i className="bi bi-person"></i> {t[lang].aboutTitle}
            </h1>

            <p
              dangerouslySetInnerHTML={{
                __html: dados.textoSobreMim[lang],
              }}
            />
          </div>

          {/* DIREITA */}
          <div className="sobre-info">
            <img
              src="/Images/Foto-2-Usuario.JPG"
              alt="Foto de Perfil"
              className="sobre-foto"
            />

            <div className="info-grid">
              <div className="info-card">
                <h4>
                  <i className="bi bi-calendar"></i> {t[lang].idade}
                </h4>
                <span>
                  {dados.idade} {t[lang].years}
                </span>
              </div>

              <div className="info-card">
                <h4>
                  <i className="bi bi-car-front"></i> {t[lang].cnh}
                </h4>
                <span>{dados.cnh}</span>
              </div>

              <div className="info-card">
                <h4>
                  <i className="bi bi-translate"></i> {t[lang].idioma}
                </h4>
                <span>{dados.idioma[lang]}</span>
              </div>

              <div className="info-card">
                <a href={dados.mapa} target="_blank" rel="noreferrer">
                <h4>
                  <i className="bi bi-geo-alt"></i> {t[lang].regiao}
                </h4>
                <span>{dados.regiao[lang]}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Especialidades ===== */}
        <div id="especialidades" className="services">
          <div className="container">
              <h3>
                <i className="bi bi-list-check"></i> {t[lang].skills}
              </h3>

            <div className="services-grid">
              {dados.especialidades.map((item, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <h3>{item.titulo[lang]}</h3>
                  <p>{item.descricao[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== ESTATÍSTICAS ===== */}
        <div className="estatisticas">
          <h3>
            <i className="bi bi-trophy-fill"></i> {t[lang].achievements}
          </h3>

          <div className="estatisticas-grid">
            {dados.minhasConquistas.map((c, index) => (
              <div key={index} className="estat-card">
                <strong>{c.numero}</strong>
                <p>{c.descricao[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sobre;
