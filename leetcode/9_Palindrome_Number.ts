import {reverse} from "./7_reverse";

function isEven(x: number): boolean {
    return x % 2 === 0
}

export function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false
    }
    let s = String(x)
    let haft = s.length / 2
    let left: string
    let right: string
    if (x % 2 === 0) {
        left = s.slice(0, haft)
        right = s.slice(haft)
    } else {
        left = s.slice(0, haft)
        right = s.slice(haft + 1, s.length)
    }
    return Number(left) === reverse(Number(right))
}