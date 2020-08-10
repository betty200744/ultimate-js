class LinkedNode<T> {
    value: T
    next: LinkedNode<T>

    constructor(value: T, next: LinkedNode<T>) {
        this.value = value
        this.next = next
    }
}

/**
 * SinglyLinkedList
 * head / tail

 * append
 * prepend
 * deleteFirst
 * deleteLast
 * find
 * display
 * reverse
 **/
export class SinglyLinkedList<T> {
    head: LinkedNode<T> | null
    tail: LinkedNode<T> | null

    constructor() {
        this.head = null
        this.tail = null
    }

    append(value: T) {
        let newNode = new LinkedNode(value, null)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return
        }
        this.tail.next = newNode
        this.tail = newNode
        return
    }

    prepend(value: T) {
        this.head = new LinkedNode(value, this.head)
    }

    deleteFirst(): T {
        // no node
        if (!this.head) {
            return
        }
        // has node
        let tmp: T = this.head.value
        this.head = this.head.next
        if (this.head == null) {
            this.tail = null
        }
        return tmp
    }

    deleteLast(): T {
        // no node
        if (!this.head) {
            return
        }
        // one node
        if (this.head === this.tail) {
            return this.deleteFirst()
        }
        // multi node
        let current = this.head
        // find the node before last
        while (current.next.next) {
            current = current.next
        }
        let tmp: T = current.next.value
        current.next = null
        this.tail = current
        return tmp
    }

    find(value: T) {
        let curr = this.head
        while (curr) {
            if (curr.value == value) {
                return curr
            }
            curr = curr.next
        }
        return null
    }

    reverse() {
        let prev: LinkedNode<T>;
        let next: LinkedNode<T>;
        let curr: LinkedNode<T> = this.head
        while (curr) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.tail = this.head
        this.head = prev
    }

    display() {
        let nodes: T[] = []
        let curr = this.head
        while (curr) {
            nodes.push(curr.value)
            curr = curr.next
        }
        console.log(nodes)
    }
}

export class SinglyLinkedListForHash<T extends { key: string, value: string }> extends SinglyLinkedList<T> {
    constructor() {
        super();
    }

    find(value: { key: string }) {
        let curr = this.head
        while (curr) {
            if (curr.value.key == value.key) {
                return curr
            }
            curr = curr.next
        }
        return null
    }
    delete(value: string) {
        if (!this.head) {
            return
        }
        if (this.head.value.value === value) {
            this.deleteFirst()
            return
        }
        let deleteNode = null
        let currentNode = this.head
        while (currentNode.next) {
            if (currentNode.next.value.value === value) {
                deleteNode = currentNode.next
                currentNode.next = currentNode.next.next
            } else {
                currentNode = currentNode.next
            }
        }
        console.log(this)
    }
}