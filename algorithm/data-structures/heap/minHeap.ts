import {Heap} from "./heap";

export class MinHeap extends Heap {
    constructor(items: number[] = []) {
        super(items);
    }

    extract(): number {
        // swap last child to root
        this.swap(0, this.items.length - 1)
        // remove the root
        let min = this.items.pop()
        // heapifyDown
        this.heapifyDown(0)
        return min
    }

    pairIsNotCorrectOrder(firstItem: number, secondItem: number): boolean {
        return firstItem <= secondItem
    }
}