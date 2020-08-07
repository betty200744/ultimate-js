/**
 * Created by betty on 8/7/20.
 */
"use strict";

// decouples an abstraction from its implementation so that the two can vary independently.
// 类似责任单一， 建模， 将抽象与实现分离， 以便两则解偶, 两则虽依赖，但做到解偶

class Printer {
  constructor(ink) {
    this.ink = ink
  }
}

class EpsonPrinter extends Printer {
  constructor(ink) {
    super(ink);
  }

  printer() {
    return `EpsonPrinter, ink: ${this.ink.get()}`
  }
}

class HPPrinter extends Printer {
  constructor(ink) {
    super(ink);
  }

  printer() {
    return `HPPrinter, ink: ${this.ink.get()}`
  }
}

class Ink {
  constructor(type) {
    this.type = type
  }

  get() {
    return this.type
  }
}

class AcrylicInk extends Ink {
  constructor() {
    super("AcrylicInk");
  }
}

class AlcoholInk extends Ink {
  constructor() {
    super("AlcoholInk");
  }
}

module.exports = {EpsonPrinter, HPPrinter, AcrylicInk, AlcoholInk}