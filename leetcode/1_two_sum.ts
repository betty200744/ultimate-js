export function twoSum(nums: number[], target: number): number[] {
    const {length} = nums
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return []
}

export function twoSum1(nums: number[], target: number): number[] {
    const {length} = nums
    let map: { [key: number]: number } = {}
    nums.forEach((value: number, index: number) => {
        map[value] = index
    })
    for (let i = 0; i < length; i++) {
        let sec = target - nums[i]
        if (map[sec] !== i && !!map[sec]) {
            return [i, map[sec]]
        }
    }
    return []
}