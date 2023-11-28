const express = require('express');
const router = express.Router();
const orderItem = require('../services/order_item');

/* POST new order item. */
router.post('/', async function(req, res, next) {
  try {
    const { orderID, itemID, itemQuantity } = req.body;
    res.json(await orderItem.addOrderItem(orderID, itemID, itemQuantity));
  } catch (err) {
    res.status(500).json({ error: `Error while adding order item: ${err.message}` });
    next(err);
  }
});

/* DELETE order item by orderID and itemID. */
router.delete('/:orderID', async function(req, res, next) {
  try {
    const { orderID } = req.params;
    res.json(await orderItem.deleteOrderItem(orderID));
  } catch (err) {
    res.status(500).json({ error: `Error while deleting order item: ${err.message}` });
    next(err);
  }
});

/* GET order item by orderID and itemID. */
router.get('/:orderID', async function(req, res, next) {
  try {
    const { orderID } = req.params;
    res.json(await orderItem.getOrderItem(orderID));
  } catch (err) {
    res.status(500).json({ error: `Error while getting order item: ${err.message}` });
    next(err);
  }
});

/* PUT update order item by orderID and itemID. */
router.put('/:orderID', async function(req, res, next) {
  try {
    const { orderID, itemID } = req.params;
    const { itemQuantity } = req.body;
    res.json(await orderItem.updateOrderItem(orderID, itemID, itemQuantity));
  } catch (err) {
    res.status(500).json({ error: `Error while updating order item: ${err.message}` });
    next(err);
  }
});

/* GET all order items. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await orderItem.getAllOrderItems());
  } catch (err) {
    res.status(500).json({ error: `Error while getting all order items: ${err.message}` });
    next(err);
  }
});

module.exports = router;
