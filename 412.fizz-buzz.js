/**
 * 整除 3 = Fizz
 * 整除 5 = Buzz
 * 整除 15 = FizzBuzz
 * Input: n = 15
 * Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 * @see https://leetcode.com/problems/fizz-buzz/
 * @see https://ithelp.ithome.com.tw/articles/10269729
 */



// Brute-force: O(n)
// HashMap: O(n)



/**
 * Brute-force
 * 99 ms
 */
var fizzBuzz = function (n) {
  const result = [];
  const list = Array(n).fill(null);

  for (let i = 1; i <= list.length; i++) {
    if (i % 15 === 0) {
        result.push("FizzBuzz");
    } else if (i % 5 === 0) {
        result.push("Buzz");
    } else if (i % 3 === 0) {
        result.push("Fizz");
    } else {
      result.push(String(i));
    }
  }

  return result;
};

