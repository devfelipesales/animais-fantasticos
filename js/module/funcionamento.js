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

export default class Funcionamento {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);
  }

  dadosFuncionamento() {
    // Dias e Horário de funcionamento
    // -------------------------------------------------
    // Split -> Converte a String "1,2,3,4,5" em um array separando por vírgulas;
    // Bizu: .map(number) ->  Converte o Array de String em número.(O Map retorna uma novo array)
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(',')
      .map(Number);
  }

  verificaFuncionamento() {
    this.dadosFuncionamento(); // Recebe os dados de dias e horários de funcionamento

    // Retorna valores atuais
    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getUTCHours() - 3; // horário de brasília. Caso contrário pega o horário da máquina
    // const horarioAgora = dataAgora.getHours();

    // indexOF -> Caso o valor exista no array, retorna o index do valor encontrado; caso contrário, retorna -1
    // semanaAberto recebe true ou false com base na expressao
    const semanaAberto = this.diasSemana.indexOf(diaAgora) !== -1;

    // horarioSemana[0] = 8h, horarioSemana[1] = 18h
    // horarioAberto recebe true ou false com base na expressao
    const horarioAberto =
      horarioAgora >= this.horarioSemana[0] &&
      horarioAgora < this.horarioSemana[1];

    if (semanaAberto && horarioAberto) {
      this.funcionamento.classList.add('aberto');
    }
  }

  init() {
    if (this.funcionamento) {
      this.verificaFuncionamento();
    }

    return this;
  }
}
