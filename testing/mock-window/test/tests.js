var assert = require('assert');

var MockBrowser;

if (typeof window === 'object') {
  window = window;
} else {
  MockBrowser = require('mock-browser').mocks.MockBrowser;
  window = MockBrowser.createWindow();
  window.indexedDB = require("fake-indexeddb");
}
const kvidb = require('kv-idb');
var defaultName = 'store'
var db = kvidb(defaultName)

describe('test', () => {

  it('mock window', (done) => {
    db.put('foo', 'bar', function (err, data) {
      assert(data);
      done();
    });
  });
});

