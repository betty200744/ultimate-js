/**
 * Created by betty on 8/6/20.
 */
"use strict";

const adapter = require('./adapter')

describe('Adapter', async () => {
  it('Adapter', async () => {
    let mac = new adapter.Mac()
    let window = new adapter.Window()
    let windowAdapter = new adapter.WindowAdapter(window)
    adapter.insertSquareUsbInComputer(mac)
    adapter.insertSquareUsbInComputer(windowAdapter)
  });

})