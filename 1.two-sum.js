/**
 * TwoSum 兩數總和等於目標
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * Input: n = 15
 * Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 * @see https://leetcode.com/problems/two-sum/
 * @see https://ithelp.ithome.com.tw/articles/10269246
 */


// Brute-force: O(n^2)
// HashMap: O(n)
// Two Pointer: O(n log n)


/**
 * Brute-force
 * 95 ms
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log([i, j]);
      }
    }
  }
};

/**
 * 半個迴圈 + 雙指針（Two Pointer）
 * 52 ms ~ 108 ms
 * 雙指針簡單來說就是自定義位置指向元素，移動指標位置來調整想要從容器中取出的數值
 * @see https://www.youtube.com/watch?v=JMCTsP0Jxmc&t=261s
 */
const twoSum2 = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;

  while (nums[i] + nums[j] !== target) {
    if (nums[i] + nums[j] > target) {
      j = j - 1;
    } else {
      i = i + 1;
    }
  }
  return [i, j];
};

// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum2([2, 7, 11, 15], 9));
