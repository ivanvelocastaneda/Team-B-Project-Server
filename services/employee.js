const db = require('./db');

async function addEmployee(employee) {
  const result = await db.query(
    `INSERT INTO employee (pin, typeID, firstName, lastName, street, city, state, zip, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [employee.pin, employee.typeID, employee.firstName, employee.lastName, employee.street, employee.city, employee.state, employee.zip, employee.created_at, employee.updated_at]
  );

  return result;
}

async function deleteEmployee(employeeID) {
  const result = await db.query(
    `DELETE FROM employee WHERE employeeID = ?`,
    [employeeID]
  );

  return result;
}

async function getEmployee(employeeID) {
  const data = await db.query(
    `SELECT * FROM employee WHERE employeeID = ?`,
    [employeeID]
  );

  return data[0];
}

async function updateEmployee(employeeID, employee) {
  const result = await db.query(
    `UPDATE employee SET pin = ?, typeID = ?, firstName = ?, lastName = ?, street = ?, city = ?, state = ?, zip = ?, created_at = ?, updated_at = ? WHERE employeeID = ?`,
    [employee.pin, employee.typeID, employee.firstName, employee.lastName, employee.street, employee.city, employee.state, employee.zip, employee.created_at, employee.updated_at, employeeID]
  );

  return result;
}

async function getAllEmployees() {
  const data = await db.query(
    `SELECT * FROM employee`
  );

  return data;
}

module.exports = {
  addEmployee,
  deleteEmployee,
  getEmployee,
  updateEmployee,
  getAllEmployees
};
