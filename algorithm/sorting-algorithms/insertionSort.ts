export function insertionSort(arr: number[]) {
    const {length} = arr;
    for (let i = 1; i < length - 1; i++) {
        let tmp = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > tmp) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = tmp
    }
    return arr
}