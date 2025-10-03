class NodeL<T> {
    constructor(
        public value: T,
        public next: NodeL<T> | null = null
    ){}
}

class Solution<T> {
    public reverseList(head: NodeL<T> | null): NodeL<T> | null {
        let newList: NodeL<T> | null=null;

        while(head){
            let nextNode = head.next;
            head.next = newList;
            newList = head;
            head = nextNode;
        }
        return newList
    }
}

function printList<T>(node: NodeL<T> | null): void {
    const result: T[] = [];

    while (node !== null) {
        result.push(node.value);
        node = node.next
    }
    
    if (result.length === 0) {
        console.log("Lista vazia (null)")
    }
    else {
        console.log(result.join(' -> '), ' -> null');
    }
}

let node1 = new NodeL(1);
let node2 = new NodeL(2);
let node3 = new NodeL(3);

node1.next = node2;
node2.next = node3;

let originalHead = node1;
console.log('Lista original:')
printList(originalHead);

const solution = new Solution
const reversedHead = solution.reverseList(originalHead);

console.log('\nLista invertida:')
printList(reversedHead)
