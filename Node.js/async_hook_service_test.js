/**
 * Created by betty on 12/12/18.
 */
"use strict";

const assert = require('assert');
const Service = require('./async_hook_service');

describe('Service', () => {
  let service;

  afterEach(() => {
    service.disable();
  });

  it('can handle promises created out of the execution stack', async () => {
    service = new Service();

    const p = Promise.resolve();

    await service.run(async () => {
      service.set('foo');

      await Promise.all([p]).then(() => {
        assert.strictEqual('foo', service.get());
      });
    });
  });
});