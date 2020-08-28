import {biggerEquals, lesserEquals} from "../../../javascript/util";
import {BinarySearchTreeNode} from "./binarySearchTreeNode";


export class BinarySearchTree extends BinarySearchTreeNode {
    root: BinarySearchTreeNode | null

    constructor() {
        super()
        this.root = null
    }

    insert(data: number) {
        if (this.root === null) {
            this.root = new BinarySearchTreeNode(data)
        } else {
            this.insertNode(data, this.root)
        }
    }

    find(data: number): boolean {
        return this.findNode(data, this.root)
    }

    remove(data) {
        this.root = this.removeNode(data, this.root)
    }

    getRootNode() {
        return this.root
    }

    min() {
        return this.findMin(this.root)
    }

    max() {
        return this.findMax(this.root)
    }
}