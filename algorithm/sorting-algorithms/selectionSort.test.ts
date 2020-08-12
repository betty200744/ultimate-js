import {selectionSort} from "./selectionSort";

it('selectionSort', async () => {
    let res = selectionSort([2, 3, 1, 6, 9])
    expect(res).toEqual([1, 2, 3, 6, 9])
    console.log(res)
});

