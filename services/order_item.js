const db = require('./db');

async function addOrderItem(orderID, itemID, itemQuantity) {
  const result = await db.query(
    `INSERT INTO order_item (orderID, itemID, itemQuantity) VALUES (?, ?, ?)`,
    [orderID, itemID, itemQuantity]
  );

  return result;
}

async function deleteOrderItem(orderID) {
  const result = await db.query(
    `DELETE FROM order_item WHERE orderID = ?`,
    [orderID, itemID]
  );

  return result;
}

async function getOrderItem(orderID) {
  const data = await db.query(
    `SELECT * FROM order_item WHERE orderID = ?`,
    [orderID]
  );

  return data;
}

async function updateOrderItem(orderID, itemQuantity) {
  const result = await db.query(
    `UPDATE order_item SET itemQuantity = ? WHERE orderID = ?`,
    [itemQuantity, orderID, itemID]
  );

  return result;
}

async function getAllOrderItems() {
  const data = await db.query(
    `SELECT * FROM order_item`
  );

  return data;
}

module.exports = {
  addOrderItem,
  deleteOrderItem,
  getOrderItem,
  updateOrderItem,
  getAllOrderItems
};
