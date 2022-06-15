export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    addNegotiation(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    toText() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}
