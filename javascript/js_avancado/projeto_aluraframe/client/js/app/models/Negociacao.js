// Classe
class Negociacao {
  // O _ indica que não deve ser mudado (Em algumas linguagens é bloquedo o acesso e modificação.)
  constructor(data, quantidade, valor){
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;
    Object.freeze(this);
  }

  // Metodo (Uma função dentro de uma classe chama Método).
  // Não necessário um function antes.
  // O get cria um acesso apenas por leitura e assim não é possivel alteralo.
  get data(){
    return new Date(this._data.getTime());
  }

  get valor(){
    return this._valor;
  }

  get quantidade(){
    return this._quantidade;
  }

  get volume(){
    return this._valor * this._quantidade;
  }
}
