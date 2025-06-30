// Início do algoritmo
let leia = require('readline-sync');

// Solicita o salário
let salario = leia.questionFloat('Digite o salário: ');

// Solicita o abono
let abono = leia.questionFloat('Digite o abono: ');

// Calcula o novo salário
let novoSalario = salario + abono;

// Exibe o novo salário
console.log('O novo salário é: ' + novoSalario);

// Fim do algoritmo