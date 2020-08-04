/**
 * Created by betty on 2019-01-07.
 */
"use strict";
const {range} = require('rxjs');
const {map, filter} = require('rxjs/operator');


range(1, 3)
  .pipe(map(x => x * 2))
  .subscribe(x => console.log(x));