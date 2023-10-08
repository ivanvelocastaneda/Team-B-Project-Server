const db = require('./db');

async function addOrderItem(orderID, itemID, itemQuantity) {
  const result = await db.query(
    `INSERT INTO order_item (orderID, itemID, itemQuantity) VALUES (?, ?, ?)`,
    [orderID, itemID, itemQuantity]
  );

  return result;
}

async function deleteOrderItem(orderID, itemID) {
  const result = await db.query(
    `DELETE FROM order_item WHERE orderID = ? AND itemID = ?`,
    [orderID, itemID]
  );

  return result;
}

async function getOrderItem(orderID, itemID) {
  const data = await db.query(
    `SELECT * FROM order_item WHERE orderID = ? AND itemID = ?`,
    [orderID, itemID]
  );

  return data[0];
}

async function updateOrderItem(orderID, itemID, itemQuantity) {
  const result = await db.query(
    `UPDATE order_item SET itemQuantity = ? WHERE orderID = ? AND itemID = ?`,
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
