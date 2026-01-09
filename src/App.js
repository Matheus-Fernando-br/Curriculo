import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BackToTop from "./components/BackToTop";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Resumo from "./pages/Resumo";
import Projetos from "./pages/Projeto";
import Contato from "./pages/Contato";
import './styles/global.css';

import { LangProvider } from "./context/LangContext";

function App() {
  return (
    <LangProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/resumo" element={<Resumo />} />
          <Route path="/projeto" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>

        {/* BOTÃO GLOBAL */}
        <BackToTop />
      </Router>
    </LangProvider>
  );
}

export default App;
