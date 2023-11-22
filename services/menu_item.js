const db = require('./db');

async function addMenuItem(menuItem, description, price, itemImage, category, isDeleted, calories) {
  const result = await db.query(
    `INSERT INTO menu_item (itemName, description, price, itemImage, category, isDeleted, calories) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [menuItem, description, price, itemImage, category, isDeleted, calories]
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

async function updateMenuItem(itemID, menuItem, description, price, itemImage, category, isDeleted, calories) {
  const result = await db.query(
    `UPDATE menu_item SET itemName = ?, description = ?, price = ?, itemImage = ?, category = ?, isDeleted = ?, calories = ? WHERE itemID = ? AND isDeleted = 0`,
    [menuItem, description, price, itemImage, category, isDeleted, calories, itemID]
  );

  return result;
}

async function getAllMenuItems() {
  const data = await db.query(
    `SELECT * FROM menu_item WHERE isDeleted = 0`
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
