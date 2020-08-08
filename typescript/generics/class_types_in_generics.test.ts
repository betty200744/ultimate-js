import {BeeKeeper, create} from "./class_types_in_generics";

describe('Generics', async () => {
    it('class Types', async () => {
        let b = create(BeeKeeper)
        console.log(b.hasMask)
    });

})