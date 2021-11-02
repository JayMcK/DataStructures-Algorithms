{
  /*
PSUEDOCODE:
1. Create one empty object - lookup. Create an empty output array.
2. Loop through nums1 array once. Add the data from nums1 to lookup, adding the integer as the key and the amount of times it appears in the array as the key.
4. Then do a 2nd loop, over nums2 this time. Comparing it to lookup object. If the current integer in nums2 is in the lookup object, push this value into the output array, and decrement the value of the property in the object by 1.
5. Return the output array.
*/
}

//TIME COMPLEXITY = 0(n) - LINEAR TIME
//SPACE COMPLEXITY = 0(n) - LINEAR SPACE

//SOLUTION
function intersection(nums1, nums2) {
  let output = [];
  let lookup = {};

  for (let integer of nums1) {
    if (lookup[integer]) lookup[integer]++;
    else {
      lookup[integer] = 1;
    }
  }

  for (let integer of nums2) {
    if (lookup[integer]) {
      output.push(integer);
      lookup[integer]--;
    }
  }
  return output;
}

module.exports = intersection;
