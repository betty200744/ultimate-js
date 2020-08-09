// decorator factory
export function logFac() {
    return function (target) {
        console.log("this is logFac")
    }
}