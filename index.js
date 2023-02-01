/* eslint-disable max-classes-per-file */

class Node {
    constructor(value=null, nextNode=null) {
        this.value = value;
        this.nextNode = nextNode;
    }

    setNextNode(nextNode) {
        this.nextNode = nextNode;
    } 
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const node = new Node(value, null);
        if (this.head === null) { this.head = node; }
        else {
            let currentNode = this.head;
            while(currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = node;
        }
        this.size += 1;
    }

    prepend(value) {
        const node = new Node(value, null);
        if (this.head === null) { this.head = node; }
        else {
            node.nextNode = this.head;
            this.head = node;
        }
        this.size += 1;
    }

    getSize() {
        return this.size;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        let currentNode = this.head;
        while(currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    at(index) {
        let i = 0;
        let currentNode = this.head;
        while (i !== index) {
            currentNode = currentNode.nextNode;
            i += 1;
        }
        return currentNode;
    }

    pop() {
        let currentNode = this.head;
        while(currentNode.nextNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = null;
        this.size -= 1;
    }

    contains(value) {
        let currentNode = this.head;
        while(currentNode) {
            if (currentNode.value === value) { return true;}
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        let index = 0;
        let currentNode = this.head;
        while(currentNode) {
            if (currentNode.value === value) { return index;}
            currentNode = currentNode.nextNode;
            index += 1;
        }
        return null;
    }

    toString() {
        let currentNode = this.head;
        let string = "";
        while (currentNode) {
            string += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        string += "null";
        return string;
    }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.prepend(0);
list.prepend(-1);
list.pop();
console.log(list.toString());
console.log(list.getTail());