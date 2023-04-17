const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Thread {
   constructor(value) {
      this.data = value;
      this.left = null;
      this.rigt = null;
   }
}
class BinarySearchTree {
   constructor() {
      this.thread = null;
   }
   root() {
      return this.thread;
   }

   add(data) {
      this.thread = addFunc(this.thread, data);

      function addFunc(thread, data) {
         if (!thread) {
            return new Thread(data);
         }
         if (thread.data === data) {
            return thread;
         }
         if (data < thread.data) {
            thread.left = addFunc(thread.left, data);
         } else {
            thread.right = addFunc(thread.right, data);
         }
         return thread;
      }
   }

   has(data) {
      return search(this.thread, data);

      function search(thread, data) {
         if (!thread) {
            return false;
         }
         if (thread.data === data) {
            return true;
         }
         return data < thread.data
            ? search(thread.left, data)
            : search(thread.right, data);
      }
   }

   find(data) {
      return search(this.thread, data);
      function search(thread, data) {
         if (!thread) {
            return null;
         }
         if (thread.data === data) {
            return thread;
         }
         return data < thread.data
            ? search(thread.left, data)
            : search(thread.right, data);
      }
   }

   remove(data) {
      return data;
   }

   min() {
      if (!this.thread) {
         return;
      }
      let current = this.thread;
      while (current.left) {
         current = current.left;
      }
      return current.data;
   }

   max() {
      if (!this.thread) {
         return;
      }
      let current = this.thread;
      while (current.rigt) {
         current = current.rigt;
      }
      return current.data;
   }
}

module.exports = {
   BinarySearchTree,
};
