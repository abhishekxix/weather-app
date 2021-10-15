const axios = require('axios');

const getHourlyForecast = async (req, res) => {
  const weatherData = await axios.get(process.env.API_URL + '/onecall', {
    method: 'get',
    params: {
      lat: req.body.lat,
      lon: req.body.lon,
      exclude: 'minutely,current,daily',
      units: req.body.units,
      appId: process.env.API_KEY,
    },
  });
  res.status(weatherData.status).json(weatherData.data);
};

const getMinutelyForecast = async (req, res) => {
  const weatherData = await axios.get(process.env.API_URL + '/onecall', {
    method: 'get',
    params: {
      lat: req.body.lat,
      lon: req.body.lon,
      exclude: 'hourly,current,daily',
      units: req.body.units,
      appId: process.env.API_KEY,
    },
  });
  res.status(weatherData.status).json(weatherData.data);
};

const getDailyForecast = async (req, res) => {
  const weatherData = await axios.get(process.env.API_URL + '/onecall', {
    method: 'get',
    params: {
      lat: req.body.lat,
      lon: req.body.lon,
      exclude: 'minutely,hourly,current',
      units: req.body.units,
      appId: process.env.API_KEY,
    },
  });
  res.status(weatherData.status).json(weatherData.data);
};

const getForecast = async (req, res) => {
  const weatherData = await axios.get(process.env.API_URL + '/onecall', {
    method: 'get',
    params: {
      lat: req.body.lat,
      lon: req.body.lon,
      exclude: 'current',
      units: req.body.units,
      appId: process.env.API_KEY,
    },
  });
  res.status(weatherData.status).json(weatherData.data);
};

module.exports = {
  getHourlyForecast,
  getMinutelyForecast,
  getDailyForecast,
  getForecast,
};
