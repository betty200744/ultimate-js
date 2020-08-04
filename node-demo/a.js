/**
 * Created by betty on 10/16/18.
 */
"use strict";
console.log('a starting');
module.exports = {
  done: false
};

const b = require('./b');

console.log(`in a , b.done : ${b.done}`);

module.exports = {
  done: true,
};

console.log('a is done');
