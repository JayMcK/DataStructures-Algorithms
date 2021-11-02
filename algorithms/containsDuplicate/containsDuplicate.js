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

module.exports = containsDuplicate;
