const express = require('express');
const getCurrentWeather = require('../controllers/current-weather');
const geocodingMiddleware = require('../middleware/geocoding-middleware');
const currentWeatherRouter = express.Router();

currentWeatherRouter.route('/').get(geocodingMiddleware, getCurrentWeather);

module.exports = currentWeatherRouter;
