module.exports.printErr = function (err) {

    console.error('Error:');

    if ('ENOENT' === err.code && 'open' !== err.syscall) {
        console.dir(err);
        console.error('Please install graphicsmagick');
        console.error('brew install graphicsmagick');
        console.error('sudo apt-get install graphicsmagick');
    }

    if ('ENOTFOUND' === err.code) {
        console.log('Please check your uri / network connection');
    }

    console.dir(err.message);

    process.exit(1);
};