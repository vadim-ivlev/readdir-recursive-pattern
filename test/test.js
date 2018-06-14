// jshint esversion:6
// const fs        = require('fs');
// const path      = require('path');
// const test      = require('ava');
// const listFiles = require('../');

import fs from 'fs';
import path from 'path';
import test from 'ava';
import listFiles from '../';




test('list all files', t => {
	t.deepEqual(
        listFiles('testdir', /^((?!DS_Store).)*$/ ).sort(), // negative lookahead
        [ 'testdir/a.html',
        'testdir/b.html',
        'testdir/c.html',
        'testdir/sub0/1.gif',
        'testdir/sub0/2.gif',
        'testdir/sub0/3.jpg',
        'testdir/sub0/sub1/1.htm',
        'testdir/sub0/sub1/2.htm' ].sort()
    );
});

test('list HTML files',  t => {
    t.deepEqual(
        listFiles('testdir', /\.html$/ ).sort(), 
        ["testdir/a.html", "testdir/b.html", "testdir/c.html"].sort()
    );
});

test('just a number', t=>{
    t.deepEqual(1,1);
});