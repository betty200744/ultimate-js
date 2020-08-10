import {HashTable} from "./hashTable";

describe('HashTable', async () => {
    it('add', async () => {
        let hashTable = new HashTable()
        hashTable.add("a", "a")
        hashTable.add("b", "b")
        console.log(hashTable.buckets)
    });
    it('find', async () => {
        let hashTable = new HashTable()
        hashTable.add("a", "a")
        hashTable.add("b", "b")
        let res = hashTable.find("a")
        expect(res).toEqual("a")
    });
    it('delete', async () => {
        let hashTable = new HashTable()
        hashTable.add("a", "a")
        hashTable.add("a", "b")
        hashTable.add("a", "c")
        hashTable.delete("a")
        console.log(hashTable.buckets[1])
    });
})