import React from "react";
import Sidebar from "../components/Sidebar";
import curriculo from "../editar/curriculo";

function Contato() {
  const dados = curriculo();

  return ( 
    <main className="Content page-contato"> 
      <section className="cards"> 
        <section className="lado-esquerdo"> 
          <Sidebar /> 
        </section>

          <section className="lado-direito">
            <h2><i className="bi bi-envelope"></i> Contacts</h2>
            <p>Contact us through any of the channels below:</p>

            <div className="contact-area">
              <ul>
                <a href={`tel:${dados.contatos.telefone}`}>
                  <li><i className="bi bi-telephone"></i> Phone</li>
                </a>
                <a href={`mailto:${dados.contatos.email}`}>
                  <li><i className="bi bi-envelope"></i> {dados.contatos.email}</li>
                </a>
                <a href={`https://wa.me/55${dados.contatos.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <li><i className="bi bi-whatsapp"></i> WhatsApp</li>
                </a>
                <a href={dados.contatos.telegram} target="_blank" rel="noopener noreferrer">
                  <li><i className="bi bi-telegram"></i> Telegram</li>
                </a>
              </ul>
            </div>
          </section>
      </section>
    </main>
  );
}

export default Contato;
