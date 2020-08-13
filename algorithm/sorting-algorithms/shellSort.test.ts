import {shellSort} from "./shellSort";

it('shellSort', async () => {
    let res = shellSort([2, 3, 1, 6, 9, 8, 10, 5, 4, 7])
    console.log(res)

    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
});
