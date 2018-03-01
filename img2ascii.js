module.exports = (config) => {
  const argv = {
    ratio: config.ratio,
    cols: config.cols,
    _: config._ || [config.img]
  }
  const gm = require('gm')
  const pictureTube = require('picture-tube')

  const isUrl = (str) => str.match(/^http|0\.0|1..\.|localhost/)

  const pipeIn = (isUrl(argv._[0]) ?
    require('request-promise')(argv._[0]) :
    require('fs').createReadStream(argv._[0]))

  return gm(pipeIn)
    // magic fix of picture tube ratios
    .resizeExact(300 * 1.2, 300 * argv.ratio)
    .stream('png')
    .pipe(pictureTube({ cols: argv.cols }))
}

