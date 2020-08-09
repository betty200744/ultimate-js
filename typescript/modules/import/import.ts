import {ZipCodeValidator} from "../export/ZipCodeValidator";
import {ZipCodeValidator as ZCV} from "../export/ZipCodeValidator";
import * as validator from "../export/ZipCodeValidator"
import DefaultZipCodeValidator, {numberRegexp} from "../export/DefaultZipCodeValidator";
import staticValidator from "../export/StaticZipCodeValidator"
let validator1 = new ZipCodeValidator();
let validator2 = new ZCV()
let validator3 = new validator.ZipCodeValidator()
let validator4 = new DefaultZipCodeValidator()
let validator5 = numberRegexp

let validator6 = staticValidator("aaa")