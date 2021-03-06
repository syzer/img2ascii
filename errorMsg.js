module.exports.printErr = (err) => {

  console.error('Error:', err)

  if ('ENOENT' === err.code && 'open' !== err.syscall) {
    console.error('Please install graphicsmagick:')
    console.error('brew install graphicsmagick')
    console.error('sudo apt-get install graphicsmagick')
  }

  if ('ENOTFOUND' === err.code) {
    console.log('Please check your uri / network connection')
  }

  process.exit(1)
}
