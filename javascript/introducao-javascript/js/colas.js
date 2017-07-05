// Explicações das funções de manipulação que estou aprendendo nesse curso.

// document, chama todo arquivo html.
var todoSite = document;

// O document pode ser seguido por outras ações, por exemplo o
// .querySelector() que seleciona apenas a parte que quer ser chamada.
var chamarId = document.querySelector('#id');

// Caso queira chamar varias classes do html por exemplo eu posso usar o
// .querySelectorAll(), que criará um Array com todos os objetos com
// a referida classe.
var arrayDeClasses = document.querySelectorAll(.umaClasseDoArry);

// Para ter o numero de dados que um Array possui é usado o .length
var lista = [2, 3, 5];
console.log(lista.length);
// Irá ser impresso no console a quantidade de dados do Array.

// Eu também posso procurar dentro de alguma variavel que já tem algura atribruição
// com o .querySelector, por exemplo:
var tabela = document.querySelector('#tabela');
// Procurando dentro da variavel tabela, que teve a atribução logo acima.
nomeTd = tabela.querySelector('.nome');

// Para chamar apenas o texto que deseja e não todo o código(como o querySelector)
// você pode por exemplo usar o .textContent
var exemplo = document.querySelector('.exemplo');
console.log(exemplo.textContent);
// Que ira imprimir no console com a função console.log, apenas o texto da .exemplo

// Para mudar o texto de algum objeto dentro do HTML é necessário a
// atribuição de uma string ao objeto.textContent
var paragrafo = document.querySelector('.paragrafo-fantasma');
paragrafo.textContent = 'Esse parágrafo teve seu texto alterado pelo JavaScript';

// Para fixar a quantidade de casas decimais de um numero, pode se usar o toFixed
var numero = 2.2973;
numero.toFixed(1);
// numero passará a ser 2.3

// Para mudança no CSS é usada o função .style.tagCss
// Ex, mudando a cor da fonte:
var texto = document.querySelector('.texto-inicial');
texto.style.color = 'red';
// Irá mudar a cor do do objeto que é atribuido a variavel texto

// Para acessar a lista de classes de um objeto se usa o .classList
var objeto = document.querySelector('#objeto');
objeto.classList;

// E para se adicionar uma classe, é usado o .classList.add
var objeto = document.querySelector('#objeto');
objeto.classList.add('classeNova');

// Para "Escutar um Evento" é necessario usar a função .addEventListener()
// Ouvir evento? É caso haja uma interassão com o objeto, como click por exemplo.
// É necessario ter uma função anônima com as ações dentro.
var titulo = document.querySelector('.titulo');
titulo.addEventListener('click', function(){ alert('Olá!'); });
// Caso cliquem no título aparecerá uma mensagem "Olá!"

// Também tem o dblclick que é o duplo click.
// E o input que é execultada a cada letra digitada.

// Short Code de .addEventListener('click'...
botao.onclick = funcaoDoBotao;

// Para adicionar um "Escutar um Evento" em um botão dento de um formulario
// é necessário resetar seu default pois ao contrário o botão irá atualizar
// a página antes de enviar as informações.
// Se desativa o default do HTML pelo event.preventDefault()
var titulo = document.querySelector('.titulo');
titulo.addEventListener('click', function(event)
  {
    event.preventDefault();
  });

// Para acessar o value de uma variavel (No caso de um formulário quando enviado
// as iformações referentes aos input), é necessário o .value
var nome = form.inputName.value;
// No caso acima o inputName é referente ao name="inputName".

// Para criar um objeto dentro do HTML usando JavaScript se usa a função
// document.createElement('p') caso queira criar um parágrafo.
var divSimples = document.createElement('div');

// Para adicionar o objeto criado como filho de outro é necessário usar
// a função nomePai.appendChild
var divPai = document.createElement('div');
var sectionFilho = document.createElement('section');
// Adiciona o sectionFilho no divPai
divPai.appendChild(sectionFilho);

