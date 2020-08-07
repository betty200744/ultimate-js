/**
 * Created by betty on 8/7/20.
 */
"use strict";

let target = {
  foo: "Welcome, null_vs_undefined",
  bar: "Welcome, bar"
}
let handle = {
  get(receiver, prop) {
    return prop in receiver ? receiver[prop] : `Hello, ${prop}`
  }
}
let proxy = new Proxy(target, handle)
console.log(proxy.foo)
console.log(proxy.bar)
console.log(proxy.zee)