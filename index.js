class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  }
  
  const list = new LinkedList();
  
  LinkedList.prototype.insertAtEnd = function(data) {
    let newNode = new Node(data);
  
    if (this.head === null) {
      this.head = newNode;
      return this.head;
    }
  
    // else
  
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
  
    tail.next = newNode;
  
    return this.head;
  };
  
  LinkedList.prototype.insertAtBeginning = function(data) {
    let newNode = new Node(data);
  
    newNode.next = this.head;
  
    this.head = newNode;
  
    return this.head;
  };
  
  list.insertAtBeginning({ name: "bob", lastName: "harry" });
  list.insertAtBeginning({ name: "rick", lastName: "barry" });
  list.insertAtBeginning({ name: "john", lastName: "scudiery" });
  list.insertAtEnd({ name: "bill", lastName: "norington" });
  
  console.log(list);
  