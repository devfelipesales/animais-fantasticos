// ------------------------------------------------------------------------
// ACCORDION - MANIPULAÇÃO DAS FAQS(abre e fecha no clique das setinhas - Accordion)
// ------------------------------------------------------------------------
export default function initAccordionList() {
  const accordionList = document.querySelectorAll('.js-accordion dt');

  if (accordionList) {
    // Inicia com o primeiro DT aberto
    accordionList[0].classList.add('ativo');
    // Inicia com o primeiro DD aberto
    accordionList[0].nextElementSibling.classList.add('ativo');

    function activeAccordion(event) {
      // this = event.currentTarget
      // Adiciona/Remove a classe ativo ao elemento DT
      this.classList.toggle('ativo');

      // Adiciona/Remove a classe ativo ao próximo elemento do DT, que no caso é o DD
      this.nextElementSibling.classList.toggle('ativo');
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
