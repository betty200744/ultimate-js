import {insertionSort} from "./insertionSort";

it('insertionSort', async () => {
    let res = insertionSort([2, 3, 1, 6, 9])
    console.log(res)

    expect(res).toEqual([1, 2, 3, 6, 9])
});
