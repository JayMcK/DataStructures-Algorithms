{
  /*
   PSUEDOCODE:
  1. Using two pointer method. Create two variables, left and right. initialise to beginning an end items in input array.
  2. Loop over array whilst left pointer is less than right. Once they are equal = on the same index = return undefined.
  3. Find the sum at their current position. If sums to zero, return the indexes. If less than zero, increment left pointer by 1. If more than zero, decrement right pointer by one.
  4. If loop breaks = no pairs found = return undefined.
   */
}

//TIME COMPLEXITY = 0(n) - LINEAR TIME
//SPACE COMPLEXITY = - 0(1) - CONSTANT SPACE

//SOLUTION
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    if (sum < 0) left++;
    if (sum > 0) right--;
  }
  return undefined;
}

module.exports = sumZero;
