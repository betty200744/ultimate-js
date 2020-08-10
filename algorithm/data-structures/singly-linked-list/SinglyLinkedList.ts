class LinkedNode {
    value: number
    next: LinkedNode

    constructor(value: number, next: LinkedNode) {
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
export default class SinglyLinkedList {
    head: LinkedNode | null
    tail: LinkedNode | null

    constructor() {
        this.head = null
        this.tail = null
    }

    append(value: number) {
        let newNode = new LinkedNode(value, null)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        this.tail.next = newNode
        this.tail = newNode
        return this
    }

    prepend(value: number) {
        this.head = new LinkedNode(value, this.head)
    }

    deleteFirst(): number {
        // no node
        if (!this.head) {
            return
        }
        // has node
        let tmp: number = this.head.value
        this.head = this.head.next
        return tmp
    }

    deleteLast(): number {
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
        let tmp: number = current.next.value
        current.next = null
        this.tail = current
        return tmp
    }

    find(value: number): boolean {
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return true
            }
            curr = curr.next
        }
    }

    reverse() {
        let prev: LinkedNode;
        let next: LinkedNode;
        let curr: LinkedNode = this.head
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
        let nodes: number[] = []
        let curr = this.head
        while (curr) {
            nodes.push(curr.value)
            curr = curr.next
        }
        console.log(nodes)
    }
}