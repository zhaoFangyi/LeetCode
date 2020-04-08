/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let d1 = new ListNode(null);
  d1.next = l1
  let d2 = new ListNode(null);
  d2.next = l2;
  let prev = d1;
  let cur = d2.next;
  while(cur !== null) {
    if (prev.next.val < cur.val) {
      if (prev.next.next) {
        prev = prev.next;
      } else {
        prev.next.next = new ListNode(cur.val);
        cur = cur.next;
      }
    } else {
      let node = new ListNode(cur.val);
      node.next = prev.next
      prev.next = node;
      prev = prev.next;
      cur = cur.next;
    }
  }
  return d1.next;
};