/**
 * Created by betty on 9/29/18.
 */
"use strict";

/**
 * Stack Trace
 */

function B() {
  console.log('this is B');
  console.trace();
}

function A() {
  console.log('this is A');
  B();
}

A();

/**
 * throw a normal error
 */

function normalError() {
  throw new Error('this is normal error');
}

try {
  normalError();   
} catch (err) {
  console.log(err);
}

/**
 * 异步函数报错
 */
setTimeout(() => {
  normalError();
}, 100);






