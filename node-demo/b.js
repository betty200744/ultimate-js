/**
 * Created by betty on 10/15/18.
 */
"use strict";
console.log('b starting');

exports.done = false;
const a = require('./a');
console.log(`in b , a.done : ${a.done}`);
exports.done = true;
console.log('b is done');

