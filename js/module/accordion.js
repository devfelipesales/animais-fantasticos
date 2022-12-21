// ------------------------------------------------------------------------
// ACCORDION - MANIPULAÇÃO DAS FAQS(abre e fecha no clique das setinhas - Accordion)
// ------------------------------------------------------------------------
export default class AccordionList {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
  }

  toggleAccordion(item) {
    // Adiciona/Remove a classe ativo ao elemento DT
    item.classList.toggle('ativo');

    // Adiciona/Remove a classe ativo ao próximo elemento do DT, que no caso é o DD
    item.nextElementSibling.classList.toggle('ativo');
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  init() {
    if (this.accordionList.length) {
      // Inicia com o primeiro DT e DD aberto
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
