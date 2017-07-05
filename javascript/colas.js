//////////////////////	Comandos JavaScript:

// Alerta na tela.
alert("Isso é um alerta na tela!");

// Promp, pede que o usuário digite devolva alguma informação e deposita na variavel "g":
var g = prompt("Informe um número.");

// Imprime o que está dentro da função.
document.write("Isso será impresso!");

// Aproxima o Número:
Math.round(1.98); -> 2

// Cria um Número RANDOM:
Math.random();

// Criar função:
function nomeDaFuncao(){
...
}

// Função com Parâmetros:
var x = 1;
function nomeDaFuncao(x){
 return ...
}

// Mensagem que so aparece no Log:
console.log("Olá, estou escondida...");

// Receber um TEXTO de um input e transformar em INTEIRO:
var a = "42";
a = parseInt(a);
document.write(a + 8); -> 50

// MESMA FUNÇÃO que a parseInt, porem devolve Float:
parseFloat("12.13"); -> 12.13


////

// Recebe o que foi digitado no input (Ou o valor que retorne:
Foi digitado no input: 5
var recebeu = document.querySelector("input");
input.value == 5

// Executa algo se clicado:
var button = document.querySelector("button");
button.onclick = executar; -> Executa função "executar" se receber que o botão foi acionado.

// Devolve o valor de input:
var input = document.querySelector("input");
alert(input.value);

////


// Tamanho do Array
arrayName.length;

// Adicionar itens no Array
arrayName.push(itemAdicionar);


//////////////////////	Características do JavaScript


// Primeiro valor é uma STRING e o segundo é NÚMERO (o mais concatena):
document.write("18" + 20); -> 1820

// Soma e imprime:
document.write(18 + 20); -> 38

// Cria uma variavel:
var a = 25;

// Cria uma variavel string:
var palavra = "Carlos"

// True/False
var b = 1; -> True
var b = 0; -> False

// Condição:
if (a > b){
...
} else {
...
}

// Repetições:
while(a > b){
...
}

for (var y = 1; y >= 20; y++){
...
}

// Quebra de repetição:
break;

// Pode se acessar uma Função ou Perâmetro apenas chamando o seu nome (Não será executada, mas se uma acionada exercerá sua "função")
button.onclick = verifica; -> Rodará verifica(); caso cliquem no button.
