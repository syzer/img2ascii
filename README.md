# img2ascii

[![NPM Version](https://badge.fury.io/js/img2ascii.svg)](https://badge.fury.io/js/img2ascii)
[![Dependency Status](https://david-dm.org/syzer/img2ascii.svg)](https://david-dm.org/syzer/img2ascii)
[![Downloads Today](https://img.shields.io/npm/dt/img2ascii.svg)](https://badge.fury.io/js/img2ascii)
[![Downloads Month](https://img.shields.io/npm/dm/img2ascii.svg)](https://badge.fury.io/js/img2ascii)
[![Build Status](https://img.shields.io/travis/syzer/img2ascii.svg)](https://badge.fury.io/js/img2ascii)

## Purpose

- Downloads images (jpeg/gif/png) and outputs them in your console.
- Make custom ssh login message for your users.
- Picture is worth thousands words.. we will use both!

![Doge In terminal](https://raw.githubusercontent.com/syzer/img2ascii/master/doge.png)

## Getting Started

```sh
brew install graphicsmagick
npm install -g img2ascii
```

## Usage
```sh
Usage: img2ascii [url|file] --cols [num] --ratio [num]

Options:
  -c, --cols   how many cols in terminal                           [default: 80]
  -r, --ratio  ratio try 0.5 to flatten image
               and 2 to lengthen image                             [default: 1]
```

## Examples
```sh
img2ascii doge.png
img2ascii https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg
img2ascii doge.png --cols 20 --ratio 0.5
```
