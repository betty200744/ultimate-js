import {BinarySearchTree} from "./binarySearchTree";
import {BinarySearchTreeNode} from "./binarySearchTreeNode";


/*
*
*
* Balanced Search Trees:
There are many balanced search trees.
AVL Trees Adel’son-Velsii and Landis 1962
B-Trees/2-3-4 Trees Bayer and McCreight 1972 (see CLRS 18)
BB[α] Trees Nievergelt and Reingold 1973
Red-black Trees CLRS Chapter 13
(A) — Splay-Trees Sleator and Tarjan 1985
(R) — Skip Lists Pugh 1989
(A) — Scapegoat Trees Galperin and Rivest 1993
(R) — Treaps Seidel and Aragon 1996
* */
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