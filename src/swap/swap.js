const LinkedList = require("../lib/linkedList");

/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */
function swap(list, x, y) {
  if (!list.length) return list;

  const grabPrevious = (pointer) =>
    list.findWithPrevious((node) => node === pointer)[1];
  const swapNexts = (a, b) => ([a.next, b.next] = [b.next, a.next]);
  const headPointer =
    x === list.head ? [x, y] : y === list.head ? [y, x] : null;

  if (headPointer) {
    const [head, notHead] = headPointer;
    const notHead_prev = grabPrevious(notHead);

    notHead_prev.next = head;
    list.head = notHead;
    swapNexts(x, y);
  } else {
    const x_prev = grabPrevious(x);
    const y_prev = grabPrevious(y);
    swapNexts(x_prev, y_prev);
    swapNexts(x, y);
  }
  return list;
}

module.exports = swap;
