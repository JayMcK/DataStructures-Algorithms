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
