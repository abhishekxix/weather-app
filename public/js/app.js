import { getElement, getElements } from './utils/get-element.js';
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

const geo = navigator.geolocation;
const searchBox = getElement('.search-box');
const searchBtn = getElement('.search-btn');

const coord = {
  lat: undefined,
  lon: undefined,
};

window.onload = async function () {
  geo.getCurrentPosition(async (location) => {
    let c = localStorage.getItem('currentWeather');
    console.log(c);
    let p = localStorage.getItem('currentPollution');
    let h = localStorage.getItem('hourly');
    let d = localStorage.getItem('daily');

    if (c !== undefined) {
      setCurrentWeather(JSON.parse(c));
    }
    if (p !== undefined) {
      setCurrentWeather(JSON.parse(p));
    }
    if (h !== undefined) {
      setCurrentWeather(JSON.parse(h));
    }
    if (d !== undefined) {
      setCurrentWeather(JSON.parse(d));
    }
    coord.lat = location.coords.latitude;
    coord.lon = location.coords.longitude;
    doTheDeed({ coord, city: undefined });
  });
};

searchBox.addEventListener('keyup', async function (evt) {
  const city = searchBox.value;
  if (!city) {
    return alert('Please enter a value for city');
  }
  if (evt.keyCode === 13) {
    evt.preventDefault();
    evt.stopPropagation();
    doTheDeed({ city, coord: undefined });
  }
});

searchBtn.addEventListener('click', async function (evt) {
  evt.stopPropagation();
  const city = searchBox.value;
  if (!city) {
    return alert('Please enter a value for city');
  }
  doTheDeed({ city, coord: undefined });
});

async function doTheDeed({ city, coord }) {
  let currentWeather = await getData(currentWeatherURL, city, coord);
  localStorage.setItem('currentWeather', JSON.stringify(currentWeather));
  setCurrentWeather(currentWeather);

  let currentPollution = await getData(currentPollutionURL, city, coord);
  localStorage.setItem('currentPollution', JSON.stringify(currentPollution));
  setCurrentPollution(currentPollution);

  let hourly = await getData(forecastWeatherURL + 'hourly', city, coord);
  localStorage.setItem('hourly', JSON.stringify(hourly));
  setHourlyForecast(hourly);

  let daily = await getData(forecastWeatherURL + 'daily', city, coord);
  localStorage.setItem('daily', JSON.stringify(daily));
  setDailyForecast(daily);
}
