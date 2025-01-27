import { createConversionChecker } from '../helpers/helpers.js';

QUnit.test('Math.acosh', assert => {
  const { acosh } = Math;
  assert.isFunction(acosh);
  assert.name(acosh, 'acosh');
  assert.arity(acosh, 1);
  assert.looksNative(acosh);
  assert.nonEnumerable(Math, 'acosh');
  assert.same(acosh(NaN), NaN);
  assert.same(acosh(0.5), NaN);
  assert.same(acosh(-1), NaN);
  assert.same(acosh(-1e300), NaN);
  assert.same(acosh(1), 0);
  assert.same(acosh(Infinity), Infinity);
  assert.closeTo(acosh(1234), 7.811163220849231, 1e-11);
  assert.closeTo(acosh(8.88), 2.8737631531629235, 1e-11);
  assert.closeTo(acosh(1e+160), 369.10676205960726, 1e-11);
  assert.closeTo(acosh(Number.MAX_VALUE), 710.475860073944, 1e-11);
  assert.closeTo(acosh(1 + Number.EPSILON), 2.1073424255447017e-8, 1e-11);

  const checker = createConversionChecker(1234);
  assert.closeTo(acosh(checker), 7.811163220849231, 1e-11);
  assert.same(checker.$valueOf, 1, 'valueOf calls');
  assert.same(checker.$toString, 0, 'toString calls');
});
