const db = require('./db');

async function addReservation(reservationDetails) {
  const { name, customerID, dateTime, numPeople, tableSelection } = reservationDetails;
  const result = await db.query(
    `INSERT INTO reservation (name, customerID, dateTime, numPeople, tableSelection) VALUES (?, ?, ?, ?, ?)`,
    [name, customerID, dateTime, numPeople, tableSelection]
  );

  return result;
}

async function deleteReservation(reservationID) {
  const result = await db.query(
    `DELETE FROM reservation WHERE reservationID = ?`,
    [reservationID]
  );

  return result;
}

async function getReservation(reservationID) {
  const data = await db.query(
    `SELECT * FROM reservation WHERE reservationID = ?`,
    [reservationID]
  );

  return data[0];
}

async function updateReservation(reservationID, reservationDetails) {
  const { name, customerID, dateTime, numPeople, tableSelection } = reservationDetails;
  const result = await db.query(
    `UPDATE reservation SET name = ?, customerID = ?, dateTime = ?, numPeople = ?, tableSelection = ? WHERE reservationID = ?`,
    [name, customerID, dateTime, numPeople, tableSelection, reservationID]
  );

  return result;
}

async function getAllReservations() {
  const data = await db.query(
    `SELECT * FROM reservation`
  );

  return data;
}

module.exports = {
  addReservation,
  deleteReservation,
  getReservation,
  updateReservation,
  getAllReservations
};
