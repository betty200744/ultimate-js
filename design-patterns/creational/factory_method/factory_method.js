/**
 * Created by betty on 8/6/20.
 */
"use strict";

function carFactory(type) {
  switch (type) {
    case "Tesla":
      return new Tesla()
    case "BMW":
      return new BMW()
    case "Benz":
      return new Benz()
    default:
      return new Tesla()
  }
}

class Tesla {
  constructor() {
    this.type = "Tesla"
  }

  info() {
    return {type: this.type}
  }
}

class BMW {
  constructor() {
    this.type = "BMW"
  }

  info() {
    return {type: this.type}
  }
}

class Benz {
  constructor() {
    this.type = "Benz"
  }

  info() {
    return {type: this.type}
  }
}

module.exports = carFactory;