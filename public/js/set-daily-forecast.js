import { populateDailyForecastList } from './populate-weather-list.js';
import { getElement, getElements } from './utils/get-element.js';

export const setDailyForecast = (dailyForecast) => {
  if (!dailyForecast) {
    return;
  }
  localStorage.setItem('daily', JSON.stringify(dailyForecast));
  const cards = Array.from(getElements('.daily-forecast-card'));
  const daily = dailyForecast.daily;
  daily.shift();
  for (let i = 0; i < 7; i++) {
    cards[i].querySelector('h3').innerHTML = `
    <i class="fas fa-calendar-day"></i> ${new Date(
      daily[i].dt * 1000
    ).toLocaleDateString()}
    `;
    const resultList = cards[i].querySelector('.result-list');
    populateDailyForecastList(resultList, daily[i]);
  }
};
