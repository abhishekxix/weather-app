const axios = require('axios');
const { NotFound } = require('http-errors');
const { StatusCodes } = require('http-status-codes');

const geocodingMiddleware = async (req, res, next) => {
  let { city } = req.body;
  if (!city) {
    city = await axios.get(process.env.REVERSE_GEOCODING_URL, {
      params: {
        lat: req.body.lat,
        lon: req.body.lon,
        key: process.env.GEOCODING_KEY,
        format: 'json',
      },
    });
    req.body.city =
      city.data.address.county ??
      city.data.address.municipality ??
      city.data.address.state ??
      city.data.address.state.country;
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
