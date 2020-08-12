import {bubbleSort} from "./bubbleSort";
import {heapSort} from "./heapSort";

it('heapSort', async () => {
    let res = heapSort([2, 3, 1, 6, 9])
    console.log(res)
    expect(res).toEqual([1, 2, 3, 6, 9])
});
