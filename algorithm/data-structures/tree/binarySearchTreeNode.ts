export class BinarySearchTreeNode {
    left: BinarySearchTreeNode | null
    right: BinarySearchTreeNode | null
    data: number

    constructor(data: number = null) {
        this.left = null
        this.right = null
        this.data = data
    }

    // operators, insert, recursive
    protected insertNode(data: number, node: BinarySearchTreeNode) {
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

    protected findNode(data: number, node: BinarySearchTreeNode): boolean {
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

    protected removeNode(data, node: BinarySearchTreeNode) {
        if (node === null) {
            return null
        }
        if (data < node.data) {
            return this.removeNode(data, node.left)
        }
        if (data > node.data) {
            return this.removeNode(data, node.right)
        }
        if (data === node.data) {
            // case1: a leaf node
            if (node.right === null && node.left === null) {
                node = null;
                return node;
            }
            // case2: a node with only 1 child
            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            }
            // case3: a node with w child, find successor , then swap the data, then remove the successor
            let successor = this.successor(node.right)
            node.data = successor.data
            return this.removeNode(data, successor)
        }
    }

    // next-larger
    successor(node) {
        if (node.left === null) {
            return node
        } else {
            return this.successor(node.left)
        }
    }

    // next-smaller
    predecessor(node) {
        if (node.right === null) {
            return node
        } else {
            return this.predecessor(node.right)
        }
    }

    protected findMin(node) {
        if (node.left === null) {
            return node
        } else {
            return this.findMin(node.left)
        }
    }

    protected findMax(node) {
        if (node.right === null) {
            return node
        } else {
            return this.findMax(node.right)
        }
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
}
