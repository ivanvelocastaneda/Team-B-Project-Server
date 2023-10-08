const express = require('express');
const router = express.Router();
const paymentMethods = require('../services/payment_methods');

/* POST new payment method. */
router.post('/', async function(req, res, next) {
  try {
    const { methodName } = req.body;
    res.json(await paymentMethods.addPaymentMethod(methodName));
  } catch (err) {
    res.status(500).json({ error: `Error while adding payment method: ${err.message}` });
    next(err);
  }
  if(!req.body.methodName) {
    return res.status(400).send('Missing method name');
  }
});

/* DELETE payment method by paymentMethodID. */
router.delete('/:paymentMethodID', async function(req, res, next) {
  try {
    const { paymentMethodID } = req.params;
    res.json(await paymentMethods.deletePaymentMethod(paymentMethodID));
  } catch (err) {
    res.status(500).json({ error: `Error while deleting payment method: ${err.message}` });
    next(err);
  }
});

/* GET payment method by paymentMethodID. */
router.get('/:paymentMethodID', async function(req, res, next) {
  try {
    const { paymentMethodID } = req.params;
    res.json(await paymentMethods.getPaymentMethod(paymentMethodID));
  } catch (err) {
    res.status(500).json({ error: `Error while getting payment method: ${err.message}` });
    next(err);
  }
});

/* PUT update payment method by paymentMethodID. */
router.put('/:paymentMethodID', async function(req, res, next) {
  try {
    const { paymentMethodID } = req.params;
    const { methodName } = req.body;
    res.json(await paymentMethods.updatePaymentMethod(paymentMethodID, methodName));
  } catch (err) {
    res.status(500).json({ error: `Error while updating payment method: ${err.message}` });
    next(err);
  }
});

/* GET all payment methods. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await paymentMethods.getAllPaymentMethods());
  } catch (err) {
    res.status(500).json({ error: `Error while getting all payment methods: ${err.message}` });
    next(err);
  }
});

module.exports = router;
