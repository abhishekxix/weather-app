import { getElement } from './utils/get-element.js';

export const setCurrentPollution = (pollution) => {
  if (!pollution) {
    return;
  }
  localStorage.setItem('currentPollution', JSON.stringify(pollution));

  const currentPollutionList = getElement('.current-pollution-list');
  currentPollutionList.innerHTML = '';

  if (pollution.list) {
    pollution = pollution.list[0];
  }
  const list = [];
  for (let i = 0; i < 9; i++) {
    list.push(document.createElement('li'));
  }
  list[0].innerHTML = `
  <i class="fas fa-lungs"></i>
  ${pollution.main.aqi}
  `;

  list[1].innerHTML = `
  CO: ${pollution.components.co}
  `;

  list[2].innerHTML = `
  NO: ${pollution.components.no}
  `;

  list[3].innerHTML = `
  NO<sub>2</sub>: ${pollution.components.no2}
  `;

  list[4].innerHTML = `
  O<sub>3</sub>: ${pollution.components.o3}
  `;

  list[5].innerHTML = `
  SO<sub>2</sub>: ${pollution.components.so2}
  `;

  list[6].innerHTML = `
  PM<sub>2.5</sub>: ${pollution.components.pm2_5}
  `;

  list[7].innerHTML = `
  PM<sub>10</sub>: ${pollution.components.pm10}
  `;

  list[8].innerHTML = `
  NH<sub>3</sub>: ${pollution.components.nh3}
  `;

  for (let elem of list) {
    currentPollutionList.append(elem);
  }
};
