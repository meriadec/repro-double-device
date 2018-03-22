const CommNodeHid = require('@ledgerhq/hw-transport-node-hid').default

console.log('Waiting for device to connect...')

CommNodeHid.listen({
  next: e => {
    if (e.type === 'add') {
      console.log('> adding device', JSON.stringify(e))
    }
    if (e.type === 'remove') {
      console.log('> removing device', JSON.stringify(e))
    }
  },
})
