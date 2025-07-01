const readline = require('readline-sync');

let numero = parseInt(readline.question("Digite um número: "));

if (numero % 2 === 0) {
  if (numero >= 0) {
    console.log("O número " + numero + " é par e positivo!");
  } else {
    console.log("O número " + numero + " é par e negativo!");
  }
} else {
  if (numero >= 0) {
    console.log("O número " + numero + " é ímpar e positivo!");
  } else {
    console.log("O número " + numero + " é ímpar e negativo!");
  }
}