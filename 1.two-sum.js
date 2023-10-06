
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.



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
