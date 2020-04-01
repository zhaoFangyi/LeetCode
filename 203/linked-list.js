/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while(head && head.val === val) {
      head = head.next
    }
    if (head === null) {
      return null;
    }
    let prev = head
    while(prev.next !== null) {
      if (prev.next.val === val) {
        prev.next = prev.next.next
      } else {
        prev = prev.next;
      }
    }
    return head;
    
};