import React from "react";
import Sidebar from "../components/Sidebar";
import curriculo from "../editar/curriculo";

function Sobre() {
  const dados = curriculo();

  return ( 
    <main className="Content page-sobre"> 
      <section className="cards"> 
        <section className="lado-esquerdo"> 
          <Sidebar /> 
        </section>

        <section className="lado-direito">
          {/* Sobre Mim */}
          <div className="top-section">
            <div className="sobre-mim">
              <h2><i className="bi bi-person"></i> Sobre <span className="Cor-Primaria">Mim</span></h2>
              <p>{dados.textoSobreMim}</p>
            </div>

            {/* Informações Pessoais */}
            <div className="info-pessoal">
              <div className="card">
                <div className="card-header-inline">
                  <i className="bi bi-calendar"></i>
                  <h4>Idade</h4>
                </div>
                <p>{dados.idade} anos</p>
              </div>
              <div className="card">
                <div className="card-header-inline">
                  <i className="bi bi-car-front"></i>
                  <h4>CNH</h4>
                </div>
                <p>{dados.cnh}</p>
              </div>
              <div className="card">
                <div className="card-header-inline">
                  <i className="bi bi-translate"></i>
                  <h4>Idioma</h4>
                </div>
                <p>{dados.idioma}</p>
              </div>
              <div className="card">
                <div className="card-header-inline">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Região</h4>
                </div>
                <p>{dados.regiao}</p>
              </div>
            </div>
          </div>

          {/* Projetos e Cursos */}
          <div className="bottom-section">
            {/* Projetos */}
            <div className="projetos">
              <h2><i className="bi bi-diagram-3"></i> Projetos</h2>
              {dados.projetos.map((p, index) => (
                <a key={index} href={p.link} target="blank" className="card">
                  <div className="card-header-inline">
                    <i className={`bi ${p.icon}`}></i>
                    <h4>{p.title}</h4>
                  </div>
                  <p>{p.details}</p>
                </a>
              ))}
            </div>

            {/* Cursos */}
            <div className="cursos">
              <h2><i className="bi bi-award"></i> Cursos</h2>
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
          </div>
        </section>
      </section>
    </main>
  );
}

export default Sobre;
