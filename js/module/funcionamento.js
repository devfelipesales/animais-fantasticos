/*
Dias da Semana :
0 - Domingo
1 - Segunda
...
6 - Sábado

Meses do ano:
0 - Janeiro
1 - Feveiro
...
11 - Dezembro
*/

export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');

  // Split -> Converte a String "1,2,3,4,5" em um array separando por vírgulas;
  // Bizu: .map(number) ->  Converte o Array de String em número.(O Map retorna uma novo array)
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  // indexOF -> Caso o valor exista no array, retorna o index do valor encontrado; caso contrário, retorna -1
  // semanaAberto recebe true ou false com base na expressao
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

  // horarioSemana[0] = 8h, horarioSemana[1] = 18h
  // horarioAberto recebe true ou false com base na expressao
  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}
