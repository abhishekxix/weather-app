const axios = require('axios');

const getHourlyForecast = async (req, res) => {
  res.send('hourly');
};

const getMinutelyForecast = async (req, res) => {
  res.send('minutely');
};

const getDailyForecast = async (req, res) => {
  res.send('daily');
};

const getForecast = async (req, res) => {
  res.send('total forecast');
};

module.exports = {
  getHourlyForecast,
  getMinutelyForecast,
  getDailyForecast,
  getForecast,
};
