{
  /* 
  PROBLEM:
  Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

  A subarray is a contiguous part of an array.
  
  EXAMPLES:
  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6
  Explanation: [4,-1,2,1] has the largest sum = 6.

  Input: nums = [1]
  Output: 1

  Input: nums = [5,4,-1,7,8]
  Output: 23
  
  */
}

{
  /*
  PSUEDOCODE:
    1. Create two variables - tempMax = 0, result = minimum safe integer.
    2. Loop through nums array
        - add value of nums[i] to the tempMax variable.
        - set result variable to the larger number, between tempMax and it's own current value.
        - if tempMax is less than 0, reset it to zero. Else, leave as is.
    3. Return the result variable which now holds the maximum subarray.
  */
}

//TIME COMPLEXITY = 0(n) - LINEAR TIME
//SPACE COMPLEXITY = 0(1) - CONSTANT SPACE

//SOLUTION

function maxSubArray(nums) {
  let tempMax = 0;
  let result = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    tempMax += nums[i];
    result = Math.max(tempMax, result);
    tempMax = tempMax < 0 ? 0 : tempMax;
  }
  return result;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

module.exports = maxSubArray;
