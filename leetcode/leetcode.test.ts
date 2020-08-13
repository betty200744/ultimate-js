import {twoSum, twoSum1} from "./1_twoSum";
import {lengthOfLongestSubstring} from "./3_lengthOfLongestSubstring";
import {findMedianSortedArrays} from "./4_findMedianSortedArrays";
import {reverse} from "./7_reverse";
import {isPalindrome} from "./9_Palindrome_Number";

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
describe('4', async () => {
    it('findMedianSortedArrays', async () => {
        let res = findMedianSortedArrays([1, 2], [3, 4])
        expect(res).toEqual(2.5)
    });
})
it('7 reverse', async () => {
    let res = reverse(123)
    expect(res).toEqual(321)
});
it('9. Palindrome Number', async () => {
    let res = isPalindrome(121)
    expect(res).toEqual(true)
});

