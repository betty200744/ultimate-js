class BinarySearchTreeNode {
    left: BinarySearchTreeNode | null
    right: BinarySearchTreeNode | null
    data: number

    constructor(data: number = null) {
        this.left = null
        this.right = null
        this.data = data
    }
}

export class BinarySearchTree {
    root: BinarySearchTreeNode | null

    constructor() {
        this.root = null
    }

    insert(data: number) {
        if (this.root === null) {
            this.root = new BinarySearchTreeNode(data)
        } else {
            this.insertNode(data, this.root)
        }
    }

    // operators, insert, recursive
    private insertNode(data: number, node: BinarySearchTreeNode) {
        if (data >= node.data) {
            if (node.right === null) {
                node.right = new BinarySearchTreeNode(data)
                return
            }
            return this.insertNode(data, node.right)
        }
        if (node.left === null) {
            node.left = new BinarySearchTreeNode(data)
            return
        }
        return this.insertNode(data, node.left)
    }


    find(data: number): boolean {
        return this.findNode(data, this.root)
    }

    private findNode(data: number, node: BinarySearchTreeNode): boolean {
        if (node === null) {
            return false
        }
        if (data === node.data) {
            return true
        }
        if (data > node.data) {
            return this.findNode(data, node.right)
        }
        return this.findNode(data, node.left)
    }

    // operators, remove
    remove(data) {
        this.root = this.insertNode(data, this.root)
    }

    private removeNode(data, node: BinarySearchTreeNode) {

    }


    // helper method
    getRootNode() {
        return this.root
    }

    swap() {

    }

    inOrderSuccessor(node) {
        if (node.left === null) {
            return node
        } else {
            return this.inOrderSuccessor(node.left)
        }
    }

    findMin() {

    }

    findMax() {

    }

    // NLR
    preOrderTraverse(node: BinarySearchTreeNode) {
        if (node !== null) {
            console.log(node.data)
            this.preOrderTraverse(node.left)
            this.preOrderTraverse(node.right)
        }
    }

    // LNR
    inOrderTraverse(node: BinarySearchTreeNode) {
        if (node !== null) {
            this.inOrderTraverse(node.left)
            console.log(node.data)
            this.inOrderTraverse(node.right)
        }
    }

    // LRN
    postOrderTraverse(node: BinarySearchTreeNode) {
        if (node !== null) {
            this.postOrderTraverse(node.left)
            this.postOrderTraverse(node.right)
            console.log(node.data)
        }
    }

    breadthFirstOrderTraverse() {

    }
}