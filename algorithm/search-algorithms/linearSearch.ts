export function linearSearch(arr: number[], value: number): boolean {
    for (let number of arr) {
        if (number === value) {
            return true
        }
    }
    return false
}