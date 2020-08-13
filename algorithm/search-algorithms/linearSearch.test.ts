import {binarySearch} from "./binarySearch";

it('linearSearch', async () => {
    let res = binarySearch([2, 3, 1, 6, 9, 8, 10, 5, 4, 7], 7)
    expect(res).toBeTruthy()
});
