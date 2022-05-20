import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); //Não deixa a página atualizar sempre
    controller.adiciona();
  });
} else {
  throw Error(
    "Não foi possível iniciar a aplicação, verifique se o forms existe"
  );
}
