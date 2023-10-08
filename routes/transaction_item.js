const express = require('express');
const router = express.Router();
const transactionItem = require('../services/transaction_item');

/* POST new transaction item. */
router.post('/', async function(req, res, next) {
  try {
    const { transactionID, itemID } = req.body;
    res.json(await transactionItem.addTransactionItem(transactionID, itemID));
  } catch (err) {
    res.status(500).json({ error: `Error while adding transaction item: ${err.message}` });
    next(err);
  }
});

/* DELETE transaction item by transactionID and itemID. */
router.delete('/:transactionID/:itemID', async function(req, res, next) {
  try {
    const { transactionID, itemID } = req.params;
    res.json(await transactionItem.deleteTransactionItem(transactionID, itemID));
  } catch (err) {
    res.status(500).json({ error: `Error while deleting transaction item: ${err.message}` });
    next(err);
  }
});

/* GET transaction items by transactionID. */
router.get('/:transactionID', async function(req, res, next) {
  try {
    const { transactionID } = req.params;
    res.json(await transactionItem.getTransactionItemsByTransactionID(transactionID));
  } catch (err) {
    res.status(500).json({ error: `Error while getting transaction items: ${err.message}` });
    next(err);
  }
});

module.exports = router;
