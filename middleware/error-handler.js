const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (error, req, res, next) => {
  res.status(StatusCodes.BAD_REQUEST).send('Not enough data provided');
  next();
};

module.exports = errorHandlerMiddleware;
