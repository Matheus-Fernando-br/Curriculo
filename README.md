# 📌 Portfólio - Matheus Fernando

Portfólio profissional desenvolvido em **React**, com arquitetura **Full Stack**, integrando frontend moderno e backend próprio para envio de mensagens via Telegram.

---

## 🚀 Sobre o Projeto

Aplicação web responsiva criada para centralizar informações profissionais, projetos e formas de contato em um único ambiente.

O sistema foi estruturado para ser simples de manter, escalável e seguro.

---

## 🏗 Arquitetura

Frontend → React  
Backend → Node.js + Express  
Integração → Telegram Bot API  

---

## 🔔 Sistema de Contato

O formulário da página **Contato** envia os dados para um backend próprio, que:

- Valida as informações recebidas
- Processa os dados
- Envia notificação automática para o Telegram via Bot API

### Fluxo de funcionamento

Usuário → Frontend → API `/api/send-message` → Telegram

---

## 🔐 Segurança

- Token do Telegram protegido via variáveis de ambiente
- Nenhuma credencial exposta no frontend
- Validação de dados no backend
- Estrutura preparada para produção

---

## ⚡ Tecnologias Utilizadas

### Frontend
- React
- React Router
- Bootstrap Icons
- CSS Responsivo

### Backend
- Node.js
- Express
- Axios
- dotenv
- Telegram Bot API

---

## 🌍 Deploy

Frontend: Vercel ou Netlify  
Backend: Render, Railway, VPS ou servidor próprio  

---

## 👨‍💻 Autor

**Matheus Fernando Ribeiro Martins**  
GitHub: https://github.com/Matheus-Fernando-br  
LinkedIn: https://www.linkedin.com/in/matheus-fernando-  