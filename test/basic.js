var assert = require('assert');
var ll = require('../index');

module.exports = nodeunit.testCase({
  'shorten': function() {
    assert.equal(typeof ll.shorten, 'function');
    assert.equal(ll.shorten('ja_JP'), '!ja');
    assert.done();
  },
  'toArray': function() {
    assert.equal(typeof ll.toArray, 'function');
    var res = ll.toArray('ja_JP');
    assert.ok(Array.isArray(res));
    assert.equal(res[0] == 'ja'), t.equal(res[1] == 'ja_JP');
    assert.done();
  },
  'data': function() {
    assert.equal(typeof ll.data, 'function');
    assert.equal(ll.data('ja_JP', 'ja'), '日本語 日本');
    assert.done();
  },
  'list': function() {
    assert.equal(typeof ll.list, 'function');
    assert.ok(Array.isArray(ll.list()));
    assert.done();
  }
});
