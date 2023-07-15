import '../scss/style.scss';
import * as menuFunctions from './files/burger.js';
import { initNavigation } from './files/navigation.js';
import { initFooterNavigation } from './files/footerNavigation.js';
import { getWeather } from './files/weather.js';

function start() {
  menuFunctions.initMenu();
  initNavigation();
  initFooterNavigation();
  getWeather(document.querySelector('.nav__item.active').textContent);
}

window.addEventListener('load', start);
