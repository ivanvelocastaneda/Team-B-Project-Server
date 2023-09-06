const express = require('express');
const router = express.Router();
const account = require('../services/account');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await account.getAllAccounts());
  } catch (err) {
    console.error(`Error while getting accounts `, err.message);
    next(err);
  }
});

/* GET account by accountType. */
router.get('/:accountType', async function(req, res, next) {
  try {
    const { accountType } = req.params;
    res.json(await account.getAccount(accountType));
  } catch (err) {
    console.error(`Error while getting account by accountType `, err.message);
    next(err);
  }
});

module.exports = router;