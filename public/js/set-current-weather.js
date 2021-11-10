import { populateCurrentWeatherList } from './populate-weather-list.js';
import { getElement } from './utils/get-element.js';

export const setCurrentWeather = (weather) => {
  if (!weather) {
    getElement('.weather').classList.add('.hidden');
    return;
  }

  getElement('.weather').classList.remove('.hidden');

  const currentWeatherList = getElement('.current-weather-list');
  populateCurrentWeatherList(currentWeatherList, weather);
};
