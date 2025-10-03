from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val=val
        self.next=next

def reverseList(head: Optional[ListNode])-> Optional[ListNode]:
    new_list=None

    while head:
        next_node=head.next
        head.next=new_list
        new_list=head
        head=next_node
    return new_list

def print_list(node: Optional[ListNode]):
    """
    Percorre a lista ligada a partir do nó inicial
    e imprime seus valores de forma legível.
    """
    result = []
    while node:
        result.append(str(node.val))
        node = node.next
    
    if not result:
        print("Lista vazia (None)")
    else:
        print(" -> ".join(result) + " -> None")


if __name__ == "__main__":    
    node1 = ListNode(1)
    node2 = ListNode(2)
    node3 = ListNode(3)
    node4 = ListNode(4)

    node1.next = node2
    node2.next = node3
    node3.next = node4

    original_head = node1

    print("Lista Original:")
    print_list(original_head)

    reversed_head = reverseList(original_head)

    print("\nLista Invertida:")
    print_list(reversed_head)