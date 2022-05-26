export function loginTimeOfExecution(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unity = 'milisegundos';
            if (inSeconds) {
                divisor = 1000;
                unity = 'segundos';
            }
            const t1 = performance.now();
            const retorno = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unity}`);
            retorno;
        };
        return descriptor;
    };
}
