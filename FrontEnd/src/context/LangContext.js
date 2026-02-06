import { createContext, useState, useCallback } from "react";

export const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("pt");

  // mantém o que você já usa
  const toggleLang = () => {
    setLang(prev => (prev === "pt" ? "en" : "pt"));
  };

  /**
   * Função de tradução automática LOCAL
   * (sem API, sem limite, sem internet)
   */
  const t = useCallback(
    (text) => {
      if (!text || lang === "pt") return text;

      return text
        // cargos
        .replace(/Analista de TI/gi, "IT Analyst")
        .replace(/Desenvolvedor/gi, "Developer")

        // seções
        .replace(/Sobre Mim/gi, "About Me")
        .replace(/Resumo/gi, "Summary")
        .replace(/Projetos/gi, "Projects")
        .replace(/Contato/gi, "Contact")

        // frases comuns
        .replace(/Responsável por/gi, "Responsible for")
        .replace(/Sistema completo/gi, "Complete system")
        .replace(/Projeto/gi, "Project")
        .replace(/Curso/gi, "Course")
        .replace(/Experiência/gi, "Experience");
    },
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}
