import { createContext, useState } from "react";

export const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("pt"); // padrão PT

  const toggleLang = () => setLang(prev => (prev === "pt" ? "en" : "pt"));

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}
