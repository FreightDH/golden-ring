export function initNavigation() {
  const sections = document.querySelectorAll('.section');
  const navLinks = Array.from(document.querySelectorAll('.menu__link'));

  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    sections.forEach((section) => {
      const top = section.offsetTop - 20; // вычесть padding
      const bottom = top + section.offsetHeight;

      if (scroll >= top && scroll <= bottom) {
        navLinks.forEach((link) => link.parentElement.classList.remove('active'));
        const link = navLinks.find((link) => link.getAttribute('href') === `#${section.getAttribute('id')}`);
        if (link) link.parentElement.classList.add('active');
      }
    });
  });
}
