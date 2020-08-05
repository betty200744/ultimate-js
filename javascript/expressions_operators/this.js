/**
 * Created by betty on 8/5/20.
 */
"use strict";

function Person() {
  this.age = 0
  console.log(this)
}

let p = new Person()
console.log(p.age)