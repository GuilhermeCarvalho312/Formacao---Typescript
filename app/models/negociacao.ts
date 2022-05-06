export class Negociacao {
  constructor(
    private _data: Date, // Todo mundo pode ler, porém não pode alterar
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date{
    const dataCopy = new Date(this._data.getTime()); // Programação defensiva, nova refeência do atributo _data
    return dataCopy;
  }
}
