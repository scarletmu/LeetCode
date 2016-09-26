// first solution: Runtime: 222 ms
var addTwoNumbers = function(l1, l2) {
  let head1 = l1;
  let head2 = l2;
  let result = new ListNode(0);
  let head3 = result;
  let carry = 0;
  while(head1 || head2){
    let x = head1? head1.val : 0;
    let y = head2? head2.val : 0;
    let sum  = carry + x + y;
    carry = sum / 10;
    head3.next = new ListNode(Math.floor(sum % 10));
    head3 = head3.next;
    if(head1) head1 = head1.next;
    if(head2) head2 = head2.next;
  }
  if (carry >= 1) {
    head3.next = new ListNode(Math.floor(carry));
  }
  return result.next;
};