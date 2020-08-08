/**
 * Created by betty on 8/8/20.
 */
"use strict";
type StrategyConfig = object;

interface ConfigParser {
    parse(config: any): StrategyConfig
}

export class HydraConfigParser implements ConfigParser {
    parse(config: any): StrategyConfig {
        return {
            appId: config.appId,
            appSecret: config.appSecret,
            site: config.site
        }
    }
}

export class LdapConfigParser implements ConfigParser {
    parse(config: any): StrategyConfig {
        return {
            site: config.site,
            emailAttribute: config.emailAttribute,
            dn: config.dn,
            base: config.base,
            bindCredentials: config.bindCredentials
        }
    }
}