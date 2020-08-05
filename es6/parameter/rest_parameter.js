/**
 * Created by betty on 8/5/20.
 */
"use strict";

function foo(a, ...b) {
  console.log(a)
  // spread operator
  console.log(...b)
}

foo(1, 2, 3)