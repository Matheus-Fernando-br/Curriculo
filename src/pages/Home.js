import React from "react";
import Sidebar from "../components/Sidebar";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid
} from "recharts";
import projetos from "../data/projetos";

function Home() {
  // Dados para gráficos
  const habilidades = [
    { name: "JavaScript", nivel: 85 },
    { name: "React", nivel: 65 },
    { name: "Node.js", nivel: 60 },
    { name: "HTML", nivel: 90 },
    { name: "CSS", nivel: 80 },
    { name: "Git/GitHub", nivel: 70 },
  ];

  const experiencia = [
    { ano: "2021", conquistas: 1 },
    { ano: "2022", conquistas: 1.5 },
    { ano: "2023", conquistas: 3 },
    { ano: "2024", conquistas: 6 },
    { ano: "2025", conquistas: 9 },
  ];
  
  return (
    <main className="Content">
      <section className="cards">
        {/* Sidebar */}
        <section className="lado-esquerdo">
          <Sidebar />
        </section>

        {/* Conteúdo Principal */}
        <section className="lado-direito">
          <h2><i className="bi bi-house-door"></i> Bem-vindo!</h2>
          <p>Aqui você pode conhecer um pouco mais sobre minha trajetória, minhas habilidades e projetos.</p>

          {/* Gráfico de Habilidades */}
          <div className="grafico-container">
            <h3>Minhas Habilidades</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={habilidades}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="nivel" fill="#00c3ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Gráfico de Experiência */}
          <div className="grafico-container">
            <h3>Evolução Profissional</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={experiencia}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="ano" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="conquistas" stroke="#0046c7" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Projetos em Destaque */}
           <div className="destaques">
            <h3>Projetos em Destaque</h3>
            <div className="projetos-grid">
              {projetos.slice(0, 3).map((p, index) => (
                <a key={index} href={p.link} target="blank" className="projeto-card">
                  <i className={`bi ${p.icon}`}></i> {p.title}
                </a>
              ))}
            </div>
          </div>

          {/* Testemunhos */}
          <div className="testemunhos">
            <h3>O que dizem sobre mim</h3>
            <blockquote>"Profissional dedicado e sempre pronto para aprender!" – Colega X</blockquote>
            <blockquote>"Entrega sempre no prazo e com qualidade." – Cliente Y</blockquote>
          </div>

          {/* Estatísticas */}
          <div className="estatisticas">
            <h3>Minhas Conquistas</h3>
            <div className="estatisticas-grid">
              <div><strong>1</strong><p>Projeto concluído</p></div>
              <div><strong>2</strong><p>Anos de experiência</p></div>
              <div><strong>3</strong><p>Certificações</p></div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
