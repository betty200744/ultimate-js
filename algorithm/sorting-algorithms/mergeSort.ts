function merge(left: number[], right: number[]): number[] {
    let sortArr: number[] = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            sortArr.push(left.shift())
        } else {
            sortArr.push(right.shift())
        }
    }
    if (left.length > 0) {
        sortArr = sortArr.concat(...left)
    }
    if (right.length > 0) {
        sortArr = sortArr.concat(...right)
    }
    return sortArr
}

export function mergeSort(arr: number[]) {
    const {length} = arr
    let half = Math.floor(length / 2)
    let left = arr.slice(0, half)
    let right = arr.slice(half)
    if (left.length > 1) {
        mergeSort(left)
    }
    if (right.length > 1) {
        mergeSort(right)
    }
    return merge(left, right)
}