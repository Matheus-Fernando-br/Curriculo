import React, { useContext, useState } from "react";
import curriculo from "../editar/curriculo";
import { LangContext } from "../context/LangContext";

function Contato() {
  const dados = curriculo();
  const { lang } = useContext(LangContext);
  const [statusMsg, setStatusMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const API_URL = "https://curriculo-9mqo.onrender.com/api/send-message";
  const copy = {
    pt: {
      eyebrow: "Contato",
      title: "Vamos conversar sobre o próximo desafio.",
      intro:
        "Estou aberto a discutir projetos, ideias criativas e oportunidades em tecnologia.",
      details: "Informações de contato",
      detailsText:
        "Escolha o canal mais conveniente ou envie uma mensagem pelo formulário.",
      social: "Redes sociais",
      formTitle: "Envie uma mensagem",
      name: "Nome",
      email: "E-mail",
      subject: "Assunto",
      message: "Mensagem",
      send: "Enviar mensagem",
      sending: "Enviando…",
      required: "obrigatório",
      success: "Mensagem enviada com sucesso!",
      error: "Preencha os campos obrigatórios.",
      placeholderName: "Seu nome",
      placeholderEmail: "voce@exemplo.com",
      placeholderSubject: "Como posso ajudar?",
      placeholderMessage: "Conte um pouco sobre o projeto…",
    },
    en: {
      eyebrow: "Contact",
      title: "Let’s talk about the next challenge.",
      intro:
        "I am open to discussing projects, creative ideas and technology opportunities.",
      details: "Contact information",
      detailsText:
        "Choose the most convenient channel or send a message using the form.",
      social: "Social networks",
      formTitle: "Send a message",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send message",
      sending: "Sending…",
      required: "required",
      success: "Message sent successfully!",
      error: "Please fill in the required fields.",
      placeholderName: "Your name",
      placeholderEmail: "you@example.com",
      placeholderSubject: "How can I help?",
      placeholderMessage: "Tell me a little about the project…",
    },
  }[lang];

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatusMsg("");
    const form = event.target;
    const formData = new FormData(form);
    const body = {
      nome: formData.get("Nome"),
      email: formData.get("Email"),
      assunto: formData.get("Assunto"),
      mensagem: formData.get("Mensagem"),
    };
    if (!body.nome || !body.mensagem || !body.assunto) {
      setStatusMsg(`❌ ${copy.error}`);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setStatusMsg(`✅ ${copy.success}`);
      form.reset();
      setLoading(false);
    }, 2500);
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).catch(() => console.error("Erro ao enviar"));
    setTimeout(() => setStatusMsg(""), 7500);
  };

  const contactLinks = [
    ["bi-envelope", dados.contatos.email, `mailto:${dados.contatos.email}`],
    ["bi-whatsapp", "WhatsApp", `https://wa.me/55${dados.contatos.whatsapp}`],
    ["bi-telegram", "Telegram", dados.contatos.telegram],
  ];
  const socials = [
    ["bi-github", "GitHub", dados.contatos.github],
    ["bi-linkedin", "LinkedIn", dados.contatos.linkedin],
    ["bi-instagram", "Instagram", dados.contatos.instagram],
  ];

  return (
    <main
      className="page page-inner"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <section className="section-shell inner-hero contact-hero">
        <p className="eyebrow">01 · {copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="page-lead">{copy.intro}</p>
      </section>
      <section className="section-shell contact-layout">
        <aside className="contact-info glass-card">
          <p className="eyebrow">02 · {copy.details}</p>
          <h2>{copy.details}</h2>
          <p>{copy.detailsText}</p>
          <ul className="contact-list">
            {contactLinks.map(([icon, label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <i className={`bi ${icon}`} aria-hidden="true" />
                  <span>{label}</span>
                  <i className="bi bi-arrow-up-right" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <hr />
          <h3>{copy.social}</h3>
          <div className="social-links">
            {socials.map(([icon, label, href]) => (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                key={label}
              >
                <i className={`bi ${icon}`} aria-hidden="true" />
              </a>
            ))}
          </div>
        </aside>
        <section className="contact-form-card glass-card">
          <p className="eyebrow">03 · {copy.formTitle}</p>
          <h2>{copy.formTitle}</h2>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="contact-name">
                {copy.name} <span aria-label={copy.required}>*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                name="Nome"
                placeholder={copy.placeholderName}
                required
                disabled={loading}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">{copy.email}</label>
              <input
                id="contact-email"
                type="email"
                name="Email"
                placeholder={copy.placeholderEmail}
                disabled={loading}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-subject">
                {copy.subject} <span aria-label={copy.required}>*</span>
              </label>
              <input
                id="contact-subject"
                type="text"
                name="Assunto"
                placeholder={copy.placeholderSubject}
                required
                disabled={loading}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">
                {copy.message} <span aria-label={copy.required}>*</span>
              </label>
              <textarea
                id="contact-message"
                name="Mensagem"
                placeholder={copy.placeholderMessage}
                rows="6"
                required
                disabled={loading}
              />
            </div>
            <button
              className="button button-primary form-submit"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-btn" /> {copy.sending}
                </>
              ) : (
                <>
                  {copy.send}{" "}
                  <i className="bi bi-arrow-up-right" aria-hidden="true" />
                </>
              )}
            </button>
            {statusMsg && (
              <p className="form-status" role="status">
                {statusMsg}
              </p>
            )}
          </form>
        </section>
      </section>
    </main>
  );
}

export default Contato;
