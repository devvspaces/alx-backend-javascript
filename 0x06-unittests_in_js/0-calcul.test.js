const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test Sum', () => {
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 3.0), 4);
  });

  it('approximating down second input floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('approximating down both floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('approximating down first input floating point fractional number', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('approximating up second input floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('approximating up both floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('approximating up first input floating point fractional numbers', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('approximating down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
