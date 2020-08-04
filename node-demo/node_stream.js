/**
 * Created by betty on 10/19/18.
 */
"use strict";

const {Writable} = require('stream');

class MyWritable extends Writable {
  _write(chunk, enc, next) {
    console.log(chunk.toString());
    next();
  }
}

const fn = () => {
  console.log('this is a callback fn');
};

const mywrite = new MyWritable();
mywrite._write('aaa', '', fn);