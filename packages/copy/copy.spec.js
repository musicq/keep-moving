const assert = require('assert');
const copy = require('./copy');

const obj = {
  do: 'do',
  re: {
    mi: 'mi',
    fa: {
      so: [1, 2, 3],
      la: {
        xi: [
          {
            foo: 'foo'
          },
          {
            bar: 'bar'
          }
        ]
      }
    }
  },
  baz: null,
  bzy: undefined,
  bxy: '',
  method: function() {
    console.log(this);
  }
};

describe('Copy', function() {
  it('should return itself if it is not an object', function() {
    const a = 1;
    const b = 'string';
    const c = false;
    const d = null;
    const e = undefined;
    const f = function() {};

    assert.strictEqual(a, copy(a));
    assert.strictEqual(b, copy(b));
    assert.strictEqual(c, copy(c));
    assert.strictEqual(d, copy(d));
    assert.strictEqual(e, copy(e));
    assert.strictEqual(f, copy(f));
  });

  it('should return null', function() {
    const o = { key: null };
    assert.deepStrictEqual(o, copy(o));
  });

  it('should be deep equal', function() {
    assert.deepStrictEqual(obj, copy(obj));
  });
});
