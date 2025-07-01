const readline = require('readline-sync');

let A = parseInt(readline.question("Digite o número A: "));
let B = parseInt(readline.question("Digite o número B: "));
let C = parseInt(readline.question("Digite o número C: "));

let soma = A + B;

console.log("${A} + ${B} = $(soma)");

if (soma > C) {
    console.log("A Soma de A + B é Maior do que C");
} else if (soma < C) {
    console.log("A soma de A + B é Menor do que C");
} else {
    console.log("A Soma de A + B é Igual a C");
}
