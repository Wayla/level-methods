var test = require('tape');
var readOnly = require('../').readOnly;

test('read only', function (t) {
  t.ok(readOnly('get'));
  t.ok(readOnly('createReadStream'));
  t.ok(readOnly('readStream'));
  t.ok(readOnly('createValueStream'));
  t.ok(readOnly('valueStream'));
  t.ok(readOnly('createKeyStream'));
  t.ok(readOnly('keyStream'));
  t.ok(readOnly('isOpen'));
  t.ok(readOnly('isClosed'));
  t.notOk(readOnly('open'));
  t.notOk(readOnly('close'));
  t.notOk(readOnly('put'));
  t.notOk(readOnly('del'));
  t.notOk(readOnly('batch'));
  t.notOk(readOnly('createWriteStream'));
  t.end();
});
