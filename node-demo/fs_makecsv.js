/**
 * Created by betty on 10/22/18.
 */
"use strict";

const R = require('ramda');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const randomstring = require('randomstring');


const createRow = async () => {
  return R.repeat(randomstring.generate(6), 5).join(',');
};

const createCSVs = async (sizes) => {
  sizes.forEach(async (size) => {
    let wstream = await fs.createWriteStream(`dummy${size}.csv`);
    const row = await createRow();
    for (let i = 0; i < size; i ++) {
      await wstream.write(row);
    }
  })
};

// createCSVs([1000, 10000, 100000, 1000000]);


function A() {  }

function f() {

}

let a = new A();
let ff = f();

console.log(typeof a);
console.log(typeof ff);