import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    this.openMenu = this.openMenu.bind(this);
  }

  addMenuMobileEvents() {
    this.menuButton.addEventListener('click', this.openMenu);
    this.menuButton.addEventListener('touchstart', this.openMenu);
  }

  openMenu(event) {
    event.preventDefault(); // Prevenir bug do mobile que dava 2 clicks de ambos os eventos
    this.menuList.classList.add('active');
    this.menuButton.classList.add('active');
    // Passa o elemento data-menu="list" id="menu"
    outsideClick(this.menuList, () => {
      this.menuList.classList.remove('active');
      this.menuButton.classList.remove('active');
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }

    return this;
  }
}
