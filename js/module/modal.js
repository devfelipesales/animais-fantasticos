export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para fazer referência ao objeto da classe
    this.abrirModal = this.abrirModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  abrirModal(event) {
    event.preventDefault();
    this.containerModal.classList.add('ativo');
  }

  fecharModal(event) {
    event.preventDefault();
    this.containerModal.classList.remove('ativo');
  }

  cliqueForaModal(event) {
    // Se o clique foi no container externo, fecha o modal
    if (event.target === this.containerModal) {
      this.fecharModal(event);
    }
  }

  addModalEvents() {
    // Nesses casos, o this do callback faz referência ao elemento do botão, ou seja, dentro das referidos métodos(abrirmodal, fecharmodal, etc) o this será o próprio elemento do botão e não a referência da classe, por isso necessário o bind nesse caso.
    this.botaoAbrir.addEventListener('click', this.abrirModal);
    this.botaoFechar.addEventListener('click', this.fecharModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }

    return this;
  }
}
