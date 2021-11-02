{
  /* 
      PROBLEM:
      Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

      You must write an algorithm with O(log n) runtime complexity.
      
      EXAMPLES:
      Input: nums = [1,3,5,6], target = 5
      Output: 2
    
      Input: nums = [1,3,5,6], target = 2
      Output: 1
    
      Input: Input: nums = [1,3,5,6], target = 7
      Output: 4
  
      Input: Input: nums = [1,3,5,6], target = 0
      Output: 0
  
      Input: Input: nums = [1], target = 0
      Output: 0
      
      */
}

{
  /*
      PSUEDOCODE:
        1. If input array is empty, return index 0.
        2. Create two pointers. left = 0, right = last index in array.
        3. Loop through index while left pointer is less than or equal to right pointer.
            - create a temp mid pointer, which is at the index that is in the middle of left and right pointer.
            - if the value at this index the target value, return the index.
            - if the value is less than the target value
                - move the left pointer to one past the middle index (to the right of it) and move onto the next iteration.
            - if the value is more than the target value
                - move the right pointer to one past the middle index (to the left of it) and move onto the next iteration.
        4. If the loop ends without breaking ie. the value has not been found = the value isn't in the array. As we have let used Math.floor and have let the pointers cross, the index we need to return as the proper place for the target value is at the left index.
      */
}

//TIME COMPLEXITY = 0 (log n) - LOGARITHMIC TIME
//SPACE COMPLEXITY = 0(1) - CONSTANT SPACE

//SOLUTION
function searchInsert(nums, target) {
  if (!nums.length) {
    return 0;
  }

  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

module.exports = searchInsert;
