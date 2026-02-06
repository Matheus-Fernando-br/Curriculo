import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/send-message", async (req, res) => {
  try {
    const { nome, email, assunto, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
      return res.status(400).json({ error: "Dados inválidos" });
    }

    const texto = `
📩 NOVO CONTATO DO SITE 📩
---------------------------
👤 Nome: ${nome}
📧 Email: ${email}
📌 Assunto: ${assunto}

💬 Mensagem:
${mensagem}
`;

    await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
      {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: texto,
      }
    );

    res.json({ success: true });

  } catch (error) {
    console.error(error.response?.data || error);
    res.status(500).json({ success: false });
  }
});

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Servidor rodando...");
});
