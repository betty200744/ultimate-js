/**
 * Created by betty on 8/5/20.
 */
"use strict";

// map
let arr = [1, 2, 3]
let arrMap = arr.map((a) => {
  return a + 1
})
console.log(arrMap)
// filter
let arrFil = arr.filter((a) => {
  return a > 2
})
console.log(arrFil)

// reduce
let arrRedu = arr.reduce((accumulator, curr) => {
  return accumulator + curr
})
console.log(arrRedu)

// forEach
arr.forEach((a) => {
  console.log(a)
})
// for of
for (let number of arr) {
  console.log(number)
}