// Resetar dados do formulário
forumario.reset();

// Para quebrar uma função é usado um return vazio (Parecido com um Break.).
return;

// Para empurrar alguma informação apara dentro de um arry é usado o .push("Olá")
array.push(1);

// Outra forma de se repetir mas com mais facilidade um arry atribuindo iformações
// em todos os arrays é com o .forEach()
var erros = [];
erros.forEach(function(objetoDoMomento){
  objetoDoMomento.classList.add('corAzul');
})
// Sendo que o 'objetoDoMomento' equivale ao equivalente objeto do array
// como por exemplo erros[0], erros[1]...

// O .length pose ser usado para descobrir se há algo dentro de um objeto,
// por exemplo, é possivel criar condições com isso.
if(nome.length == 0)
  alert('Escreva seu nome!');

// Para se controlar o html dentro de um objeto pai se pode usar o .innerHTML
// Por exemplo se quiser zerar o que está dentro da div .tabelas
tabelas = querySelector('.tabelas');
tabelas.innerHTML = '';
// Caso apenas use tabelas.innerHTML será impresso uma string do condeudo( HTML )

// Para se remover algo é usado o .remove, e sera removido o objeto ou valor... etc.
botao.onclick = pesquisa.value.remove();
botao.onclick = divInicial.classList.remove('.corDoFundo');

// É possivel identificar o alvo do click de um "ESCUTAMENTO" usando o event
// com o target a frente, event.target
var botao = document.querySelector('#botao');
botao.addEventListener('click', function (event){
  event.target.remove();
});
// Se clicar no botão ele deseparecerá.

// Para se fazer uma ação a div pai de algum objeto por exemplo é usado o .parentNode
var bloco = document.querySelector('#bloco');
texto.addEventListener('click', function(event){
  event.target.parentNode.classList.add('corAzul');
});
// Caso clique por exemplo num parágrafo de texto desse bloco, o bloco ficará azul.

// É possivel fazer a refência a um dos membros de uma repetição usando o prefixo this
papeis.forEach(function(papel){
  papel.createElement('p');
  this.classList.add('corVerde');
});
// Todos os parágrafos terão supostamente a cor verde.

// Para segurar o tempo em que uma ação executará é usado o setTimeout();
setTimeout(function(){
  alert.remove();
}, 6000);
// Sendo que o 6000 é o tempo que demorará para ser execultada em milisegundos.




// Para se criar uma expressão regular é necessario fazer o seguinte:
var nome = document.querySelector('.nome');

var mNome = "Ricardo";
var expressao = new RegExp(nome, 'i')

if(expressao.test(mNome)){
  alert('Olá Ricardo.');
}
// O expressao.test(nome) testa se mNome tem as letras de nome, e se tiver o for igual,
// aparece o alerta 'Olá Ricardo'.
// O 'i' (flag) diz que pode ser maiuscula ou minuscula o teste das letras.




// Requisições
// se usa o XMLHttpRequest(); para criar uma requisição.
var requisicao = new XMLHttpRequest();

// Para configurala é usada o .open
requisicao.open('GET', 'Url da requisição');

// Para que a requisição seja enviada:
requisicao.send();

// Para saber a resposta é necessario escutar o retorno como ja sabemos
requisicao.addEventListener('loada', function(){
  console.log(requisicao.responseText);
  console.log(requisicao.status);
});
// requisicao.responseText retorna um string do que há dentro da pagina de requisição
// requisicao.status recebe o numero de resultado 200, 404, 500...

// Para se transformar o retorno (que costuma ser JSON), é usado o JSON.parse(resposta);
var respostaGET = new XMLHttpRequest();
respostaGET.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

var resposta = respostaGET.responseText;
var pacientes = JSON.parse(resposta);
// Cria um array, chamado pacientes com todo conteudo da resposta da requisição.


// typeof diz o tipo da variavel
tipeof nome;
// Sairá 'String';
