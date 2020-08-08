// function type
let add: (a: number, b: number) => number = (a: number, b: number): number => {
    return a + b
}
// inferring type
let add2 = (a: number, b: number): number => {
    return a + b
}