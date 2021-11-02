{
  /* 
            PROBLEM:
            Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

            You may assume that each input would have exactly one solution, and you may not use the same element twice.

            You can return the answer in any order.
            
            EXAMPLES:
            Input: nums = [2,7,11,15], target = 9
            Output: [0,1]
            Output: Because nums[0] + nums[1] == 9, we return [0, 1].
        
            Input: nums = [3,2,4], target = 6
            Output: [1,2]

            Input: nums = [3,3], target = 6
            Output: [0,1]
            */
}

{
  /*
              PSUEDOCODE:
              1. create empty hashtable. Populate with values from the input array. Make its key its index in the array.
              2. loop through the array once more. Create a value to hold the needed value. Check if the lookup hashtable holds that value, if so, return the index of the current num in the array, along with the key of the property in the lookup - in an array. ONLY if the two indexes are not identical.
              */
}

//TIME COMPLEXITY = 0(n) - LINEAR TIME
//SPACE COMPLEXITY = - 0(n) - LINEAR SPACE

//SOLUTION
function twoSum(nums, target) {
  const lookup = {};

  for (let i = 0; i < nums.length; i++) {
    lookup[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let required = target - nums[i];
    if (lookup[required] && i !== lookup[required])
      return [i, lookup[required]];
  }
}

module.exports = twoSum;
