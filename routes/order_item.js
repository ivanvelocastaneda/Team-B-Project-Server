const express = require('express');
const router = express.Router();
const orderItem = require('../services/order_item');

// /* POST new order item. */
// router.post('/', async function(req, res, next) {
//   try {
//     const { orderID, itemID, itemQuantity } = req.body;
//     res.json(await orderItem.addOrderItem(orderID, itemID, itemQuantity));
//   } catch (err) {
//     res.status(500).json({ error: `Error while adding order item: ${err.message}` });
//     next(err);
//   }
// });

/* POST new multiple order items. */
router.post('/', async function(req, res, next) {
  try {
    // Expecting an array of order items
    if (Array.isArray(req.body)) {
      res.json(await orderItem.addMultipleOrderItems(req.body));
    } else {
      // Single order item (existing behavior)
      const { orderID, itemID, itemQuantity } = req.body;
      res.json(await orderItem.addOrderItem(orderID, itemID, itemQuantity));
    }
  } catch (err) {
    res.status(500).json({ error: `Error while adding order items: ${err.message}` });
    next(err);
  }
});

/* DELETE order item by orderID and itemID. */
router.delete('/:orderID/:itemID', async function(req, res, next) {
  try {
    const { orderID, itemID } = req.params;
    res.json(await orderItem.deleteOrderItem(orderID, itemID));
  } catch (err) {
    res.status(500).json({ error: `Error while deleting order item: ${err.message}` });
    next(err);
  }
});

/* DELETE all order items by orderID. */
router.delete('/:orderID', async function(req, res, next) {
  try {
    const { orderID } = req.params;
    res.json(await orderItem.deleteOrderItems(orderID));
  } catch (err) {
    res.status(500).json({ error: `Error while deleting order item: ${err.message}` });
    next(err);
  }
});

/* GET order items for orderID */
router.get('/:orderID', async function(req, res, next) {
  try {
    const { orderID } = req.params;
    res.json(await orderItem.getOrderItem(orderID));
  } catch (err) {
    res.status(500).json({ error: `Error while getting order item: ${err.message}` });
    next(err);
  }
});

/* GET order item by orderID and itemID. */
router.get('/:orderID/:itemID', async function(req, res, next) {
  try {
    const { orderID, itemID } = req.params;
    res.json(await orderItem.getOrderItem(orderID, itemID));
  } catch (err) {
    res.status(500).json({ error: `Error while getting order item: ${err.message}` });
    next(err);
  }
});

/* PUT update order item by orderID and itemID. */
router.put('/:orderID/:itemID', async function(req, res, next) {
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
