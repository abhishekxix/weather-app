const axios = require('axios');
const StatusCodes = require('http-status-codes');

const getCurrentWeather = async (req, res) => {
  const weatherData = await axios.get(process.env.API_URL + '/onecall', {
    method: 'get',
    params: {
      lat: req.body.lat,
      lon: req.body.lon,
      exclude: 'hourly,minutely,daily',
      units: req.body.units,
      appId: process.env.API_KEY,
    },
  });
  weatherData.data.city = req.body.city;
  res.status(weatherData.status).json(weatherData.data);
};

module.exports = getCurrentWeather;
