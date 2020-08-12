import {Heap} from "./heap";

export class MaxHeap extends Heap {
    constructor(items: number[] = []) {
        super(items);
    }

    extract(): number {
        // swap last child to root
        this.swap(0, this.items.length - 1)
        // remove the root
        let max = this.items.pop()
        // heapifyDown
        this.heapifyDown(0)
        return max
    }

    pairIsNotCorrectOrder(firstItem: number, secondItem: number): boolean {
        return firstItem >= secondItem
    }
}