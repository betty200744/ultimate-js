export interface LDAPConfig {
    site: string
    emailAttribute: string
    dn: string
    base?: string // option properties
    readonly bindCredentials: string //readonly properties
    [propName: string]: any // extra properties index signature
}

export function parse(config: any): LDAPConfig {
    return {
        site: config.site,
        emailAttribute: config.emailAttribute,
        dn: config.dn,
        base: config.base,
        bindCredentials: config.bindCredentials
    }
}