/**
 * Created by betty on 8/6/20.
 */
"use strict";
const expect = require('chai').expect;

const Sheep = require('./prototype')

describe('Prototype', async () => {
  it('Sheep', async () => {
    let s = new Sheep("dolly", 100)
    let s1 = s.clone()
    console.log(s)
    console.log(s1)
    expect(s === s1).to.be.false;
  });

})