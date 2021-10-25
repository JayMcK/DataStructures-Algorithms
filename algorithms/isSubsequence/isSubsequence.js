{
  /* 
    PROBLEM:
    Find the longest subseuqnce of unique characters in a string
    
    EXAMPLES:
    Input: "hellothere"
    Output: 6
    Explanation: "lother" = longest substring of unique characters
  
    Input: nums = "lookitran"
    Output: 7.
    Explanation: "kitran" = longest substring of unique characters.
  
    */
}

{
  /*
    PSUEDOCODE:
      1. Create 3 variables, count, tempCount, tempHT.
      2. Loop over input array
        - if the current character is not already in the temphashtable
            -- add it
            -- increment tempMax by 1
            -- set value of count to the max between tempMax and its own current value
        - if the current character is already in the tempht = duplicate
            -- set tempHT back to empty object to start counting the max subarray from scratch again.
            -- add the current char to the empty object, so that we start counting from this character.
            -- set tempCount to 1.
      3. Return count.
    */
}

//TIME COMPLEXITY = 0 (n) - LINEAR TIME
//SPACE COMPLEXITY = 0 (n) - LINEAR SPACE

//SOLUTION
function isSubsequence(str) {
  let count = 0;
  let tempCount = 0;
  let tempHT = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (!tempHT[char]) {
      tempHT[char] = 1;
      tempCount += 1;
      count = Math.max(count, tempCount);
    } else {
      tempHT = {};
      tempHT[char] = 1;
      tempCount = 1;
    }
  }
  return count;
}

console.log(isSubsequence("hellothere"));
