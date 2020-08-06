/**
 * Created by betty on 8/6/20.
 */
"use strict";
const expect = require('chai').expect;
const carFactory = require("./factory_method");

describe('factory method', async () => {
  it('Tesla', async () => {
    let cat = carFactory("Tesla")
    expect(cat.info().type).to.equal("Tesla")
  });
  it('BMW', async () => {
    let cat = carFactory("BMW")
    expect(cat.info().type).to.equal("BMW")
  });
  it('Benz', async () => {
    let cat = carFactory("Benz")
    expect(cat.info().type).to.equal("Benz")
  });
})