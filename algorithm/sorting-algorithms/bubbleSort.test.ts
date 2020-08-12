import {bubbleSort} from "./bubbleSort";

it('bubbleSort', async () => {
    let res = bubbleSort([2, 3, 1, 6, 9])
    expect(res).toEqual([1, 2, 3, 6, 9])
});
