var test = require('tape');
var sync = require('../').sync;

test('sync', function (t) {
  t.notOk(sync('get'));
  t.notOk(sync('createReadStream'));
  t.notOk(sync('readStream'));
  t.notOk(sync('createValueStream'));
  t.notOk(sync('valueStream'));
  t.notOk(sync('createKeyStream'));
  t.notOk(sync('keyStream'));
  t.ok(sync('isOpen'));
  t.ok(sync('isClosed'));
  t.notOk(sync('open'));
  t.notOk(sync('close'));
  t.notOk(sync('put'));
  t.notOk(sync('del'));
  t.notOk(sync('batch'));
  t.notOk(sync('createWriteStream'));
  t.end();
});
