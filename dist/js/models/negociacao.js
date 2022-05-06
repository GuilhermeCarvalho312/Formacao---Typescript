export class Negociacao {
    constructor(_data, // Todo mundo pode ler, porém não pode alterar
    quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const dataCopy = new Date(this._data.getTime()); // Programação defensiva, nova refeência do atributo _data
        return dataCopy;
    }
}
