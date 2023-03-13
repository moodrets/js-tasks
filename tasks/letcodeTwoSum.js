const twoSum = function (nums, target) {
    const res = {};

    for (let i = 0; i <= nums.length; i++) {
        if (res[nums[i]] >= 0) {
            return [res[nums[i]], i];
        }
        res[target - nums[i]] = i;
    }
};

const result = twoSum([2, 4, 5, 8, 12, 4, 3], 9);
console.log(result);
