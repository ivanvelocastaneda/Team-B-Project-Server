const db = require('./db');

async function addOrder(orderStatus, menuItems) {
  const result = await db.query(
    `INSERT INTO orders (orderStatus, menuItems, created_at, updated_at) VALUES (?, ?, NOW(), NOW())`,
    [orderStatus, menuItems]
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
    `SELECT orderID, orderStatus, menuItems, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at, DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%s') as updated_at FROM orders WHERE orderID = ?`,
    [orderID]
  );

  return data[0];
}

async function updateOrder(orderID, orderStatus, menuItems) {
  const result = await db.query(
    `UPDATE orders SET orderStatus = ?, menuItems = ?, updated_at = NOW() WHERE orderID = ?`,
    [orderStatus, menuItems, orderID]
  );

  return result;
}

async function getAllOrders() {
  const data = await db.query(
    `SELECT orderID, orderStatus, menuItems, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at, DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%s') as updated_at FROM orders`
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
