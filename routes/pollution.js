const express = require('express');
const {
  getCurrentPollution,
  getForecastPollution,
} = require('../controllers/pollution');
const geocodingMiddleware = require('../middleware/geocoding-middleware');
const pollutionRouter = express.Router();

pollutionRouter.route('/').get(geocodingMiddleware, getCurrentPollution);
pollutionRouter
  .route('/forecast')
  .get(geocodingMiddleware, getForecastPollution);

module.exports = pollutionRouter;
