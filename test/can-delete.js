var test = require('tape');
var canDelete = require('../').canDelete;

test('can delete', function (t) {
  t.notOk(canDelete('get'));
  t.notOk(canDelete('createReadStream'));
  t.notOk(canDelete('readStream'));
  t.notOk(canDelete('createValueStream'));
  t.notOk(canDelete('valueStream'));
  t.notOk(canDelete('createKeyStream'));
  t.notOk(canDelete('keyStream'));
  t.notOk(canDelete('isOpen'));
  t.notOk(canDelete('isClosed'));
  t.notOk(canDelete('open'));
  t.notOk(canDelete('close'));
  t.notOk(canDelete('put'));
  t.ok(canDelete('del'));
  t.ok(canDelete('batch'));
  t.notOk(canDelete('createWriteStream'));
  t.end();
});
