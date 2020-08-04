let isDone: boolean = true;
let age: number = 11;
let firstName: string = "betty";
let tags: string[] = ["1", "2", "3"];
let skuTags: Array<string> = ["4", "5", "6"];
let tupleStruct = ["a", 1, true];

enum ActivityStatus {
    Red = 1,
    Green,
    Blue
}

let red: ActivityStatus = ActivityStatus.Red;

function printQuery(q: object | null): void {
    console.log(q)
}

console.log(isDone, age, firstName, tags, skuTags, tupleStruct);
console.log(ActivityStatus, ActivityStatus[1], ActivityStatus["Red"]);
printQuery({prop: "q"});
printQuery(null);

// type assertions
let someAny: any = "aa";
console.log(someAny, (someAny as string).length, (<string>someAny).length);
someAny = true;
console.log(someAny);
