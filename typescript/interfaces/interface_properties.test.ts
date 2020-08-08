import {parse, LDAPConfig} from './interface_properties'

describe('Interface', async () => {
    it('interface_properties', async () => {
        let config = {
            site: "a",
            emailAttribute: "a",
            dn: "a",
            base: "a",
            bindCredentials: "a"
        }
        let ldapConfig: LDAPConfig = parse(config)
        expect(ldapConfig.base).toEqual("a")
    });

})