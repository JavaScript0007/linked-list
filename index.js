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
  
  LinkedList.prototype.insertAtBeginning = function(data) {
    let newNode = new Node(data);
  
    newNode.next = this.head;
  
    this.head = newNode;
  
    return this.head;
  };
  
  list.insertAtBeginning({ name: "bob", lastName: "harry" });
  list.insertAtBeginning({ name: "rick", lastName: "barry" });
  list.insertAtBeginning({ name: "john", lastName: "scudiery" });
  list.insertAtBeginning({ name: "bill", lastName: "norington" });
  
  console.log(list);
  