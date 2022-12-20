import outsideClick from './outsideclick.js';

export default function initDropDownMenu() {
  // Caso haja mais de um dropdown no site
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  if (!dropdownMenus) {
    return;
  }

  dropdownMenus.forEach((item) => {
    // Click && TouchStart -> Otimizando pra Mobile. Basicamente funcionam da mesma forma, porém o Click é um pouco mais lento que o touchstart
    //
    item.addEventListener('click', handleClick);
    item.addEventListener('touchstart', handleClick);
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    // this = elemento LI com [data-dropdown]
    outsideClick(this, () => {
      this.classList.remove('ativo');
    });
  }
}

/* CÓDIGO REFATORADO PARA UTILIZAR EM OUTRO MOMENTO, PORÉM PODE-SE DESCOMENTAR PARA MELHOR ENTENDIMENTO

// element = elemento LI com [data-dropdown]
function outsideClick(element, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  // Executado pelo Event Bubble padrão do JS
  if (!element.hasAttribute(outside)) {
    // Adiciona os eventos no html document
    html.addEventListener('click', handleOutsideClick);
    html.addEventListener('touchstart', handleOutsideClick);
    // atribui o data-outside para não ficar adicionando o mesmo evento em todo click.
    element.setAttribute(outside, '');
  }

  // Só quero que a função seja criada, quando o OutsideClick for ativado
  // Retornando pelo Bubble(ativação das funções dos elementos pai), chegará no HTML e será verificado que tem uma função e click/touchstart e ela será ativada
  function handleOutsideClick(event) {
    // verifica se onde está sendo clicado não é um elemento que compõe o dropdown. Ou seja, se for um dos filhos/estiver dentro do li[data-dropdown], mantém o menu aberto, caso contrário está clicando fora, então remove a classe chamado a função de callback
    // console.log(event.target);
    // console.log(element);
    if (!element.contains(event.target)) {
      // executa a função passada por parametro, que é a de remover a classe ativo. Também remove os eventos
      callback();
      html.removeEventListener('click', handleOutsideClick);
      html.removeEventListener('touchstart', handleOutsideClick);
      element.removeAttribute(outside);
    }
  }
}
*/
