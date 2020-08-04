var isDone = true;
var age = 11;
var firstName = "betty";
var tags = ["1", "2", "3"];
var skuTags = ["4", "5", "6"];
var tupleStruct = ["a", 1, true];
var ActivityStatus;
(function (ActivityStatus) {
    ActivityStatus[ActivityStatus["Red"] = 1] = "Red";
    ActivityStatus[ActivityStatus["Green"] = 2] = "Green";
    ActivityStatus[ActivityStatus["Blue"] = 3] = "Blue";
})(ActivityStatus || (ActivityStatus = {}));
var red = ActivityStatus.Red;
function printQuery(q) {
    console.log(q);
}
console.log(isDone, age, firstName, tags, skuTags, tupleStruct);
console.log(ActivityStatus, ActivityStatus[1], ActivityStatus["Red"]);
printQuery({ prop: "q" });
printQuery(null);
// type assertions
var someAny = "aa";
console.log(someAny, someAny.length, someAny.length);
someAny = true;
console.log(someAny);
