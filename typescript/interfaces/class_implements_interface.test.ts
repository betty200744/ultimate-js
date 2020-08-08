import {HydraConfigParser, LdapConfigParser} from "./class_implements_interface";

describe('Class implements Interface', async () => {
    it('HydraConfigParser', async () => {
        let hydra = new HydraConfigParser()
        let res = hydra.parse({})
        console.log(res)
    });
    it('LdapConfigParser', async () => {
        let ldap = new LdapConfigParser()
        let res = ldap.parse({})
        console.log(res)
    });


})