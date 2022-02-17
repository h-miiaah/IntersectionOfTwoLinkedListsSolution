/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    var lenA = getLen(headA);
    var lenB = getLen(headB);
    let diff = Math.abs(lenA - lenB);

    if (lenA > lenB) {
        while (diff--) headA = headA.next;
      } else {
        while (diff--) headB = headB.next;
      }

      while (headA !== headB) {
        headA = headA.next;
        headB = headB.next;
      }

      return headA;
  };

  var getLen = function (head) {
    var len = 0;
    while (head) {
        len++;
        head = head.next;
      }
      return len;
  };


  /*

  - First calculate the difference between the lengths of the two linked lists.
  - If the length of the first linked list is greater than the length of the second linked list, we move the head of the first linked list by the difference.
  - If the length of the second linked list is greater than the length of the first linked list, we move the head of the second linked list by the difference.
  - Now we move both the heads at the same speed until they collide.
  



  */