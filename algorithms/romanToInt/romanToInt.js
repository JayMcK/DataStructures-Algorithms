{
  /* 
      PROBLEM:
      Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

        Symbol       Value
        I             1
        V             5
        X             10
        L             50
        C             100
        D             500
        M             1000
        For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

        Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

        I can be placed before V (5) and X (10) to make 4 and 9. 
        X can be placed before L (50) and C (100) to make 40 and 90. 
        C can be placed before D (500) and M (1000) to make 400 and 900.
        Given a roman numeral, convert it to an integer.
      
      EXAMPLES:
      Input: s = "III"
     Output: 3
  
      Input: s = "LVIII"
      Output: 58
      Explanation: L = 50, V= 5, III = 3.
      */
}

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

console.log(romanToInt("IX"));
