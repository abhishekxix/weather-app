const weatherIcons = new Map([
  ['Clear', 'fa-sun'],
  ['Clouds', 'fa-cloud'],
  ['Snow', 'fa-snowflake'],
  ['Rain', 'fa-cloud-rain'],
  ['Drizzle', 'fa-cloud-rain'],
  ['Thunderstorm', 'fa-poo-storm'],
]);

let city;
export const populateCurrentWeatherList = (resultList, weather) => {
  resultList.innerHTML = '';
  const list = [];
  for (let i = 0; i < 8; i++) {
    list.push(document.createElement('li'));
  }

  const temp = weather.current.temp;
  let level = undefined;
  if (temp < 15) {
    level = 'fa-temperature-low';
  } else if (temp > 30) {
    level = 'fa-temperature-high';
  } else {
    level = 'fa-thermometer-half';
  }

  city = weather.city.split(' ')[0];

  list[0].innerHTML = `
  <i class="fas fa-location-arrow"></i> 
  ${city}
  `;

  list[1].innerHTML = `
  <i class="fas ${level}"></i> 
  ${weather.current.temp}&deg;C
  `;

  let sunrise = weather.current.sunrise * 1000;
  list[2].innerHTML = `
   <i class="fas fa-sun"></i> ${new Date(sunrise).toLocaleTimeString()}
  `;

  let sunset = weather.current.sunset * 1000;
  list[3].innerHTML = `
   <i class="fas fa-moon"></i> ${new Date(sunset).toLocaleTimeString()}
  `;

  let humidity = `${weather.current.humidity}%`;
  list[4].innerHTML = `
   <i class="fas fa-tint"></i> ${humidity}
  `;

  let windSpeed = `${weather.current.wind_speed} km/hr`;
  list[5].innerHTML = `
   <i class="fas fa-wind"></i> ${windSpeed}
  `;

  let windDegree = `${weather.current.wind_deg}&deg;`;
  list[6].innerHTML = `
   <i class="fas fa-compass"></i> ${windDegree}
  `;

  let weatherDescIcon =
    weatherIcons.get(weather.current.weather[0].main) ?? 'fa-cloud';

  list[7].innerHTML = `
   <i class="fas ${weatherDescIcon}"></i> ${weather.current.weather[0].description}
  `;

  for (let elem of list) {
    resultList.append(elem);
  }
};

export const populateHourlyForecastList = (resultList, data) => {
  resultList.innerHTML = '';

  const list = [];
  for (let i = 0; i < 5; i++) {
    list.push(document.createElement('li'));
  }
  let level;
  const temp = data.temp;
  if (temp < 15) {
    level = 'fa-temperature-low';
  } else if (temp > 30) {
    level = 'fa-temperature-high';
  } else {
    level = 'fa-thermometer-half';
  }

  list[0].innerHTML = `
  <i class="fas ${level}"></i> 
  ${temp}&deg;C
  `;

  list[1].innerHTML = `
   <i class="fas fa-tint"></i> ${data.humidity}%
  `;

  let windSpeed = `${data.wind_speed} km/hr`;
  list[2].innerHTML = `
   <i class="fas fa-wind"></i> ${windSpeed}
  `;

  let windDegree = `${data.wind_deg}&deg;`;
  list[3].innerHTML = `
   <i class="fas fa-compass"></i> ${windDegree}
  `;

  let weatherDescIcon = weatherIcons.get(data.weather[0].main) ?? 'fa-cloud';

  list[4].innerHTML = `
   <i class="fas ${weatherDescIcon}"></i> ${data.weather[0].description}
  `;
  list[4].classList.add('span-two');

  for (let elem of list) {
    resultList.append(elem);
  }
};

export const populateDailyForecastList = (resultList, data) => {
  resultList.innerHTML = '';

  const list = [];
  for (let i = 0; i < 7; i++) {
    list.push(document.createElement('li'));
  }
  let level;
  const temp = data.temp.day;
  if (temp < 15) {
    level = 'fa-temperature-low';
  } else if (temp > 30) {
    level = 'fa-temperature-high';
  } else {
    level = 'fa-thermometer-half';
  }

  list[0].innerHTML = `
  <i class="fas ${level}"></i> 
  ${temp}&deg;C
  `;

  let sunrise = data.sunrise * 1000;
  list[1].innerHTML = `
   <i class="fas fa-sun"></i> ${new Date(sunrise).toLocaleTimeString()}
  `;

  let sunset = data.sunset * 1000;
  list[2].innerHTML = `
   <i class="fas fa-moon"></i> ${new Date(sunset).toLocaleTimeString()}
  `;

  let humidity = `${data.humidity}%`;
  list[3].innerHTML = `
   <i class="fas fa-tint"></i> ${humidity}
  `;

  let windSpeed = `${data.wind_speed} km/hr`;
  list[4].innerHTML = `
   <i class="fas fa-wind"></i> ${windSpeed}
  `;

  let windDegree = `${data.wind_deg}&deg;`;
  list[5].innerHTML = `
   <i class="fas fa-compass"></i> ${windDegree}
  `;

  let weatherDescIcon = weatherIcons.get(data.weather[0].main) ?? 'fa-cloud';

  list[6].innerHTML = `
   <i class="fas ${weatherDescIcon}"></i> ${data.weather[0].description}
  `;
  list[6].classList.add('span-two');

  for (let elem of list) {
    resultList.append(elem);
  }
};
