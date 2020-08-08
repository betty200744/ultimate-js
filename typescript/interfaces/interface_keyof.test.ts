import {Person} from "./interface_keyof";

describe('Interface', async () => {
    it('keyof', async () => {
        type K1 = keyof Person;
        let a: K1 = "id"
        expect(a).toEqual("id")
    });

})