// [node-localelist] index.js
var path = require('path'), fs = require('fs');

var GLOBAL_LANG = '_global', LISTS_DIR = path.join(__dirname, 'lists');
var Lbox = {}, Sbox = {};
var Locales = module.exports = function() {
};

// list of exporting methods
var methods = {
  shorten: shorten,
  toArray: toArray,
  list: list,
  data: data
};
for( var i in methods)
  Locales[i] = methods[i];

function shorten(lo) {
  return lo.substr(0, 2);
}

function toArray(lo) {
  if(typeof lo != 'string' || !Sbox[shorten(lo)])
    return [];
  if(lo.length == 2)
    return [lo, Sbox[lo]];
  return [shorten(lo), lo];
}

function list(short) {
  return Object.keys(short ? Sbox: Lbox);
}

function data(lo, ln, val) {
  var a = toArray(lo);
  if(lo.length === 0)
    return;
  ln = Sbox[ln] ? ln: GLOBAL_LANG;
  if(val)
    return Lbox[a[1]][ln] = val
  return Lbox[a[1]][ln];
}

fs.readdirSync(LISTS_DIR).forEach(function(fnam) {
  var fnam_a = fnam.split('.');
  // ignore unexpected file_name pattern
  if(fnam_a.length != 2 || fnam_a[0].length != 2 && fnam_a[0] != GLOBAL_LANG)
    return;
  var lnam = fnam_a[0], buf = fs.readFileSync(path.join(LISTS_DIR, fnam));
  buf.toString().split(/\n/).forEach(function(l) {
    // split line with "|" 
    // https://tools.cloudplus.me/UTF8Stringifier/
    var d = l.split("\u007c");
    if('string' != typeof d[0])
      return;
    // set to language box
    var l0 = d[0], ls = shorten(l0);
    !Sbox[ls] && (Sbox[ls] = d[0]);
    !Lbox[l0] && (Lbox[l0] = {});
    Lbox[d.shift()][lnam] = d.join(' ');
  });
});
