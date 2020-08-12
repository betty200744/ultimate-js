import {twoSum, twoSum1} from "./1_twoSum";
import {lengthOfLongestSubstring} from "./3_lengthOfLongestSubstring";

describe('1', async () => {
    it('twoSum', async () => {
        let nums = [2, 7, 11, 15]
        let target = 9
        let res = twoSum(nums, target)
        expect(res).toEqual([0, 1])
    });
    it('twoSum1', async () => {
        let nums = [2, 7, 11, 15]
        let target = 9
        let res = twoSum1(nums, target)
        expect(res).toEqual([0, 1])
    });
})
describe('3', async () => {
    it('lengthOfLongestSubstring', async () => {
        let res = lengthOfLongestSubstring("abcabcbb")
        expect(res).toEqual(3)
    });

})
