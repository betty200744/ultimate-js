/**
 * Created by betty on 8/5/20.
 */
"use strict";


// unique
// set operator
let mySet = new Set()
mySet.add(1)
mySet.add(1)
mySet.add("a")
mySet.add("d")
mySet.has(1)
mySet.delete("d")
console.log(mySet)

// set iterating
mySet.forEach((s) => {
  console.log(s)
})
for (let s of mySet) {
  console.log(s)
}

// array to set
let arr = Array.from(mySet)
arr.push(4)
console.log(arr)

