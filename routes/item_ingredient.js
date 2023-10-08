const express = require('express');
const router = express.Router();
const itemIngredient = require('../services/item_ingredient');

/* POST new item_ingredient relationship. */
router.post('/', async function(req, res, next) {
  try {
    const { itemID, ingredientID } = req.body;
    res.json(await itemIngredient.addItemIngredient(itemID, ingredientID));
  } catch (err) {
    res.status(500).json({ error: `Error while adding item_ingredient relationship: ${err.message}` });
    next(err);
  }
});

/* DELETE item_ingredient relationship by itemID and ingredientID. */
router.delete('/:itemID/:ingredientID', async function(req, res, next) {
  try {
    const { itemID, ingredientID } = req.params;
    res.json(await itemIngredient.deleteItemIngredient(itemID, ingredientID));
  } catch (err) {
    res.status(500).json({ error: `Error while deleting item_ingredient relationship: ${err.message}` });
    next(err);
  }
});

/* GET item_ingredient relationships by itemID. */
router.get('/:itemID', async function(req, res, next) {
  try {
    const { itemID } = req.params;
    res.json(await itemIngredient.getItemIngredient(itemID));
  } catch (err) {
    res.status(500).json({ error: `Error while getting item_ingredient relationships: ${err.message}` });
    next(err);
  }
});

/* GET all item_ingredient relationships. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await itemIngredient.getAllItemIngredients());
  } catch (err) {
    res.status(500).json({ error: `Error while getting all item_ingredient relationships: ${err.message}` });
    next(err);
  }
});

module.exports = router;
