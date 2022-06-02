export function loginTimeOfExecution(inSeconds: boolean = false) {
  return function (
    target: any, // target é a função construtora da classe
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {// ou Array<any> Deixa os parâmetros como um array
      let divisor = 1;
      let unity = 'milisegundos';

      if(inSeconds) {
        divisor = 1000;
        unity = 'segundos';
      }

      const t1 = performance.now();
      const retorno = originalMethod.apply(this, args);
      const t2 = performance.now();
      console.log(
        `${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unity}`
      );
      retorno;
    };

    return descriptor;
  };
}
