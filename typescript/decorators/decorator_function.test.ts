import {log} from "./decorator_function";

describe('Decorator', async () => {
    it('decorator function', async () => {
        @log
        class User {
            getUser(){
                return {name: "betty"}
            }
        }
        let u = new User()
        u.getUser()
    });

})