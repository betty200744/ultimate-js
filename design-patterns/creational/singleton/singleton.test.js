/**
 * Created by betty on 8/6/20.
 */
"use strict";

const IdGenerator = require("./singleton")

describe('SingleTon', async () => {
  it('singleton', async () => {
    let idGenerator1 = new IdGenerator()
    let idGenerator2 = new IdGenerator()
    let id = idGenerator1.getId()
    console.log(id)
    expect(idGenerator1).toEqual(idGenerator2)
  });

})