import React from "react";
import Sidebar from "../components/Sidebar";
import curriculo from "../editar/curriculo";

function Resumo() {
  const dados = curriculo();

  return ( 
    <main className="Content page-resumo"> 
      <section className="cards"> 
        <section className="lado-esquerdo"> 
          <Sidebar /> 
        </section>

        <section className="lado-direito">
          <div className="lado-direito-scroll">
            <h2><i className="bi bi-journal-text"></i> Summary</h2>

            {/* Educação */}
            <div className="top-section">
              <div className="educacao">
                <h3><i className="bi bi-mortarboard"></i> Academic Training</h3>
                {dados.educacao.map((edu, index) => (
                  <div key={index} className="card">
                    <div className="card-header">
                      <i className="bi bi-mortarboard"></i>
                      <h4>{edu.instituicao}</h4>
                    </div>
                    <div className="card-content">
                      <span>{edu.periodo}</span>
                      <p>{edu.curso}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Competências */}
              <div className="competencias">
                <h3><i className="bi bi-lightning-charge"></i> Hard Skills</h3>
                <div className="competencias-tags">
                  {dados.competencias.map((comp, index) => (
                    <span key={index} className="tag">
                      <i className={`bi ${comp.icon}`}></i> {comp.nome}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experiências */}
            <div className="bottom-section full">
              <h3><i className="bi bi-briefcase"></i> Professional Experiences</h3>
              {dados.experiencia.map((exp, index) => (
                <div key={index} className="card experiencia-card">
                  <div className="card-header">
                    <i className="bi bi-building"></i>
                    <h4>{exp.empresa}</h4>
                  </div>
                  <div className="card-content">
                    <span>{exp.periodo}</span>
                    <ul>
                      {exp.descricao.map((item, i) => (
                        <li key={i}> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>

  );
}

export default Resumo;
