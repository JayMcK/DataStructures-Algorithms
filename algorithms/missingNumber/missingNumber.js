{
  /* 
          PROBLEM:
          Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
          
          EXAMPLE
      
          Input: nums = [3,0,1]
          Output: 2
          Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
          */
}

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
