// On simule une base de données avec un tableau en mémoire
let reservations = [
  { id: 1, client: "Ahmed", chambre: "101" },
  { id: 2, client: "Sara", chambre: "202" }
];

class ReservationModel {
  static getAll() {
    return reservations;
  }

  static getById(id) {
    return reservations.find(r => r.id === id);
  }

  static search(clientName) {
    return reservations.filter(r =>
      r.client.toLowerCase().includes(clientName.toLowerCase())
    );
  }

  static create(client, chambre) {
    const newReservation = {
      // Génère un ID basé sur le max existant
      id: reservations.length ? Math.max(...reservations.map(r => r.id)) + 1 : 1,
      client,
      chambre
    };
    reservations.push(newReservation);
    return newReservation;
  }

  static update(id, data) {
    const reservation = this.getById(id);
    if (!reservation) return null;

    if (data.client) reservation.client = data.client;
    if (data.chambre) reservation.chambre = data.chambre;
    
    return reservation;
  }

  static delete(id) {
    const index = reservations.findIndex(r => r.id === id);
    if (index === -1) return false;
    
    reservations.splice(index, 1);
    return true;
  }
}

module.exports = ReservationModel;
