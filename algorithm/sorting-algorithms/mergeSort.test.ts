import {mergeSort} from "./mergeSort";

it('mergeSort', async () => {
    let res = mergeSort([2, 3, 1, 6, 9])
    console.log(res)
    expect(res).toEqual([1, 2, 3, 6, 9])
});
