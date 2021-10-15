const express = require('express');
const getForecast = require('../controllers/forecast');
const forecastRouter = express.Router();

forecastRouter.route('/').get(getForecast);

module.exports = forecastRouter;
