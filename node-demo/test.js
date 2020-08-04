
console.log('test starting');

const a = require('./a');
const b = require('./b');


console.log(`in test: a.done = ${a.done}, b.done= ${b.done}`);

let doSth = new Promise((resolve, reject) => {
  console.log('hello');
  resolve();
});

setTimeout(() => {
  doSth.then(() => {
    console.log('over');
  });
}, 10000);



function out() {
  const bigData = new Buffer(100);
  inner = function () {
    void bigData;
  };
}