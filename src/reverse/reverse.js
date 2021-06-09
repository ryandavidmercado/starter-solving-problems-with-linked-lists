const LinkedList = require("../lib/linkedList");

/**
 * Iteratively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseIterative(list) {
  const reverseList = new LinkedList();
  let node = list.head;
  while (node) {
    reverseList.insertAtHead(node.value);
    node = node.next;
  }
  return reverseList;
}

/**
 * Recursively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseRecursive(list, node = list.head) {
  if (!node) return new LinkedList();
  return reverseRecursive(list, node.next).insert(node.value);
}

module.exports = { reverseIterative, reverseRecursive };
