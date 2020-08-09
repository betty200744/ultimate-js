import {log} from "./decorator_function";
import {User1} from "./user";

describe('Decorator', async () => {
    it('decorator function', async () => {
        let u = new User1()
        u.getUser()
    });
})