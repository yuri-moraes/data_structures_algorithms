class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def add_to_front(self, value):
        new_node = Node(value)
        
        if not self.head: 
            self.head = self.tail = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node
        

    def add_to_end(self, value):
        new_node = Node(value)
        
        if not self.tail: 
            self.head = self.tail = new_node
        else:
            new_node.prev = self.tail
            self.tail.next = new_node
            self.tail = new_node
        

    def remove_from_front(self):
        if not self.head:
            return None
        
        removed_value = self.head.value
        
        if self.head == self.tail:
            self.head = self.tail = None
        else:
            self.head = self.head.next
            self.head.prev = None
        
        self.size -= 1
        return removed_value

    def remove_from_end(self):
        if not self.tail:
            return None
        
        removed_value = self.tail.value
        
        if self.head == self.tail: 
            self.head = self.tail = None
        else:
            self.tail = self.tail.prev
            self.tail.next = None 
        
        self.size -= 1
        return removed_value

    def is_empty(self):
        return self.head is None

    def get_size(self):
        return self.size

    def display_forward(self):
        """Exibe a lista do início ao fim"""
        result = []
        current = self.head
        while current:
            result.append(current.value)
            current = current.next
        return result


if __name__ == "__main__":
    dll = DoublyLinkedList()
    
    dll.add_to_front(2)
    dll.add_to_front(1)
    dll.add_to_end(3)
    dll.add_to_end(4)
    
    print("Lista para frente:", dll.display_forward())    # [1, 2, 3, 4]
    
    print("Removido do início:", dll.remove_from_front()) # 1
    print("Removido do fim:", dll.remove_from_end())      # 4
    print("Lista atual:", dll.display_forward())          # [2, 3]
    
    dll.add_to_end(5)
    dll.add_to_end(6)
    print("Lista antes da remoção:", dll.display_forward()) # [2, 3, 5, 6]