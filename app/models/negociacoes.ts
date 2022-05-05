import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  addNegotiation(negociacao: Negociacao) {
    //Somente é preciso especificar o retorno em métodos que precisam de retorno
    this.negociacoes.push(negociacao);
  }

  lista(): ReadonlyArray<Negociacao> { // Readonly(somente leitura) não permite modificar o array de retorno da função
    return this.negociacoes;
  }
}
