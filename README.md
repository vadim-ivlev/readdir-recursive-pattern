# readdir-recursive-pattern
Read a directory recursively. Return files matching a RegEx pattern.


Install

    npm install readdir-recursive-pattern

Example

    var read = require('fs-readdir-recursive')
    read(__dirname) === [
      'test/test.js',
      'index.js',
      'LICENSE',
      'package.json',
      'README.md'
    ]

API

    read(root [, filter])
    
root is the directory you wish to scan. filter is an optional filter for the files with three params(name, index, dir). By default, filter is:

    function (name) {
      return name[0] !== '.'
    }
    
Which basically just ignores . files.

