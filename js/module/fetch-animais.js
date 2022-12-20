import initAnimaNumeros from './anima-numeros.js';

// CRIAÇÃO DINÂMICA DOS FILHOS DA DIV <div class="numeros-grid"> PARA FINS DIDÁTICOS COM FETCH
export default function initFetchAnimais() {
  // Para usar o FETCH com AWAIT a função tem que ser do tipo ASSYNC
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      // Inicializa a animação dos números após o carregamento das divs dinâmicas
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  fetchAnimais('./animaisapi.json');
  // fetchAnimais('../../animaisapi.json');
}
