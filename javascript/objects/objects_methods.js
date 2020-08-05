/**
 * Created by betty on 8/5/20.
 */
"use strict";

// 直接call
// bind
// call

function display() {
  console.log(this.firstName, this.lastName)
}

function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
  this.display = display
}

let p = new Person("betty", "zhao")
p.display()