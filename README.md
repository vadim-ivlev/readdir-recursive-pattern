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

    listFiles(root [, regex])
    
root is the directory you wish to scan. regex is an optional parameter for the files to filter. For example to list all html files:

    listFiles(root , /\.html$/ )
    
Which basically just ignores all other files.

