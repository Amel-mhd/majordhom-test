const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connecté"))
  .catch((err) => console.error("Erreur MongoDB :", err));

const contactSchema = new mongoose.Schema(
  {
    civilite: String,
    nom: String,
    prenom: String,
    email: String,
    telephone: String,
    demandes: [String],
    message: String,
    date: String,
    heure: String,
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

app.post("/api/contact", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    res.status(201).json({
      message: "Demande enregistrée avec succès",
      contact,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de l'enregistrement",
      error: error.message,
    });
  }
});

app.get("/", (req, res) => {
  res.send("API Majordhom OK");
});

app.listen(5001, () => {
  console.log("Serveur lancé sur http://localhost:5001");
});