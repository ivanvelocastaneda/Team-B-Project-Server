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

module.exports = {
  getAllAccounts,
  getAccount
}
