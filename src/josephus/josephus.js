const LinkedList = require("../lib/linkedList");

/**
 *
 * @param {LinkedList} list
 * @param {number} m
 * @returns {string} the name of the last person standing
 */
function josephus(list, m) {
  const listCopy = new LinkedList(list.asArray());
  const initialLength = listCopy.length;
  let hotPotato = listCopy.find((node) => !node.next);
  hotPotato.next = listCopy.head;

  for (let i = 0; i < initialLength - 1; i++) {
    for (let j = 0; j < m; j++) {
      hotPotato = hotPotato.next;
    }
    hotPotato.next = hotPotato.next.next;
  }
  return hotPotato.value;
}

module.exports = josephus;
