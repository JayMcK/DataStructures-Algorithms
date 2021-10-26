{
  /* 
  PROBLEM:
  Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
  
  EXAMPLES:
  Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
  Output: [3,2]
  Explanation: The values that are present in at least two arrays are:
  - 3, in all three arrays.
  - 2, in nums1 and nums2.

  Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
  Output: []
  Explanation: No value is present in at least two arrays.
  
  */
}

{
  /*
  PSUEDOCODE:
  1. create hashtable, lookup. Populate with data from nums1 array as keys, and fixed value of 1 - regardless of number of occurances.
  2. Loop through nums2 array.
    - Create temp hashtable, and populate with data from nums2 array. Fixed value of 1 for all values.
    - loop through lookup hashtable.
        -- If key from temp hashtable exists in lookup hashtable, increment the value in the lookup hashtable by 1. If doesn't exist, add new key to lookup and set value to 1.
  3. Repeat process with nums3 array.
  4. Loop through lookup hashtable and push all keys that have a value > 1 into the output array.
  */
}

//TIME COMPLEXITY = 0(n) - LINEAR TIME
//SPACE COMPLEXITY = 0(n) - LINEAR SPACE

//SOLUTION
function twoOutOfThree(nums1, nums2, nums3) {
  const lookup = {};
  let temp = {};
  let output = [];

  for (let num of nums1) {
    if (!lookup[num]) lookup[num] = 1;
  }

  for (let num of nums2) {
    if (!temp[num]) temp[num] = 1;
  }

  for (let key in temp) {
    if (lookup[key]) lookup[key]++;
    else lookup[key] = 1;
  }

  temp = {};

  for (let num of nums3) {
    if (!temp[num]) temp[num] = 1;
  }

  for (let key in lookup) {
    if (temp[key]) lookup[key]++;
  }

  for (let key in lookup) {
    if (lookup[key] > 1) output.push(key);
  }

  return output;
}

console.log(twoOutOfThree([3, 1], [2, 3], [1, 2]));
