/**
 * Created by betty on 8/5/20.
 */
"use strict";
// delete
let myobj = {h: 4}; // create object with property h
delete myobj.h; // returns true (can delete user-defined properties)

// typeof
console.log(typeof 1)
console.log(typeof "aa")

function foo() {
}

console.log(typeof foo)

function Person() {
  this.age = 0
  console.log(this)
}

let myobj1 = new Person()
console.log(typeof myobj1)

// in
// array check index , map check key
let arr = ["a", "b", "c"]
console.log(1 in arr)
let per = {name: "betty", firstName: "zhao"}
console.log('name' in per)

// instance of
let theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
// ternary
let myobj2 = new Person()
let status = (myobj2.age >= 18) ? 'adult' : 'minor';
console.log(status)