[![NPM Version](https://badge.fury.io/js/img2ascii.svg)](https://badge.fury.io/js/img2ascii)
[![Dependency Status](https://david-dm.org/syzer/img2ascii.svg)](https://david-dm.org/syzer/img2ascii)
[![Downloads Today](https://img.shields.io/npm/dt/img2ascii.svg)](https://badge.fury.io/js/img2ascii)
[![Downloads Month](https://img.shields.io/npm/dm/img2ascii.svg)](https://badge.fury.io/js/img2ascii)

# WAT
Downloads images jpeg/gif/png and outputs them in your console
![Doge In terminal](https://raw.githubusercontent.com/syzer/img2ascii/master/doge.png)

# HOW
```bash
brew install graphicsmagick
npm i -g img2ascii
img2ascii FILE | URL
```
# Examples
```bash
img2ascii doge.png
img2ascii doge.gif
img2ascii https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg
img2ascii doge.png --cols 20 --ratio 0.5
```


# Usage
```bash
Usage: img2ascii.js [url|file] --cols [num] --ratio [num]

Options:
  -c, --cols   how many cols in terminal                           [default: 80]
  -r, --ratio  ratio try 0.5 to flatten image
                and 2 to lengthen iamge                             [default: 1]

Not enough non-option arguments: got 0, need at least 1
```
