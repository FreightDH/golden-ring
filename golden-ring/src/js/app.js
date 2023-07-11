import '../scss/style.scss';
import * as myFunctions from './files/functions.js';
import { generateSlides } from './files/slider/slides.js';
import { swiperInit } from './files/slider/swiper.js';

// Проверка поддержки webp, добавление класса webp или no-webp для HTML
myFunctions.isWebp();

// Основные функции
generateSlides();
swiperInit();
