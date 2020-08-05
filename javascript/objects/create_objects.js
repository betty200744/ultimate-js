/**
 * Created by betty on 8/5/20.
 */
"use strict";

// create objects with new
let person1 = new Object();
person1.firstName = "betty"
person1.lastName = "zhao"
person1.age = 18
console.log(person1)
// Indexing object properties
console.log(person1.lastName)
console.log(person1["age"])
// create objects simplified
let person2 = {firstName: "betty", lastName: "zhao", age: 18}
console.log(person2)

// create objects with constructor function
function Person(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  console.log(this)
}

let person3 = new Person("betty", "zhao", 18)
console.log(person3)
let person4 = new Person("cc", "chen", 18)


