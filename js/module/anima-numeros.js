export default class AnimaNumeros {
  constructor(numeros, secaoAlvo) {
    this.numeros = document.querySelectorAll(numeros);
    this.secaoAlvo = document.querySelector(secaoAlvo);
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Criado como estático, pois o ESLint reclama uam vez que não está sendo usado nada da classe(métodos ou atributos);
  // Dessa forma, basta passar qualquer elemento do dom com número que será realizado o incremento do zero até o final.
  // Possibilitando o uso em outros casos
  static incrementaNumero(numero) {
    const total = +numero.innerText;
    const inscremento = Math.floor(total / 100); // Incremento proporcional ao valor
    let start = 0;
    const timer = setInterval(() => {
      start = start + inscremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
      // }, 25); Só assim funciona, porém todos os números serão animados ao mesmo tempo
    }, 25 * Math.random());
  }

  animaNumeros() {
    this.numeros.forEach((numero) => {
      // Necessário usar assim, pois é estático, não dá pra acessar this.incrementaNumero
      this.constructor.incrementaNumero(numero);
    });
  }

  // Parametro mutation = event do addEventListener
  handleMutation(mutation) {
    // Caso esteja na seção desejada, não precisa ficar observando a seção novamente. Disconecta o observer e executa a animação dos números
    // mutation[0] = Seleção de apenas uma seção
    // Class ativo => O scroll está na seção correta de números
    if (mutation[0].target.classList.contains('ativo')) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addMutationObserver() {
    // MutationObserver = objeto que fica observando a mudança em algum atributo de uma seção e executa a função callback;
    this.observer = new MutationObserver(this.handleMutation);
    // Informa qual seção deve-se observar(".numeros")
    this.observer.observe(this.secaoAlvo, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.secaoAlvo) {
      this.addMutationObserver();
    }
    return this;
  }
}
