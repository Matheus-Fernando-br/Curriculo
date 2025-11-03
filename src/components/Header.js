import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import curriculo from "../editar/curriculo";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dados = curriculo();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return ( 
    <header>
      <h2>{dados.nome}</h2> 
      <nav> <i className="bi bi-list menu-toggle" onClick={toggleMenu}></i>
        <ul className={menuOpen ? "active" : ""}> 
          <li><Link to="/"><i className="bi bi-house-door"></i> Home</Link></li> 
          <li><Link to="/sobre"><i className="bi bi-person"></i> About</Link></li> 
          <li><Link to="/resumo"><i className="bi bi-file-text"></i> Summary</Link></li> 
          <li><Link to="/contato"><i className="bi bi-envelope"></i> Contact</Link></li> 
        </ul> 
      </nav> 
    </header>
  )
}

export default Header;
