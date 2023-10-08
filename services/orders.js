const db = require('./db');

async function addOrder(customerID, orderStatus) {
  const result = await db.query(
    `INSERT INTO orders (customerID, orderStatus, created_at, updated_at) VALUES (?, ?, NOW(), NOW())`,
    [customerID, orderStatus]
  );

  return result;
}

async function deleteOrder(orderID) {
  const result = await db.query(
    `DELETE FROM orders WHERE orderID = ?`,
    [orderID]
  );

  return result;
}

async function getOrder(orderID) {
  const data = await db.query(
    `SELECT * FROM orders WHERE orderID = ?`,
    [orderID]
  );

  return data[0];
}

async function updateOrder(orderID, orderStatus) {
  const result = await db.query(
    `UPDATE orders SET orderStatus = ?, updated_at = NOW() WHERE orderID = ?`,
    [orderStatus, orderID]
  );

  return result;
}

async function getAllOrders() {
  const data = await db.query(
    `SELECT * FROM orders`
  );

  return data;
}

module.exports = {
  addOrder,
  deleteOrder,
  getOrder,
  updateOrder,
  getAllOrders
};
