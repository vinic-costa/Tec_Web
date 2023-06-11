/* 
Aluno: Vinicius Costa dos Santos
Matrícula: 473003
Primeiro Laboratório de JavaScript 
*/

// Questão 01
let entrada = [0, 1, 2];

function verificarEArray(entrada) {
  return Array.isArray(entrada);
}

console.log("Questão 01: ", verificarEArray(entrada));


// Questão 02
let array = ["Hello", "World"];

function clonarArray(array) {
  return array.map((elemento) => {
    return elemento;
  });
}

let cloneArray = clonarArray(array);

console.log("Questão 02: ", clonarArray(array));


// Questão 03
let array_02 = ["Abacaxi", "Pepino", "Morango", 1, 13];

function obterPrimeiroNElementosArray(array, n = 0) {
  if (n === 0) {
    return array[0];
  } else {
    return array.filter((value, index) => {
      return index < n;
    });
  }
}

console.log("Questão 03: ", obterPrimeiroNElementosArray(array_02, 3));


// Questão 04
let array_03 = ["Abacaxi", "Pepino", "Morango", 1, 13];

function obterUltimoNElementosArray(array, n = 0) {
  if (n === 0) {
    let posicaoFinal = array.length - 1;

    return array[posicaoFinal];
  } else {
    return array.slice(-n);
  }
}

console.log("Questão 04: ", obterUltimoNElementosArray(array_03, 4));


// Questão 05
let array_04 = ["Hello", "World", 190];

function obterStringArray(array) {
  return array.join(" ");
}

console.log("Questão 05: ", obterStringArray(array_04));


// Questão 06
let numero = 205528144;

function gerarTracosEntrePares(numero) {
  let numeroStringArray = numero.toString().split("");
  let numero_traco_string = "";

  for (let i = 0; i < numeroStringArray.length; i++) {
    numero_traco_string = numero_traco_string + numeroStringArray[i];

    if (Number(numeroStringArray[i]) % 2 === 0 && Number(numeroStringArray[i + 1]) % 2 === 0) {
      numero_traco_string = numero_traco_string + "-";
    }
  }

  return numero_traco_string;
}

console.log("Questão 06: ", gerarTracosEntrePares(numero));


// Questão 07
const array_05 = [45, 7, 11, 45, 40, 7, 45, 45, 7, 7, 7];

let contagemMaxima = 0;
let elementoMaisFrequente;
let contagemElementos = [];

array_05.forEach((elemento) => {
  if(contagemElementos[elemento]) {
    contagemElementos[elemento]++;
  } else {
    contagemElementos[elemento] = 1;
  }

  if(contagemElementos[elemento] > contagemMaxima) {
    elementoMaisFrequente = elemento;
    contagemMaxima = contagemElementos[elemento];
  }
});

console.log("Questão 07: ", elementoMaisFrequente);


// Questão 08
let array_06 = ["n", "B", "c", "C", "b", "N", "L"];

let arrayElementosMinusculos = array_06.map((elemento) => elemento.toLowerCase());

let arrayItensDiferentes = arrayElementosMinusculos.filter((elemento, index) => arrayElementosMinusculos.indexOf(elemento) === index);

console.log("Questão 08: ", arrayItensDiferentes);


// Questão 09
let vetorParcela_01 = [2, 2, 7, 47, 10];
let vetorParcela_02 = [9, 1, 8, 10, 100];
let maiorComprimento = Math.max(vetorParcela_01.length, vetorParcela_02.length);
let vetorSoma = [];

if (vetorParcela_01.length > vetorParcela_02.length) {
  for (let i = 0; i < vetorParcela_01.length; i++) {
    let elementoVetorParcela_01 = vetorParcela_01[i] ?? 0;
    let elementoVetorParcela_02 = vetorParcela_02[i] ?? 0;

    vetorSoma.push(elementoVetorParcela_01 + elementoVetorParcela_02);
  }
} else if (vetorParcela_01.length < vetorParcela_02.length) {
  for (let i = 0; i < vetorParcela_02.length; i++) {
    let elementoVetorParcela_01 = vetorParcela_01[i] ?? 0;
    let elementoVetorParcela_02 = vetorParcela_02[i] ?? 0;

    vetorSoma.push(elementoVetorParcela_01 + elementoVetorParcela_02);
  }
} else {
  // O tamanho do vetorParcela_01 foi escolhido para a iteração

  for (let i = 0; i < vetorParcela_01.length; i++) {
    let elementoVetorParcela_01 = vetorParcela_01[i] ?? 0;
    let elementoVetorParcela_02 = vetorParcela_02[i] ?? 0;

    vetorSoma.push(elementoVetorParcela_01 + elementoVetorParcela_02);
  }
}

console.log("Questão 09: ", vetorSoma);


// Questão 10
let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];

vetorAdiciona.forEach((value) => {
  vetorPilha.push(value);
});

console.log("Questão 10: ", vetorPilha);