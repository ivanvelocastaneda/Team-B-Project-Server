const db = require('./db');

async function addItemIngredient(itemID, ingredientID) {
  const result = await db.query(
    `INSERT INTO item_ingredient (itemID, ingredientID) VALUES (?, ?)`,
    [itemID, ingredientID]
  );

  return result;
}

async function deleteItemIngredient(itemID, ingredientID) {
  const result = await db.query(
    `DELETE FROM item_ingredient WHERE itemID = ? AND ingredientID = ?`,
    [itemID, ingredientID]
  );

  return result;
}

async function getItemIngredient(itemID) {
  const data = await db.query(
    `SELECT * FROM item_ingredient WHERE itemID = ?`,
    [itemID]
  );

  return data;
}

async function getAllItemIngredients() {
  const data = await db.query(
    `SELECT * FROM item_ingredient`
  );

  return data;
}

module.exports = {
  addItemIngredient,
  deleteItemIngredient,
  getItemIngredient,
  getAllItemIngredients
};
