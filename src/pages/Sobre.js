import React from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import projetos from "../data/projetos";

function Sobre() {

    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - 2004;

  return (
    <main className="Content page-sobre">
      <section className="cards">
        <section className="lado-esquerdo">
          <Sidebar />
        </section>

        <section className="lado-direito">
          {/* Topo dividido em duas colunas */}
          <div className="top-section">
            <div className="sobre-mim">
                <h2><i className="bi bi-person"></i> Sobre <span className="Cor-Primaria">Mim</span></h2>
                <p>
                    Sou Analista de TI e também atuo como freelancer em projetos de tecnologia. Tenho experiência em suporte técnico, manutenção de equipamentos, otimização de sistemas e atendimento interno, sempre buscando soluções práticas e eficientes.<br /><br />
                    Possuo facilidade em gestão de demandas, resolução de problemas e trabalho em equipe, além de estar em constante aprendizado por meio de cursos, projetos e novas tecnologias.<br /><br />
                    🚀 Vamos conversar? Tenho certeza de que minhas habilidades podem contribuir para o sucesso do seu projeto ou empresa.<br /><br />
                </p>
            </div>

            <div className="info-pessoal">
              <Card 
                icon="bi-calendar"
                title="Idade" 
                subtitle={`${idade} anos`} 
              />
              <Card 
                icon="bi-car-front" 
                title="CNH" 
                subtitle="Categoria AB" 
              />
              <Card 
                icon="bi-translate" 
                title="Idioma" 
                subtitle="Conhecimento básico de leitura e fala em Inglês" 
              />
              <Card 
                icon="bi-geo-alt" 
                title="Região" 
                subtitle="Timóteo - MG" 
              />
            </div>
          </div>

          {/* Parte de baixo dividida em duas colunas */}
          <div className="bottom-section">
            <div className="projetos">
              <h2><i className="bi bi-diagram-3"></i> Projetos</h2>
              {projetos.map((p, index) => (
                <a key={index} href={p.link} target="blank">
                  <Card 
                  icon={p.icon} 
                  title={p.title} 
                  details={p.details}/>
                </a>
              ))}
            </div>

            <div className="cursos">
              <h2><i className="bi bi-award"></i> Cursos</h2>
              <Card 
                icon="bi-mortarboard" 
                title="FIGMA" 
                text="TIC em trilhas" 
              />
              <Card 
                icon="bi-book" 
                title="Liderança: como desenvolver times de alta performance" 
                text="SEBRAE" 
              />
              <Card 
                icon="bi-book" 
                title="Python do zero ao avançado" 
                text="Udemy" 
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Sobre;
