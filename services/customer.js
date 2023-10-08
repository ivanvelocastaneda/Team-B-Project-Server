const db = require('./db');

async function addCustomer(customerData) {
  const result = await db.query(
    `INSERT INTO customer (username, password, firstName, lastName, street, city, state, zip, rewardPoints, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [customerData.username, customerData.password, customerData.firstName, customerData.lastName, customerData.street, customerData.city, customerData.state, customerData.zip, customerData.rewardPoints, customerData.created_at, customerData.updated_at]
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
    `SELECT * FROM customer WHERE customerID = ?`,
    [customerID]
  );

  return data[0];
}

async function updateCustomer(customerID, customerData) {
  const result = await db.query(
    `UPDATE customer SET username = ?, password = ?, firstName = ?, lastName = ?, street = ?, city = ?, state = ?, zip = ?, rewardPoints = ?, created_at = ?, updated_at = ? WHERE customerID = ?`,
    [customerData.username, customerData.password, customerData.firstName, customerData.lastName, customerData.street, customerData.city, customerData.state, customerData.zip, customerData.rewardPoints, customerData.created_at, customerData.updated_at, customerID]
  );

  return result;
}

async function getAllCustomers() {
  const data = await db.query(
    `SELECT * FROM customer`
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
