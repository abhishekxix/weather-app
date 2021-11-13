import { getElement } from './utils/get-element.js';
import {
  currentWeatherURL,
  currentPollutionURL,
  forecastWeatherURL,
} from './urls.js';
import { getData } from './getData.js';
import { setCurrentWeather } from './set-current-weather.js';
import { setCurrentPollution } from './set-current-pollution.js';
import { setHourlyForecast } from './set-hourly-forecast.js';
import { setDailyForecast } from './set-daily-forecast.js';

async function doTheDeed({ city, coord }) {
  let currentWeather = await getData(currentWeatherURL, city, coord);
  if (!currentWeather) {
    return alert(`${city} not found.`);
  }
  setCurrentWeather(currentWeather);

  let currentPollution = await getData(currentPollutionURL, city, coord);

  setCurrentPollution(currentPollution);

  // let hourly = await getData(forecastWeatherURL + 'hourly', city, coord);

  // setHourlyForecast(hourly);

  // let daily = await getData(forecastWeatherURL + 'daily', city, coord);
  // setDailyForecast(daily);

  let [hourly, daily] = await Promise.all([
    getData(forecastWeatherURL + 'hourly', city, coord),
    getData(forecastWeatherURL + 'daily', city, coord),
  ]);

  setHourlyForecast(hourly);
  setDailyForecast(daily);
}

function main() {
  const geo = navigator.geolocation;
  const searchBox = getElement('.search-box');
  const searchBtn = getElement('.search-btn');
  const locationBtn = getElement('.location-btn');
  const coord = {
    lat: undefined,
    lon: undefined,
  };

  window.onload = async function () {
    let lastTime = localStorage.getItem('time');
    let curr = new Date(Date.now()).getTime();
    let res = (curr - lastTime) / 1000 / 60;
    if (res < 30) {
      let c =
        localStorage.getItem('currentWeather') === 'undefined'
          ? undefined
          : localStorage.getItem('currentWeather');
      let p =
        localStorage.getItem('currentPollution') === 'undefined'
          ? undefined
          : localStorage.getItem('currentPollution');
      let h =
        localStorage.getItem('hourly') === 'undefined'
          ? undefined
          : localStorage.getItem('hourly');
      let d =
        localStorage.getItem('daily') === 'undefined'
          ? undefined
          : localStorage.getItem('daily');

      if (c) {
        setCurrentWeather(JSON.parse(c));
      }
      if (p) {
        setCurrentPollution(JSON.parse(p));
      }
      if (h) {
        setHourlyForecast(JSON.parse(h));
      }
      if (d) {
        setDailyForecast(JSON.parse(d));
      }
    } else {
      geo.getCurrentPosition(async (location) => {
        coord.lat = location.coords.latitude;
        coord.lon = location.coords.longitude;
        await doTheDeed({ coord, city: undefined });
      });
    }
  };

  searchBox.addEventListener('keyup', async function (evt) {
    if (evt.keyCode === 13) {
      const city = searchBox.value;
      if (!city) {
        return alert('Please enter a value for city');
      }
      evt.preventDefault();
      evt.stopPropagation();
      await doTheDeed({ city, coord: undefined });
    }
  });

  searchBtn.addEventListener('click', async function (evt) {
    evt.stopPropagation();
    const city = searchBox.value;
    if (!city) {
      return alert('Please enter a value for city');
    }
    await doTheDeed({ city, coord: undefined });
  });

  locationBtn.addEventListener('click', async function (evt) {
    geo.getCurrentPosition(async (location) => {
      coord.lat = location.coords.latitude;
      coord.lon = location.coords.longitude;
      await doTheDeed({ coord, city: undefined });
    });
  });

  setInterval(async () => {
    geo.getCurrentPosition(async (location) => {
      coord.lat = location.coords.latitude;
      coord.lon = location.coords.longitude;
      await doTheDeed({ coord, city: undefined });
    });
  }, 30 * 60 * 1000);
}

main();
