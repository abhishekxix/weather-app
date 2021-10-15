const express = require('express');
const getCurrentWeather = require('../controllers/current-weather');
const currentWeatherRouter = express.Router();

currentWeatherRouter.route('/').get(getCurrentWeather);

module.exports = currentWeatherRouter;
