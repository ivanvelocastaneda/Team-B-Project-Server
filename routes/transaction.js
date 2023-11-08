const express = require('express');
const router = express.Router();
const transaction = require('../services/transaction');

/* POST new transaction. */
router.post('/', async function(req, res, next) {
  try {
    const transactionData = req.body;
    res.json(await transaction.addTransaction(transactionData));
  } catch (err) {
    res.status(500).json({ error: `Error while adding transaction: ${err.message}` });
    next(err);
  }
});

/* DELETE transaction by transactionID. */
router.delete('/:transactionID', async function(req, res, next) {
  try {
    const { transactionID } = req.params;
    res.json(await transaction.deleteTransaction(transactionID));
  } catch (err) {
    res.status(500).json({ error: `Error while deleting transaction: ${err.message}` });
    next(err);
  }
});

/* GET transaction by transactionID. */
router.get('/:transactionID', async function(req, res, next) {
  try {
    const { transactionID } = req.params;
    res.json(await transaction.getTransaction(transactionID));
  } catch (err) {
    res.status(500).json({ error: `Error while getting transaction: ${err.message}` });
    next(err);
  }
});

/* PUT update transaction by transactionID. */
router.put('/:transactionID', async function(req, res, next) {
  try {
    const { transactionID } = req.params;
    const transactionData = req.body;
    res.json(await transaction.updateTransaction(transactionID, transactionData));
  } catch (err) {
    res.status(500).json({ error: `Error while updating transaction: ${err.message}` });
    next(err);
  }
});

/* GET all transactions. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await transaction.getAllTransactions());
  } catch (err) {
    res.status(500).json({ error: `Error while getting all transactions: ${err.message}` });
    next(err);
  }
});

module.exports = router;
