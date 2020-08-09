
export function callLog() {
    return function (target, propertyKey: PropertyKey, descriptor: PropertyDescriptor) {
        console.log(`${descriptor.value.name}, called`)
    }
}