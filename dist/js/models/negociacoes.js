export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    addNegotiation(negociacao) {
        //Somente é preciso especificar o retorno em métodos que precisam de retorno
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
