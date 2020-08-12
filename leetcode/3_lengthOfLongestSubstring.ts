export function lengthOfLongestSubstring(s: string) {
    const map: { [key: string]: number } = {}
    let startIndex = -1
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        const character = s[i];
        // 如果当前字符出现过，那么当前子串的起始位置为该字符最新的位置
        if (map[character] > startIndex) {
            startIndex = map[character];
        }

        if (i - startIndex > max) {
            max = i - startIndex;
        }
        map[character] = i;
    }
    return max
}