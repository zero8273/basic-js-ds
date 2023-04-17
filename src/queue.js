const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}
class Queue {
   constructor() {
      this.top = null;
      this.length = 0;
   }
   getUnderlyingList() {
      return this.top;
   }

   enqueue(value) {
      if (this.length === 0) {
         this.top = new Node(value);
      } else {
         let now = this.top;

         while (now.next) {
            now = now.next;
         }
         now.next = new Node(value);
      }
      this.length++;
   }

   dequeue() {
      const current = this.top.value;
      this.top = this.top.next;
      this.length--;
      return current;
   }
}

module.exports = {
   Queue,
};
