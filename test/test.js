// jshint esversion:6
const fs     = require('fs');
const path   = require('path');
const assert = require('assert');

const listFiles = require('../');

let all=listFiles('testdir');
let html=listFiles('testdir', /\.html$/ );

// console.log(all);
// console.log();
// console.log( html );



assert.deepEqual(
    all.sort(), 
    [ 'testdir/a.html',
    'testdir/b.html',
    'testdir/c.html',
    'testdir/sub0/1.gif',
    'testdir/sub0/2.gif',
    'testdir/sub0/3.jpg',
    'testdir/sub0/sub1/1.htm',
    'testdir/sub0/sub1/2.htm' ].sort()
);

assert.deepEqual(
    html.sort(), 
    ["testdir/a.html", "testdir/b.html", "testdir/c.html"].sort()
);

console.log('passed.');



