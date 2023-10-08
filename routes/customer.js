const express = require('express');
const router = express.Router();
const customer = require('../services/customer');

/* POST new customer. */
router.post('/', async function(req, res, next) {
  try {
    const customerData = req.body;
    res.json(await customer.addCustomer(customerData));
  } catch (err) {
    res.status(500).json({ error: `Error while adding customer: ${err.message}` });
    next(err);
  }
});

/* DELETE customer by customerID. */
router.delete('/:customerID', async function(req, res, next) {
  try {
    const { customerID } = req.params;
    res.json(await customer.deleteCustomer(customerID));
  } catch (err) {
    res.status(500).json({ error: `Error while deleting customer: ${err.message}` });
    next(err);
  }
});

/* GET customer by customerID. */
router.get('/:customerID', async function(req, res, next) {
  try {
    const { customerID } = req.params;
    res.json(await customer.getCustomer(customerID));
  } catch (err) {
    res.status(500).json({ error: `Error while getting customer: ${err.message}` });
    next(err);
  }
});

/* PUT update customer by customerID. */
router.put('/:customerID', async function(req, res, next) {
  try {
    const { customerID } = req.params;
    const customerData = req.body;
    res.json(await customer.updateCustomer(customerID, customerData));
  } catch (err) {
    res.status(500).json({ error: `Error while updating customer: ${err.message}` });
    next(err);
  }
});

/* GET all customers. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await customer.getAllCustomers());
  } catch (err) {
    res.status(500).json({ error: `Error while getting all customers: ${err.message}` });
    next(err);
  }
});

module.exports = router;
