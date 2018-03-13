/**
 * NOTICE:
 * 1. null has no instanceof, so null instanceof Object will report error.
 * 2. function is also a object, so don't forget this situation.
 * 3. array and object should need different handle, to avoid [1,2,3] -> {1: 1, 2: 2, 3: 3}
 * 4. [1,2,3] instanceof Array === true, {a:1} instanceof Object === true, [1,2,3] instanceof Object === true
 */

function copy(obj) {
  // `!obj` stands for `null`
  if (typeof obj !== 'object' || !obj) return obj;

  const o = Array.isArray(obj) ? [] : {};

  for (let i in obj) {
    let prop = obj[i];
    if (typeof obj === 'object') {
      o[i] = copy(prop);
    } else {
      o[i] = prop;
    }
  }

  return o;
}

module.exports = copy;
