const db = require('./db');

async function addCustomer(customerData) {
  const result = await db.query(
    `INSERT INTO customer (username, password, firstName, lastName, street, city, state, zip, rewardPoints, created_at, updated_at, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [customerData.username, customerData.password, customerData.firstName, customerData.lastName, customerData.street, customerData.city, customerData.state, customerData.zip, customerData.rewardPoints, customerData.created_at, customerData.updated_at, customerData.email]
  );

  return result;
}

async function deleteCustomer(customerID) {
  const result = await db.query(
    `DELETE FROM customer WHERE customerID = ?`,
    [customerID]
  );

  return result;
}

async function getCustomer(customerID) {
  const data = await db.query(
    `SELECT username, password, firstName, lastName, street, city, state, zip, rewardPoints, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at, DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%s') as updated_at FROM customer WHERE customerID = ?`,
    [customerID]
  );

  return data[0];
}

async function updateCustomer(customerID, customerData) {
  const result = await db.query(
    `UPDATE customer SET username = ?, password = ?, firstName = ?, lastName = ?, street = ?, city = ?, state = ?, zip = ?, rewardPoints = ?, created_at = ?, updated_at = ?, email = ? WHERE customerID = ?`,
    [customerData.username, customerData.password, customerData.firstName, customerData.lastName, customerData.street, customerData.city, customerData.state, customerData.zip, customerData.rewardPoints, customerData.created_at, customerData.updated_at, customerData.email, customerID]
  );

  return result;
}

async function getAllCustomers() {
  const data = await db.query(
    `SELECT username, password, firstName, lastName, street, city, state, zip, rewardPoints, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at, DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%s') as updated_at FROM customer`
  );

  return data;
}

module.exports = {
  addCustomer,
  deleteCustomer,
  getCustomer,
  updateCustomer,
  getAllCustomers
};
