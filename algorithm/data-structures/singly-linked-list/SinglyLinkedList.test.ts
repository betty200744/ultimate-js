import SinglyLinkedList from "./SinglyLinkedList";

describe('SinglyLinkedList', async () => {
    it('append', async () => {
        let singlyLinkedList = new SinglyLinkedList()
        singlyLinkedList.append(1)
        singlyLinkedList.append(2)
        expect(singlyLinkedList.head.value).toEqual(1)
        expect(singlyLinkedList.head.next.value).toEqual(2)
    });
    it('prepend', async () => {
        let singlyLinkedList = new SinglyLinkedList()
        singlyLinkedList.prepend(1)
        singlyLinkedList.prepend(2)
        expect(singlyLinkedList.head.value).toEqual(2)
        expect(singlyLinkedList.head.next.value).toEqual(1)
    });
    it('deleteFirst', async () => {
        let singlyLinkedList = new SinglyLinkedList()
        singlyLinkedList.append(1)
        let res = singlyLinkedList.deleteFirst()
        expect(res).toEqual(1)
        singlyLinkedList.append(1)
        singlyLinkedList.append(2)
        singlyLinkedList.append(3)
        res = singlyLinkedList.deleteFirst()
        expect(res).toEqual(1)
    });
    it('deleteLast', async () => {
        let singlyLinkedList = new SinglyLinkedList()
        singlyLinkedList.append(1)
        let res = singlyLinkedList.deleteLast()
        expect(res).toEqual(1)
        singlyLinkedList.append(1)
        singlyLinkedList.append(2)
        res = singlyLinkedList.deleteLast()
        expect(res).toEqual(2)
        singlyLinkedList.append(2)
        singlyLinkedList.append(3)
        res = singlyLinkedList.deleteLast()
        expect(res).toEqual(3)
    });
    it('reverse', async () => {
        let singlyLinkedList = new SinglyLinkedList()
        singlyLinkedList.append(1)
        singlyLinkedList.append(2)
        singlyLinkedList.append(3)
        singlyLinkedList.reverse()
        console.log(singlyLinkedList)
    });
    it('display', async () => {
        let singlyLinkedList = new SinglyLinkedList()
        singlyLinkedList.append(1)
        singlyLinkedList.append(2)
        singlyLinkedList.append(3)
        singlyLinkedList.display()
    });
    it('find', async () => {
        let singlyLinkedList = new SinglyLinkedList()
        singlyLinkedList.append(1)
        singlyLinkedList.append(2)
        singlyLinkedList.append(3)
        expect(singlyLinkedList.find(1)).toBeTruthy()
        expect(singlyLinkedList.find(5)).toBeFalsy()
    });


})