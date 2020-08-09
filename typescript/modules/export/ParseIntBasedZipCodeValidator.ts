class ParseIntBasedZipCodeValidator {
    isAcceptable(s: string): boolean {
        return s.length === 5 && parseInt(s).toString() === s
    }
}
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from "./ZipCodeValidator";
