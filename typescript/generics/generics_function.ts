export function identity<T>(arg: T): T {
    return arg
}

export let identity1 = <T>(arg: T): T => {
    return arg
}
