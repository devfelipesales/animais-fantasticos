export default function outsideClick(element, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  // Executado pelo Event Bubble padrão do JS
  if (!element.hasAttribute(outside)) {
    // Adiciona os eventos no html document
    // setTimeOut necessário pois o [data-menu="button"] está fora da UL id="menu", logo, o handleOutsideClick será acionado pelo HTML via Bubble e, como o btn MENU está fora da UL id="menu", irá fechar antes mesmo de abrir, uma vez que estaria clicando fora da lista do menu. Com o setTimeOut, o evento no HTML é deixado por último na fila do callback, sendo executado ao final de todos os outros.
    // Caso o botão estivesse dentro da lista, não haveria necessidade do setTimeOut
    setTimeout(() => {
      html.addEventListener('click', handleOutsideClick);
      html.addEventListener('touchstart', handleOutsideClick);
    });

    // atribui o data-outside para não ficar adicionando o mesmo evento em todo click.
    element.setAttribute(outside, '');
  }

  // Só quero que a função seja criada, quando o OutsideClick for ativado
  // Retornando pelo Bubble(ativação das funções dos elementos pai), chegará no HTML e será verificado que tem uma função e click/touchstart e ela será ativada
  function handleOutsideClick(event) {
    // verifica se onde está sendo clicado não é um elemento que compõe o dropdown. Ou seja, se for um dos filhos/estiver dentro elemento pai, mantém o menu aberto, caso contrário está clicando fora, então remove a classe chamado a função de callback
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
