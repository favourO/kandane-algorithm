const maxSubArray = (nums) => {
    if (nums.length === 0)
        return 0;
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // check if previous number is -ve
        if (nums[i-1] > 0){ 
            nums[i] += nums[i-1];
        }
        max = Math.max(nums[i], max);
    }
    return max;
}

const nums = [2, 1, -2, 3, 2]
console.log(maxSubArray(nums));