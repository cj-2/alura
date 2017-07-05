// Classe de controle de negociação NegociacaoController

class NegociacaoController{
  constructor(){
    // Estou criando um atalho para document.querySelector para acelerar o fluxo
    // de trabalho e progamação o chamando com apenas $.
    // O .bind serve para que o querySelector não perca a associação com o document.
    let $ = document.querySelector.bind(document);

    // Estou criando um "cache" para os inputs data, quantidade e valor.
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }

  // Estou criando o método adicionar que será executado quando se clicar em submit.
  adicionar(event){
    // Estou me previnindo dos comportamentos padrões do formulário.
    event.preventDefault();

    // Estou tranformando a data que se recebeu do formulario em uma data do Date()
    // pegando o valor do input com o .value, o tranformando em array com o .split('-')
    // e o seprando com o Spread Operator '...'
    let data = new Date(...this._inputData.value
      .split('-')
      // E aqui em .map estou decrecentando apenas os números que não são multiplos de dois,
      // ou seja, o índice é a posição então só posições que não são multiplos de dois
      // irão sofre o -1 (que é o resultado de um número impar modulo de dois)
      .map((item, indice) => item - indice % 2))
    ;

    // Estou acessando o models/negociacao e criando o obejto negociação.
    let negociacao = new Negociacao(data, this._inputQuantidade.value,
      this._inputValor.value);

    console.log(negociacao);

    // Estou zerando os valores do formulário.
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    // Estou retornando o foco para o input de data
    this._inputData.focus();

  }
}
