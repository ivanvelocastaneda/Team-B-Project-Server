const express = require('express');
const router = express.Router();
const restaurantTable = require('../services/restaurant_table');

/* POST new table. */
router.post('/', async function(req, res, next) {
  try {
    const { tableStatus, orderID } = req.body;
    res.json(await restaurantTable.addTable(tableStatus, orderID));
  } catch (err) {
    res.status(500).json({ error: `Error while adding table: ${err.message}` });
    next(err);
  }
});

/* DELETE table by tableID. */
router.delete('/:tableID', async function(req, res, next) {
  try {
    const { tableID } = req.params;
    res.json(await restaurantTable.deleteTable(tableID));
  } catch (err) {
    res.status(500).json({ error: `Error while deleting table: ${err.message}` });
    next(err);
  }
});

/* GET table by tableID. */
router.get('/:tableID', async function(req, res, next) {
  try {
    const { tableID } = req.params;
    res.json(await restaurantTable.getTable(tableID));
  } catch (err) {
    res.status(500).json({ error: `Error while getting table: ${err.message}` });
    next(err);
  }
});

/* PUT update table by tableID. */
router.put('/:tableID', async function(req, res, next) {
  try {
    const { tableID } = req.params;
    const { tableStatus, orderID } = req.body;
    res.json(await restaurantTable.updateTable(tableID, tableStatus, orderID));
  } catch (err) {
    res.status(500).json({ error: `Error while updating table: ${err.message}` });
    next(err);
  }
});

/* GET all tables. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await restaurantTable.getAllTables());
  } catch (err) {
    res.status(500).json({ error: `Error while getting all tables: ${err.message}` });
    next(err);
  }
});

module.exports = router;
