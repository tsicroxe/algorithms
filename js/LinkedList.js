class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Adds a node at the end of the list
    append(node) {
        let newNode = new Node(node);
        let current;

        if (this.head == null)
            this.head = newNode;
        else {
            current = this.head;

            // iterate to the end of the list 
            while (current.next) {
                current = current.next;
            }

            // lastly add the node
            current.next = newNode;
        }
        this.size++;
    }

    // Adds a new node at the beginning of the list
    prepend(node) {
        let newNode = new Node(node);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        return this.head
    }

    // prints the list items 
    printList() {
        var current = this.head;
        var str = "";
        while (current) {
            str += current.value + " ";
            current = current.next;
        }
        console.log(str);
    }

    // Searches the list for the index
    // of a value in the list
    indexOf(value) {
        let count = 0;
        let current = this.head;

        while (current.next !== null) {
            if (current.value === value) {
                return count;
            }
            count++;
            current = current.next;
        }

        // Not in List
        return -1;
    }

    // Takes in a data value and allows you to
    // insert it at a particular index
    insertAt(value, index) {
        let count = 0;
        let previous;
        let current = this.head;
        if (this.size < index) {
            return -1;
        }
        else {
            let newNode = new Node(value);

            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            newNode.next = current;
            previous.next = newNode
        }
    }

    // Allows you to remove a value at a particular index
    removeAt(index) {
        if (index > this.size)
            return -1;
        else {
            let current;
            let previous;
            let count = 0;
            current = this.head;
            previous = current;

            if (index === 0) {
                this.head = current.next;
            } else {

                while (count < index) {
                    count++;
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
            }
            this.size--;

            return current.value;
        }
    }

    // Searches through linked list for a value
    // and removes it from the list
    removeValue(value) {
        var current = this.head;
        var previous = null;

        while (current !== null) {
            if (current.value === value) {
                if (previous == null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return current.value;
            }
            previous = current;
            current = current.next;
        }
        return -1;
    }

    headNode() {
        return this.head;
    }

    length() {
        return this.size;
    }

    isEmpty() {
        return this.size == 0;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

module.exports = {
    LinkedList,
    Node
}