import '../scss/style.scss';
import * as myFunctions from './files/functions.js';
import * as menuFunctions from './files/burger.js';
import { generateSlides } from './files/slider/slides.js';
import { swiperInit } from './files/slider/swiper.js';
// Проверка поддержки webp, добавление класса webp или no-webp для HTML
myFunctions.isWebp();
// Модуль для работы с меню-бургер
// menuFunctions.menuInit();
generateSlides();
swiperInit();
