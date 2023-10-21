const db = require('./db');

async function addTransaction(transaction) {
  const result = await db.query(
    `INSERT INTO transaction (customerID, employeeID, orderID, methodOfPayment, timeStamp, subtotal, tax, tip, transTotal) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [transaction.customerID, transaction.employeeID, transaction.orderID, transaction.methodOfPayment, transaction.timeStamp, transaction.subtotal, transaction.tax, transaction.tip, transaction.transTotal]
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

async function updateTransaction(transactionID, customerID, employeeID, orderID, methodOfPayment, timeStamp, subtotal, tax, tip, transTotal) {
  const result = await db.query(
    `UPDATE transaction SET customerID = ?, employeeID = ?, orderID = ?, methodOfPayment = ?, timeStamp = ?, subtotal = ?, tax = ?, tip = ?, transTotal = ? WHERE transactionID = ?`,
    [customerID, employeeID, orderID, methodOfPayment, timeStamp, subtotal, tax, tip, transTotal, transactionID]
  );
  `UPDATE time_log SET timeClockedIn = ?, timeClockedOut = ? WHERE id = ?`,
  [timeClockedIn, timeClockedOut, id]

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
