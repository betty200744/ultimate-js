/**
 * Created by betty on 10/19/18.
 */
"use strict";
const {StringDecoder} = require('string_decoder');

let arr = ['9003'];
let buf = Buffer.from(arr);
console.log(buf);

const decoder = new StringDecoder('utf8');
let s = decoder.write(buf);
console.log(s);
