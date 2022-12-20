// ------------------------------------------------------------------------
// MANIPULAÇÃO DE TABS DOS ANIMAIS
// ------------------------------------------------------------------------
export default function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabContent && tabMenu) {
    // Adiciona a Class ativo ao primeiro item da lista, na ocasião de primeiro acesso ao site já iniciar com a tab
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((content) => {
        // Removo a classe ativo dos demais itens da lista
        content.classList.remove('ativo');
      });

      // Adiciono a classe ativo apenas no item que foi clicado e a classe referente ao data-set(show-down ou show-right)
      tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
    }

    // -----------------------------------------------------------------------------------------------------------------------------------
    /* Aqui abaixo não pode fazer o seguinte:  itemMenu.addEventListener('click', activeTab(index)}; 
pois estaria ativando a função diretamente. O correto é apenas passar o NOME da função: itemMenu.addEventListener('click', activeTab); 
 Logo, como é necessário passar o parametro INDEX, deve-se utilizar arrowfunction e ativar a função dentro.
*/

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
