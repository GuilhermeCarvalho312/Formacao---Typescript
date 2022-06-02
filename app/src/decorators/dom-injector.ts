export function domInjector(selector: string) {
  return function (target: any, propertyKey: string) {
    let element: HTMLElement;

    const getterProperty = function () {
      if (!element) {
        element = <HTMLElement>document.querySelector(selector);
        console.log(
          `Buscando elemento do DOM com o selector: ${selector} para injetar em ${propertyKey}`
        );
      }
      return element;
    };

    // Muda a propriedade de um objeto, os argumentos são (qualObjeto, qualPropriedade, valor que será colocado)
    Object.defineProperty(target, propertyKey, {
      get: getterProperty,
    });
  };
}
