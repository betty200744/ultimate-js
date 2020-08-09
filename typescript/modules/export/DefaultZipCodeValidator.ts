export const numberRegexp = /^[0-9]+$/;

export default class DefaultZipCodeValidator {
    isAcceptable(s: string): boolean {
        return s.length === 5 && numberRegexp.test(s)
    }
}