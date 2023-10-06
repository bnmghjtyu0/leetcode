/**
 * 已排序的陣列中，去除重複數字
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 *
 * 限制條件：
 * 1. remove the duplicates in-place 不能更動到原有陣列的起始位置，也就是說不能對 nums 重新賦值。
 * @see https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @see https://ithelp.ithome.com.tw/articles/10270237
 */


/**
 * Brute-force
 * 66 ms
 */
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i+1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

console.log(removeDuplicates([1, 1, 2, 2, 2, 3, 3, 4]));
