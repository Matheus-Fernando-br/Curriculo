import React from "react";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <main className="Content">
      <section className="cards">
        <section className="lado-esquerdo">
          <Sidebar />
        </section>
        <section className="lado-direito">
          <h2><i className="bi bi-house-door"></i> Bem-vindo!</h2>
          <p>Aqui você pode conhecer um pouco mais sobre minha trajetória, minhas habilidades e projetos.</p>
        </section>
      </section>
    </main>
  )
}

export default Home;
