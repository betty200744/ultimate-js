import {biggerEquals, defaultCompare, equals, lesserEquals} from "./util";

describe('utils', async () => {
    it('equals', async () => {
        let res = equals(1, 2)
        expect(res).toBeFalsy()
        res = equals(2, 2)
        expect(res).toBeTruthy()
    });

    it('lesserEquals', async () => {
        let res = lesserEquals<number>(1, 2)
        expect(res).toBeTruthy()
        res = lesserEquals(1, 1)
        expect(res).toBeTruthy()
    });
    it('biggerEquals', async () => {
        let res = biggerEquals(2, 1)
        expect(res).toBeTruthy()
        res = biggerEquals(3, 3)
        expect(res).toBeTruthy()
    });
})