
# level-methods

Useful meta information about
[levelup](https://github.com/rvagg/node-levelup) methods.

[![build status](https://secure.travis-ci.org/Wayla/level-methods.png)](http://travis-ci.org/Wayla/level-methods)

[![testling badge](https://ci.testling.com/Wayla/level-methods.png)](https://ci.testling.com/Wayla/level-methods)

## Usage

```js
var check = require('level-methods');

check.readOnly('get');
// => true

check.canDelete('get');
// => false

check.readable('createValueStream');
// => true

check.writable('createValueStream');
// => false

check.async('put');
// => true

check.sync('put');
// => false
```

## API

### readOnly(m)

True iff `m` cannot cause any change in the db's data.

### canDelete(m)

True iff `m` can cause data to be removed.

### readable(m)

True iff `m` creates a readable stream.

### writable(m)

True iff `m` creates a writable stream.

### async(m)

True iff `m` is a function that takes a callback and executes an asynchronous
operation.

### sync(m)

True iff `m` doesn't execute any asynchronous operations.

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install level-methods
```

## Contribution

If you want add any check that's useful to you, PRs always welcome.

## License

Copyright (c) 2013 Julian Gruber &lt;julian@wayla.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
