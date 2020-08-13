import {quickSort} from "../sorting-algorithms/quickSort";

function SearchRecursive(sortedArray: number[], value: number, low: number, height: number): boolean {
    if (low <= height) {
        let mid = Math.floor((low + height) / 2)
        if (value > sortedArray[mid]) {
            return SearchRecursive(sortedArray, value, mid + 1, height)
        } else if (value < sortedArray[mid]) {
            return SearchRecursive(sortedArray, value, low, mid - 1)
        } else {
            return true
        }
    }
    return false
}

export function binarySearchRecursive(arr: number[], value): boolean {
    const sortedArray = quickSort(arr)
    let low = 0;
    let height = arr.length - 1
    return SearchRecursive(sortedArray, value, low, height)
}