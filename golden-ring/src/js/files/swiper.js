import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function swiperInit() {
  new Swiper('.slider__swiper', {
    modules: [Navigation, Pagination],

    // Количество отображаемых слайдов
    slidesPerView: 3,

    // Расстояние между слайдами
    spaceBetween: 15,

    // Количество перелистываемых слайдов
    slidesPerGroup: 3,

    // Бесконечный слайдер
    loop: true,

    // Если нужно перетаскивание на ПК, то true
    simulateTouch: false,
    grabCursor: false,

    // Скорость смены слайдов, чем выше - тем плавнее
    speed: 500,

    // Смена слайдов по клику на стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Прогресс-бар
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },

    // Управление с клавиатуры
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    // Брейкпоинты
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      767.98: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        speed: 1000,
        simulateTouch: false,
        grabCursor: false,
      },
      1200.98: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        speed: 1500,
      },
    },
  });
}
