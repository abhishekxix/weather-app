const axios = require('axios');

const getCurrentWeather = async (req, res) => {
  res.send('Current Weather');
};

module.exports = getCurrentWeather;
