import React from "react";
import Sidebar from "../components/Sidebar";
import Experiencia from "../components/Experiencia";


function Resumo() {
    const iconeOK = <i class="bi bi-check"></i>;
    const experienciasData = [
    {
      empresa: "Colégio Genoma",
      periodo: "Jul/2025 – Atual",
      descricao: [
        "Expertise em infraestrutura de rede robusta (LAN/WLAN) e administração de sistemas escaláveis.",
        "Proficiente em troubleshooting avançado e otimização de performance de hardware/software.",
        "Habilidade em operar e manter sistemas audiovisuais complexos (som, iluminação, projeção).",
        "Identificação de oportunidades de melhoria contínua de processos para eficiência operacional e pedagógica.",
        "Busca aplicar competências em ecossistemas tecnológicos inovadores."
      ]
    },
    {
      empresa: "NM Engenharia",
      periodo: "Fev/2024 – Jul/2025",
      descricao: [
        "Experiência em Business Intelligence (BI), elaboração de relatórios e análise de dados para insights estratégicos.",
        "Administração de sistemas: instalação, atualização e manutenção proativa, resolução de incidentes críticos.",
        "Manutenção de hardware e software, formatação e otimização para maximizar performance.",
        "Suporte técnico corporativo, garantindo resolução eficaz de demandas de TI.",
        "Conhecimento em processos de RH: medição e processamento de folhas de pagamento via E-Fornecedores."
      ]
    },
    {
      empresa: "CENIBRA - Celulose Nipo Brasileira S. A.",
      periodo: "Jul/2023 – Dez/2023",
      descricao: [
        "Participação em reuniões de planejamento semanal e relatórios de análise preventiva de risco industrial.",
        "Fiscalização de pintura industrial e medições em peças jateadas.",
        "Conhecimento em processos de isolamento térmico, montagem e desmontagem.",
        "Fiscalização de obra civil, manutenção de patologias, medições e controle de custos.",
        "Planejamento de atividades e paradas usando MS Project, acompanhamento e atualização de processos."
      ]
    }
  ];

  return (
    <main className="Content page-resumo">
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
              {experienciasData.map((exp, index) => (
                <Experiencia
                  key={index}
                  empresa={exp.empresa}
                  periodo={exp.periodo}
                  descricao={exp.descricao}
                />
              ))}
            </div>
          </div> {/* lado-direito-scroll */}
        </section>
      </section>
    </main>
  );
}

export default Resumo;
