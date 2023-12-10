const db = require('./db');

async function addEmployee(employee) {
  const result = await db.query(
    `INSERT INTO employee (pin, typeID, firstName, lastName, street, city, state, zip, clockedIn, hourlyRate, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [employee.pin, employee.typeID, employee.firstName, employee.lastName, employee.street, employee.city, employee.state, employee.zip, employee.clockedIn, employee.hourlyRate, employee.created_at, employee.updated_at]
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
    // `SELECT * FROM employee WHERE employeeID = ?`,
    `SELECT employeeID, pin, typeID, firstName, lastName, street, city, state, zip, clockedIn, hourlyRate, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at, DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%s') as updated_at, isDeleted FROM employee WHERE employeeID = ? AND isDeleted = 0`,
    [employeeID]
  );

  return data[0];
}

async function updateEmployee(employeeID, employee) {
  const result = await db.query(
    `UPDATE employee SET pin = ?, typeID = ?, firstName = ?, lastName = ?, street = ?, city = ?, state = ?, zip = ?, clockedIn = ?, hourlyRate = ?, created_at = ?, updated_at = ?, isDeleted = ? WHERE employeeID = ?`,
    [employee.pin, employee.typeID, employee.firstName, employee.lastName, employee.street, employee.city, employee.state, employee.zip, employee.clockedIn, employee.hourlyRate, employee.created_at, employee.updated_at, employee.isDeleted, employeeID]
  );

  return result;
}

async function getAllEmployees() {
  const data = await db.query(
    `SELECT employeeID, pin, typeID, firstName, lastName, street, city, state, zip, clockedIn, hourlyRate, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at, DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%s') as updated_at, isDeleted FROM employee WHERE isDeleted = 0`
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
