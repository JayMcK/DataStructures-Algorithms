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

module.exports = maxSubArray;
