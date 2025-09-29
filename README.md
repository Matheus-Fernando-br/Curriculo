# 📌 Portfólio - Matheus Fernando

Este é um portfólio desenvolvido em **React** com o objetivo de centralizar todas as informações profissionais em um só lugar, de forma fácil de editar e manter.

---

## 🚀 Como funciona

O projeto foi criado para ser **simples de atualizar**, sem precisar mexer em várias páginas ou componentes.
Toda a estrutura é alimentada a partir de **um único arquivo**:

📄 `src/editar/curriculo.js`

### 🔑 Estrutura principal

* **Dados pessoais** → nome, idade, região, CNH, idioma etc.
* **Sobre mim** → texto de apresentação.
* **Projetos** → lista de projetos com título, link, ícone e descrição.
* **Cursos** → cursos realizados, com título, descrição e ícone.
* **Experiências** → experiências profissionais com ano, cargo e descrição.
* **Contatos** → email, telefone, GitHub, LinkedIn, WhatsApp etc.

Exemplo (trecho do `curriculo.js`):

```js
export default function curriculo() {
  return {
    nome: "Matheus Fernando Ribeiro Martins",
    idade: 25,
    cnh: "B",
    idioma: "Português e Inglês",
    regiao: "Minas Gerais - Brasil",
    textoSobreMim: "Sou um desenvolvedor apaixonado por tecnologia...",
    projetos: [
      {
        title: "Meu Projeto",
        link: "https://github.com/usuario/projeto",
        icon: "bi-github",
        details: "Descrição do projeto."
      }
    ],
    // ... e assim por diante
  };
}
```

---

## 🖼️ Imagens

Todas as imagens usadas no portfólio ficam dentro da pasta:

📂 `public/Images/`

Exemplo:

* `Foto-Matheus.jpg` → foto de perfil.
* `Logo.jpg` → favicon e pré-visualização nas redes sociais.

👉 Basta substituir os arquivos mantendo o **mesmo nome** que eles já atualizam automaticamente no site.

---

## 📄 Páginas

As páginas (`Home`, `Sobre`, `Resumo`, `Contato`, `Sidebar`, `Header`) **não precisam ser alteradas**.
Elas **importam os dados direto do `curriculo.js`**, ou seja:

* Mudou no `curriculo.js` → reflete em todas as páginas automaticamente.

Exemplo no `Header.jsx`:

```js
import curriculo from "../editar/curriculo";

const dados = curriculo();

<h2>{dados.nome}</h2>
```

---

## ⚡ Tecnologias

* [React](https://react.dev/)
* [React Router](https://reactrouter.com/)
* [Bootstrap Icons](https://icons.getbootstrap.com/)
* CSS puro (responsivo e customizado)

---

## 🌐 Publicação

Este projeto pode ser publicado facilmente na **Vercel** ou **Netlify**:

### Vercel (recomendado)

1. Suba o projeto para o **GitHub**.
2. Acesse [Vercel](https://vercel.com/).
3. Clique em **New Project** → **Import GitHub Repository**.
4. Selecione este repositório.
5. Deploy automático em segundos 🚀

---

## ✨ Como editar

1. Abra `src/editar/curriculo.js`.
2. Atualize os dados desejados (nome, idade, projetos, cursos, experiências, contatos).
3. Se precisar trocar imagens, substitua em `public/Images/` mantendo o nome igual.
4. Salve → tudo reflete no site automaticamente.

---

## 📌 Autor

👨‍💻 **Matheus Fernando Ribeiro Martins**
🔗 [GitHub](https://github.com/Matheus-Fernando-br)
🔗 [LinkedIn](https://www.linkedin.com/in/matheus-fernando-)

---
