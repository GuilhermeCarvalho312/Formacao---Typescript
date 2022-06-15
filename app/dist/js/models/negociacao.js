export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const dataCopy = new Date(this._data.getTime());
        return dataCopy;
    }
    toText() {
        return `Data: ${this.data},
    Quantidade: ${this.quantidade},
    Valor: ${this.valor}`;
    }
    static createFrom(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
