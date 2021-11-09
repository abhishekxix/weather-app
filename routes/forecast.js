const express = require('express');
const {
  getMinutelyForecast,
  getHourlyForecast,
  getDailyForecast,
  getForecast,
} = require('../controllers/forecast');
const geocodingMiddleware = require('../middleware/geocoding-middleware');
const forecastRouter = express.Router();

// forecastRouter.route('/').get(geocodingMiddleware, getForecast);
// forecastRouter.route('/minutely').get(geocodingMiddleware, getMinutelyForecast);
// forecastRouter.route('/hourly').get(geocodingMiddleware, getHourlyForecast);
// forecastRouter.route('/daily').get(geocodingMiddleware, getDailyForecast);

forecastRouter.use(geocodingMiddleware);
forecastRouter.route('/').post(getForecast);
forecastRouter.route('/minutely').post(getMinutelyForecast);
forecastRouter.route('/hourly').post(getHourlyForecast);
forecastRouter.route('/daily').post(getDailyForecast);
module.exports = forecastRouter;
