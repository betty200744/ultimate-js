/**
 * Created by betty on 9/28/18.
 */
"use strict";

const fs = require('fs');
const co = require('co');
const Promise = require('bluebird');


/**
 * async + await ， 调用最简单的
 */
const funA = async () => {
  return Promise.resolve('我是A');
};

const funB = async () => {
  console.log('我是B');
  return funA();
};

(async function () {
  console.log(await funB());
  console.log('after await B');
})();

/**
 * co + Generator + yield , 调用栈很深很深
 */
function* genA() {
  return yield Promise.resolve('我是genA');
}

function* genB() {
  console.log('我是genB');
  return yield genA();
}
const genFun = () => {
  return co.call(this, function * () {
    console.log(yield genB());
    console.log('after await genB');
  });
};
genFun();

/**
 * co + Generator + yield* , 比yield好一点
 */

function* yieldstarA() {
  return yield Promise.resolve('我是yield A');
}

function* yieldstarB() {
  console.log('我是yield B , 我把我的yield委托给下一个yieldstarA去执行， 注意， 最后一个一定只能是yield');
  return yield * yieldstarA();
}
const yieldstarFun = () => {
  return co.call(this, function * () {
    console.log(yield * yieldstarB());
    console.log('after await yield B');
  });
};


yieldstarFun();

/**
 * co + Generator + yield *
 */
co(function * yieldstarFunB (){
  console.log(yield * yieldstarB());
  console.log('after await yield B');
});


/**
 * co + Generator , yield vs yield * 遇到的问题
 */
function* genFunC() {
  return Promise.resolve('genFunC')
}

co(function* () {
  console.log(yield genFunC());
  console.log(yield * genFunC());
});


/**
 * async + await + bluebird
 */

async function asyncA() {
  return Promise.resolve('我是asyncA')
}

async function asyncB() {
  console.log('我是asyncB');
  return asyncA();
}

(async function () {
  console.log(await asyncB());
  console.log('after async B')
})();
