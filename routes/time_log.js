const express = require('express');
const router = express.Router();
const timeLog = require('../services/time_log');

/* POST new time log. */
router.post('/', async function(req, res, next) {
  try {
    const { employeeID, timeClockedIn, timeClockedOut } = req.body;
    res.json(await timeLog.addTimeLog(employeeID, timeClockedIn, timeClockedOut));
  } catch (err) {
    res.status(500).json({ error: `Error while adding time log: ${err.message}` });
    next(err);
  }
});

/* DELETE time log by id. */
router.delete('/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    res.json(await timeLog.deleteTimeLog(id));
  } catch (err) {
    res.status(500).json({ error: `Error while deleting time log: ${err.message}` });
    next(err);
  }
});

/* GET time log by id. */
router.get('/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    res.json(await timeLog.getTimeLog(id));
  } catch (err) {
    res.status(500).json({ error: `Error while getting time log: ${err.message}` });
    next(err);
  }
});

/* PUT update time log by id. */
router.put('/:id', async function(req, res, next) {
  try {
    const { id } = req.params;
    const { timeClockedIn, timeClockedOut } = req.body;
    res.json(await timeLog.updateTimeLog(id, timeClockedIn, timeClockedOut));
  } catch (err) {
    res.status(500).json({ error: `Error while updating time log: ${err.message}` });
    next(err);
  }
});

/* GET all time logs. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await timeLog.getAllTimeLogs());
  } catch (err) {
    res.status(500).json({ error: `Error while getting all time logs: ${err.message}` });
    next(err);
  }
});

module.exports = router;
