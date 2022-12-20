// Utilizando o THEN e não o AWAIT apenas para fins de aprendizado, tendo em vista que alguns códigos antigos utilizarem o then
export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json()) // quando há apenas uma linha, fica implícito o return
    .then((bitcoin) => {
      const btcPreco = document.querySelector('.btc-preco');
      // valor referente à 100 reais em bitcoin fixando em 4 casas decimais
      btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
