/**
 * Created by betty on 8/5/20.
 */
"use strict";

// arrow function本质是一个匿名function， 所以没有this, 没有arguments

function Person() {
  this.age = 0
  console.log(this)
}

let p = new Person()
console.log(p.age)
var a = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

var a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // logs [8, 6, 7, 9]
/*

var a3 = a.map(s => s.length);

console.log(a3); // logs [8, 6, 7, 9]*/
