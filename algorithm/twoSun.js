    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    var twoSum = function(nums, target) {
        const hashMap = new Map();
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            if (hashMap.has(nums[i])) {
                result.push(i, hashMap.get(nums[i]))
            } else {
                let sumVal = target - nums[i];
                hashMap.set(sumVal, i);
            }
        }

        return result;
    };
    console.log(twoSum([1, 2, 3, 1, 2, 4, 5], 6))