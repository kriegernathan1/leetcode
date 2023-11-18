/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  let runner = head;
  let previous = null;

  while (runner) {
    let next = runner.next;
    runner.next = previous;
    previous = runner;
    runner = next;
  }

  return previous;
}
