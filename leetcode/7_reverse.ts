export function reverse(x: number): number {
    const maxLimit = Math.pow(2, 32 - 1)
    const minLimit = -maxLimit
    if (x > maxLimit || x < minLimit) {
        return 0
    }
    let s: string = String(Math.abs(x)).split('').reverse().join('')
    return ((x > 0) ? 1 : -1) * Number(s)
}