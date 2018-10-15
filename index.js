const R = require('ramda');
const S = require('sanctuary');

const get = R.curry((propName, obj) => S.toMaybe(obj[propName]));
const getStateCode = R.composeK(
  R.compose(S.of(S.Maybe), R.toUpper),
  get('state'),
  get('address'),
  get('user'),
);

const x = getStateCode({"user":{"address":{"state":"ny"}}});
console.log(x);
const y = getStateCode({});
console.log(y);
const z = R.map(x => x + 1, S.Just(42));
console.log(z);
