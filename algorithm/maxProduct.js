/**
* @param {number[]} nums
* @return {number}
*/
var maxProduct = function (nums) {
    let res = nums[0];
    let max = nums[0], min = nums[0], l = nums.length;
    if (l == 0) res = 0;
    for (let i = 1; i < l; i++) {
        let a = nums[i];
        let b = max * nums[i];
        let c = min * nums[i];
        max = Math.max(a, b, c);
        min = Math.min(a, b, c);
        res = Math.max(res, max);
    }
    return res;
};
/**
 *  这里保存最小值得原因是：数组里面可能会存在non-negative interger;如果a[i] 正好是一个负数，min*a[i] 为整数  在和之前的最大值相比较
 */