export class NegociacoesView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
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
                ${model.lista().map((negociacao) => {
            return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                        `;
        })}
            </tbody>
        </table>
        `;
    }
    update(model) {
        const template = this.template(model);
        console.log("template: ", template);
        this.element.innerHTML = template;
    }
}
