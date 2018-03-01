const tap = require('tap')
process.argv.push('doge.png')

tap.test('Probably fine', t => {
  require('./img2ascii')
  t.pass('Test like a volkswagen.')
  t.end()
})

tap.test('File load .png', t =>
  require('./img2ascii')({
    _: ['doge.png'],
    c: 40,
    cols: 40,
    r: 0.8,
    ratio: 0.8,
  }).on('end', () => {
    t.pass('Volkswagen')
    t.end()
  }).pipe(process.stdout))

tap.test('File load .jpg', t =>
  require('./img2ascii')({
    _: ['frost-doge.jpg'],
    c: 40,
    cols: 40
  }).on('end', () => {
    t.pass('Volkswagen')
    t.end()
  }).pipe(process.stdout))

tap.test('Load remote file', t => {
  const http = require('http')
  const port = process.env.PORT || 5397
  const finalhandler = require('finalhandler')
  const serveStatic = require('serve-static')
  const serve = serveStatic('./')

  const server = http
    .createServer((req, res) =>
      serve(req, res, finalhandler(req, res)))
    .listen(port)

  require('./img2ascii')({
    _: [`http://127.0.0.1:${port}/frost-doge.jpg`],
    c: 40,
    cols: 40
  }).on('end', () => {
    server.close()
    t.pass('Volkswagen')
    t.end()
  }).pipe(process.stdout)
})
