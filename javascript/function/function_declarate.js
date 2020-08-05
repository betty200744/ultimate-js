/**
 * Created by betty on 8/4/20.
 */
"use strict";

// function hoisting
let fa = factorial(5)
console.log(fa)

// function declaration
function factorial(n) {
  if ((n === 0) || (n === 1)) {
    return n
  } else {
    return n * factorial(n - 1)
  }
}

// function expression
var baz = () => {
  console.log("baz")
}
baz()
