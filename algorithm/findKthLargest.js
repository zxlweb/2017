var findKthLargest = function (nums, k) {
    nums.sort((a, b) => { return b - a });

    if (k >= 1 && k <= nums.length) {
        let result;
        result = nums[k - 1];
        return result
    }
};