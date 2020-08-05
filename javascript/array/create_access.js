/**
 * Created by betty on 8/5/20.
 */
"use strict";
// create
let arr1 = new Array("a", "b", "c")
let arr2 = Array("aa", "bb", "cc")
let arr3 = ["aaa", "bbb", "ccc"]

// access
console.log(arr1[0])
// populate
arr1[4] = "d"
console.log(arr1)
// length
console.log(arr1.length)
// iterating
for (let a of arr1) {
  console.log(a)
}