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

async function deleteOrderItems(orderID) {
  const result = await db.query(
    `DELETE FROM order_item WHERE orderID = ?`,
    [orderID]
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

async function getOrderItem(orderID) {
  const data = await db.query(
    `SELECT * FROM order_item WHERE orderID = ?`,
    [orderID]
  );

  return data;
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

// async function addMultipleOrderItems(orderItems) {
//   const results = [];
//   for (const item of orderItems) {
//     const result = await db.query(
//       `INSERT INTO order_item (orderID, itemID, itemQuantity) VALUES (?, ?, ?)`,
//       [item.orderID, item.itemID, item.itemQuantity]
//     );
//     results.push(result);
//   }
//   return results;
// }

async function addMultipleOrderItems(orderItems) {
  const results = [];
  for (const item of orderItems) {
    const result = await db.query(
      `INSERT INTO order_item (orderID, itemID, itemQuantity) VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE itemQuantity = VALUES(itemQuantity)`,
      [item.orderID, item.itemID, item.itemQuantity]
    );
    results.push(result);
  }
  return results;
}


module.exports = {
  addOrderItem,
  deleteOrderItem,
  deleteOrderItems,
  getOrderItem,
  updateOrderItem,
  getAllOrderItems,
  addMultipleOrderItems
};
