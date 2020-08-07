/**
 * Created by betty on 8/7/20.
 */
"use strict";

// composes zero-or-more similar objects so that they can be manipulated as one object.
// 组装模式， 分别几个objects 组装成一个object

class Equipment {
  setName(name) {
    this.name = name
  }

  setPrice(price) {
    this.price = price
  }
}

class HardDrive extends Equipment {
  constructor() {
    super();
    this.setName("HardDrive")
    this.setPrice(100)
  }
}

class Memory extends Equipment {
  constructor() {
    super();
    this.setName("Memory")
    this.setPrice(200)
  }
}

class CPU extends Equipment {
  constructor() {
    super();
    this.setName("CPU")
    this.setPrice(300)
  }
}

class Cabinet {
  constructor() {
    this.equipments = []
  }

  add(equipment) {
    this.equipments.push(equipment)
  }

  getPrice() {
    return this.equipments.reduce((accumulator, current) => {
      return accumulator + current.price
    }, 0)
  }
}

module.exports = {HardDrive, Memory, CPU, Cabinet}