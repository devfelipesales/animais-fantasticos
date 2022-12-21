// ------------------------------------------------------------------------
// MANIPULAÇÃO DE TABS DOS ANIMAIS

// ------------------------------------------------------------------------
export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
  }

  // Ativa a tab de acordo com o index
  activeTab(index) {
    this.tabContent.forEach((content) => {
      // Removo a classe ativo dos demais itens da lista
      content.classList.remove('ativo');
    });

    const direcaoAnimacao = this.tabContent[index].dataset.anime;
    // Adiciono a classe ativo apenas no item que foi clicado e tbm classe referente ao data-set="anime"(show-down ou show-right)
    this.tabContent[index].classList.add('ativo', direcaoAnimacao);
  }

  // Adicona o evento à Tab
  addTabEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabContent.length && this.tabMenu.length) {
      // Adiciona a Class ativo ao primeiro item da lista, na ocasião de primeiro acesso ao site já iniciar com a tab ativa
      this.activeTab(0); // == this.tabContent[0].classList.add('ativo');
      this.addTabEvent();
    }
    return this;
  }
}
