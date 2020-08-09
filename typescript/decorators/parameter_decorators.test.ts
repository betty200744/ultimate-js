import {User4} from "./user";

describe('Decorator', async () => {
    it('parameter decorator', async () => {
        let u = new User4("betty")
        u.getUserById("11")
    });

})