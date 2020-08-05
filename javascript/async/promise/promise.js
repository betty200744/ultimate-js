/**
 * Created by betty on 8/5/20.
 */
"use strict";

/** javascript
 * Created by betty on 11/26/17.
 */
"use strict";
const fs = require("fs");
const Promise = require('bluebird');
Promise.promisifyAll(fs);

/**
 * 异步代码, Promise
 * */

fs.readFileAsync('/etc/1')
  .then(function (data) {
    console.log('异步代码, Promise， 没有callback, 但有then, ' + data)
  }).catch(err => {
  console.log(err)
});
