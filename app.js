require('dotenv').config();
require('express-async-errors');
const express = require('express');
const currentWeatherRouter = require('./routes/current-weather');
const forecastRouter = require('./routes/forecast');
const errorHandlerMiddleware = require('./middleware/error-handler');
const app = express();

// middleware
app.use(express.static('./public'));
app.use(express.json());

app.use(errorHandlerMiddleware);
// routes
app.use('/api/v1/current', currentWeatherRouter);
app.use('/api/v1/forecast', forecastRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening at port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
