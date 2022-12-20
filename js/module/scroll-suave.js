// ------------------------------------------------------------------------
// SCROLL SUAVE - Scroll suave ao clicar nos links internos
// ------------------------------------------------------------------------

export default function initScrollSuave() {
  //                           Seleciona os links que começam com # -> ^= Significa que começam
  const linkInternos = document.querySelectorAll(".js-menu a[href^='#']");

  if (linkInternos) {
    function scrollToSection(event) {
      // Previne o comportamento padrão do browser
      event.preventDefault();

      const hrefLink = this.getAttribute('href');
      // Como o ID da section é igual ao href do link, basta selecionar a section
      const section = document.querySelector(hrefLink);
      // Faz o scroll até section selecionada
      section.scrollIntoView({
        behavior: 'smooth', // Comportamento Suave
        block: 'start', // No começo da seção
      });

      //  -----> FORMA ALTERNATIVA <-----
      // // Seleciona a distância até o topo da tela
      // const topo = section.offsetTop;
      // // Parametros: Objeto com o valor do TOPO e o comportamento(behavior)
      // window.scrollTo({
      //   top: topo,
      //   behavior: "smooth",
      // });
    }

    linkInternos.forEach((item) => {
      item.addEventListener('click', scrollToSection);
    });
  }
}
