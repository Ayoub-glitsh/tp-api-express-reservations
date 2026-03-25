const express = require("express");
const app = express();
const reservationRoutes = require('./routes/reservation.routes');
const loggerMiddleware = require('./middlewares/logger.middleware');

app.use(express.json());

// Middleware personnalisé pour logger chaque requête
app.use(loggerMiddleware);

const PORT = 3000;

// Route principale
app.get("/", (req, res) => {
  res.send("API de gestion des réservations MVC ");
});

// Montage du routeur principal des réservations
// Toutes les routes définies dans reservation.routes.js seront préfixées par /reservations
app.use('/reservations', reservationRoutes);

// --- Routes annexes ---
// Lire les headers
app.get("/info", (req, res) => {
  const userAgent = req.get("User-Agent");
  res.json({
    message: "Informations client",
    navigateur: userAgent
  });
});

// tests send vs json
app.get("/test-send", (req, res) => {
  res.send("Message simple");
});

app.get("/test-json", (req, res) => {
  res.json({ message: "Réponse JSON" });
});

// Erreur serveur
app.get("/error", (req, res) => {
  res.status(500).json({ message: "Erreur serveur" });
});

// Conserver l'ancienne URL /search pour la compatibilité avec le README
app.get("/search", (req, res) => {
  const Reservation = require('./models/reservation.model');
  const client = req.query.client || "";
  res.json(Reservation.search(client));
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});