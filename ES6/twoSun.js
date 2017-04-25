    /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
    // var twoSum = function (nums, target) {
    //   let arr = [];
    //   for (let i = 0; i < nums.length; i++) {
    //     let dis = target - nums[i];
    //     for (let j = i + 1, len = nums.length; j < len; j++) {
    //       if (nums[j] == dis) {
    //         arr.push(i, j);
    //         break;
    //       }
    //     }
    //   }

    //   return arr;
    // };
    
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
 console.log(twoSum([1, 2,3,1,2,4,5], 6))