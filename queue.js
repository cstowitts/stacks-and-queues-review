/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let currNode = this.first;
    const newLastNode = new Node(val);
    //while we're looking at a valid Node in the Queue
    while(currNode.val !== null){
      //if the current Node is the last Node of the Queue
      if(currNode === this.last){
        //change its next to the new last Node
        currNode.next = newLastNode;
        //update the last Node in the Queue to the new last Node
        this.last = newLastNode;
        //update the Queue count
        this.size++;
      }
      currNode = currNode.next;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.size === 0){
      throw new Error("The queue is empty, no Node to remove.");
    }
    //get the current first Node
    let oldFirstNode = this.first;
    //set the first Node to the .next of the old first Node
    this.first = oldFirstNode.next;
    //change the new first Node's .next to null
    oldFirstNode.next = null;
    //decrement Queue size by one
    this.size--;
    //return the old Node
    return oldFirstNode;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(this.size === 0){
      throw new Error("The queue is empty, no first Node.");
    }
    return this.first;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size === 0){
      return true;
    } else {
      return false;
    }

  }
}

module.exports = Queue;
