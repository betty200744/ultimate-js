// 相同类型的object一组里面即放在一个类里面， 之后用class method来获取具体的类
// groups object factories that have a common theme
class CarFactory {
  constructor() {
  }

  createTesla() {
    return new Tesla()
  }

  createBMW() {
    return new BMW()
  }

  createBenz() {
    return new Benz()
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

module.exports = CarFactory