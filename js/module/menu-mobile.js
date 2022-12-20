import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  // const eventos = ['click', 'touchstart'];

  if (menuButton) {
    menuButton.addEventListener('click', openMenu);
    menuButton.addEventListener('touchstart', openMenu);

    function openMenu(event) {
      menuList.classList.add('active');
      menuButton.classList.add('active');
      // Passa o elemento data-menu="list" id="menu"
      outsideClick(menuList, () => {
        menuList.classList.remove('active');
        menuButton.classList.remove('active');
      });
    }
  }
}
