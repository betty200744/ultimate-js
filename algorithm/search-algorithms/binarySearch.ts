import {quickSort} from "../sorting-algorithms/quickSort";

export function binarySearch(arr: number[], value): boolean {
    const sortedArray = quickSort(arr)
    let low = 0;
    let height = arr.length - 1
    while (low <= height) {
        let mid = Math.floor((low + height) / 2)
        if (value > sortedArray[mid]) {
            low = mid + 1
        } else if (value < sortedArray[mid]) {
            height = mid - 1
        } else {
            return true
        }
    }
    return false
}