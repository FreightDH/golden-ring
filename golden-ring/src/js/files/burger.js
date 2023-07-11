import { bodyLockStatus, bodyLockToggle, unlockBody, lockBody } from './functions.js';

// МЕНЮ-БУРГЕР
export function initMenu() {
  if (document.querySelector('.menu__icon')) {
    document.addEventListener('click', function (event) {
      if (bodyLockStatus && event.target.closest('.menu__icon')) {
        bodyLockToggle();
        document.documentElement.classList.toggle('menu-open');
        document.querySelector('.menu__body').classList.toggle('menu-open');
      }
      if (bodyLockStatus && event.target.closest('.menu__link')) {
        unlockBody();
        document.documentElement.classList.remove('menu-open');
        document.querySelector('.menu__body').classList.remove('menu-open');
      }
      if (bodyLockStatus && !event.target.closest('.menu__link')) {
        unlockBody();
        document.documentElement.classList.remove('menu-open');
        document.querySelector('.menu__body').classList.remove('menu-open');
      }
    });
  }
}

export function openMenu() {
  lockBody();
  document.documentElement.classList.add('menu-open');
  document.querySelector('.menu__body').classList.toggle('menu-open');
}

export function closeMenu() {
  unlockBody();
  document.documentElement.classList.remove('menu-open');
  document.querySelector('.menu__body').classList.toggle('menu-open');
}
//----------------------------------------------------------------------
