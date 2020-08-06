/**
 * Created by betty on 8/6/20.
 */
"use strict";
// array matching 
let arr1 = [1, 2, 3, 4]
let [a, , b] = arr1
console.log(a, b)

// object matching
let obj1 = {aa: "aa", bb: "bb", cc: {ccc: "ccc"}}
let {aa, bb, cc, cc: {ccc}} = obj1
console.log(aa, bb, cc, ccc)

// default value
let obj2 = {aa: "aa"}
let {dd = 2} = obj2
console.log(dd)

// parameter matching
function f([a, b]) {
  console.log(a, b)
}

function g({name: n, value: v}) {
  console.log(n, v)
}

function h({name, value}) {
  console.log(name, value)
}

let arr2 = [2, 3, 4]
let obj3 = {name: "betty", value: "betty.com"}
f(arr2)
g(obj3)
h(obj3)

