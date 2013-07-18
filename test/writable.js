var test = require('tape');
var writable = require('../').writable;

test('writable', function (t) {
  t.notOk(writable('get'));
  t.notOk(writable('createReadStream'));
  t.notOk(writable('readStream'));
  t.notOk(writable('createValueStream'));
  t.notOk(writable('valueStream'));
  t.notOk(writable('createKeyStream'));
  t.notOk(writable('keyStream'));
  t.notOk(writable('isOpen'));
  t.notOk(writable('isClosed'));
  t.notOk(writable('open'));
  t.notOk(writable('close'));
  t.notOk(writable('put'));
  t.notOk(writable('del'));
  t.notOk(writable('batch'));
  t.ok(writable('createWriteStream'));
  t.end();
});
