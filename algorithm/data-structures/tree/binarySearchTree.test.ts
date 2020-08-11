import {BinarySearchTree} from "./binarySearchTree";

describe('BinarySearchTree', async () => {
    it('insert', async () => {
        let bst = new BinarySearchTree()
        bst.insert(15);
        bst.insert(25);
        bst.insert(10);
        bst.insert(7);
        bst.inOrderTraverse(bst.root)
    });
    it('find', async () => {
        let bst = new BinarySearchTree()
        bst.insert(15);
        bst.insert(25);
        bst.insert(10);
        bst.insert(7);
        let res = bst.find(7)
        expect(res).toBeTruthy()
        res = bst.find(9)
        expect(res).toBeFalsy()
    });


})