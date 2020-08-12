import {MaxHeap} from "./maxHeap";

describe('MaxHeap', async () => {
    it('build', async () => {
        let arr = [7, 2, 6, 9, 3, 5, 1, 8]
        let maxHeap = new MaxHeap(arr)
        maxHeap.build()
        console.log(maxHeap.items)
    });
    it('swap', async () => {
        let arr = [7, 2, 6, 9, 3, 5, 1, 8]
        let maxHeap = new MaxHeap(arr)
        maxHeap.swap(0, 1)
        console.log(maxHeap.items)
    });
    it('add', async () => {
        // let arr = [7, 2, 6, 9, 3, 5, 1, 8]
        let maxHeap = new MaxHeap()
        maxHeap.add(7)
        maxHeap.add(2)
        maxHeap.add(6)
        maxHeap.add(9)
        console.log(maxHeap.items)
    });
    it('remove', async () => {
        let arr = [7, 2, 6, 9, 3, 5, 1, 8]
        let maxHeap = new MaxHeap(arr)
        maxHeap.build()
        console.log(maxHeap.items)
        maxHeap.remove()
        console.log(maxHeap.items)
    });
    it('extract', async () => {
        let arr = [7, 2, 6, 9, 3, 5, 1, 8]
        let maxHeap = new MaxHeap(arr)
        maxHeap.build()
        let max = maxHeap.extract()
        expect(max).toEqual(9)
        max = maxHeap.extract()
        expect(max).toEqual(8)
    });
    it('find', async () => {
        let arr = [7, 2, 6, 9, 3, 5, 1, 8]
        let maxHeap = new MaxHeap(arr)
        maxHeap.build()
        let res = maxHeap.find(9)
        expect(res[0]).toEqual(0)
    });
    it('peek', async () => {
        let arr = [7, 2, 6, 9, 3, 5, 1, 8]
        let maxHeap = new MaxHeap(arr)
        maxHeap.build()
        let res = maxHeap.peek()
        expect(res).toEqual(9)
    });

})