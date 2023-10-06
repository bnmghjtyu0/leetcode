/**
 * 二元樹
 * return the subtree rooted with that node
 * Input: root = [4,2,7,1,3], val = 2
 * Output: [2,1,3]
 * @see https://leetcode.com/problems/search-in-a-binary-search-tree/
 * @see https://ithelp.ithome.com.tw/articles/10272589
 * @see 線上建立BinaryTree https://buildbinarytree.com/
 */

const BinarySearchTree = require("../utils/binary-tree");

var tree = new BinarySearchTree();
const list = [4, 2, 7, 1, 3, null];
list.forEach((val) => {
  tree.insert(val);
});

/**
 * search the subtree rooted with that node
 */
var searchBST = function (root, val) {
  while (root.val != null) {
    if (root.val === val) return root;
    else if (val < root.val) root = root.left;
    else root = root.right;
  }
  return root;
};

console.log(searchBST(tree, 5));
