const db = require('./db');
// const helper = require('../helper');
const config = require('../config');

async function getAllAccounts(){
  const data = await db.query(
    `SELECT * FROM account`
  );

  return data;
}

async function getAccount(accountType){
  const data = await db.query(
    `SELECT * FROM account WHERE accountType = ?`,
    [accountType]
  );

  return data[0];
}

async function addAccount(account){
  const result = await db.query(
    `INSERT INTO account (accountType, firstName, lastName, street, city, state, zip, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [account.accountType, account.firstName, account.lastName, account.street, account.city, account.state, account.zip, account.created_at, account.updated_at]
  );

  return result;
}

async function updateAccount(accountType, updatedAccount){
  const result = await db.query(
    `UPDATE account SET firstName = ?, lastName = ?, street = ?, city = ?, state = ?, zip = ?, updated_at = ? WHERE accountType = ?`,
    [updatedAccount.firstName, updatedAccount.lastName, updatedAccount.street, updatedAccount.city, updatedAccount.state, updatedAccount.zip, updatedAccount.updated_at, accountType]
  );

  return result;
}

async function deleteAccount(accountType){
  const result = await db.query(
    `DELETE FROM account WHERE accountType = ?`,
    [accountType]
  );

  return result;
}

module.exports = {
  getAllAccounts,
  getAccount,
  addAccount,
  updateAccount,
  deleteAccount
}

