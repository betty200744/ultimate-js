// a has default , b is options, c is rest parameters
export function add3(a: number = 1, b?: number, ...c: number[]): number {
    let total = a + b
    for (let n of c) {
        total = total + n
    }
    return total
}


