const CarFactory = require("./abstract_factory")

describe('CarFactory', async () => {
  it('Tesla', async () => {
    let carFactory = new CarFactory()
    let car = carFactory.createTesla()
    expect(car.info().type).toEqual("Tesla")
  });
})