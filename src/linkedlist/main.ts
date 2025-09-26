class LinkedNode<T> {
	constructor(
		public value: T,
		public next: LinkedNode<T> | null = null,
		public prev: LinkedNode<T> | null = null,
	) {}
}

class DoublyLinkedList<T> {
    public head: LinkedNode<T> | null = null;
    public tail: LinkedNode<T> | null = null;

    public addToHead(value: T): void {
        let newNode = new LinkedNode(value);
        newNode.next = this.head;
        
        if (!this.head) {
            this.head = this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
    };

    public addToTail(value: T): void {
        let newNode = new LinkedNode(value);
        newNode.prev = this.tail;
        
        if (!this.tail) {
            this.head = this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode
        }
    };

    public removeFromHead(): LinkedNode<T>['value'] | null {
        if (!this.head) {return null}

        const removedValue = this.head?.value

        if(this.head === this.tail) {
            this.head = this.tail = null;
        }
        else {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null
            }
        }
        return removedValue;
    }

    public removeFromTail(): LinkedNode<T>['value'] | null {
        if (!this.tail) {return null};

        const removedValue = this.tail.value;

        if (this.head === this.tail) {
            this.head = this.tail = null;
        }
        else {
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            }
        }
        return removedValue;
    }

    public showForward(): Array<T> {
        const result: T[] = [];
        let current = this.head;
        while(current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}

const dll = new DoublyLinkedList()
    
dll.addToHead(2)
dll.addToHead(1)
dll.addToTail(3)
dll.addToTail(4)

console.log("Lista para frente:", dll.showForward())    // [1, 2, 3, 4]

console.log("Removido do início:", dll.removeFromHead()) // 1
console.log("Removido do fim:", dll.removeFromTail())      // 4
console.log("Lista atual:", dll.showForward())          // [2, 3]

dll.addToTail(5)
dll.addToTail(6)
console.log("Lista antes da remoção:", dll.showForward()) // [2, 3, 5, 6]