import { loginTimeOfExecution } from "../decorators/login-time-of-execution.js";
import { DaysOfTheWeek } from "../enums/days-of-the-week.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { mensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes: Negociacoes = new Negociacoes(); // Nesse caso é necessário inicializar a variável
  private negociacoesView = new NegociacoesView("#negociacoesView"); //passando a ID do HTML
  private mensagemView = new mensagemView("#mensagemView");

  constructor() {
    this.inputData = <HTMLInputElement>document.querySelector("#data"); //<Type> é a mesma coisa que colocar o as
    this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement; // 'as' diz para o compilador considerar o tipo que estamos determinando
    this.inputValor = document.querySelector("#valor") as HTMLInputElement;
    this.negociacoesView.update(this.negociacoes);
  }

  @loginTimeOfExecution()
  public adiciona(): void {
    const negociacao = Negociacao.createFrom(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    if (!this.isBussinessDay(negociacao.data)) {
      this.mensagemView.update("Apenas negociações em dias úteis são aceitas!");
      return;
    }
    this.negociacoes.addNegotiation(negociacao);
    this.limparFormulário();
    this.updateView();
  }

  private isBussinessDay(data: Date):boolean {
    return data.getDay() > DaysOfTheWeek.DOMINGO && data.getDay() < DaysOfTheWeek.SABADO;
  }

  private criaNegociacao(): Negociacao {
    const exp = /-/g; // Expressão regular sempre é iniciada com //, encontra todos os '-' quando colocamos o 'g' ao lado
    const date = new Date(this.inputData.value.replace(exp, ","));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    return new Negociacao(date, quantidade, valor);
  }

  private limparFormulário(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private updateView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociação adicionada com sucesso!");
  }
}
