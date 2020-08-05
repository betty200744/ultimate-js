/**
 * Created by betty on 8/4/20.
 */
"use strict";

// nested function
function X(x) {
  let y = 2
  let z = 3

  function Y(y) {
    function Z(z) {
      console.log(x, y, z)
    }

    Z(z)
  }

  Y(y)
}

X(1)

// closure
let createPet = function (name) {
  let sex;
  return {
    getPet: () => {
      return {name: name, sex: sex || "unknown"}
    },
    setSex: (s) => {
      sex = s
    }
  }
}

let dog = createPet("dog")
dog.setSex("male")
console.log(dog.getPet())
