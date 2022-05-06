export class Negociacoes {
    constructor() {
        this.negociacoes = []; // [] é a mesma coisa que Array<>
    }
    addNegotiation(negociacao) {
        //Somente é preciso especificar o retorno em métodos que precisam de retorno
        this.negociacoes.push(negociacao);
    }
    lista() {
        // ReadonlyArray<nomeArray> mesma coisa
        // Readonly(somente leitura) não permite modificar o array de retorno da função. readonly nomeArray[] é a mesma coisa que a frase anterior
        return this.negociacoes;
    }
}
