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

/* POST new account. */
router.post('/', async function(req, res, next) {
  try {
    const newAccount = req.body;
    res.json(await account.addAccount(newAccount));
  } catch (err) {
    console.error(`Error while adding account `, err.message);
    next(err);
  }
});

/* PUT update account by accountType. */
router.put('/:accountType', async function(req, res, next) {
  try {
    const { accountType } = req.params;
    const updatedAccount = req.body;
    res.json(await account.updateAccount(accountType, updatedAccount));
  } catch (err) {
    console.error(`Error while updating account by accountType `, err.message);
    next(err);
  }
});

/* DELETE account by accountType. */
router.delete('/:accountType', async function(req, res, next) {
  try {
    const { accountType } = req.params;
    res.json(await account.deleteAccount(accountType));
  } catch (err) {
    console.error(`Error while deleting account by accountType `, err.message);
    next(err);
  }
});

module.exports = router;