var splitArray = function(nums, m) {
    // 二分搜索法
    let len = nums.length,
        sum = 0,
        max = 0,
        left, mid, right;
    // s1:找出数组中最大值和数组素有元素的和
    for (let i = 0; i < len; i++) {
        sum += nums[i];
        max = Math.max(max, nums[i]);
    }
    left = max;
    right = sum;
    while (left < right) {
        mid = (left + right) / 2;
        //s3:找出数组中和最大且小于mid的元素
        let total = 0,
            count = 1;
        for (let i = 0; i < len; i++) {
            total += nums[i];
            if (total > mid) {
                count++;
                if (count > m) {
                    right = mid + 1;
                } else {
                    left = mid - 1;
                }
            }
        }
        return left;
    }
};
console.log(splitArray([7, 2, 5, 10, 8], 2));