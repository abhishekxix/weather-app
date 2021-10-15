const axios = require('axios');

const getCurrentPollution = async (req, res) => {
  const pollutionData = await axios.get(
    process.env.API_URL + '/air_pollution',
    {
      method: 'get',
      params: {
        lat: req.body.lat,
        lon: req.body.lon,
        appID: process.env.API_KEY,
      },
    }
  );
  res.status(pollutionData.status).json(pollutionData.data);
};

const getForecastPollution = async (req, res) => {
  const pollutionData = await axios.get(
    process.env.API_URL + '/air_pollution/forecast',
    {
      method: 'get',
      params: {
        lat: req.body.lat,
        lon: req.body.lon,
        appID: process.env.API_KEY,
      },
    }
  );
  res.status(pollutionData.status).json(pollutionData.data);
};
module.exports = { getCurrentPollution, getForecastPollution };
