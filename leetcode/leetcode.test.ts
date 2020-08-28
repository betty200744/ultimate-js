import {twoSum, twoSum1} from "./array/1_twoSum";
import {lengthOfLongestSubstring} from "./string/3_lengthOfLongestSubstring";
import {findMedianSortedArrays} from "./4_findMedianSortedArrays";
import {reverse} from "./7_reverse";
import {isPalindrome} from "./9_palindromeNumber";
import {removeDuplicates} from "./26_removeDuplicates";
import {LRUCache} from "./146. LRU_Cache";

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
it('26. removeDuplicates', async () => {
    let res = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
    expect(res).toEqual(5)
});

it('146. LRU Cache', async () => {
    let cache = new LRUCache();
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toEqual(1);       // returns 1
    cache.put(3, 3);    // evicts key 2
    expect(cache.get(2)).toEqual(-1);       // returns -1 (not found)
    cache.put(4, 4);    // evicts key 1
    expect(cache.get(1)).toEqual(-1);       // returns -1 (not found)
    expect(cache.get(3)).toEqual(3);       // returns 3
    expect(cache.get(4)).toEqual(4);       // returns 4
});

