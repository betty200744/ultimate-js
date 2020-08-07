// Boolean
let a: boolean = true
// Number
let b: number = 1
// String
let c: string = "c"
// Array
let d: string[] = ["a", "b"]
// Array
let e: Array<string> = ["a", "b"]
// Tuple
let f = ["a", 1, true]

// Enum
enum ActivityStatus {
    Red = 1,
    Green,
    Blue
}

let red: ActivityStatus = ActivityStatus.Red;

// null and undefined
export function null_vs_undefined(a: string, b?: string | null, c?: string): string {
    console.log(`this is a: ${a}`);
    console.log(`this is b: ${b}`);
    console.log(`this is c: ${c}`);
    return c
}

// any vs void
export function any_vs_void(a: any): void {
    console.log("return void", typeof a)
}

export function string_reverse(s: string): string {
    return s.split("").reverse().join("")
}