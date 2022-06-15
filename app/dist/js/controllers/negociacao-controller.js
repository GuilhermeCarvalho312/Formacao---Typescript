var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { loginTimeOfExecution } from "../decorators/login-time-of-execution.js";
import { DaysOfTheWeek } from "../enums/days-of-the-week.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegotiationsService } from "../services/negociacoes-service.js";
import { printOut } from "../utils/print-out.js";
import { mensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new mensagemView("#mensagemView");
        this.negotiationsService = new NegotiationsService();
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.createFrom(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.isBussinessDay(negociacao.data)) {
            this.mensagemView.update("Apenas negociações em dias úteis são aceitas!");
            return;
        }
        this.negociacoes.addNegotiation(negociacao);
        printOut(negociacao, this.negociacoes);
        this.limparFormulário();
        this.updateView();
    }
    importData() {
        this.negotiationsService.getNegotiationsOfTheDay().then((todayNegotiations) => {
            for (let negociacao of todayNegotiations) {
                this.negociacoes.addNegotiation(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
    }
    isBussinessDay(data) {
        return (data.getDay() > DaysOfTheWeek.DOMINGO &&
            data.getDay() < DaysOfTheWeek.SABADO);
    }
    criaNegociacao() {
        const exp = /-/g;
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
__decorate([
    domInjector("#data")
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInjector("#quantidade")
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector("#valor")
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    inspect,
    loginTimeOfExecution()
], NegociacaoController.prototype, "adiciona", null);
