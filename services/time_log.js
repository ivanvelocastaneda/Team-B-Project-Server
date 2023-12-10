const db = require('./db');

async function addTimeLog(employeeID, timeClockedIn, timeClockedOut) {
  const result = await db.query(
    `INSERT INTO time_log (employeeID, timeClockedIn, timeClockedOut) VALUES (?, ?, ?)`,
    [employeeID, timeClockedIn, timeClockedOut]
  );

  return result;
}

async function deleteTimeLog(id) {
  const result = await db.query(
    `DELETE FROM time_log WHERE id = ?`,
    [id]
  );

  return result;
}

async function getTimeLog(id) {
  const data = await db.query(
    `SELECT employeeID, DATE_FORMAT(timeClockedIn, '%Y-%m-%d %H:%i:%s') as timeClockedIn, DATE_FORMAT(timeClockedOut, '%Y-%m-%d %H:%i:%s') as timeClockedOut FROM time_log WHERE id = ?`,
    [id]
  );

  return data[0];
}

async function updateTimeLog(id, timeClockedIn, timeClockedOut) {
  const result = await db.query(
    `UPDATE time_log SET timeClockedIn = ?, timeClockedOut = ? WHERE id = ?`,
    [timeClockedIn, timeClockedOut, id]
  );

  return result;
}

async function getAllTimeLogs() {
  const data = await db.query(
    `SELECT employeeID, DATE_FORMAT(timeClockedIn, '%Y-%m-%d %H:%i:%s') as timeClockedIn, DATE_FORMAT(timeClockedOut, '%Y-%m-%d %H:%i:%s') as timeClockedOut FROM time_log`
  );

  return data;
}

module.exports = {
  addTimeLog,
  deleteTimeLog,
  getTimeLog,
  updateTimeLog,
  getAllTimeLogs
};
