/**
 * Created by betty on 8/4/20.
 */
"use strict";

// function hoisting
foo()

// function declaration
function foo() {
  console.log("foo")
}

// function expression
var baz = () => {
  console.log("baz")
}
baz()

