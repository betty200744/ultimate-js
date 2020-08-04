/**
 * Created by betty on 9/29/18.
 */
"use strict";

/**
 * name
 */

const f = function helloFun() {
  console.log('hello, function');
};

const a = () => {
  console.log('hello arrow');
};

console.log(f.name);
console.log(a.name);

/**
 * arguments
 */

const f2 = function f2() {
  console.log(arguments);
};

f2(1, 2, 3);

const a2 = () => {
  console.log(arguments);
};

a2(1, 2, 3);

/**
 * this context of class functions
 */

function Review(body) {
  this.title = body.title;
  this.icon = body.icon;
  
  setTimeout(function () {
    console.log(`class function: ${this.title}`);
  }, 100);

  setTimeout(() => {
    console.log(`arraw function: ${this.title}`);
  }, 100);
}

new Review({title: 't', icon: 'i'});



