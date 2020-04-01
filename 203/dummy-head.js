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
    let dummyHead = new ListNode(-1, head);
    
    let prev = dummyHead
    while(prev.next !== null) {
      if (prev.next.val === val) {
        prev.next = prev.next.next
      } else {
        prev = prev.next;
      }
    }
    return dummyHead.next;
    
};