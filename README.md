# readdir-recursive-pattern
Recursively list all files in a directory and its subdirectories that match a RegEx pattern. [![Build Status](https://travis-ci.org/vadim-ivlev/readdir-recursive-pattern.svg?branch=master)](https://travis-ci.org/vadim-ivlev/readdir-recursive-pattern)


### Install

    npm install readdir-recursive-pattern

### Example

```javascript
    var listFiles = require('readdir-recursive-pattern');

    listFiles('testdir') === [
        'testdir/a.htm',
        'testdir/b.html',
        'testdir/c.html',
        'testdir/sub0/1.gif',
        'testdir/sub0/2.gif',
        'testdir/sub0/3.jpg',
        'testdir/sub0/sub1/1.htm',
        'testdir/sub0/sub1/2.htm' 
    ]
```

### API

```javascript
    listFiles(root [, regex])
```    

`root` is the directory you wish to scan. `regex` is an optional parameter for the files to filter. For example to list all html files:

```javascript
    listFiles(root , /\.html$/ )
```    

