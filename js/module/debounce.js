// DEBOUNCE -> Função para melhorar a performance de eventos, como scroll, que acontecem por inúmeras vezes. Nesse caso, é setado um timer para minimizar a quantidade de vezes ativada
//-----------------------------------------------------------------------------------------------------------------------------------------

export default function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}
