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
                <div className="card">
                  <div className="card-header">
                    <i className="bi bi-mortarboard"></i>
                    <h4>CEFET-MG</h4>
                  </div>
                  <div className="card-content">
                    <span>2022 – 2023</span>
                    <p>Técnico em Edificações</p>
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
                  <p> Expertise em infraestrutura de rede robusta (LAN/WLAN) e administração de sistemas escaláveis. Proficiente em troubleshooting avançado e otimização de performance de hardware/software. Habilidade em operar e manter sistemas audiovisuais complexos (som, iluminação, projeção) e em identificar oportunidades de melhoria contínua de processos para eficiência operacional e pedagógica em ambientes educacionais dinâmicos. Busco aplicar competências em um ecossistema tecnológico inovador.</p>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <i className="bi bi-briefcase"></i>
                  <h4>NM Engenharia</h4>
                </div>
                <div className="card-content">
                  <span>Fev/2024 – Jul/2025</span>
                  <p>Profissional com sólida experiência em Business Intelligence (BI), especializada na elaboração de relatórios gerenciais e análise de dados para a geração de insights estratégicos e suporte à tomada de decisão.
                    <br />
                    Experiência em administração de sistemas, incluindo instalação, atualização e manutenção proativa, com foco na resolução de incidentes críticos e correção de bugs em redes para garantir a continuidade operacional.
                    <br />
                    Capacidade técnica em manutenção de hardware e software, realizando formatação e otimização de sistemas para maximizar a performance. Abrangente atuação em suporte técnico corporativo, assegurando a resolução eficaz de demandas de TI em toda a organização.
                    <br />
                    Adicionalmente, possui conhecimento em gestão de processos de RH, com ênfase em medição e processamento de folhas de pagamento através da plataforma E-Fornecedores, demonstrando versatilidade e domínio em áreas-chave de suporte administrativo e tecnológico.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <i className="bi bi-briefcase"></i>
                  <h4>CENIBRA - Celulose Nipo Brasileira S. A.</h4>
                </div>
                <div className="card-content">
                  <span>Jul/2023 – Dez/2023</span>
                  <p>Participou e contribuiu em reuniões de planejamentos semanais, preenchimento referente ao relatório de análise preventiva de risco industrial e diálogo diário de segurança. Experiência com fiscalização das atividades de pintura industrial, visto que o empregado realizava medições em peças jateadas no canteiro de obras, adquirindo conhecimentos sobre como o processo é realizado. Obteve conhecimento sobre o processo de isolamento térmico, o qual o empregado também teve experiências em medições e como o processo de montagem e desmontagem é feito. Participou de fiscalização de obra civil, acompanhando o processo de manutenção de patologias geradas pelo processo industrial junto a processos de medição de obra civil na área e controle de lançamento de custos, fechamento de medidas gerais e processos de compras, com conhecimento no programa MS Project, em realizar planejamento de atividades, paradas e como acompanhar e atualizar o processo pelo
programa dentro da área da CENIBRA.</p>
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
