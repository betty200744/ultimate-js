import {null_vs_undefined, any_vs_void, string_reverse} from "./basic_type";

describe('Basic Types', async () => {
    it('null_vs_undefined', async () => {
        let c = null_vs_undefined("a");
        expect(c).toEqual(undefined);
    });
    it('any_vs_void', async () => {
        let res = any_vs_void("a")
        expect(res).toEqual(undefined)
    });
    it('string_reverse', async () => {
        let res = string_reverse("node")
        expect(res).toEqual("edon")
    });
    it('map', async () => {
        let g: Map<string, string> = new Map<string, string>()
        g.set("a", "a")
        g.set("b", "b")
        g.set("c", "c")
        g.set("d", "d")
        expect(g.get('d')).toEqual("d")
        console.log(g.keys().next())
        console.log(g.keys().next())
    });
})
