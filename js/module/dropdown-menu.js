import outsideClick from './outsideclick.js';

export default class DropDownMenu {
  constructor(dropdownMenus) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    this.handleClick = this.handleClick.bind(this);
  }

  // Ativa o dropdownmenu e adiciona a função que observa o click fora dele
  handleClick(event) {
    const element = event.currentTarget;
    event.preventDefault();
    element.classList.add('ativo');
    // this = elemento LI com [data-dropdown]
    outsideClick(element, () => {
      element.classList.remove('ativo');
    });
  }

  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((item) => {
      // Click && TouchStart -> Otimizando pra Mobile. Basicamente funcionam da mesma forma, porém o Click é um pouco mais lento que o touchstart
      item.addEventListener('click', this.handleClick);
      item.addEventListener('touchstart', this.handleClick);
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
