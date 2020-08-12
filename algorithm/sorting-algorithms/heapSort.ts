import {MaxHeap} from "../data-structures/heap/maxHeap";

export function heapSort(arr: number[]): number[] {
    const {length} = arr
    let sortArr = []
    let maxHeap = new MaxHeap(arr)
    maxHeap.build()
    for (let i = 0; i < length; i++) {
        sortArr.unshift(maxHeap.extract())
    }
    return sortArr
}