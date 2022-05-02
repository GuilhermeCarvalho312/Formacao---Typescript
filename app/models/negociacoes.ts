import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  addNegotiation(negociacao: Negociacao) {
    //Somente é preciso especificar o retorno em métodos que precisam de retorno
    this.negociacoes.push(negociacao);
  }

  lista(): Array<Negociacao> {
    return this.negociacoes;
  }
}
