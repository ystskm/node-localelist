var nodeunit = require('nodeunit');
var ll = require('../index');

module.exports = nodeunit.testCase({
  'shorten': function(t) {
    t.equal(typeof ll.shorten, 'function');
    t.equal(ll.shorten('ja_JP'), 'ja');
    t.done();
  },
  'toArray': function(t) {
    t.equal(typeof ll.toArray, 'function');
    var res = ll.toArray('ja_JP');
    t.ok(Array.isArray(res));
    t.equal(res[0], 'ja'), t.equal(res[1], 'ja_JP');
    t.done();
  },
  'data': function(t) {
    t.equal(typeof ll.data, 'function');
    t.equal(ll.data('ja_JP', 'ja'), '日本語 日本');
    t.done();
  },
  'list': function(t) {
    t.equal(typeof ll.list, 'function');
    t.ok(Array.isArray(ll.list()));
    t.done();
  }
});
