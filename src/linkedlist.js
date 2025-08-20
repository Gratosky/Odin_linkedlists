export class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //Method to add new value to the end of list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  //Method to add new value at the beginning of list
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  //Helper to print the list
  printList() {
    let current = this.head;
    const listValues = [];

    while (current) {
      listValues.push(current.value);
      current = current.next;
    }

    console.log(listValues.join(" -> "));
  }

  //Helper to get the size of the list
  getSize() {
    return this.size;
  }

  //Helper to get the head
  getHead() {
    return this.head;
  }

  //Helper to get the tail
  getTail() {
    return this.tail;
  }

  getAt(index) {
    //Validate first
    if (index < 0 || index >= this.size) {
      console.error(
        "Invalid index. Please provide an index within the list bounds."
      );
      return null;
    }
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current;
      }
      current = current.next;
      count++;
    }

    return null;
  }
  //Method to remove the last item from the list
  pop() {
    if (!this.head) {
      return null;
    }

    const removedNode = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return removedNode.value;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      if (current.next === this.tail) {
        newTail = current;
      }
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;

    this.size--;
    return removedNode.value;
  }

  //Method to convert the list to string
  toString() {
    let current = this.head;
    const listValues = [];

    while (current) {
      listValues.push(current.value);
      current = current.next;
    }

    return listValues.join(" -> ");
  }

  //Method to remove a given index from list
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.error("Invalid index. Cannot remove.");
      return null;
    }

    let removedNode = null;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;

      if (!this.head) {
        this.tail = null;
      }
    } else {
      let current = this.head;
      let count = 0;

      while (count < index - 1) current = current.next;
      count++;
    }

    removedNode = current.next;
    current.next = removedNode.next;

    if (!current.next) {
      this.tail = current;
    }

    this.size--;
    return removedNode.value;
  }

  //Method to insert a new item on the list
  insertAt(value, index) {
    if (index < 0 || index >= this.size) {
      console.error("Invalid index. Cannot insert.");
      return;
    }

    //Adding at beginning of list
    if (index === 0) {
      this.prepend(value);
      return;
    }

    //Adding at end of list
    if (index === this.size) {
      this.append(value);
    }
    //Adding at the middle of the list
    const newNode = new Node(value);

    let current = this.head;
    let count = 0;

    while (count < index - 1) {
      current = current.next;
      count++;
    }

    const previousNode = current;
    const nextNode = previousNode.next;

    //Update the pointers
    newNode.next = nextNode;
    previousNode.next = newNode;

    this.size++;
  }

  //Method to find value at unknown index
  find(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  //Method to check if list contains a value
  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}
