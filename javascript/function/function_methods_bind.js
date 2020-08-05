/**
 * Created by betty on 8/5/20.
 */
"use strict";


const square = {
  x: 3,
  y: 4
}
let getX = function () {
  return this.x
}
let boundGetX = getX.bind(square)
console.log(boundGetX())