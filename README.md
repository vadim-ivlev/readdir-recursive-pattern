# readdir-recursive-pattern
Recursively list all files in a directory and its subdirectories that match a RegEx pattern.


### Install

    npm install readdir-recursive-pattern

### Example

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

### API

    read(root [, filter])
    
root is the directory you wish to scan. filter is an optional filter for the files with three params(name, index, dir). By default, filter is:

    function (name) {
      return name[0] !== '.'
    }
    
Which basically just ignores . files.

