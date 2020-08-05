/**
 * Created by betty on 8/5/20.
 */
"use strict";


// call1
const square = {
  x: 3
}
let getX = function () {
  return this.x
}
getX.call(square)

// call2
function Product(name, price) {
  this.name = name
  this.price = price
}

function Food(name, price) {
  Product.call(this, name, price)
  this.category = "food"
}

let rice = new Food("rice", 222)
console.log(rice)

