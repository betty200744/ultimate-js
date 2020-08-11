import {Heap} from "./heap";

export class MinHeap extends Heap {
    constructor(items: number[] = []) {
        super(items);
    }

    pairIsNotCorrectOrder(firstItem: number, secondItem: number): boolean {
        return firstItem <= secondItem
    }
}