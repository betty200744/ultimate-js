import {binarySearchRecursive} from "./binarySearchRecursive";

it('binarySearchRecursive', async () => {
    let res = binarySearchRecursive([2, 3, 1, 6, 9, 8, 10, 5, 4, 7], 7)
    expect(res).toBeTruthy()
    res = binarySearchRecursive([2, 3, 1, 6, 9, 8, 10, 5, 4, 7], 20)
    expect(res).toBeFalsy()
});
