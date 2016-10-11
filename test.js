const tap = require('tap')
process.argv.push('doge.png')

tap.test('Probably fine', t => {
    require('./img2ascii')
    t.pass('Test like a volkswagen.')
    t.end()
})

tap.test('Network call', t =>
    require('./img2ascii')({
        _: ['https://www.google.ch/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'],
        c: 30,
        cols: 30,
        r: 0.6,
        ratio: 0.6,
    }).on('end', () => {
        t.pass('Volkswagen')
        t.end()
    }).pipe(process.stdout)
)
