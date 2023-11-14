import slidesInfo from './slidesInfo.js';

export function generateSlides() {
  const swiperWrapper = document.querySelector('.swiper__wrapper');

  slidesInfo.forEach((info, index) => {
    let slide;

    switch (index) {
      case 0:
      case 1:
      case 2:
        slide = createSlide(info, true);
        break;
      default:
        slide = createSlide(info);
        break;
    }

    swiperWrapper.append(slide);
  });
}

function createSlide(info, isReady = false) {
  const slide = createElement('div', 'swiper__slide swiper-slide');
  const slideImage = createElement(
    'div',
    'slide__image',
    `<img src="./img/slides/${info.image}.jpg" alt="${info.image}">`,
  );
  const slideContent = createElement('div', 'slide__content');
  const slideCity = createElement('div', 'slide__city', `${info.city}`);
  const slideInfo = createElement('ul', 'slide__info');
  const infoItemYear = createElement('li', 'info__item', `<span>Год основания:</span> ${info.date}`);
  const infoItemSights = createElement('li', 'info__item', `<span>Что посетить:</span> ${info.sights}`);
  const slideButton = createElement('a', 'slide__btn btn', '<span>Подробнее</span>');

  if (isReady) slideButton.setAttribute('href', `html/cities/${info.image}.html`);
  else slideButton.setAttribute('href', `html/errorPage.html`);

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
