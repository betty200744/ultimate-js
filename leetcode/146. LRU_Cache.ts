// Least Recently Used (LRU) cache
export class LRUCache {
    private values: Map<number, number> = new Map<number, number>()
    private capacity: number = 2

    get(key: number): number {
        const hasKey = this.values.has(key)
        let value: number = -1
        if (hasKey) {
            value = this.values.get(key)
            this.values.delete(key)
            this.values.set(key, value)
        }
        return value
    }

    put(key: number, value: number): void {
        if (this.values.size >= this.capacity) {
            const keyToDelete = this.values.keys().next().value;
            this.values.delete(keyToDelete)
        }
        this.values.set(key, value)
    }
}