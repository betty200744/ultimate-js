import {MinHeap} from "./minHeap";

describe('MinHeap', async () => {
    it('build', async () => {
        let arr = [7, 2, 6, 9, 3, 5, 1, 8]
        let minHeap = new MinHeap(arr)
        minHeap.build()
        console.log(minHeap.items)
    });
    it('swap', async () => {
        let arr = [7, 2, 6, 9, 3, 5, 1, 8]
        let minHeap = new MinHeap(arr)
        minHeap.swap(0, 1)
        console.log(minHeap.items)
    });
    it('add', async () => {
        // let arr = [7, 2, 6, 9, 3, 5, 1, 8]
        let minHeap = new MinHeap()
        minHeap.add(7)
        minHeap.add(2)
        minHeap.add(6)
        minHeap.add(9)
        console.log(minHeap.items)
    });
    it('remove', async () => {
        let arr = [7, 2, 6, 9, 3, 5, 1, 8]
        let minHeap = new MinHeap(arr)
        minHeap.build()
        console.log(minHeap.items)
        minHeap.remove()
        console.log(minHeap.items)
    });
    it('find', async () => {
        let arr = [7, 2, 6, 9, 3, 5, 1, 8]
        let minHeap = new MinHeap(arr)
        minHeap.build()
        let res = minHeap.find(1)
        expect(res[0]).toEqual(0)
    });
    it('peek', async () => {
        let arr = [7, 2, 6, 9, 3, 5, 1, 8]
        let minHeap = new MinHeap(arr)
        minHeap.build()
        let res = minHeap.peek()
        expect(res).toEqual(1)
    });

})