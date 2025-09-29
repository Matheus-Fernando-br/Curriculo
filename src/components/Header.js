import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <h2>Matheus Fernando Ribeiro Martins</h2>
      <nav>
        <i className="bi bi-list menu-toggle" onClick={toggleMenu}></i>
        <ul className={menuOpen ? "active" : ""}>
          <li><Link to="/"><i className="bi bi-house-door"></i> Home</Link></li>
          <li><Link to="/sobre"><i className="bi bi-person"></i> Sobre</Link></li>
          <li><Link to="/resumo"><i className="bi bi-file-text"></i> Resumo</Link></li>
          <li><Link to="/contato"><i className="bi bi-envelope"></i> Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
