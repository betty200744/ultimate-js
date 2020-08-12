export function bubbleSort(arr: number[]) {
    let swagged = false
    const {length} = arr;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swagged = true
            }
        }
        if (!swagged) {
            return arr
        }
    }
    return arr
}