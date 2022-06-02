export function domInjector(selector) {
    return function (target, propertyKey) {
        let element;
        const getterProperty = function () {
            if (!element) {
                element = document.querySelector(selector);
                console.log(`Buscando elemento do DOM com o selector: ${selector} para injetar em ${propertyKey}`);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, {
            get: getterProperty,
        });
    };
}
