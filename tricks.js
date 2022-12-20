// -> COPIAR/CLONAR ARRAY
// -----------------------------

// Não se faz dessa forma, pois assim cria-se uma referência do mesmo array e, ao alterar o valor em um array, o outro também será alterado
// const carrosCopia = carros; -> FORMA ERRADA!!!!!!

// Deve-se fazer a da seguinte forma, com slice();

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const carrosCopia = carros.slice();

// ->  ITERAÇÃO DE ARRAY
// -----------------------------

// Math.max(...arrayNumeros) - O "...arrayNumeros" é uma forma de iteração em que o será passado para a função Math.max cada valor do array, sem a necessidade de um forEach

// Retorne o maior número da lista abaixo
const arrayNumeros = [4, 5, 20, 8, 9];
const numeroMaximo = Math.max(...arrayNumeros);

// -> ITERAÇÃO DE ARRAY - REFERÊNCIAS
// -----------------------------

// Aqui precisamos entender os parâmetros dentro do forEach
// o parametro ITEM não faz referência ao array principal(carros2), isso significa que os valores do array não serão alterados ao modificar o parametro item;
// Já o parametro ARRAY faz referência ao array principal(carros2). Dessa forma, caso altere algum valor, por ex, array[1] = "teste", o array Carros2[1] também será alterado!!

const carros2 = ['Ford', 'Fiat', 'Honda'];
// console.log(carros2);
carros2.forEach((item, index, array) => {
  console.log(item.toUpperCase()); // NÃO altera o array principal. Ou seja, os valores do array carros2 não ficará em UpperCase
  array[index] = 'Teste'; // ALTERA o array principal(carros2). Todos os valores de carros2 mudarão para "Teste"
});

// console.log(carros2);

// -> ARRAY MAP
// ----------------------------------------------
// MAP()- Funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o RETURN de cada iteração.

// Por padrão, deve-se utilizar o return dentro da função para retornar o array modificado, porém se só tiver UMA linha, o return será implícito

const carrosMap = ['Ford', 'Fiat', 'Honda'];
const newCarrosMap = carros.map((item) => {
  return 'Carro ' + item; // Forma padrão com return
});

// console.log(newCarrosMap);

const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map((n) => n * 3); // Forma alternativa com apenas uma linha retornado = return implícito

// -> FORMATAÇÃO DE MOEDA
// -----------------------------

// Formata o número de acordo com a língua e opções passadas.
const preco = 59.49;
preco.toLocaleString('en-US', { style: 'currency', currency: 'USD' }); // $59.49
preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // R$ 59,49
