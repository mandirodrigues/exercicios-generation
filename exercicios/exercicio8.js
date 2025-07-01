const readline = require('readline-sync');

let saldo = 1000.00;

let operacao = parseInt(readline.question("Digite o código da operação (1-Saldo | 2-Saque | 3-Depósito): "));

switch (operacao) {
  case 1:
    console.log("Operação - Saldo");
    console.log("Saldo: R$ " + saldo.toFixed(2));
    break;

  case 2:
    let valorSaque = parseFloat(readline.question("Valor do saque: R$ "));
    console.log("Operação - Saque");
    if (valorSaque > saldo) {
      console.log("Saldo Insuficiente!");
    } else {
      saldo -= valorSaque;
      console.log("Novo Saldo: R$ " + saldo.toFixed(2));
    }
    break;

  case 3:
    let valorDeposito = parseFloat(readline.question("Valor do depósito: R$ "));
    saldo += valorDeposito;
    console.log("Operação - Depósito");
    console.log("Novo Saldo: R$ " + saldo.toFixed(2));

    break;

  default:
    console.log("Operação Inválida!");
    break;
}