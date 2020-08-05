/**
 * Created by betty on 8/5/20.
 */
"use strict";
let cat1 = ["a", "b", "c"]
let cat2 = ["d", "e"]
// concat
let cat = cat1.concat(...cat2)
console.log(cat)
// push
cat.push("f")
console.log(cat)
// pop
console.log(cat.pop())
// slice
let scat1 = cat1.slice(0, 1)
console.log(scat1)

// splice
cat2.splice(0, 1)
console.log(cat2)
// sort
console.log(cat.sort((a, b) => {
  return a - b
}))
