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
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = this.criaNegociacao();
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
