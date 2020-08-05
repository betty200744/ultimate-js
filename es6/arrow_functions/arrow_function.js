/**
 * Created by betty on 8/5/20.
 */
"use strict";

// arrow function本质是一个匿名function， 所以没有this, 没有arguments
var a = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

a.map(s => {
  console.log(s)
});

