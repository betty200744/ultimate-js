/**
 * Created by betty on 8/6/20.
 */
"use strict";

// creates objects by cloning an existing object
// 通过clone 方法来创建一个已经存在的object
class Sheep {
  constructor(name, weight) {
    this.name = name
    this.weight = weight
  }

  clone() {
    return new Sheep(this.name, this.weight)
  }
}

module.exports = Sheep