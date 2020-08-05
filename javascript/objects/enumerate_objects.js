/**
 * Created by betty on 8/5/20.
 */
"use strict";


// create objects simplified
let person2 = {firstName: "betty", lastName: "zhao", age: 18}
console.log(person2)

// enumerate objects properties
for (let prop in person1) {
  console.log(prop)
}
console.log(Object.keys(person1))
console.log(Object.getOwnPropertyNames(person1))