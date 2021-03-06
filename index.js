var reduce = require('reduce');
var test = RegExp.prototype.test;

var regs = {
  readOnly:
    /^(get|(create)?((r|R)ead|(v|V)alue|(k|K)ey)Stream|is(Open|Closed))$/,
  canDelete:
    /^(del|batch)$/,
  readable:
    /^(create)?((r|R)ead|(v|V)alue|(k|K)ey)Stream$/,
  writable:
    /^(create)?(w|W)riteStream$/,
  async:
    /^(open|close|put|get|del|batch)$/,
  sync:
    /^is(Open|Closed)$/
}

module.exports = reduce(regs, function (acc, reg, check) {
  acc[check] = test.bind(reg);
  return acc;
}, {});

