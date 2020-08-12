import {BinarySearchTree} from "./binarySearchTree";
import {BinarySearchTreeNode} from "./binarySearchTreeNode";

// require heights of the left & right of children of every node to diff by at most + or - 1
class AvlTree extends BinarySearchTree {
    constructor() {
        super();
    }

    // the length of longest path form it down to a leaf
    // max(left , right) + 1
    getNodeHeight(node: BinarySearchTreeNode) {
        if (node === null) {
            return -1
        }
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1
    }

    /**
     * Right-Right rotation
     *
     *       b                           a
     *      /                           / \
     *     a    -> rotationRR(b) ->    c   b
     *    /
     *   c
     */
    rotationRR(node: BinarySearchTreeNode) {
    }

    /**
     * Left left rotation
     *
     *     a                              b
     *      \                            / \
     *       b   -> rotationLL(a) ->    a   e
     *        \
     *         e
     */
    rotationLL(node: BinarySearchTreeNode) {
    }


    rotationLR(node: BinarySearchTreeNode) {

    }

    rotationRL(node: BinarySearchTreeNode) {

    }
}