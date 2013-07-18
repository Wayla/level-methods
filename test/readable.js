var test = require('tape');
var readable = require('../').readable;

test('readable', function (t) {
  t.notOk(readable('get'));
  t.ok(readable('createReadStream'));
  t.ok(readable('readStream'));
  t.ok(readable('createValueStream'));
  t.ok(readable('valueStream'));
  t.ok(readable('createKeyStream'));
  t.ok(readable('keyStream'));
  t.notOk(readable('isOpen'));
  t.notOk(readable('isClosed'));
  t.notOk(readable('open'));
  t.notOk(readable('close'));
  t.notOk(readable('put'));
  t.notOk(readable('del'));
  t.notOk(readable('batch'));
  t.notOk(readable('createWriteStream'));
  t.end();
});
