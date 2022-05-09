import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
  private element: HTMLElement;

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  template(model: Negociacoes): string {
    //template string permite quebrar a linha sem ficar concatenando
    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map((negociacao) => { //${} => Interpolação, processa comandos javascript
                  return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(
                              negociacao.data
                            )}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                        `;
                })}
            </tbody>
        </table>
        `;
  }

  update(model: Negociacoes): void {
    const template = this.template(model);
    console.log("template: ", template);
    this.element.innerHTML = template;
  }
}
