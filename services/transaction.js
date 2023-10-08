const db = require('./db');

async function addTransaction(transaction) {
  const result = await db.query(
    `INSERT INTO transaction (/* your columns here */) VALUES (?)`,
    [/* your values here */]
  );

  return result;
}

async function deleteTransaction(transactionID) {
  const result = await db.query(
    `DELETE FROM transaction WHERE transactionID = ?`,
    [transactionID]
  );

  return result;
}

async function getTransaction(transactionID) {
  const data = await db.query(
    `SELECT * FROM transaction WHERE transactionID = ?`,
    [transactionID]
  );

  return data[0];
}

async function updateTransaction(transactionID, /* other parameters */) {
  const result = await db.query(
    `UPDATE transaction SET /* your update logic here */ WHERE transactionID = ?`,
    [/* your values here */]
  );

  return result;
}

async function getAllTransactions() {
  const data = await db.query(
    `SELECT * FROM transaction`
  );

  return data;
}

module.exports = {
  addTransaction,
  deleteTransaction,
  getTransaction,
  updateTransaction,
  getAllTransactions
};
