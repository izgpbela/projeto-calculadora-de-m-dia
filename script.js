var nome = prompt("digite seu nome");
var valorParaConversao = prompt(
  "Por favor, insira o valor que deseja converter em dólares"
);
var valorEmReal = 1;
var cotacaoDoDolar = 5.06;
var valorEmReal = valorParaConversao * cotacaoDoDolar;

valorEmReal = valorEmReal.toFixed(2);
alert("Olá " + nome + " valor que deseja converter é de R$" + valorEmReal);
