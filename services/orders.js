const db = require('./db');

async function addOrder(orderStatus, menuItems, restaurantTable) {
  const result = await db.query(
    `INSERT INTO orders (orderStatus, menuItems, created_at, updated_at, restaurantTable) VALUES (?, ?, NOW(), NOW(), ?)`,
    [orderStatus, menuItems, restaurantTable]
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
    `SELECT orderID, orderStatus, menuItems, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at, DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%s') as updated_at, restaurantTable FROM orders WHERE orderID = ?`,
    [orderID]
  );

  return data[0];
}

async function updateOrder(orderID, orderStatus, menuItems, restaurantTable) {
  const result = await db.query(
    `UPDATE orders SET orderStatus = ?, menuItems = ?, updated_at = NOW(), restaurantTable = ? WHERE orderID = ?`,
    [orderStatus, menuItems, restaurantTable, orderID]
  );

  return result;
}

async function getAllOrders() {
  const data = await db.query(
    `SELECT orderID, orderStatus, menuItems, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at, DATE_FORMAT(updated_at, '%Y-%m-%d %H:%i:%s') as updated_at, restaurantTable FROM orders ORDER BY created_at DESC`
  );

  return data;
}

async function getFullOrder(orderID) {
  const data = await db.query(
    `SELECT menu_item.itemName ,menu_item.description ,menu_item.calories ,menu_item.category ,order_item.itemQuantity ,menu_item.price ,orders.orderStatus ,orders.restaurantTable ,orders.created_at ,orders.updated_at FROM menu_item JOIN order_item ON menu_item.itemID = order_item.itemID JOIN orders ON order_item.orderID = orders.orderID WHERE order_item.orderID = ?`,
    [orderID]
  );

  return data;
}

module.exports = {
  addOrder,
  deleteOrder,
  getOrder,
  updateOrder,
  getAllOrders,
  getFullOrder,
};
