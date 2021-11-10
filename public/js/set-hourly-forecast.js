import { getElement, getElements } from './utils/get-element.js';
import { populateHourlyForecastList } from './populate-weather-list.js';

export const setHourlyForecast = (hourlyForecast) => {
  if (!hourlyForecast) {
    return;
  }

  const cards = Array.from(getElements('.hourly-forecast-card'));
  const hourly = hourlyForecast.hourly;
  hourly.shift();
  for (let i = 0; i < 6; i++) {
    cards[i].querySelector('h3').innerHTML = `
    <i class="fas fa-clock"></i> ${new Date(
      hourly[i].dt * 1000
    ).toLocaleTimeString()}
    `;
    const resultList = cards[i].querySelector('.result-list');
    populateHourlyForecastList(resultList, hourly[i]);
  }
};
