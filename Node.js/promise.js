/**
 * Created by betty on 9/28/18.
 */
"use strict";

const promise1 = new Promise( (resolve, reject) => {
  console.log('同步代码1');
  resolve('我是第一个resolve, 只会执行我， 后面的error, resolve都不会执行');
  reject('我是第一个reject, 我不会执行');
  resolve('我是第二个resolve, 我不会执行');
  console.log('同步代码2');
});

const promise2 =  promise1
  .then((res) => {
  console.log('microTask1');
  console.log(`我是promise1的res: ${res}`);
  throw new Error('this is promise2');
  })
  .catch((err) => {
    console.log(`catch: ${err}`);
    return '我是catch后的return , 供后续then链式调用, 注意区分一般return this的链式调用';
  })
  .then((res) => {
    console.log(`then: ${res}`);
  });

promise1.then((res) => {
  console.log(`我是promise1的res, 又被执行了一次，但值不变: ${res}`);
});

const promise3 = Promise.resolve().then(() => {
  console.log('我是promise3, 我不可以return 我自己, 否则提示Chaining cycle detected');
  return promise3;
});

promise3.catch(console.error);

console.log('同步代码3');

console.log(`log promise2: ${promise2}`);

process.nextTick(() => {
  console.log('我是process.nextTick, 属于microtask, 同promise的then');
});

setImmediate(() => {
  console.log('我是setImmediate, 属于macrotask , 需要在microtask后面执行');
});

setTimeout(() => {
  console.log('我是setTimeout, 属于macrotask, 1s定时， 比setImmediate还后面呢');
}, 1000);
