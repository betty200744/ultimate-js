/*
* root : i = 0
* parent(i):  (i-1)/2
* left(i): 2*i + 1
* right(i): 2*i + 2
* 2^n , n 为level， 2^n为最小size
*
* */
export class Heap {
    items: number[]

    constructor(items: number[] = []) {
        this.items = items
    }

    build(): Heap {
        for (let i = Math.floor(this.items.length / 2); i >= 0; i--) {
            this.heapifyDown(i)
        }
        return this
    }

    getParentIndex(childIndex: number): number {
        return Math.floor((childIndex - 1) / 2);
    }

    hasParent(childIndex: number): boolean {
        return this.getParentIndex(childIndex) >= 0
    }

    getLeftChild(parentIndex: number): number {
        return parentIndex * 2 + 1
    }

    getRightChild(parentIndex: number): number {
        return parentIndex * 2 + 2
    }

    swap(indexA: number, indexB: number) {
        if (indexA < this.items.length && indexB < this.items.length) {
            let tmp = this.items[indexA]
            this.items[indexA] = this.items[indexB]
            this.items[indexB] = tmp
        }
    }

    pairIsNotCorrectOrder(firstItem: number, secondItem: number): boolean {
        throw new Error("not implements")
    }

    heapifyUp(childIndex: number) {
        let parentIndex = this.getParentIndex(childIndex)
        if (parentIndex >= 0 && this.pairIsNotCorrectOrder(this.items[childIndex], this.items[parentIndex])) {
            this.swap(childIndex, parentIndex)
            this.heapifyUp(parentIndex)
        }
    }

    heapifyDown(parentIndex: number) {
        let lIndex = this.getLeftChild(parentIndex)
        let rIndex = this.getRightChild(parentIndex)
        let maxIndex = parentIndex
        if (lIndex < this.items.length && this.pairIsNotCorrectOrder(this.items[lIndex], this.items[maxIndex])) {
            maxIndex = lIndex
        }
        if (rIndex < this.items.length && this.pairIsNotCorrectOrder(this.items[rIndex], this.items[maxIndex])) {
            maxIndex = rIndex
        }
        if (maxIndex !== parentIndex) {
            this.swap(maxIndex, parentIndex)
            return this.heapifyDown(maxIndex)
        }
    }

    add(item: number) {
        // insert next space
        this.items.push(item)
        // heapifyUp
        this.heapifyUp(this.items.length - 1)
    }

    remove() {
        // swap last child to root
        this.swap(0, this.items.length - 1)
        // remove the root
        this.items.pop()
        // heapifyDown
        this.heapifyDown(0)
        return this
    }

    find(item: number): number[] {
        const foundIndices = []
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === item) {
                foundIndices.push(i)
            }
        }
        return foundIndices
    }

    peek() {
        if (this.items.length === 0) {
            return null;
        }

        return this.items[0];
    }
}
