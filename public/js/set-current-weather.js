import { populateCurrentWeatherList } from './populate-weather-list.js';
import { getElement } from './utils/get-element.js';

export const setCurrentWeather = (weather) => {
  if (!weather) {
    return;
  }
  localStorage.setItem('currentWeather', JSON.stringify(weather));
  const currentWeatherList = getElement('.current-weather-list');
  populateCurrentWeatherList(currentWeatherList, weather);
};
