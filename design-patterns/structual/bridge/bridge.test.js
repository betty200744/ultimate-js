/**
 * Created by betty on 8/7/20.
 */
"use strict";
const expect = require('chai').expect
const bridge = require('./bridge')

describe('Bridge', async () => {
  it('HPPrinter', async () => {
    let hp = new bridge.HPPrinter(new bridge.AlcoholInk())
    let res = hp.printer()
    expect(res).to.contain("HPPrinter")
  });
  it('EpsonPrinter', async () => {
    let epson = new bridge.EpsonPrinter(new bridge.AcrylicInk())
    let res = epson.printer()
    expect(res).to.contain("EpsonPrinter")
  });


})

