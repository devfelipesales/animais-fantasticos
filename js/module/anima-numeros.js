export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((numero) => {
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
    });
  }

  // Parametro mutation = event do addEventListener
  function handleMutation(mutation) {
    // Caso esteja na seção desejada, não precisa ficar observando a seção novamente. Disconecta o observer e executa a animação dos números
    // mutation[0] = Seleção de apenas uma seção
    // Class ativo = O scroll está na seção correta
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  // Seção que será observada
  const observerTarget = document.querySelector('.numeros');

  // MutationObserver = objeto que fica observando a mudança em algum atributo de uma seção e executa a função callback;
  const observer = new MutationObserver(handleMutation);

  // Informa qual seção deve-se observar
  observer.observe(observerTarget, { attributes: true });
}
