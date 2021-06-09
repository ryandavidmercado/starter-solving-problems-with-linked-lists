const LinkedList = require("../lib/linkedList");

/**
 * Return the third element from the end of the linked list.
 *
 * @param {LinkedList} list
 *
 * @returns {Node} the third element from the end of the list,
 * null if list length < 3
 *
 */
function thirdFromEnd(list) {
  let frontPointer = list.head?.next?.next;
  if (!frontPointer) return null;
  let backPointer = list.head;
  while (frontPointer.next) {
    frontPointer = frontPointer.next;
    backPointer = backPointer.next;
  }
  return backPointer;
}

module.exports = thirdFromEnd;
