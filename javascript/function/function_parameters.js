/**
 * Created by betty on 8/4/20.
 */
"use strict";

// parameter
function add1(x, y) {
  console.log(arguments)
}

// default parameter
function add2(x = 1, y = 2) {
  console.log(arguments)
}

// rest parameter
function add3(x, ...y) {
  console.log(arguments)
}

add1(1, 2)
add2(1, 2, 3)
add3(1, 2, 3)

