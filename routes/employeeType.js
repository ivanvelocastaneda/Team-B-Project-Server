const express = require('express');
const router = express.Router();
const employeeType = require('../services/employeeType');

/* POST new employee type. */
router.post('/', async function(req, res, next) {
  try {
    const { typeName } = req.body;
    res.json(await employeeType.addEmployeeType(typeName));
  } catch (err) {
    res.status(500).json({ error: `Error while adding employee type: ${err.message}` });
    next(err);
  }
if(!req.body.typeName) {
    return res.status(400).send('Missing type name');
}
});

/* DELETE employee type by typeID. */
router.delete('/:typeID', async function(req, res, next) {
  try {
    const { typeID } = req.params;
    res.json(await employeeType.deleteEmployeeType(typeID));
  } catch (err) {
    res.status(500).json({ error: `Error while deleting employee type: ${err.message}` });
    next(err);
  }
});

/* GET employee type by typeID. */
router.get('/:typeID', async function(req, res, next) {
  try {
    const { typeID } = req.params;
    res.json(await employeeType.getEmployeeType(typeID));
  } catch (err) {
    res.status(500).json({ error: `Error while getting employee type: ${err.message}` });
    next(err);
  }
});

/* PUT update employee type by typeID. */
router.put('/:typeID', async function(req, res, next) {
  try {
    const { typeID } = req.params;
    const { typeName } = req.body;
    res.json(await employeeType.updateEmployeeType(typeID, typeName));
  } catch (err) {
    res.status(500).json({ error: `Error while updating employee type: ${err.message}` });
    next(err);
  }
});

/* GET all employee types. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await employeeType.getAllEmployeeTypes());
  } catch (err) {
    res.status(500).json({ error: `Error while getting all employee types: ${err.message}` });
    next(err);
  }
});

module.exports = router;
