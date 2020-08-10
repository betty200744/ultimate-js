import {SinglyLinkedList, SinglyLinkedListForHash} from "./singlyLinkedList";


describe('SinglyLinkedList', async () => {
    it('append ', async () => {
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
        let res = singlyLinkedList.find(1)
        expect(res.value).toEqual(1)
        res = singlyLinkedList.find(5)
        expect(res).toEqual(null)
    });
})
describe('SinglyLinkedListForHash', async () => {
    it('append object', async () => {
        let singlyLinkedList = new SinglyLinkedListForHash<{ key: string, value: string }>()
        singlyLinkedList.append({key: "a", value: "a"})
        singlyLinkedList.append({key: "b", value: "b"})
        expect(singlyLinkedList.head.value.key).toEqual("a")
        expect(singlyLinkedList.head.value.value).toEqual("a")
        expect(singlyLinkedList.head.next.value.key).toEqual("b")
    });
    it('find object', async () => {
        let singlyLinkedListForHash = new SinglyLinkedListForHash<{ key: string, value: string }>()
        singlyLinkedListForHash.append({key: "a", value: "a"})
        singlyLinkedListForHash.append({key: "b", value: "b"})
        let a = singlyLinkedListForHash.find({key: "a"})
        expect(a.value.key).toEqual("a")
        a = singlyLinkedListForHash.find({key: "c"})
        expect(a).toEqual(null)
    });
    it('delete', async () => {
        let singlyLinkedListForHash = new SinglyLinkedListForHash<{ key: string, value: string }>()
        singlyLinkedListForHash.append({key: "a", value: "a"})
        singlyLinkedListForHash.delete("a")
        console.log(singlyLinkedListForHash)
    });

})