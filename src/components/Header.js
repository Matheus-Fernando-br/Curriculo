import React, { useState, useEffect,useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import curriculo from "../editar/curriculo";
import {LangContext} from "../context/LangContext";

function Header() {
  const dados = curriculo();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const getNomeInfo = (nome = "") => {
    const partes = nome.trim().split(" ").filter(Boolean);
    return {
      primeiroNome: partes[0] || "",
      iniciais: partes.slice(0, 2).map(p => p[0]).join("").toUpperCase()
    };
  };

  const { primeiroNome, iniciais } = getNomeInfo(dados.nome);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const { lang, toggleLang } = useContext(LangContext);

  const t = {
    pt: { home: "Início", about: "Sobre Mim", resume: "Resumo", projects: "Projetos", contact: "Contato" },
    en: { home: "Home", about: "About Me", resume: "Summary", projects: "Projects", contact: "Contact" }
  };

  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const location = useLocation();

  const isActive = (path) => location.pathname === path;



  return (
    <header className="header" id="scroll-container">

      {/* DESKTOP LEFT */}
      <div className="header-left">
        <div className="avatar">{iniciais}</div>
        <h2>{primeiroNome}</h2>
      </div>

      {/* DESKTOP CENTER */}
      <nav className="header-center">
        <ul>
          <li className={isActive("/") ? "active" : ""}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              {t[lang].home}
            </Link>
          </li>
          <li className={isActive("/sobre") ? "active" : ""}>
            <Link to="/sobre" onClick={() => setMenuOpen(false)}>
              {t[lang].about}
            </Link>
          </li>
          <li className={isActive("/resumo") ? "active" : ""}>
            <Link to="/resumo" onClick={() => setMenuOpen(false)}>
              {t[lang].resume}
            </Link>
          </li>
          <li className={isActive("/projeto") ? "active" : ""}>
            <Link to="/projeto" onClick={() => setMenuOpen(false)}>
              {t[lang].projects}
            </Link>
          </li>
          <li className={isActive("/contato") ? "active" : ""}>
            <Link to="/contato" onClick={() => setMenuOpen(false)}>
              {t[lang].contact}
            </Link>
          </li>
        </ul>

      </nav>

      {/* DESKTOP RIGHT */}
      <div className="header-right">
        <button className="icon-btn" onClick={toggleLang}>
          <i className="bi bi-globe"></i> {lang.toUpperCase()}
        </button>

        <button className="icon-btn" onClick={() => setDarkMode(!darkMode)}>
          <i className={`bi ${darkMode ? "bi-brightness-low-fill" : "bi-moon-fill"}`}></i>
        </button>
      </div>

      {/* HAMBURGER */}
      <div
        ref={toggleRef}
        className={`mobile-menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>


      {/* MOBILE MENU */}
      <div
        ref={menuRef}
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
      >

        {/* Nav links */}
        <ul>
          <li className={isActive("/") ? "active" : ""}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              {t[lang].home}
            </Link>
          </li>
          <li className={isActive("/sobre") ? "active" : ""}>
            <Link to="/sobre" onClick={() => setMenuOpen(false)}>
              {t[lang].about}
            </Link>
          </li>
          <li className={isActive("/resumo") ? "active" : ""}>
            <Link to="/resumo" onClick={() => setMenuOpen(false)}>
              {t[lang].resume}
            </Link>
          </li>
          <li className={isActive("/contato") ? "active" : ""}>
            <Link to="/contato" onClick={() => setMenuOpen(false)}>
              {t[lang].contact}
            </Link>
          </li>
        </ul>

        {/* Botões direito */}
        <div className="header-right">
          <button className="icon-btn" onClick={toggleLang}>
            <i className="bi bi-globe"></i>
          </button>

          <button className="icon-btn" onClick={() => setDarkMode(!darkMode)}>
            <i className={`bi ${darkMode ? "bi-brightness-low-fill" : "bi-moon-fill"}`}></i>
          </button>
        </div>
      </div>


    </header>
  );
}

export default Header;
