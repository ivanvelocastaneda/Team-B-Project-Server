const express = require('express');
const router = express.Router();
const reservation = require('../services/reservation');

/* POST new reservation. */
router.post('/', async function(req, res, next) {
  try {
    res.json(await reservation.addReservation(req.body));
  } catch (err) {
    res.status(500).json({ error: `Error while adding reservation: ${err.message}` });
    next(err);
  }
});

/* DELETE reservation by reservationID. */
router.delete('/:reservationID', async function(req, res, next) {
  try {
    const { reservationID } = req.params;
    res.json(await reservation.deleteReservation(reservationID));
  } catch (err) {
    res.status(500).json({ error: `Error while deleting reservation: ${err.message}` });
    next(err);
  }
});

/* GET reservation by reservationID. */
router.get('/:reservationID', async function(req, res, next) {
  try {
    const { reservationID } = req.params;
    res.json(await reservation.getReservation(reservationID));
  } catch (err) {
    res.status(500).json({ error: `Error while getting reservation: ${err.message}` });
    next(err);
  }
});

/* PUT update reservation by reservationID. */
router.put('/:reservationID', async function(req, res, next) {
  try {
    const { reservationID } = req.params;
    res.json(await reservation.updateReservation(reservationID, req.body));
  } catch (err) {
    res.status(500).json({ error: `Error while updating reservation: ${err.message}` });
    next(err);
  }
});

/* GET all reservations. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await reservation.getAllReservations());
  } catch (err) {
    res.status(500).json({ error: `Error while getting all reservations: ${err.message}` });
    next(err);
  }
});

module.exports = router;
