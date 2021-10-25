{
  /* 
        PROBLEM:
        Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
        
        EXAMPLES:
        Input: nums = [1,2,3,1]
        Output: true
    
        Input: nums = [1,1,1,3,3,4,3,2,4,2]
        Output: true
        */
}

{
  /*
          PSUEDOCODE:
          1. create lookup hashtable - empty
          2. begin populating hashtable with data from input array of nums. As soon as you come across a key already in the hashtable, return true. Duplicate found.
          */
}

//TIME COMPLEXITY = 0(n) - LINEAR TIME
//SPACE COMPLEXITY = 0(n) - LINEAR SPACE

//SOLUTION
function containsDuplicate(nums) {
  const lookup = {};
  let duplicate = false;

  for (let num of nums) {
    if (!lookup[num]) {
      lookup[num] = 1;
    } else {
      return true;
    }
  }

  return duplicate;
}

console.log(containsDuplicate([1, 2, 3, 4]));
