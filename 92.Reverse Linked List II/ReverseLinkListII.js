/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let pos = 0, valM = 0, valN = 0;
  if(head.next == null){
    return head;
  }
  while(head.next !== null){
    if(pos == m){

    }
    if(pos == n){
      
    }
    pos++;

  }
};