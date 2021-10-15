const axios = require('axios');
const { NotFound } = require('http-errors');
const { StatusCodes } = require('http-status-codes');

const geocodingMiddleware = async (req, res, next) => {
  const { city } = req.body;
  if (!city) {
    return next();
  }

  const geocodedData = await axios.get(process.env.GEOCODING_URL, {
    params: {
      key: process.env.GEOCODING_KEY,
      q: city,
      format: 'json',
    },
  });

  if (geocodedData.status === StatusCodes.NOT_FOUND) {
    throw new NotFound('Not Found');
  }

  const location = geocodedData.data[0];
  const lat = location.lat;
  const lon = location.lon;
  req.body.lat = lat;
  req.body.lon = lon;
  next();
};

module.exports = geocodingMiddleware;
