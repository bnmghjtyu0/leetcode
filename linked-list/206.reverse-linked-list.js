/**
 * LinkList 反向排序
 * Input: head = [1,2]
 * Output: [2,1]
 * @see https://leetcode.com/problems/reverse-linked-list/
 * @see https://ithelp.ithome.com.tw/articles/10271920
 */

const ListNode = require("../utils/linked-list");

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;

/**
 * 交換法
 * 74 ms
 */
var reverseList = function (head) {
  let prev = null;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

console.log(reverseList(node1));
