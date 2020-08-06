/**
 * Created by betty on 8/6/20.
 */
"use strict";

const chain = require("./chain_of_responsibility")

describe('Chain of Responsibility', async () => {
  it('Chain', async () => {
    let reception = new chain.reception()
    let docker = new chain.docker()
    let medical = new chain.medical()
    reception.setNext(docker)
    docker.setNext(medical)
    reception.execute({name: "nancy"})
  });

})