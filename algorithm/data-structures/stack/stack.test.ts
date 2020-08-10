describe('Stack', async () => {
    it('Stack', async () => {
        // Last-in, First-out
        let s: number[] = []
        // Push
        s.push(1)
        s.push(2)
        // Pop
        let res = s.pop()
        expect(res).toEqual(2)
    });
})