import React from "react";
import Sidebar from "../components/Sidebar";
import {
BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
LineChart, Line, CartesianGrid
} from "recharts";
import curriculo from "../editar/curriculo";

function Home() {
  const dados = curriculo();

  const experiencia = [
  { ano: "2021", conquistas: 1 },
  { ano: "2022", conquistas: 1.5 },
  { ano: "2023", conquistas: 3 },
  { ano: "2024", conquistas: 6 },
  { ano: "2025", conquistas: 9 },
  ];

  return ( 
    <main className="Content page-home"> 
      <section className="cards"> 
        <section className="lado-esquerdo"> 
          <Sidebar /> 
        </section>

        <section className="lado-direito">
          <h2><i className="bi bi-house-door"></i> Bem-vindo!</h2>
          <p>{dados.textoInicialHome}</p>

          <div className="grafico-container">
            <h3>Minhas Habilidades</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={dados.habilidades}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="nivel" fill="#00c3ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>

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

          <div className="destaques">
            <h3>Projetos em Destaque</h3>
            <div className="projetos-grid">
              {dados.projetos.slice(0, 3).map((p, index) => (
                <a key={index} href={p.link} target="blank" className="projeto-card">
                  <i className={`bi ${p.icon}`}></i> {p.title}
                </a>
              ))}
            </div>
          </div>

          <div className="testemunhos">
            <h3>O que dizem sobre mim</h3>
            {dados.oqueDizemSobreMim.map((texto, index) => (
              <blockquote key={index}>
                <span className="Cor-Primaria">"</span> {texto} <span className="Cor-Primaria">"</span>
              </blockquote>
            ))}
          </div>

          <div className="estatisticas">
            <h3>Minhas Conquistas</h3>
            <div className="estatisticas-grid">
              {dados.minhasConquistas.map((c, index) => (
                <div key={index}>
                  <strong>{c.numero}</strong>
                  <p>{c.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>

  );
}

export default Home;
