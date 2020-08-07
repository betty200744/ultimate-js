/**
 * Created by betty on 8/7/20.
 */
"use strict";
const expect = require('chai').expect;
const composite = require('./composite')

describe('Composite', async () => {
  it('Cabinet', async () => {
    let cabinet = new composite.Cabinet()
    cabinet.add(new composite.HardDrive())
    cabinet.add(new composite.Memory())
    cabinet.add(new composite.CPU())
    let totalPrice = cabinet.getPrice()
    expect(totalPrice).to.equal(600)
  });

})