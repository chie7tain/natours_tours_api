// const Tour = require('../models/tourModel');

exports.checkNameandPrice = (req, res, next) => {
  if (req.body.name === undefined || req.body.price === undefined) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid Name or Price',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
  });
};
exports.getTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {},
  });
};
exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {},
  });
};
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here>',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
