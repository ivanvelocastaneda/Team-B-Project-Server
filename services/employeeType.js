const db = require('./db');

async function addEmployeeType(typeName) {
  const result = await db.query(
    `INSERT INTO employeeType (typeName) VALUES (?)`,
    [typeName]
  );

  return result;
}

async function deleteEmployeeType(typeID) {
  const result = await db.query(
    `DELETE FROM employeeType WHERE typeID = ?`,
    [typeID]
  );

  return result;
}

async function getEmployeeType(typeID) {
  const data = await db.query(
    `SELECT * FROM employeeType WHERE typeID = ?`,
    [typeID]
  );

  return data[0];
}

async function updateEmployeeType(typeID, typeName) {
  const result = await db.query(
    `UPDATE employeeType SET typeName = ? WHERE typeID = ?`,
    [typeName, typeID]
  );

  return result;
}

async function getAllEmployeeTypes() {
  const data = await db.query(
    `SELECT * FROM employeeType`
  );

  return data;
}

module.exports = {
  addEmployeeType,
  deleteEmployeeType,
  getEmployeeType,
  updateEmployeeType,
  getAllEmployeeTypes
};
