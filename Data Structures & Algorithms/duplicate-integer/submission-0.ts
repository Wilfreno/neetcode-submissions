class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const set = new Set()

        return nums.some(item => {
            if(set.has(item)) return true
            set.add(item)
        })

    }
}
