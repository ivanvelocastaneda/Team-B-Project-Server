const db = require('./db');

async function addPaymentMethod(methodName) {
  const result = await db.query(
    `INSERT INTO payment_methods (methodName) VALUES (?)`,
    [methodName]
  );

  return result;
}

async function deletePaymentMethod(paymentMethodID) {
  const result = await db.query(
    `DELETE FROM payment_methods WHERE paymentMethodID = ?`,
    [paymentMethodID]
  );

  return result;
}

async function getPaymentMethod(paymentMethodID) {
  const data = await db.query(
    `SELECT * FROM payment_methods WHERE paymentMethodID = ?`,
    [paymentMethodID]
  );

  return data[0];
}

async function updatePaymentMethod(paymentMethodID, methodName) {
  const result = await db.query(
    `UPDATE payment_methods SET methodName = ? WHERE paymentMethodID = ?`,
    [methodName, paymentMethodID]
  );

  return result;
}

async function getAllPaymentMethods() {
  const data = await db.query(
    `SELECT * FROM payment_methods`
  );

  return data;
}

module.exports = {
  addPaymentMethod,
  deletePaymentMethod,
  getPaymentMethod,
  updatePaymentMethod,
  getAllPaymentMethods
};
