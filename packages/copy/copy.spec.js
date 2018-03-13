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
  it('should be deep equal', function() {
    assert.deepStrictEqual(obj, copy(obj));
  });
});
