const express = require('express');
const router = express.Router();
const employee = require('../services/employee');

/* POST new employee. */
router.post('/', async function(req, res, next) {
  try {
    const employeeData = req.body;
    res.json(await employee.addEmployee(employeeData));
  } catch (err) {
    res.status(500).json({ error: `Error while adding employee: ${err.message}` });
    next(err);
  }
});

/* DELETE employee by employeeID. */
router.delete('/:employeeID', async function(req, res, next) {
  try {
    const { employeeID } = req.params;
    res.json(await employee.deleteEmployee(employeeID));
  } catch (err) {
    res.status(500).json({ error: `Error while deleting employee: ${err.message}` });
    next(err);
  }
});

/* GET employee by employeeID. */
router.get('/:employeeID', async function(req, res, next) {
  try {
    const { employeeID } = req.params;
    res.json(await employee.getEmployee(employeeID));
  } catch (err) {
    res.status(500).json({ error: `Error while getting employee: ${err.message}` });
    next(err);
  }
});

/* PUT update employee by employeeID. */
router.put('/:employeeID', async function(req, res, next) {
  try {
    const { employeeID } = req.params;
    const employeeData = req.body;
    res.json(await employee.updateEmployee(employeeID, employeeData));
  } catch (err) {
    res.status(500).json({ error: `Error while updating employee: ${err.message}` });
    next(err);
  }
});

/* GET all employees. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await employee.getAllEmployees());
  } catch (err) {
    res.status(500).json({ error: `Error while getting all employees: ${err.message}` });
    next(err);
  }
});

module.exports = router;
