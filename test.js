const tap = require('tap');
process.argv.push('doge.png');
process.on('exit', (code) => {
    // ok.
});

const lib = require('./img2ascii');

tap.test('Probably fine', t => {
    tap.pass('Test like a volkswagen.');
    t.end();
});