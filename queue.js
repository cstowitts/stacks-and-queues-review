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
    const newNode = new Node(val);
    //if there's nothing in the Queue, add the Node
    //NOT operator refresher: if there is a .first then t => f and if won't go
    //if there isn't a .first then f => t and if conditional will execute
    if(!this.first){
      //it's the new first and last Node so update them!
      this.first = newNode;
      this.last = newNode;
      //don't forget to update the Queue size
      this.size = 1;
    } else {
      //otherwise change the current last Node's .next to the new Node
      this.last.next = newNode;
      //set the .last property of this Queue to the new Node
      this.last = newNode;
      //update Queue .size
      this.size++;
    }

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.size === 0){
      throw new Error("The queue is empty, no Node to remove.");
    }

    //if the .first and .last Node are the same
    if(this.first === this.last){
     const onlyNode = this.first;
     this.first.val = null;
     this.first.next = null;
     this.last.val = null;
     this.last.next = null;
     this.size = 0;
     //DON'T FORGET WE WANT THE VALUE OF THE NODE
     return onlyNode.val; 
    } else {
      //get the current first Node
      let oldFirstNode = this.first;
      //set the first Node to the .next of the old first Node
      this.first = oldFirstNode.next;
      //change the new first Node's .next to null
      oldFirstNode.next = null;
      //decrement Queue size by one
      this.size--;
      //return the old Node's VALUE
      return oldFirstNode.val;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(this.size === 0){
      throw new Error("The queue is empty, no first Node.");
    }
    return this.first.val;
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
