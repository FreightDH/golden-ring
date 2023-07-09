import slidesInfo from './slidesInfo.js';

export function generateSlides() {
  const swiperWrapper = document.querySelector('.swiper__wrapper');

  slidesInfo.forEach((info) => {
    const slide = createSlide(info);
    swiperWrapper.append(slide);
  });
}

function createSlide(info) {
  const slide = createElement('div', 'swiper__slide swiper-slide');
  const slideImage = createElement(
    'div',
    'slide__image',
    `<img src="./img/cities/${info.image}.jpg" alt="${info.image}">`,
  );
  const slideContent = createElement('div', 'slide__content');
  const slideCity = createElement('div', 'slide__city', `${info.city}`);
  const slideInfo = createElement('ul', 'slide__info');
  const infoItemYear = createElement('li', 'info__item', `<span>Год основания:</span> ${info.date}`);
  const infoItemSights = createElement('li', 'info__item', `<span>Что посетить:</span> ${info.sights}`);
  const slideButton = createElement('a', 'slide__btn btn', '<span>Подробнее</span>');
  slideButton.setAttribute('href', `${info.image}.html`);

  slideInfo.append(infoItemYear, infoItemSights);
  slideContent.append(slideCity, slideInfo, slideButton);
  slide.append(slideImage, slideContent);

  return slide;
}

function createElement(tag = 'div', classname = '', content = '') {
  const element = document.createElement(tag);
  element.className = `${classname}`;
  element.innerHTML = `${content}`;

  return element;
}
