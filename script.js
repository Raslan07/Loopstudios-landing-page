document.addEventListener('DOMContentLoaded', () => {
  const menuOpenBtn = document.getElementById('menu-open-btn');
  const menuCloseBtn = document.getElementById('menu-close-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menuOpenBtn && menuCloseBtn && mobileMenu) {
    // Open the menu
    menuOpenBtn.addEventListener('click', () => {
      mobileMenu.classList.add('is-active');
    });

    // Close the menu
    menuCloseBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('is-active');
    });
  }
});