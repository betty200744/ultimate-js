export function logProperty() {
    return function (target: Object, propertyKey: string) {
        console.log(`${propertyKey}, called`)
    }
}