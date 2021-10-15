const express = require('express');
const {
  getMinutelyForecast,
  getHourlyForecast,
  getDailyForecast,
  getForecast,
} = require('../controllers/forecast');
const forecastRouter = express.Router();

forecastRouter.route('/').get(getForecast);
forecastRouter.route('/minutely').get(getMinutelyForecast);
forecastRouter.route('/hourly').get(getHourlyForecast);
forecastRouter.route('/daily').get(getDailyForecast);

module.exports = forecastRouter;
