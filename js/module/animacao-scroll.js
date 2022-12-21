// -----------------------------------------------------------------------------------------------------------------
// ANIMAÇÃO SCROLL - À medida for for rolando para baixo, o conteúdo das seções aparecem
// -----------------------------------------------------------------------------------------------------------------

export default class AnimacaoScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);

    this.checkDistance = this.checkDistance.bind(this);
  }

  // Retorna a distância de cada section em relação ao topo do site
  getDistanceFromTop() {
    // Retorna aprox. metade da tela
    const metadeAlturaTela = window.innerHeight * 0.6;

    // Precisa desestruturar ou usar Array.from, pois é um nodeList e o map só aceita array.
    // Retorna um array com a section e a sua altura para o topo da tela
    this.distance = [...this.sections].map((section) => {
      // Pega a distância fixa de cada section para o topo da tela, não mais a distância com base de onde está a barra de rolamento
      const sectionTop = section.offsetTop;
      return {
        element: section,
        offsetTop: Math.floor(sectionTop - metadeAlturaTela),
      };
    });
  }

  // Verifica a distância em cada objeto em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((section) => {
      // window.scrollY => Retorna a posição atual do scroll
      // window.scrollY ===  window.pageYOffset(desatualizado)
      if (window.scrollY > section.offsetTop) {
        section.element.classList.add('ativo');
      } else if (section.element.classList.contains('ativo')) {
        section.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistanceFromTop();
      this.checkDistance(); // Não necessário, mas inicia a primeira section já animada ao entrar no site
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }
}
