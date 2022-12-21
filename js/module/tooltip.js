// TOOLTIP - Tooltip do mapa -> Não é muito indicado, pois não é otimizado para mobile

export default class Tooltip {
  constructor(tooltips) {
    // Seleciona todos os tooltips, caso haja mais de um
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  addTooltipsEvent() {
    // Adiciona o oevento mousover -> Ao passar o mouse em cima
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  onMouseOver(event) {
    // event.currentTarget -> Div mapa
    this.criarTooltipBox(event.currentTarget);

    // Evento mousemove - para o tooltip seguir o mouse
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);

    // Evento mouseleave - acionado ao retirar o mouse do elemento
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  onMouseMove(event) {
    // Valores de top e left onde o tooltip seguirá o mouse -> Esse + 20 era para dar uma distância de 20px a mais para não ficar colado no mouse
    this.tooltipBox.style.top = event.pageY + 20 + 'px';

    if (event.pageX + 240 > window.innerWidth) {
      // verifica se o tooltip vai estourar a tela e redireciona ele - Caso de telas menores
      this.tooltipBox.style.left = event.pageX - 190 + 'px';
    } else {
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
  }

  onMouseLeave(event) {
    // Remove a div criada dinamicamente
    this.tooltipBox.remove();
    // Remove os eventos da div mapa
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // Cria a tooltip box e insere-a no body dinamicamente
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    // O texto da DIV será o contido no atributo aria-label, por questões de acessibilidade
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }

    return this;
  }
}
