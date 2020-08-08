import {getProjects, getUsers} from "./generics_interface";

describe('Generics', async () => {
    it('interface', async () => {
        let res = getProjects()
        console.log(res)
        let res1 = getUsers()
        console.log(res1)
    });
})