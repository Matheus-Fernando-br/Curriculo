import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Sidebar() {
  return (
    <section className="sidebar">
      {/* Foto de perfil vinda do public/Images */}
      <img 
        src="/Images/Foto-Matheus.jpg" 
        alt="Matheus Fernando" 
        className="profile-img" 
      />

      <h2>Matheus Fernando</h2>
      <h4><i className="bi bi-laptop"></i> Analista de TI</h4>

      {/* Currículo vinda do public */}
      <a href="/curriculo.pdf" className="btn" download>
        📄 Baixar Currículo
      </a>

      <div className="social-links">
        <a href="https://github.com/Matheus-Fernando-br" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
        <a href="https://www.linkedin.com/in/matheus-fernando-" target="_blank" rel="noreferrer">
          <i class="bi bi-linkedin"></i>
        </a>
      </div>

      <div className="btn-Whatssap">
        <a href="https://wa.me/5531986763652" target="_blank" rel="noopener noreferrer"> <button><i className="bi bi-whatsapp"></i>Whatssap</button></a>
      </div>
    </section>
  )
}

export default Sidebar;
