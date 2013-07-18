var test = require('tape');
var async = require('../').async;

test('async', function (t) {
  t.ok(async('get'));
  t.notOk(async('createReadStream'));
  t.notOk(async('readStream'));
  t.notOk(async('createValueStream'));
  t.notOk(async('valueStream'));
  t.notOk(async('createKeyStream'));
  t.notOk(async('keyStream'));
  t.notOk(async('isOpen'));
  t.notOk(async('isClosed'));
  t.ok(async('open'));
  t.ok(async('close'));
  t.ok(async('put'));
  t.ok(async('del'));
  t.ok(async('batch'));
  t.notOk(async('createWriteStream'));
  t.end();
});
