const express = require('express');
const router = express.Router();
const ingredient = require('../services/ingredient');


/* POST new ingredient. */
router.post('/', async function(req, res, next) {
  if(!req.body.ingredientName) {
    return response.status(400).send('Missing name')
  }
  try {
    const { ingredientName } = req.body;
    res.json(await ingredient.addIngredient(ingredientName));
  } catch (err) {
    res.status(500).json({ error: `Error while adding ingredient: ${err.message}` });
    next(err);
  }
});

/* DELETE ingredient by ingredientID. */
router.delete('/:ingredientID', async function(req, res, next) {
  try {
    const { ingredientID } = req.params;
    res.json(await ingredient.deleteIngredient(ingredientID));
  } catch (err) {
    res.status(500).json({ error: `Error while deleting ingredient: ${err.message}` });
    next(err);
  }
});

/* GET ingredient by ingredientID. */
router.get('/:ingredientID', async function(req, res, next) {
  try {
    const { ingredientID } = req.params;
    res.json(await ingredient.getIngredient(ingredientID));
  } catch (err) {
    res.status(500).json({ error: `Error while getting ingredient: ${err.message}` });
    next(err);
  }
});

/* PUT update ingredient by ingredientID. */
router.put('/:ingredientID', async function(req, res, next) {
  try {
    const { ingredientID } = req.params;
    const { ingredientName } = req.body;
    res.json(await ingredient.updateIngredient(ingredientID, ingredientName));
  } catch (err) {
    res.status(500).json({ error: `Error while updating ingredient: ${err.message}` });
    next(err);
  }
});

/* GET all ingredients. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await ingredient.getAllIngredients());
  } catch (err) {
    res.status(500).json({ error: `Error while getting all ingredients: ${err.message}` });
    next(err);
  }
});

module.exports = router;
