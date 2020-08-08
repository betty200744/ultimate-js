import {identity, identity1} from "./generics_function";

describe('Generics', async () => {
    it('Function', async () => {
        let res = identity("a")
        expect(typeof res).toEqual("string")
    });
    it('Arrow Function', async () => {
        let res = identity1(true)
        expect(typeof res).toEqual("boolean")
    });
})