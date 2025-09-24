import React from "react";
import Sidebar from "../components/Sidebar";

function Contato() {
  return (
    <main className="Content">
      <section className="cards">
        {/* Lado esquerdo fixo */}
        <section className="lado-esquerdo">
          <Sidebar />
        </section>

        {/* Lado direito com contatos */}
        <section className="lado-direito">
          <h2><i className="bi bi-envelope"></i> Contato</h2>
          <p>Entre em contato através de qualquer um dos canais abaixo:</p>

          <div className="contact-area">
            <ul>
                <a href="tel:31986763652">
                <li>
                    <i className="bi bi-telephone"></i>(31) 98676-3652 
                </li>
                </a>
                <a href="mailto:matheus1030br@gmail.com">
              <li>
                <i className="bi bi-envelope"></i>matheus1030br@gmail.com
              </li>
              </a>
                <a href="https://wa.me/5531986763652" target="_blank" rel="noopener noreferrer">
              <li>
                <i className="bi bi-whatsapp"></i>WhatsApp
              </li>
                </a>
              <a href="https://t.me/+55131986763652" target="_blank" rel="noopener noreferrer">
              <li>
                    <i class="bi bi-telegram"></i>Telegram
              </li>
                </a>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Contato;
