/**
 * Created by betty on 8/6/20.
 */
"use strict";

// Converts one interface to another so that it matches what the client is expecting
// allows classes with incompatible interfaces to work together by wrapping its own interface around that of an already existing class.
// 封装一个新的类成一个原有的类， 以便兼容

function insertSquareUsbInComputer(computer) {
  computer.insertInSquarePort()
}

class Mac {
  constructor() {
  }

  insertInSquarePort() {
    console.log("mac insertInSquarePort")
  }
}

class Window {
  constructor() {
  }

  insertInCirclePort() {
    console.log("window insertInCirclePort")
  }
}

class WindowAdapter {
  constructor(window) {
    this.window = window
  }

  insertInSquarePort() {
    this.window.insertInCirclePort()
  }
}

module.exports = {Mac, Window, WindowAdapter, insertSquareUsbInComputer}