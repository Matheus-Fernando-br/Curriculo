import React from "react";
import Sidebar from "../components/Sidebar";

function Resumo() {
  return (
    <main className="Content">
      <section className="cards">
        <section className="lado-esquerdo">
          <Sidebar />
        </section>

        <section className="lado-direito">
          <div className="lado-direito-scroll">
            <h2><i className="bi bi-journal-text"></i> Resumo</h2>

            {/* Topo dividido em duas colunas */}
            <div className="top-section">
              {/* Educação */}
              <div className="educacao">
                <h3><i className="bi bi-mortarboard"></i> Educação</h3>
                <div className="card">
                  <div className="card-header">
                    <i className="bi bi-mortarboard"></i>
                    <h4>Unileste</h4>
                  </div>
                  <div className="card-content">
                    <span>2024 – 2027 (Cursando)</span>
                    <p>Engenharia de Software</p>
                  </div>
                </div>
              </div>

              {/* Competências */}
              <div className="competencias">
                <h3><i className="bi bi-lightning-charge"></i> Competências</h3>
                <div className="competencias-tags">
                  <span className="tag"><i className="bi bi-bar-chart-line"></i> ANÁLISE DE DADOS</span>
                  <span className="tag"><i className="bi bi-cup-hot"></i> JAVA</span>
                  <span className="tag"><i className="bi bi-braces"></i> JAVASCRIPT</span>
                  <span className="tag"><i className="bi bi-lightbulb"></i> REACT</span>
                  <span className="tag"><i className="bi bi-diagram-3"></i> NODE.JS/EXPRESS</span>
                  <span className="tag"><i className="bi bi-filetype-html"></i> HTML</span>
                  <span className="tag"><i className="bi bi-filetype-css"></i> CSS</span>
                  <span className="tag"><i className="bi bi-filetype-py"></i> PYTHON</span>
                  <span className="tag"><i className="bi bi-database"></i> MYSQL</span>
                  <span className="tag"><i className="bi bi-git"></i> GIT E GITHUB</span>
                  <span className="tag"><i className="bi bi-hdd-network"></i> REDES</span>
                  <span className="tag"><i className="bi bi-microsoft"></i> PACOTE OFFICE</span>
                  <span className="tag"><i className="bi bi-cart-check"></i> E-FORNECEDORES</span>
                  <span className="tag"><i className="bi bi-building"></i> SAP</span>
                </div>
              </div>
            </div>

            {/* Experiências */}
            <div className="bottom-section full">
              <h3><i className="bi bi-briefcase"></i> Experiências</h3>

              <div className="card">
                <div className="card-header">
                  <i className="bi bi-briefcase"></i>
                  <h4>Colégio Genoma</h4>
                </div>
                <div className="card-content">
                  <span>Jul/2025 – Atual</span>
                  <p>Descrição que você vai alterar depois.</p>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <i className="bi bi-briefcase"></i>
                  <h4>NM Engenharia</h4>
                </div>
                <div className="card-content">
                  <span>Fev/2024 – Jul/2025</span>
                  <p>Descrição que você vai alterar depois.</p>
                </div>
              </div>
            </div>
          </div> {/* lado-direito-scroll */}
        </section>
      </section>
    </main>
  );
}

export default Resumo;
