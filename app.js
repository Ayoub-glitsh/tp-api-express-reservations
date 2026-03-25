const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;

// Données simulées
let reservations = [
  { id: 1, client: "Ahmed", chambre: "101" },
  { id: 2, client: "Sara", chambre: "202" }
];

// Route principale (évite "Cannot GET /")
app.get("/", (req, res) => {
  res.send("API de gestion des réservations 🚀");
});

//  Recherche avec req.query
app.get("/search", (req, res) => {
  const client = req.query.client || "";

  const result = reservations.filter(r =>
    r.client.toLowerCase().includes(client.toLowerCase())
  );

  res.json(result);
});

//  Récupérer une réservation par ID (req.params)
app.get("/reservations/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const reservation = reservations.find(r => r.id === id);

  if (!reservation) {
    return res.status(404).json({ message: "Non trouvée" });
  }

  res.json(reservation);
});

//  Ajouter une réservation (req.body)
app.post("/reservations", (req, res) => {
  const { client, chambre } = req.body;

  if (!client || !chambre) {
    return res.status(400).json({
      message: "Champs obligatoires manquants"
    });
  }

  const newReservation = {
    id: reservations.length + 1,
    client,
    chambre
  };

  reservations.push(newReservation);

  res.status(201).json(newReservation);
});

//  Lire les headers
app.get("/info", (req, res) => {
  const userAgent = req.get("User-Agent");

  res.json({
    message: "Informations client",
    navigateur: userAgent
  });
});

//  send vs json
app.get("/test-send", (req, res) => {
  res.send("Message simple");
});

app.get("/test-json", (req, res) => {
  res.json({ message: "Réponse JSON" });
});

//  Erreur serveur
app.get("/error", (req, res) => {
  res.status(500).json({
    message: "Erreur serveur"
  });
});

//  Modifier une réservation (PUT)
app.put("/reservations/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const reservation = reservations.find(r => r.id === id);

  if (!reservation) {
    return res.status(404).json({ message: "Non trouvée" });
  }

  reservation.client = req.body.client || reservation.client;
  reservation.chambre = req.body.chambre || reservation.chambre;

  res.json(reservation);
});

// Supprimer une réservation (DELETE)
app.delete("/reservations/:id", (req, res) => {
  const id = parseInt(req.params.id);

  reservations = reservations.filter(r => r.id !== id);

  res.json({ message: "Supprimée" });
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});