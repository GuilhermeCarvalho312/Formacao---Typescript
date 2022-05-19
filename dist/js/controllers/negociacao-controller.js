import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { mensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes(); // Nesse caso é necessário inicializar a variável
        this.negociacoesView = new NegociacoesView("#negociacoesView"); //passando a ID do HTML
        this.mensagemView = new mensagemView("#mensagemView");
        this.SABADO = 6;
        this.DOMINGO = 0;
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.isBussinessDay(negociacao.data)) {
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas!");
            return;
        }
        this.negociacoes.addNegotiation(negociacao);
        this.limparFormulário();
        this.updateView();
    }
    isBussinessDay(data) {
        return data.getDay() > this.DOMINGO && data.getDay() < this.SABADO;
    }
    criaNegociacao() {
        const exp = /-/g; // Expressão regular sempre é iniciada com //, encontra todos os '-' quando colocamos o 'g' ao lado
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulário() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    updateView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }
}
