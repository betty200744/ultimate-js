import {quickSort} from "./quickSort";

it('bubbleSort', async () => {
    let res = quickSort([3, 2, 6, 9, 8, 1])
    expect(res).toEqual([1, 2, 3, 6, 8, 9])
});