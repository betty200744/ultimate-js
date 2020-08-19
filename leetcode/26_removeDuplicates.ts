export function removeDuplicates(nums: number[]): number {
    let uniqueNums: number[]
    let numMap = {}
    nums.forEach(((value, index) => {
        numMap[value] = index
    }))
    console.log(uniqueNums)
    return uniqueNums.length
}