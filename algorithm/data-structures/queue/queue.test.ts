describe('Queue', async () => {
    it('queue', async () => {
        let q: number[] = []
        // Enqueue
        q.push(1)
        q.push(2)
        // Dequeue
        let res = q.shift()
        expect(res).toEqual(1)
    });
})