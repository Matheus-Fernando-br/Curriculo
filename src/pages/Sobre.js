import React from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

function Sobre() {

    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - 2004;

  return (
    <main className="Content">
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
                    Atuo como Analista de TI e também presto serviços como freelancer na área. 
                    Cuido de suporte técnico, manutenção de equipamentos, melhorias em sistemas 
                    e atendimento interno, sempre focando em soluções práticas e eficientes. <br />
                    Tenho facilidade com gestão de demandas, resolução de problemas e trabalho em equipe. 
                    Busco constantemente evoluir com projetos, cursos e novas tecnologias.
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
              <a href="https://finc-seven.vercel.app/" target="blank">
              <Card 
                icon="bi-code-slash" 
                title="Site de Emissão de Nota Fiscal em REACT" 
                text="Cadastre seus clientes, produtos e serviços e emita uma NF com poucos cliques!"
              />
              </a>
              <a href="https://github.com/Matheus-Fernando-br/Reserva-Restaurante" target="blank">
              <Card 
                icon="bi-laptop" 
                title="Reserva de Restaurante em JAVA" 
                text="Intuito de gerenciar reservas em restaurante, com fluxo completo de seleção de data, horário, mesa e informações do cliente." 
              />
              </a>
              <a href="https://github.com/Matheus-Fernando-br/Simple-Calculator-Project" target="blank">
              <Card 
                icon="bi-laptop" 
                title="Simple Calculator Project" 
                text="Este projeto é um aplicativo básico de calculadora desenvolvido como parte de uma tarefa escolar. O desafio único deste projeto foi criar uma calculadora funcional sem utilizar nenhum gerenciador de layout." 
              />
              </a>
              <a href="https://github.com/Matheus-Fernando-br/Mario-Game" target="blank">
              <Card 
                icon="bi-laptop" 
                title="Simple Mario Jump Game" 
                text="Este é um jogo básico de salto com tema de Mario criado usando HTML, CSS e JavaScript. Neste jogo, você controla Mario como ele salta sobre canos. O objetivo é evitar a colisão com os canos pelo maior tempo possível." 
              />
              </a>
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
