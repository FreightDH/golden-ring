(() => {
  'use strict';
  let bodyLockStatus = true;
  const functions_unlockBody = (delay = 300) => {
    const body = document.querySelector('body');
    if (bodyLockStatus) {
      const lockPadding = document.querySelectorAll('[data-lp]');
      setTimeout(() => {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        document.documentElement.classList.remove('lock');
      }, delay);
      bodyLockStatus = false;
      setTimeout(() => {
        bodyLockStatus = true;
      }, delay);
    }
  };
  const functions_lockBody = (delay = 300) => {
    const body = document.querySelector('body');
    if (bodyLockStatus) {
      const lockPadding = document.querySelectorAll('[data-lp]');
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = `${window.innerWidth - document.querySelector('.wrapper').offsetWidth}px`;
      }
      body.style.paddingRight = `${window.innerWidth - document.querySelector('.wrapper').offsetWidth}px`;
      document.documentElement.classList.add('lock');
      bodyLockStatus = false;
      setTimeout(() => {
        bodyLockStatus = true;
      }, delay);
    }
  };
  const bodyLockToggle = (delay = 300) => {
    if (document.documentElement.classList.contains('lock')) functions_unlockBody(delay);
    else functions_lockBody(delay);
  };
  function initMenu() {
    if (document.querySelector('.menu__icon'))
      document.addEventListener('click', function (event) {
        if (bodyLockStatus && event.target.closest('.menu__icon')) {
          bodyLockToggle();
          document.documentElement.classList.toggle('menu-open');
          document.querySelector('.menu__body').classList.toggle('menu-open');
        }
        if (bodyLockStatus && event.target.closest('.menu__link')) {
          functions_unlockBody();
          document.documentElement.classList.remove('menu-open');
          document.querySelector('.menu__body').classList.remove('menu-open');
        }
        if (bodyLockStatus && !event.target.closest('.menu__link')) {
          functions_unlockBody();
          document.documentElement.classList.remove('menu-open');
          document.querySelector('.menu__body').classList.remove('menu-open');
        }
      });
  }
  function initNavigation() {
    if (window.innerWidth < 1200) {
      const navLinks = document.querySelectorAll('.menu__link');
      const returnBackLink = navLinks[navLinks.length - 1];
      navLinks.forEach((link) => link.parentElement.classList.remove('active'));
      returnBackLink.parentElement.classList.add('active');
    }
    window.addEventListener('scroll', () => {
      if (window.innerWidth > 1200) checkSection();
    });
  }
  function checkSection() {
    const sections = document.querySelectorAll('.section');
    const navLinks = Array.from(document.querySelectorAll('.menu__link'));
    navLinks.pop();
    const scroll = window.scrollY;
    sections.forEach((section) => {
      const top = section.offsetTop - 20;
      const bottom = top + section.offsetHeight;
      if (scroll >= top && scroll <= bottom) {
        navLinks.forEach((link) => link.parentElement.classList.remove('active'));
        const link = navLinks.find((link) => link.getAttribute('href') === `#${section.getAttribute('id')}`);
        if (link) link.parentElement.classList.add('active');
      }
    });
  }
  function initFooterNavigation() {
    const footerLinks = Array.from(document.querySelectorAll('.nav__link'));
    const pageTitle = document.querySelector('h1');
    const activeLink = footerLinks.find((link) => link.textContent === pageTitle.textContent);
    if (activeLink) activeLink.parentElement.classList.add('active');
  }
  async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=241a6c975817c3a04916e8babb8a5626&units=metric`;
    const result = document.querySelector('.city__weather');
    try {
      const res = await fetch(url);
      const data = await res.json();
      result.innerHTML = `\n    <ul class="weather__info">\n      <li class="weather__item"><span>${data.main.temp.toFixed(
        0,
      )}°C</span></li>\n      <li class="weather__item">${
        data.weather[0].description
      }</li>\n      <li class="weather__item">Скорость ветра: ${data.wind.speed.toFixed(
        0,
      )} м/с</li>\n      <li class="weather__item">Влажность: ${
        data.main.humidity
      }%</li>\n    </ul>\n    <i class="weather__icon owf owf-${data.weather[0].id}"></i>\n    `;
    } catch (error) {
      console.error(error);
    }
  }
  function start() {
    initMenu();
    initNavigation();
    initFooterNavigation();
    getWeather(document.querySelector('.nav__item.active').textContent);
  }
  window.addEventListener('load', start);
})();
