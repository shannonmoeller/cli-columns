# `cli-columns`

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url] [![Build Status][travis-img]][travis-url] [![Coverage Status][coveralls-img]][coveralls-url] [![Chat][gitter-img]][gitter-url] [![Tip][amazon-img]][amazon-url]

Columnated lists for the CLI. Unicode and ANSI safe.

## Install

    $ npm install --save cli-columns

## Usage

```js
var chalk = require('chalk');
var columns = require('cli-columns');

var values = [
    'foo', 'bar', 'baz',
    chalk.cyan('嶜憃撊') + ' 噾噿嚁',
    'blue' + chalk.bgBlue('berry'),
    chalk.red('apple'), 'pomegranate',
    'durian', chalk.green('star fruit'),
    'apricot', 'banana pineapple'
];

console.log(columns(values));
```

<img width="600" alt="screenshot" src="https://cloud.githubusercontent.com/assets/155164/13035288/256c6afc-d31a-11e5-9071-57a5fc753a79.png" />

## API

### columns(values [, options]): String

- `values` `{Array<String>}` Array of strings to display.
- `options` `{Object}`
  - `character` `{String}` (default: `' '`) Padding character.
  - `newline` `{String}` (default: `'\n'`) Newline character.
  - `padding` `{Number}` (default: `2`) Space between columns.
  - `width` `{Number}` (default: `process.stdout.columns`) Max width of list.

Sorts and formats a list of values into columns suitable to display in a given width.

## Contribute

Standards for this project, including tests, code coverage, and semantics are enforced with a build tool. Pull requests must include passing tests with 100% code coverage and no linting errors.

### Test

    $ npm test

----

© Shannon Moeller <me@shannonmoeller.com> (shannonmoeller.com)

Licensed under [MIT](http://shannonmoeller.com/mit.txt)

[amazon-img]:    https://img.shields.io/badge/amazon-tip_jar-yellow.svg?style=flat-square
[amazon-url]:    https://www.amazon.com/gp/registry/wishlist/1VQM9ID04YPC5?sort=universal-price
[coveralls-img]: http://img.shields.io/coveralls/shannonmoeller/cli-columns/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/shannonmoeller/cli-columns
[downloads-img]: http://img.shields.io/npm/dm/cli-columns.svg?style=flat-square
[gitter-img]:    http://img.shields.io/badge/gitter-join_chat-1dce73.svg?style=flat-square
[gitter-url]:    https://gitter.im/shannonmoeller/shannonmoeller
[npm-img]:       http://img.shields.io/npm/v/cli-columns.svg?style=flat-square
[npm-url]:       https://npmjs.org/package/cli-columns
[travis-img]:    http://img.shields.io/travis/shannonmoeller/cli-columns.svg?style=flat-square
[travis-url]:    https://travis-ci.org/shannonmoeller/cli-columns
