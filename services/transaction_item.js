const db = require('./db');

async function addTransactionItem(transactionID, itemID) {
  const result = await db.query(
    `INSERT INTO transaction_item (transactionID, itemID) VALUES (?, ?)`,
    [transactionID, itemID]
  );

  return result;
}

async function deleteTransactionItem(transactionID, itemID) {
  const result = await db.query(
    `DELETE FROM transaction_item WHERE transactionID = ? AND itemID = ?`,
    [transactionID, itemID]
  );

  return result;
}

async function getTransactionItemsByTransactionID(transactionID) {
  const data = await db.query(
    `SELECT * FROM transaction_item WHERE transactionID = ?`,
    [transactionID]
  );

  return data;
}

module.exports = {
  addTransactionItem,
  deleteTransactionItem,
  getTransactionItemsByTransactionID
};
