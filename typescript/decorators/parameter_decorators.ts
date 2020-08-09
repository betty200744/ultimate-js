import "reflect-metadata";


export function logParameter() {
    return function (target: Object, propertyKey: string, parameterIndex: number) {
        console.log(`${propertyKey}, ${parameterIndex}`)
    }
}