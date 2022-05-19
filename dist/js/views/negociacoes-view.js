import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
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
    dateFormater(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}