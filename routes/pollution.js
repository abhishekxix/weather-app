const express = require('express');
const {
  getCurrentPollution,
  getForecastPollution,
} = require('../controllers/pollution');
const geocodingMiddleware = require('../middleware/geocoding-middleware');
const pollutionRouter = express.Router();

pollutionRouter.route('/').post(geocodingMiddleware, getCurrentPollution);
pollutionRouter
  .route('/forecast')
  .post(geocodingMiddleware, getForecastPollution);

module.exports = pollutionRouter;
