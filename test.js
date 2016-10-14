const tap = require('tap')
process.argv.push('doge.png')

tap.test('Probably fine', t => {
    require('./img2ascii')
    t.pass('Test like a volkswagen.')
    t.end()
})

tap.test('File load', t =>
    require('./img2ascii')({
        _: ['doge.png'],
        c: 40,
        cols: 40,
        r: 0.8,
        ratio: 0.8,
    }).on('end', () => {
        t.pass('Volkswagen')
        t.end()
    }).pipe(process.stdout)
)
