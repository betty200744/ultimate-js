export function selectionSort(arr: number[]) {
    const {length} = arr;
    for (let i = 0; i < length - 1; i++) {
        let min = i
        for (let j = i; j < length - 1; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}
