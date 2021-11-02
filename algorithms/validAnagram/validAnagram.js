{
  /* 
    PROBLEM:
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.
    
    EXAMPLES:
    Input: s = "anagram", t = "nagaram"
    Output: true

    Input: s = "rat", t = "car"
    Output: false
    */
}

{
  /*
      PSUEDOCODE:
      1. If the two inputs are of differing lengths, return false. Cannot be true.
      2. create two hashtables, frequencyCounter 1 and 2.
      3. Populate fC1 with str1. Each key is a value from the string, is value is the amount of times it occurs in the string.
      4. Repeat for fC2, populating it with str2 data.
      5. Loop through fC1, comparing it to fC2. If they hold identical data, this is a valid anagram.
      */
}

//TIME COMPLEXITY = 0(n) - LINEAR TIME
//SPACE COMPLEXITY = 0(n) - LINEAR TIME

//SOLUTION

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const hT1 = {};
  const hT2 = {};

  for (let char of str1) {
    if (hT1[char]) hT1[char]++;
    else hT1[char] = 1;
  }

  for (let char of str2) {
    if (hT2[char]) hT2[char]++;
    else hT2[char] = 1;
  }

  for (let key in hT1) {
    if (!hT2[key] || hT1[key] !== hT2[key]) return false;
  }
  return true;
}

console.log(isAnagram("anagram", "nagaram"));

module.exports = isAnagram;
