/**
 * Created by betty on 8/5/20.
 */
"use strict";

const arr = [1, 2, 3]
console.log(Math.max(...arr))
console.log(Math.max.apply(null, arr))