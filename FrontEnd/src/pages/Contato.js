import React, { useContext, useState } from "react";
import curriculo from "../editar/curriculo";
import { LangContext } from "../context/LangContext";

function Contato() {
  const dados = curriculo();
  const { lang } = useContext(LangContext);

  const [statusMsg, setStatusMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "https://curriculo-9mqo.onrender.com/api/send-message";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatusMsg("");

    const formData = new FormData(e.target);

    const body = {
      nome: formData.get("Nome"),
      email: formData.get("Email"),
      assunto: formData.get("Assunto"),
      mensagem: formData.get("Mensagem"),
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await res.json();

      if (result.success) {
        setStatusMsg("✅ Mensagem enviada com sucesso!");
        e.target.reset();
      } else {
        setStatusMsg("❌ Erro ao enviar mensagem.");
      }

    } catch {
      setStatusMsg("❌ Falha de conexão com servidor.");
    }

    setLoading(false);
  };


  const t = {
    pt: {
      contactTitle: "Vamos Trabalhar Juntos!",
      msgTitle:
        "Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte de sua visão.",
      InfoContact: "Informações de Contato",
      InfoMsg:
        "Entre em contato comigo através de um dos meios abaixo ou do formulário ao lado.",
      callMe: "Preencha o formulário abaixo para enviar-me uma mensagem.",
      RedesSociais: "Redes Sociais",
      btnFinal: "Enviar mensagem",
      formName: "Nome",
      formEmail: "Email",
      formSubject: "Assunto",
      formMessage: "Mensagem",
      inputPlaceholderMessage: "Digite sua mensagem...",
      inputPlaceholderName: "Digite seu nome...",
      inputPlaceholderEmail: "Informe seu E-mail...",
      inputPlaceholderSubject: "Informe o assunto da mensagem...",
    },
    en: {
      contactTitle: "Let's Work Together!",
      msgTitle:
        "I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      InfoContact: "Contact Information",
      InfoMsg:
        "Get in touch with me through one of the means below or the form beside.",
      callMe: "Fill out the form below to send me a message.",
      RedesSociais: "Social Networks",
      btnFinal: "Send Message",
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formMessage: "Message",
      inputPlaceholderMessage: "Type your message...",
      inputPlaceholderName: "Type your name...",
      inputPlaceholderEmail: "Enter your Email...",
      inputPlaceholderSubject: "Enter the subject of the message...",
    },
  };

  return (
    <main id="scroll-container" className="Content page-contato">
      <section className="contact-container">
        {/* CENTRO */}
        <div className="contact-center">
          <h1>{t[lang].contactTitle}</h1>
          <p>{t[lang].msgTitle}</p>
        </div>

        {/* ESQUERDA */}
        <div className="contact-left">
          <h2>{t[lang].InfoContact}</h2>
          <p>{t[lang].InfoMsg}</p>

          <ul className="contact-list">
            <a href={`tel:${dados.contatos.telefone}`}>
              <li>
                <i className="bi bi-telephone"></i>
                {dados.contatos.telefone}
              </li>
            </a>

            <a href={`mailto:${dados.contatos.email}`}>
              <li>
                <i className="bi bi-envelope"></i>
                {dados.contatos.email}
              </li>
            </a>

            <a
              href={`https://wa.me/55${dados.contatos.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <i className="bi bi-whatsapp"></i>
                WhatsApp
              </li>
            </a>

            <a
              href={dados.contatos.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <i className="bi bi-telegram"></i>
                Telegram
              </li>
            </a>
          </ul>

          <hr className="hr-redes" />

          <div className="Redes-Sociais">
            <h2>{t[lang].RedesSociais}</h2>
            <div className="social-links contact-social-links">
              <a
                href={dados.contatos.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href={dados.contatos.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href={dados.contatos.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* DIREITA */}
        <div className="contact-right">
          <h2>{t[lang].callMe}</h2>

          <hr className="divider-contatc" />

          <form className="contact-form" onSubmit={handleSubmit}>

            <label>{t[lang].formName} <span className="required">*</span></label>
            <input
              type="text"
              name="Nome"
              placeholder={t[lang].inputPlaceholderName}
              required
              disabled={loading}
            />

            <label>{t[lang].formEmail}</label>
            <input
              type="email"
              name="Email"
              placeholder={t[lang].inputPlaceholderEmail}
              disabled={loading}
            />

            <label>{t[lang].formSubject} <span className="required">*</span></label>
            <input
              type="text"
              name="Assunto"
              placeholder={t[lang].inputPlaceholderSubject}
              required
              disabled={loading}
            />

            <label>{t[lang].formMessage} <span className="required">*</span></label>
            <textarea
              name="Mensagem"
              placeholder={t[lang].inputPlaceholderMessage}
              rows="5"
              required
              disabled={loading}
            />

            <button type="submit" disabled={loading}>   
              {loading && <span className="spinner-btn"></span>}   
              {loading ? "" : t[lang].btnFinal}
            </button>
            {statusMsg && <p className="form-status">{statusMsg}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contato;
