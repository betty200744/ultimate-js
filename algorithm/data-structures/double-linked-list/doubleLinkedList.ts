class LinkedNode {
    value: number
    next: LinkedNode
    previous: LinkedNode

    constructor(value: number, next: LinkedNode = null, previous: LinkedNode = null) {
        this.value = value
        this.next = next
        this.previous = previous
    }
}

/**
 * DoubleLinkedList
 * head / tail

 * append
 * prepend
 * deleteFirst
 * deleteLast
 * find
 * display
 * reverse
 **/
export default class DoubleLinkedList {
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
        newNode.previous = this.tail
        this.tail = newNode
        return this
    }

    prepend(value: number) {
        let newNode = new LinkedNode(value, this.head)
        if (this.head) {
            this.head.previous = newNode
        }
        this.head = newNode
        if (!this.tail) {
            this.tail = newNode
        }
    }

    deleteFirst(): number {
        return
    }

    deleteLast(): number {
        return
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
}