const numberRegexp = /^[0-9]+$/;

export default function(s: string): boolean {
    return s.length === 5 && numberRegexp.test(s)
}