// Exemplo de código Javascript simples
console.log("Olá Mundo!");

// Declaração de variáveis
var nome = "João";
console.log(nome);

var idade = 25;
console.log(idade);

var ehEstudante = false;
console.log(ehEstudante);

/*
Este é um comentário 
de múltiplas linhas
*/

// Operadores
var x = 10;
var y = 5;
console.log("x: " + x, ", y: " + y);

var soma = x + y;
console.log("soma: " + soma);

var subtracao = x - y;
console.log("subtração: " + subtracao);

var multiplicacao = x * y;
console.log("multiplicação: " + multiplicacao);

var divisao = x / y;
console.log("divisão: " + divisao);

var resto = x % y;
console.log("resto: " + resto);

// Selecionando e manipulando elemesntos HTML
var paragrafos = document.getElementsByTagName("p");
console.log(paragrafos[0]);

var paragrafo = paragrafos[0];
console.log(paragrafo);

console.log(paragrafo.innerHTML);
paragrafo.innerHTML = '5 pontos ninguém quis';
paragrafo.style.color = 'red';

// Adicionando evento de clique ao botão
var botao1 = document.getElementById("botao1");
console.log(botao1);

botao1.addEventListener("click", function () {
    alert("O botão foi clicado e ninguém ganhou 5 pontos");
});

// Alterando outro elemento a partir do evento do botão
var paragrafo1 = document.getElementById("paragrafo");
var botao2 = document.getElementById("botao2");

botao2.addEventListener("click", () => {
    paragrafo1.innerHTML = "Texto alterado com Javascript";
});

// Selecionando elementos pela classe
var paragrafos = document.getElementsByClassName("paragrafos");
console.log(paragrafos);

for (var indice = 0; indice < paragrafos.length; indice++) {
    paragrafos[indice].style.color = "red";
    paragrafos[indice].innerHTML = "Somos iguais mas eu sou o " + (indice + 1);
}