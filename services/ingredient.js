const db = require('./db');

async function addIngredient(ingredient) {
  const result = await db.query(
    `INSERT INTO ingredient (ingredientName) VALUES (?)`,
    [ingredient]
  );

  return result;
}

async function deleteIngredient(ingredientID) {
  const result = await db.query(
    `DELETE FROM ingredient WHERE ingredientID = ?`,
    [ingredientID]
  );

  return result;
}

async function getIngredient(ingredientID) {
  const data = await db.query(
    `SELECT * FROM ingredient WHERE ingredientID = ?`,
    [ingredientID]
  );

  return data[0];
}

async function updateIngredient(ingredientID, ingredientName) {
  const result = await db.query(
    `UPDATE ingredient SET ingredientName = ? WHERE ingredientID = ?`,
    [ingredientName, ingredientID]
  );

  return result;
}

async function getAllIngredients() {
  const data = await db.query(
    `SELECT * FROM ingredient`
  );

  return data;
}

module.exports = {
  addIngredient,
  deleteIngredient,
  getIngredient,
  updateIngredient,
  getAllIngredients
};