export abstract class View<T> {
  // Classe abstract não pode se criar uma instanciação direta da classe
  // <T> generics, deixa a escolha da classe filha qual tipo de argumento entrará
  protected element: HTMLElement; // Protected permite que as classes filhas possam ler a propriedade porém sem alterala

  constructor(selector: string) {
    this.element = document.querySelector(selector);
  }

  update(model: T): void {
    const template = this.template(model);
    this.element.innerHTML = template;
  }

  abstract template(_model: T): string; //Assim a definição do método fica para a classe filha. E se não for definido o typescript mostrará o erro
}
