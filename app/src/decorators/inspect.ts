export function inspect( // Esse decorator não tem o wrapper
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Método: ${propertyKey}`);
    console.log(`Parâmetros: ${JSON.stringify(args)}`);
    const result = originalMethod.apply(this, args);
    console.log(`Retorno: ${JSON.stringify(result)}`);
    result;
  };

  return descriptor;
}
