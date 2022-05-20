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

  public static createFrom(dataString:string, quantidadeString:string, valorString:string): Negociacao {
    const exp = /-/g; // Expressão regular sempre é iniciada com //, encontra todos os '-' quando colocamos o 'g' ao lado
    const date = new Date(dataString.replace(exp, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }
}
