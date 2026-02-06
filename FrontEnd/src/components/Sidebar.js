import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import curriculo from "../editar/curriculo";

function Sidebar() {
  const dados = curriculo();

  return ( 
    <section className="sidebar">
      {/* Foto de perfil */} 
        <img 
          src="/Images/Foto-Usuario.jpg" 
          alt={dados.apelido} 
          className="profile-img" 
        />

      {/* Nome e cargo */}
        <h2>{dados.apelido}</h2>
        <h4>
          <span className="Cor-Primaria"><i className="bi bi-laptop"></i></span> {dados.cargo}
        </h4>

        {/* Currículo */}
        <a 
          href={dados.contatos.curriculo} 
          className="btn" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          📄 Download Resume
        </a>


          <div className="social-links">
            <a href={dados.contatos.github} target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
            <a href={dados.contatos.linkedin} target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
          </div>

          <div className="btn-Whatssap">
            <a href={`https://wa.me/55${dados.contatos.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <button><i className="bi bi-whatsapp"></i> WhatsApp</button>
            </a>
          </div>
    </section>


  )
}

export default Sidebar;
