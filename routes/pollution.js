const express = require('express');
const {
  getCurrentPollution,
  getForecastPollution,
} = require('../controllers/pollution');
const pollutionRouter = express.Router();

pollutionRouter.route('/').get(getCurrentPollution);
pollutionRouter.route('/forecast').get(getForecastPollution);

module.exports = pollutionRouter;
