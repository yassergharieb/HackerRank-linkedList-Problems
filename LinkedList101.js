/* 
problem 1 :
This is an to practice traversing a linked list.
 Given a pointer to the head node of a linked list, print each node's data element, 
 one per line.
 If the head pointer is null (indicating the list is empty),
  there is nothing to print.

Function Description:

Complete the printLinkedList function in the editor below.

printLinkedList has the following parameter(s):

SinglyLinkedListNode head: a reference to the head of the list
Print

For each node, print its data value on a new line (console.log in Javascript).

 */


// solution:  


/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {
    
    let current =  head; 
    
    while (current !=  null) {
        console.log(current.data);
        current =  current.next;
    }


}

/* 
problem 2 :
You are given the pointer to the head node of a linked list and an integer to add to the list. Create a new node with the given integer. Insert this node at the tail of the linked list and return the head node of the linked list formed after inserting this new node. The given head pointer may be null, meaning that the initial list is empty.

Function Description

Complete the insertNodeAtTail function in the editor below.

insertNodeAtTail has the following parameters:

SinglyLinkedListNode pointer head:
. a reference to the head of a list
. int data: the data value for the node to insert

Returns:

. SinglyLinkedListNode pointer: reference to the head of the modified linked list
 */
function insertNodeAtTail(head, data) {
    let newNode = {
        data: data,
        next: null
    }
  head.next =  newNode;
  

}


/*
problem 3: 


*/






