import '../scss/style.scss';
import * as myFunctions from './files/functions.js';
import * as menuFunctions from './files/burger.js';
import { generateSlides } from './files/slider.js';
// Проверка поддержки webp, добавление класса webp или no-webp для HTML
myFunctions.isWebp();
generateSlides();
// Модуль для работы с меню-бургер
// menuFunctions.menuInit();
