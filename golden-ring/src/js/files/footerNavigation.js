export function initFooterNavigation() {
  const footerLinks = Array.from(document.querySelectorAll('.nav__link'));
  const pageTitle = document.querySelector('h1');
  const activeLink = footerLinks.find((link) => link.textContent === pageTitle.textContent);

  if (activeLink) activeLink.parentElement.classList.add('active');
}
