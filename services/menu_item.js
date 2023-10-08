const db = require('./db');

async function addMenuItem(menuItem, description, price) {
  const result = await db.query(
    `INSERT INTO menu_item (itemName, description, price) VALUES (?, ?, ?)`,
    [menuItem, description, price]
  );

  return result;
}

async function deleteMenuItem(itemID) {
  const result = await db.query(
    `DELETE FROM menu_item WHERE itemID = ?`,
    [itemID]
  );

  return result;
}

async function getMenuItem(itemID) {
  const data = await db.query(
    `SELECT * FROM menu_item WHERE itemID = ?`,
    [itemID]
  );

  return data[0];
}

async function updateMenuItem(itemID, menuItem, description, price) {
  const result = await db.query(
    `UPDATE menu_item SET itemName = ?, description = ?, price = ? WHERE itemID = ?`,
    [menuItem, description, price, itemID]
  );

  return result;
}

async function getAllMenuItems() {
  const data = await db.query(
    `SELECT * FROM menu_item`
  );

  return data;
}

module.exports = {
  addMenuItem,
  deleteMenuItem,
  getMenuItem,
  updateMenuItem,
  getAllMenuItems
};
