To reverse a linked list in Java, you can use the following code:

```java
class Node {
    int data;
    Node next;
    
    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    Node head;
    
    public LinkedList() {
        this.head = null;
    }
    
    public void reverse() {
        Node current = head;
        Node previous = null;
        Node next = null;
        
        while (current != null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        
        head = previous;
    }
}
```

Follow-up question: "Can you explain the time and space complexity of the given code for reversing a linked list?"