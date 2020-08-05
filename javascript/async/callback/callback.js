/**
 * Created by betty on 8/5/20.
 */
"use strict";

/** javascript
 * Created by betty on 11/26/17.
 */
"use strict";
const fs = require("fs");
var Promise = require('bluebird');
var fsp = Promise.promisifyAll(require("fs"));
const co = require('co');


/**
 * callback function
 */

function readFile(path, callback) {
  console.log(path)
  callback(path)
}

function logFile(path) {
  console.log("logFile callback", path)
}

readFile("/home/betty", logFile)

/**
 * 同步代码， 没有callback
 * */
var passwd = fs.readFileSync('/etc/1');
console.log('同步代码， 没有callback, ' + passwd);


/**
 * 异步代码，有callback
 */

fs.readFile('/etc/1', function (err, data) {
  if (err) throw err;
  console.log('异步代码，有callback, ' + data);
});
