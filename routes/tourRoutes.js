const express = require('express');

const router = express.Router();

const {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  checkNameandPrice,
} = require('../controllers/tourController');

router.route('/').get(getAllTours).post(checkNameandPrice, createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
