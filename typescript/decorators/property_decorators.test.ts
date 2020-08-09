import {User4} from "./user";

describe('Decorator', async () => {
    it('property decorators', async () => {
        let u = new User4("betty")
        console.log(u.name)
    });
})