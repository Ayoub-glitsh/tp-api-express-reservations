const Reservation = require('../models/reservation.model');

// Récupérer toutes les réservations, ou filtrer par nom de client
exports.getAllReservations = (req, res) => {
  if (req.query.client) {
    const result = Reservation.search(req.query.client);
    return res.json(result);
  }
  res.json(Reservation.getAll());
};

// Récupérer une réservation via son ID
exports.getReservationById = (req, res) => {
  const id = parseInt(req.params.id);
  const reservation = Reservation.getById(id);

  if (!reservation) {
    return res.status(404).json({ message: "Réservation non trouvée" });
  }

  res.json(reservation);
};

// Créer une nouvelle réservation
exports.createReservation = (req, res) => {
  const { client, chambre } = req.body;

  if (!client || !chambre) {
    return res.status(400).json({ message: "Champs 'client' et 'chambre' obligatoires" });
  }

  const newReservation = Reservation.create(client, chambre);
  res.status(201).json(newReservation);
};

// Modifier une réservation existante
exports.updateReservation = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedReservation = Reservation.update(id, req.body);

  if (!updatedReservation) {
    return res.status(404).json({ message: "Réservation non trouvée" });
  }

  res.json(updatedReservation);
};

// Supprimer une réservation
exports.deleteReservation = (req, res) => {
  const id = parseInt(req.params.id);
  const isDeleted = Reservation.delete(id);

  if (!isDeleted) {
    return res.status(404).json({ message: "Réservation non trouvée" });
  }

  res.json({ message: "Réservation supprimée avec succès" });
};
