{
  /*
  PSUEDOCODE:
  1. Create hashtable of all possible values. Create total variable, initialised to zero.
  2. loop through inputted string, looking up the value of the character in the hashtable, and adding this value to the total.
    - check if the current char and the next char are a key in the hT. If so, add its value to the total and then increment i by 1, to skip passed both.
  3. Return the total
        */
}

//TIME COMPLEXITY = 0(n) - LINEAR TIME
//SPACE COMPLEXITY = 0(1) - CONSTANT SPACE

//SOLUTION
function romanToInt(str) {
  let total = 0;
  const hT = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  for (let i = 0; i < str.length; i++) {
    let seq = str[i] + str[i + 1];

    if (hT[seq]) {
      total += hT[seq];
      i++;
    } else {
      total += hT[str[i]];
    }
  }
  return total;
}

module.exports = romanToInt;
