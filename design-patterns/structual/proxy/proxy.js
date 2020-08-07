/**
 * Created by betty on 8/7/20.
 */
"use strict";

// provides a placeholder for another object to control access, reduce cost, and reduce complexity
// allows you to add custom behavior to an existing object
// proxy class , A 调用 B 中间加个Proxy,  

let target = {
  x: 10,
  y: 20
}

let handler = {
  get: (obj, prop) => {
    return prop in obj ? obj[prop] : 0
  }
}

target = new Proxy(target, handler)
console.log(target.x)

