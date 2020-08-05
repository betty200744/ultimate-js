/**
 * Created by betty on 8/5/20.
 */
"use strict";

/**
 *  Create a Promise
 */

let promise = new Promise(function (resolve, reject) {
  if (Math.random() > 0.5) {
    resolve("done")
  } else {
    reject(new Error("Whoops!"))
  }
})

promise.then(value => {
  console.log(value)
}).catch(err => {
  console.log(err)
})