const R = require('ramda');
const S = require('sanctuary');

const safeDiv = R.curry((n, d) => d === 0 ? S.Nothing : S.Just(n / d));
const lookup = R.curry((k, obj) => k in obj ? S.Just(obj[k]) : S.Nothing);

const x = S.fromMaybe('fuga')(lookup('foo', { foo: 'hoge' }));
console.log(x);
const y = S.fromMaybe('fuga')(lookup('foo', { abc: 'hoge' }));
console.log(y);
