import DoubleLinkedList from "./DoubleLinkedList";

describe('DoubleLinkedList', async () => {
    it('append', async () => {
        let doubleLinkedList = new DoubleLinkedList()
        doubleLinkedList.append(1)
        doubleLinkedList.append(2)
        expect(doubleLinkedList.head.value).toEqual(1)
        expect(doubleLinkedList.head.next.value).toEqual(2)
        console.log(doubleLinkedList)
    });
    it('prepend', async () => {
        let doubleLinkedList = new DoubleLinkedList()
        doubleLinkedList.prepend(1)
        doubleLinkedList.prepend(2)
        doubleLinkedList.prepend(3)
        expect(doubleLinkedList.head.value).toEqual(3)
        expect(doubleLinkedList.head.next.value).toEqual(2)
        console.log(doubleLinkedList)
    });
    it('find', async () => {
        let doubleLinkedList = new DoubleLinkedList()
        doubleLinkedList.append(1)
        doubleLinkedList.append(2)
        doubleLinkedList.append(3)
        expect(doubleLinkedList.find(1)).toBeTruthy()
        expect(doubleLinkedList.find(5)).toBeFalsy()
    });
})