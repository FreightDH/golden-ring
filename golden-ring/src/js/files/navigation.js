export function initNavigation() {
  if (window.innerWidth < 1200) {
    const navLinks = document.querySelectorAll('.menu__link');
    navLinks.forEach((link) => link.parentElement.classList.remove('active'));
  }

  window.addEventListener('scroll', () => {
    if (window.innerWidth > 1200) checkSection();
  });
}

function checkSection() {
  const sections = document.querySelectorAll('.section');
  const navLinks = Array.from(document.querySelectorAll('.menu__link'));
  const scroll = window.scrollY;

  sections.forEach((section) => {
    const top = section.offsetTop - 20; // вычесть padding секции
    const bottom = top + section.offsetHeight;

    if (scroll >= top && scroll <= bottom) {
      navLinks.forEach((link) => link.parentElement.classList.remove('active'));
      const link = navLinks.find((link) => link.getAttribute('href') === `#${section.getAttribute('id')}`);
      if (link) link.parentElement.classList.add('active');
    }
  });
}
