export function shellSort(arr: number[]) {
    const {length} = arr
    let gap = Math.floor(length / 2)
    while (gap > 0) {
        for (let i = 0; i < length - gap; i++) {
            let currentIndex = i;
            let gapShiftedIndex = i + gap;
            while (currentIndex >= 0) {
                if (arr[gapShiftedIndex] < arr[i]) {
                    [arr[gapShiftedIndex], arr[i]] = [arr[i], arr[gapShiftedIndex]]
                }
                gapShiftedIndex++
                currentIndex--
            }
        }
        gap = Math.floor(gap / 2)
    }
    return arr
}