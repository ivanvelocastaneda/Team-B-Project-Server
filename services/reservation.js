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
    `SELECT reservationID, name, customerID, DATE_FORMAT(dateTime, '%Y-%m-%d %H:%i:%s') as dateTime, numPeople, tableSelection, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at, DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%s') as updated_at FROM reservation WHERE reservationID = ?`,
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
    `SELECT reservationID, name, customerID, DATE_FORMAT(dateTime, '%Y-%m-%d %H:%i:%s') as dateTime, numPeople, tableSelection, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at, DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%s') as updated_at FROM reservation`
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
