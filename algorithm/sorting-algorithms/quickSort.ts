export function quickSort(arr: number[]) {
    const {length} = arr
    if (length < 2) {
        return arr
    }
    let pivot: number = arr.pop()
    let left: number[] = []
    let right: number[] = []
    for (let number of arr) {
        if (number < pivot) {
            left.push(number)
        } else {
            right.push(number)
        }
    }
    left = quickSort(left)
    right = quickSort(right)
    return left.concat(pivot, ...right)
}