import {bool_type_assertions, string_type_assertions} from "./type_assertions";

describe('base-types', async () => {
    it('type_assertions', async () => {
        let a: any = "aa";
        let rs = string_type_assertions(a)
        console.log(typeof rs)
        expect(typeof rs).toBe("string")

        a = true
        let rb = bool_type_assertions(a)
        expect(typeof rb).toBe("boolean")
    });

})