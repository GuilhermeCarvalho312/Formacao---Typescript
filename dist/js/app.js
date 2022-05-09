import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault(); //Não deixa a página atualizar sempre
    controller.adiciona();
});
