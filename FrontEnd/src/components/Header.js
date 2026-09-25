import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import curriculo from "../editar/curriculo";
import { LangContext } from "../context/LangContext";

function Header() {
  const dados = curriculo();
  const { lang, toggleLang } = useContext(LangContext);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    return storedTheme ? storedTheme === "dark" : true;
  });
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const labels = {
    pt: {
      home: "Início",
      about: "Sobre mim",
      resume: "Resumo",
      projects: "Projetos",
      contact: "Contato",
      theme: "Alternar tema",
      language: "Alternar idioma",
      open: "Abrir menu",
      close: "Fechar menu",
    },
    en: {
      home: "Home",
      about: "About me",
      resume: "Summary",
      projects: "Projects",
      contact: "Contact",
      theme: "Toggle theme",
      language: "Change language",
      open: "Open menu",
      close: "Close menu",
    },
  }[lang];

  const firstName = dados.nome.split(" ")[0];
  const initials = dados.nome
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
  const links = [
    ["/", labels.home],
    ["/sobre", labels.about],
    ["/resumo", labels.resume],
    ["/projeto", labels.projects],
    ["/contato", labels.contact],
  ];

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light",
    );
    window.localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !toggleRef.current?.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          className="brand"
          to="/"
          onClick={closeMenu}
          aria-label={`${dados.nome} — ${labels.home}`}
        >
          <span className="brand-mark" aria-hidden="true">
            {initials}
          </span>
          <span className="brand-name">{firstName}</span>
        </Link>

        <nav
          className="desktop-nav"
          aria-label={lang === "pt" ? "Navegação principal" : "Main navigation"}
        >
          {links.map(([path, label]) => (
            <Link
              key={path}
              className={location.pathname === path ? "is-active" : ""}
              to={path}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            onClick={toggleLang}
            aria-label={labels.language}
            title={labels.language}
          >
            <i className="bi bi-globe2" aria-hidden="true" />
            <span>{lang.toUpperCase()}</span>
          </button>
          <button
            className="icon-button icon-only"
            type="button"
            onClick={() => setDarkMode((current) => !current)}
            aria-label={labels.theme}
            title={labels.theme}
          >
            <i
              className={`bi ${darkMode ? "bi-sun" : "bi-moon-stars"}`}
              aria-hidden="true"
            />
          </button>
          <button
            ref={toggleRef}
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? labels.close : labels.open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        ref={menuRef}
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-label={lang === "pt" ? "Navegação móvel" : "Mobile navigation"}
      >
        {links.map(([path, label]) => (
          <Link
            key={path}
            className={location.pathname === path ? "is-active" : ""}
            to={path}
            onClick={closeMenu}
          >
            {label}
          </Link>
        ))}
        <div className="mobile-actions">
          <button className="icon-button" type="button" onClick={toggleLang}>
            <i className="bi bi-globe2" aria-hidden="true" />{" "}
            {lang.toUpperCase()}
          </button>
          <button
            className="icon-button"
            type="button"
            onClick={() => setDarkMode((current) => !current)}
          >
            <i
              className={`bi ${darkMode ? "bi-sun" : "bi-moon-stars"}`}
              aria-hidden="true"
            />{" "}
            {labels.theme}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
