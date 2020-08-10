import {SinglyLinkedListForHash} from "../singly-linked-list/singlyLinkedList";

const defaultHashTableSize = 32

export class HashTable {
    buckets: SinglyLinkedListForHash<{ key: string, value: string }>[]

    constructor(hashTableSize = defaultHashTableSize) {
        this.buckets = Array(hashTableSize).fill(null);
    }

    // hash function
    hash(key: string): number {
        const hash = Array.from(key).reduce(
            (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
            0,
        );

        return hash % this.buckets.length;
    }

    // add
    add(key: string, value: string) {
        const keyHash = this.hash(key)
        if (!this.buckets[keyHash]) {
            let newLinkedList = new SinglyLinkedListForHash<{ key: string, value: string }>()
            newLinkedList.append({key, value})
            this.buckets[keyHash] = newLinkedList
        } else {
            let bucketLinkedList = this.buckets[keyHash]
            let node = bucketLinkedList.find({key})
            if (node) {
                node.value.value = value
            } else {
                bucketLinkedList.append({key, value})
            }
        }
    }

    // get
    find(key: string): string {
        const keyHash = this.hash(key)
        if (!this.buckets[keyHash]) {
            return null
        } else {
            let bucketLinkedList = this.buckets[keyHash]
            let node = bucketLinkedList.find({key})
            if (node) {
                return node.value.value
            } else {
                return null
            }
        }
    }

    // delete
    delete(key: string) {
        const keyHash = this.hash(key);
        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.find({key});
        if (node) {
            bucketLinkedList.delete(node.value.value);
        }
        return null;
    }
}
