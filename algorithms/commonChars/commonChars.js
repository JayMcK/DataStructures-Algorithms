{
  /*
    PSUEDOCODE:
    1. create lookup hashTable - empty object.
    2. create output variable - empty array.
    3. Loop through input arr[0] - first string. For each character, populate lookup object. If key already exists, increment by 1, if key doesn't set value to 1.
    4. loop through the rest of the input array, from the second string.
      For each loop/string:
        - create a temporary hashtable
        - loop through the string, populating the temporary hashtable.
            If key exists in lookup AND key already exists in temp, increment value. if key exists in lookup but doesn't exist in temp, set value to 1.
        - loop through temporary hashtable. If any key values are not the same as in lookup, replace the value in the temp ht with the value from the lookup ht IF the value of the keys in the lookup ht are less than the value of the key in the temp ht.
        - replace the lookup ht with the temp ht.
    5. loop through lookup ht and populate output array with the values.
    */
}

//TIME COMPLEXITY = 0(n*) - QUADRATIC TIME
//SPACE COMPLEXITY = 0(n) - LINEAR TIME

//SOLUTION
function commonChars(words) {
  let lookup = {};
  const output = [];

  for (let char of words[0]) {
    if (!lookup[char]) lookup[char] = 1;
    else {
      lookup[char]++;
    }
  }

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const temp = {};

    for (let char of word) {
      if (lookup[char] && !temp[char]) temp[char] = 1;
      else if (lookup[char] && temp[char]) temp[char]++;
    }

    for (let char in temp) {
      if (lookup[char] < temp[char]) temp[char] = lookup[char];
    }
    lookup = temp;
  }

  for (let char in lookup) {
    for (let i = 0; i < lookup[char]; i++) {
      output.push(char);
    }
  }

  return output;
}

module.exports = commonChars;
