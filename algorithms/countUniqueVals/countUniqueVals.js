{
  /*
  PSUEDOCODE:
  1. Using two pointer method. Start pointer 1 and index 0, and pointer 2 on the next index.
  2. create a count variable, initialised to value zero.
  2. If the two indexes hold the same value, increment pointer2 and go to the next iteration of the loop.
    If the two indexes have different values, increment count by 1, and move pointer 1 to where pointer 2 is, and move pointer 2 to the index to the right of pointer 1.
  3. Once the loop ends = reached the end of the array = return count.
  */
}

//TIME COMPLEXITY = 0(n) - LINEAR TIME
//SPACE COMPLEXITY = - 0(1) - CONSTANT SPACE

//SOLUTION
function countUniqueVals(arr) {
  let count = 0;
  let left = 0;
  let right = 1;

  while (right <= arr.length) {
    if (arr[left] === arr[right]) right++;
    else {
      count += 1;
      left = right;
      right = left + 1;
    }
  }
  return count;
}

module.exports = countUniqueVals;
