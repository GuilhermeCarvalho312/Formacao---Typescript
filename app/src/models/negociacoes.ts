import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Negociacao[] = []; // [] é a mesma coisa que Array<>

  public addNegotiation(negociacao: Negociacao) {
    //Somente é preciso especificar o retorno em métodos que precisam de retorno
    this.negociacoes.push(negociacao);
  }

  public lista(): readonly Negociacao[] {
    // ReadonlyArray<nomeArray> mesma coisa
    // Readonly(somente leitura) não permite modificar o array de retorno da função. readonly nomeArray[] é a mesma coisa que a frase anterior
    return this.negociacoes;
  }
}
