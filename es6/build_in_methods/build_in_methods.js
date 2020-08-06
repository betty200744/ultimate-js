/**
 * Created by betty on 8/6/20.
 */
"use strict";

// Object.assign
let dest = {a: "a"}
let src1 = {b: "b"}
let src2 = {c: "c"}
Object.assign(dest, src1, src2)
console.log(dest)

// array.Find
let arr = [1, 2, 3, 4]
let res = arr.find(x => x > 3)
console.log(res)