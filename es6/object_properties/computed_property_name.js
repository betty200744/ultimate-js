/**
 * Created by betty on 8/6/20.
 */
"use strict";

function prefix() {
  return "es6"
}

let obj = {
  [prefix() + "property"]: "name",
  value: "betty"
}
console.log(obj)