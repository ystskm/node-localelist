# localelist

Support for mapping between locale and the status.
Easily extend by adding a locale file you want to use

## Install

Install with [npm](http://github.com/isaacs/npm):

    npm install localelist

## API - Queries

    var ll = require('localelist');

    ll.shorten('ja_JP');         // => 'ja'
    ll.toArray('ja_JP');         // => ['ja', 'ja_JP']
    ll.get('ja_JP', 'ja');          // => '日本語 日本'
    ll.list()                             // => ['ja_JP', 'en_US', ...]

### extend locales

    add or change file in "list" directory 