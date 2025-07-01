const readline = require('readline-sync');

let codigo = parseInt(readline.question("Código do Produto (1 a 6): "));
let quantidade = parseInt(readline.question("Quantidade: "));

let nomeProduto = "";
let precoUnitario = 0;

switch (codigo) {
  case 1:
    nomeProduto = "Cachorro Quente";
    precoUnitario = 10.00;
    break;
  case 2:
    nomeProduto = "X-Salada";
    precoUnitario = 15.00;
    break;
  case 3:
    nomeProduto = "X-Bacon";
    precoUnitario = 18.00;
    break;
  case 4:
    nomeProduto = "Bauru";
    precoUnitario = 12.00;
    break;
  case 5:
    nomeProduto = "Refrigerante";
    precoUnitario = 8.00;
    break;
  case 6:
    nomeProduto = "Suco de laranja";
    precoUnitario = 13.00;
    break;
  default:
     console.log("Código inválido!");
    return;
}

let valorTotal = quantidade * precoUnitario;

console.log("Produto: " + nomeProduto);
console.log("Valor total: R$ " + valorTotal.toFixed(2));