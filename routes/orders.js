const express = require('express');
const router = express.Router();
const orders = require('../services/orders');

/* POST new order. */
router.post('/', async function(req, res, next) {
  try {
    const { customerID, orderStatus } = req.body;
    res.json(await orders.addOrder(customerID, orderStatus));
  } catch (err) {
    res.status(500).json({ error: `Error while adding order: ${err.message}` });
    next(err);
  }
});

/* DELETE order by orderID. */
router.delete('/:orderID', async function(req, res, next) {
  try {
    const { orderID } = req.params;
    res.json(await orders.deleteOrder(orderID));
  } catch (err) {
    res.status(500).json({ error: `Error while deleting order: ${err.message}` });
    next(err);
  }
});

/* GET order by orderID. */
router.get('/:orderID', async function(req, res, next) {
  try {
    const { orderID } = req.params;
    res.json(await orders.getOrder(orderID));
  } catch (err) {
    res.status(500).json({ error: `Error while getting order: ${err.message}` });
    next(err);
  }
});

/* PUT update order by orderID. */
router.put('/:orderID', async function(req, res, next) {
  try {
    const { orderID } = req.params;
    const { orderStatus } = req.body;
    res.json(await orders.updateOrder(orderID, orderStatus));
  } catch (err) {
    res.status(500).json({ error: `Error while updating order: ${err.message}` });
    next(err);
  }
});

/* GET all orders. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await orders.getAllOrders());
  } catch (err) {
    res.status(500).json({ error: `Error while getting all orders: ${err.message}` });
    next(err);
  }
});

module.exports = router;
