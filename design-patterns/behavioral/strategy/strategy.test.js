/**
 * Created by betty on 8/6/20.
 */
"use strict";

const strategy = require("./strategy")

describe('Strategy', async () => {
  it('Cash', async () => {
    let cash = new strategy.Cash()
    let payment = new strategy.NewPayment("betty", 100, cash)
    payment.pay()
  });
  it('Bank', async () => {
    let bank = new strategy.Bank()
    let payment = new strategy.NewPayment("betty", 100, bank)
    payment.pay()
  });
})