import { LinkedList } from "./linkedlist";

const myList = new LinkedList();

console.log("Appending 10");
myList.append(10);
myList.printList();

console.log("Appending 12");
myList.append(12);
myList.printList();

console.log("Appending 14");
myList.append(14);
myList.printList();

console.log("Appending 16");
myList.append(16);
myList.printList();

console.log("Prepending 8");
myList.prepend(8);
myList.printList();

console.log("Prepending 6");
myList.prepend(6);
myList.printList();

console.log(`Current size of the list is: ${myList.getSize()}`);

const headNode = myList.getHead();
console.log("The head node is:", headNode);
console.log("The head node value is:", headNode.value);

myList.pop();
console.log(`Current size of the list is: ${myList.getSize()}`);

const fetchIndex = myList.getAt(1);
console.log("The value at index is:", fetchIndex);

const listString = myList.toString();
console.log("List as string:", listString);

myList.insertAt(9, 2);
console.log(`List after inserting 9 at index 2:`, myList.toString());
console.log("New size:", myList.getSize());

const containNode = myList.contains(0);
if (containNode) {
  console.log("\nList contains node with value:", containNode);
} else {
  console.log("\nNode with value 3 not found");
}
