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
    it('predecessor', async () => {
        let bst = new BinarySearchTree()
        bst.insert(15);
        bst.insert(25);
        bst.insert(10);
        bst.insert(7);
        bst.insert(14);
        bst.insert(26);
        bst.inOrderTraverse(bst.root)
        let prede = bst.predecessor(bst.root.left)
        expect(prede.data).toEqual(14)
    });
    it('successor', async () => {
        let bst = new BinarySearchTree()
        bst.insert(15);
        bst.insert(25);
        bst.insert(10);
        bst.insert(7);
        bst.insert(16);
        bst.insert(26);
        bst.inOrderTraverse(bst.root)
        let succ = bst.successor(bst.root.right)
        expect(succ.data).toEqual(16)
    });
    it('min', async () => {
        let bst = new BinarySearchTree()
        bst.insert(1)
        bst.insert(2)
        bst.insert(3)
        let res = bst.min()
        expect(res.data).toEqual(1)
    });
    it('max', async () => {
        let bst = new BinarySearchTree()
        bst.insert(1)
        bst.insert(3)
        bst.insert(5)
        let res = bst.max()
        expect(res.data).toEqual(5)
    });
    it('remove', async () => {
        let bst = new BinarySearchTree()
        bst.insert(15);
        bst.insert(25);
        bst.insert(10);
        bst.insert(7);
        bst.insert(16);
        bst.insert(26);
        bst.remove(7)
        expect(bst.find(7)).toBeFalsy()
        bst.insert(7)
        bst.remove(10)
        expect(bst.find(10)).toBeFalsy()
        bst.insert(10)
        bst.remove(25)
        expect(bst.find(25)).toBeFalsy()
    });
    it('aaa', async () => {
        let bst = new BinarySearchTree()
        bst.insert(4)
        bst.insert(1)
        bst.insert(2)
        bst.insert(3)
        bst.insert(5)
        bst.insert(6)
        bst.insert(7)
        bst.breadthFirst(bst.root)
    });

})