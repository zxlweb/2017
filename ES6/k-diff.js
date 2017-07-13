/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findPairs = function (nums, k) {
//     let map = new Map();
//     let len;
//     if (k >= 0) {
//         for (let i = 0; i < nums.length; i++) {

//             let diff = k + nums[i];
//             let idx = nums.indexOf(diff);
//             if (idx != -1 && idx != i) {

//                 map.set(diff, nums[i]);
//             }


//         }

//         len = map.size;


//     } else {
//         len = 0;
//     }
//     return len;

// };
var findPairs = function (nums, k) {
    if (nums.length < 2 || k < 0) {
        return 0;
    }
    let count = 0;
    nums.sort((a, b) => {
        return a - b
    });
    let right = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        right = Math.max(right, i + 1);
        while (right < nums.length) {
            if (nums[right] - k == nums[i]) {
                count++;
                break;
            } else if (nums[right] - k < nums[i]) {
                right++;
            } else {
                break;
            }
        }
    }
    return count;
}

/**
 * 总结：
 * 方法一：查找次数nums.length，而且还会遍历元素本身
 * 方法二：查找次数：<=num.length-i，绝对不会查到元素本身
 *        主要原因是：做了一次排序，两个指针,i  和  right  
 *        对于right=Math.max(right,i+1)   一开始我觉得可以直接写成 right=i+1  这样做弊端就是增加几次查询 1 2 4 5 7  k=5   i=2时  最后匹配下来 right=4  下次循环由于整个数组是递增的
 *         除非出现重复的数不然  之后的数都不会满足 nums[right]-k=nums[i] 必然是大于nums[i] 直接break；
 *        为了排除这样的情况  1 2 3 5 7 10  这种情况 right=Math.max(right,i+1)  就能保证每个元素都能被访问
 */
