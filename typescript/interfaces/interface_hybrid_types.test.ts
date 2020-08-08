import {Review} from "./interface_hybrid_types"

describe('Hybird Interface ', async () => {
    it('hybird interface', async () => {
        let r = new Review()
        r.title = "a"
        r.publish()
    });

})