export abstract class View<T> {
  // Classe abstract não pode se criar uma instanciação direta da classe
  // <T> generics, deixa a escolha da classe filha qual tipo de argumento entrará
  protected element: HTMLElement; // Protected permite que as classes filhas possam ler a propriedade porém sem alterala
  private escape: boolean = false;

  constructor(selector: string, escape?: boolean) {
    const element = document.querySelector(selector);
    if (element) {
      this.element = element as HTMLElement;
    } else {
      throw Error(`Selector ${selector} not found`);
    }
    if (escape) {
      this.escape = escape;
    }
  }

  public update(model: T): void {
    let template = this.template(model);
    if (this.escape) {
      template = template.replace(/<script>[\s\S]*?<\/script/, "");
    }
    this.element.innerHTML = template;
  }

  protected abstract template(_model: T): string; //Assim a definição do método fica para a classe filha. E se não for definido o typescript mostrará o erro
}
