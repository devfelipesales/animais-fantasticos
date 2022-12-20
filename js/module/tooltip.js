// TOOLTIP - Tooltip do mapa -> Não é muito indicado, pois não é otimizado para mobile

export default function initTooltip() {
  // Seleciona todos os tooltips, caso haja mais de um
  const tooltips = document.querySelectorAll('[data-tooltip]');

  // Adiciona o oevento mousover -> Ao passar o mouse em cima
  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });

  function onMouseOver(event) {
    // console.log(this); -> Div mapa
    // Aqui retorna a criação da DIV(tooltip) dinâmica, passando como paramentro o elemento do mouseover
    const tooltipBox = criarTooltipBox(this);

    // Atributo tooltipbox criado dinamicamente no objeto OnMouseMove -> Poderia ter criado dentro do objeto tbm e aqui atribuir o valor
    onMouseMove.tooltipBox = tooltipBox;
    // Evento mousemove - para o tooltip seguir o mouse -> Objeto passado na função
    this.addEventListener('mousemove', onMouseMove);

    // Atributo tooltipbox criado dinamicamente no objeto onMouseLeave -> Poderia ter criado dentro do objeto tbm e aqui atribuir o valor
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    // Evento mouseleave - acionado ao retirar o mouse do elemento -> Novamente um ojeto passado na função, ao invés de uma função callback
    this.addEventListener('mouseleave', onMouseLeave);
  }

  // Geralmente se passa uma funcão callback no addEventListerner, porém é possível passar um objeto desde que tenha a função handleEvent
  const onMouseMove = {
    handleEvent(event) {
      // Valores de top e left onde o tooltip seguirá o mouse -> Esse + 20 era para dar uma distância de 20px a mais para não ficar colado no mouse
      this.tooltipBox.style.top = event.pageY + 20 + 'px';
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    },
  };

  // Geralmente se passa uma funcão callback no addEventListerner, porém é possível passar um objeto desde que tenha a função handleEvent
  const onMouseLeave = {
    handleEvent() {
      // Remove a div criada dinamicamente
      this.tooltipBox.remove();
      // Remove os eventos da div mapa
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    // O texto da DIV será o contido no atributo aria-label, por questões de acessibilidade
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
