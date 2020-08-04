/**
 * Created by betty on 9/28/18.
 */
"use strict";

const fs = require("fs");
var Promise = require('bluebird');
Promise.promisifyAll(require("fs"));
const co = require('co');


/**
 * 同步代码， 没有callback
 * */
var passwd = fs.readFileSync('/etc/1');
console.log('同步代码， 没有callback, ' + passwd);


/**
 * 异步代码，callback
 */

fs.readFile('/etc/1', function (err, data) {
  if (err) throw err;
  console.log('异步代码，callback, ' + data);
});

/**
 * 异步代码, Promise， 没有callback, 但有then
 * */

fs.readFileAsync('/etc/1')
  .then(function (data) {
    console.log('异步代码, Promise， 没有callback, 但有then, ' + data)
  });

/**
 * 异步代码，Generator方法, 无Promise
 * */
// 异步代码容器, 无Promise
function* genReadFile() {
  yield fs.readFile('/etc/1', function (err, data) {
    if (err) throw err;
    console.log(`异步代码，Generator方法, 无Promise, ${data}`);
  });
}

//异步代码执行器
var g = genReadFile();
g.next();

/**
 * 异步代码, Generator方法，有Promise
 * */
//异步代码容器，有Promise
function* genpReadFile() {
  yield fs.readFileAsync('/etc/1')
}

//异步代码容器执行器
var gp = genpReadFile();
var gpresult = gp.next();
gpresult.value.then(function (data) {
  console.log('异步代码, Generator方法，有Promise, ' + data)
});

/**
 * 异步代码， co替代异步代码容器执行器自动执行Generator方法容器
 * 异步代码， co替代then方法，then方法自动执行器
 * */

function coReadFile() {
  return co.call(this, function *() {
    let data = yield fs.readFileAsync('/etc/1');
    console.log('co替代异步代码容器执行器, co自动执行next,  co自动执行then方法，then方法自动执行器, ' + data)
  });
}
coReadFile();