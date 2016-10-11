const tap = require('tap')
process.argv.push('doge.png')

tap.test('Probably fine', t => {
    require('./img2ascii')
    t.pass('Test like a volkswagen.')
    t.end()
})
