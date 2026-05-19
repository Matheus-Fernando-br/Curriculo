import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import BackToTop from "./components/BackToTop";
import SplashScreen from "./components/SplashScreen";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Resumo from "./pages/Resumo";
import Projetos from "./pages/Projeto";
import Contato from "./pages/Contato";

import { LangProvider } from "./context/LangContext";

import "./styles/global.css";

function App() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const splashAlreadyShown = sessionStorage.getItem("splashShown");

    if (!splashAlreadyShown) {
      setShowSplash(true);
      sessionStorage.setItem("splashShown", "true");
    }
  }, []);

  return (
    <LangProvider>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/resumo" element={<Resumo />} />
            <Route path="/projeto" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>

          <BackToTop />
        </Router>
      )}
    </LangProvider>
  );
}

export default App;
