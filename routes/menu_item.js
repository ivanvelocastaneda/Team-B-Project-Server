const express = require('express');
const router = express.Router();
const menuItem = require('../services/menu_item');

/* POST new menu item. */
router.post('/', async function(req, res, next) {
  try {
    const { itemName, description, price, itemImage, category, isDeleted, calories } = req.body;
    res.json(await menuItem.addMenuItem(itemName, description, price, itemImage, category, isDeleted, calories));
  } catch (err) {
    res.status(500).json({ error: `Error while adding menu item: ${err.message}` });
    next(err);
  }
});

/* DELETE menu item by itemID. */
router.delete('/:itemID', async function(req, res, next) {
  try {
    const { itemID } = req.params;
    res.json(await menuItem.deleteMenuItem(itemID));
  } catch (err) {
    res.status(500).json({ error: `Error while deleting menu item: ${err.message}` });
    next(err);
  }
});

/* GET menu item by itemID. */
router.get('/:itemID', async function(req, res, next) {
  try {
    const { itemID } = req.params;
    res.json(await menuItem.getMenuItem(itemID));
  } catch (err) {
    res.status(500).json({ error: `Error while getting menu item: ${err.message}` });
    next(err);
  }
});

/* PUT update menu item by itemID. */
router.put('/:itemID', async function(req, res, next) {
  try {
    const { itemID } = req.params;
    const { itemName, description, price, itemImage, category, isDeleted, calories } = req.body;
    res.json(await menuItem.updateMenuItem(itemID, itemName, description, price, itemImage, category, isDeleted, calories));
  } catch (err) {
    res.status(500).json({ error: `Error while updating menu item: ${err.message}` });
    next(err);
  }
});

/* GET all menu items. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await menuItem.getAllMenuItems());
  } catch (err) {
    res.status(500).json({ error: `Error while getting all menu items: ${err.message}` });
    next(err);
  }
});

module.exports = router;
