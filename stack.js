/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    if(this.size === 0){
      this.top = newNode;
      this.size++;
    } else {
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(!this.size){ 
      //you don't have to return if you're throwing an error
      //execution of the current fn will stop 
      throw new Error("This stack is empty, nothing to remove!");
    } else {
      let oldTop = this.top;
      let newTop = oldTop.next;
      oldTop.next = null;
      this.top = newTop;
      this.size--;
      return oldTop.val;
    }
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    if(this.size === 0){
      return new Error("This stack is empty!");
    } else {
      return this.top.val;
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

module.exports = Stack;
