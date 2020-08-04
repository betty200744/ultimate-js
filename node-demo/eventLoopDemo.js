/**
 * Created by betty on 9/20/18.
 */
"use strict";

/**
 * Created by betty on 3/9/18.
 */
"use strict";

const util = require('util');
const readFile = util.promisify(require('fs').readFile);

const fs = require('fs');

function someAsyncOperation (callback) {
  // Assume this takes 95ms to complete
  console.log(`同步任务 9， 此时发出异步请求`);
  fs.readFile('/path/to/file', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`Timer ， ${delay}ms have passed since I was scheduled`);
});


setTimeout(() => console.log(`Timer , 次轮 1`));
setImmediate(() => console.log(`Timer, 次轮 2`));


Promise.resolve().then(() => console.log(`microTaskQueue 3`));
process.nextTick(() => console.log(`nextTickQueue 4`));
process.nextTick(() => console.log(`nextTickQueue 5`));
Promise.resolve().then(() => console.log(`microTaskQueue 6`));


Promise.resolve().then(() => {
  console.log(`microTaskQueue 7`);
});

someAsyncOperation(() => {
  console.log(`poll , I/O callback 10`);
  const startCallback = Date.now();
});

console.log(`同步任务8`);