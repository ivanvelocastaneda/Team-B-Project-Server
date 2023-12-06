const express = require('express');
const router = express.Router();
const custom = require('../services/custom');

router.get('/', async function(req, res, next) {
    try {
      res.json(await custom.getLatestOrders());
    } catch (err) {
      res.status(500).json({ error: `Error while getting all orders: ${err.message}` });
      next(err);
    }
  });

  router.get('/:orderID', async function(req, res, next) {
    try {
      const { orderID } = req.params;
      res.json(await custom.getLatestOrder(orderID));
    } catch (err) {
      res.status(500).json({ error: `Error while getting order: ${err.message}` });
      next(err);
    }
  });

  module.exports = router;