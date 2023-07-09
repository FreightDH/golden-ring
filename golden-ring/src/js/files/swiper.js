import Swiper from 'swiper';

export function swiperInit() {
  const swiper = new Swiper('.slider__swiper', {
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

    // Управление с клавиатуры
    keyboard: {
      enabled: true,
      // Только когда в области видимости
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
      },
      1200.98: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        speed: 1500,
      },
    },
  });

  const nextButton = document.querySelector('.swiper-button-next');
  nextButton.addEventListener('click', () => swiper.slideNext());

  const prevButton = document.querySelector('.swiper-button-prev');
  prevButton.addEventListener('click', () => swiper.slidePrev());
}
