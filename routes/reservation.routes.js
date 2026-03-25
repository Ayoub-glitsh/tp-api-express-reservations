const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation.controller');

// Récupérer toutes les réservations ou rechercher avec ?client=Nom
router.get('/', reservationController.getAllReservations);

// Récupérer une réservation par ID
router.get('/:id', reservationController.getReservationById);

// Ajouter une nouvelle réservation
router.post('/', reservationController.createReservation);

// Modifier une réservation existante
router.put('/:id', reservationController.updateReservation);

// Supprimer une réservation
router.delete('/:id', reservationController.deleteReservation);

module.exports = router;
