import { escape } from "../decorators/escape.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
  @escape
  protected template(model: Negociacoes): string {
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
                ${model
                  .lista()
                  .map((negociacao) => {
                    //${} => Interpolação, processa comandos javascript
                    return `
                        <tr>
                            <td>${this.dateFormater(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                        `;
                  })
                  .join("")}
            </tbody>
        </table>
        `;
  }

  private dateFormater(data: Date): String {
    return new Intl.DateTimeFormat().format(data);
  }
}
