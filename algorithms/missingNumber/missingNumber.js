{
  /*
  PSUEDOCODE:
  1. create hashtable. populate with data from nums array input.
  2. loop over hashtable, as many times as length of nums array, as this is the range. So that we visit each value from 0.
  3. If any num doesn't exist in the hashtable, this is the missing value. Return it.
 */
}

//TIME COMPLEXITY = 0(n) - LINEAR TIME
//SPACE COMPLEXITY = - 0(n) - LINEAR SPACE

//SOLUTION
function missingNumber(nums) {
  const lookup = {};

  for (let num of nums) {
    lookup[num] = 1;
  }

  for (let i = 0; i <= nums.length; i++) {
    if (!lookup[i]) return i;
  }
}

module.exports = missingNumber;
