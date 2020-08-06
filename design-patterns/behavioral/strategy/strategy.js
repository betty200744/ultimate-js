/**
 * Created by betty on 8/6/20.
 */
"use strict";

class NewPayment {
  constructor(name, money, strategy) {
    this.name = name
    this.money = money
    this.strategy = strategy
  }

  pay() {
    this.strategy.pay()
  }
}

class Cash {
  pay() {
    console.log("Cash pay")
  }
}

class Bank {
  pay() {
    console.log("Bank pay")
  }
}

module.exports = {NewPayment, Cash, Bank}