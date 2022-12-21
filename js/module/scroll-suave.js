// ------------------------------------------------------------------------
// SCROLL SUAVE - Scroll suave ao clicar nos links internos
// ------------------------------------------------------------------------

export default class ScrollSuave {
  constructor(links, options) {
    this.linkInternos = document.querySelectorAll(links);
    if (!options) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    // Necessário gravar esse bind, pois iria perder a referência ao utilizar dentro de addLinkEvent. No verdade, o this.options em ScrollToSections iria referenciar o this do event addEventListner, tornando o this.options como undefined
    this.scrollToSection = this.scrollToSection.bind(this);

    // Outra forma seria colocar numa constante e passar a constante no lugar do this.options dentro do método scrillToSection
    // const options = this.options;
  }

  scrollToSection(event) {
    event.preventDefault();

    const hrefLink = event.currentTarget.getAttribute('href'); // Aqui não pode mais usar o this, pois perdeu a referência devido ao bind
    // Como o ID da section é igual ao href do link, basta selecionar a section
    const section = document.querySelector(hrefLink);
    // Faz o scroll até section selecionada
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linkInternos.forEach((item) => {
      item.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.linkInternos) {
      this.addLinkEvent();
    }

    return this; // padrão para não retornar undefined e poder usar outros métodos em cadeia, caso queira
  }
}
